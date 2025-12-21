import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Loading } from "../ui/utils";
import LoadingScreen from "../components/LoadingScreen";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoginLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/upload", { replace: true });
    } else {
      setIsLoginLoading(false);
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(formRef.current);
    const password = formData.get("password");
    if (!password) {
      toast.error("Password is empty");
      return;
    }
    const res = await fetch(
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/login",
      { method: "POST", headers: { "x-password": password } }
    );
    const json = await res.json();
    setIsLoading(false);
    if (json.error) {
      toast.error(json.error);
      return;
    }
    toast.success(json.message);
    setShowPassword("");
    localStorage.setItem("token", json.token);
    navigate("/admin/upload");
  }

  return isLoginLoading ? (
    <LoadingScreen />
  ) : (
    <div className="flex justify-center mt-15">
      <Form onSubmit={handleSubmit} ref={formRef}>
        <div className="input-base flex-col gap-5">
          <label htmlFor="password" className="text-sm sm:text-lg">
            Enter password
          </label>
          <div className="flex w-full justify-center">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input"
              required
            />
            <button
              type="button"
              className="ml-2"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className={`cursor-pointer font-bold text-black px-3 py-2 bg-amber-400 rounded-lg hover:bg-amber-500 disabled:opacity-70 disabled:cursor-not-allowed`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loading text="Logging in" /> : "Login"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
