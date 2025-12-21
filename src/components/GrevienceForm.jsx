import { Form } from "react-router-dom";
import { useRef, useState } from "react";
import { storeData } from "../utils/utils";
import { LoadingButton } from "../features/utils/utils";

function GrevienceForm() {
  const [description, setDescription] = useState("");
  const [isLenghtExcluded, setIsLengthExcluded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  function handleChange(e) {
    const maxWords = 250;
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setDescription(inputText);
      setIsLengthExcluded(false);
    } else {
      setIsLengthExcluded(true);
    }
  }

  async function handleFormData(e) {
    const url =
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/connectWithLeader";
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const { name, phone, type, description } = Object.fromEntries(
      formData.entries()
    );
    const params = {
      method: "POST",
      headers: {
        "x-full-name": name,
        "x-phone-number": phone,
        "x-message-type": type,
      },
      body: description,
    };
    await storeData(url, params);
    setDescription("");
    formRef.current.reset();
    setIsLoading(false);
  }
  return (
    <div className="flex py-4 justify-center items-center">
      <Form
        method="POST"
        onSubmit={handleFormData}
        ref={formRef}
        onKeyDown={(e) => e.key === "Enter" && handleFormData}
      >
        <div className="input-base">
          <label
            htmlFor="name"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Full Name
          </label>
          <input
            className="input"
            name="name"
            type="text"
            required
            placeholder="Full Name"
          />
        </div>
        <div className="input-base">
          <label
            htmlFor="phone"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Phone Number
          </label>
          <input
            className="input valid:border-green-500 invalid:[&:not(:placeholder-shown)]:border-red-500"
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            placeholder="Phone Number"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Please enter a valid 10-digit phone number"
              )
            }
            onChange={(e) => e.target.setCustomValidity("")}
          />
        </div>
        <div className="input-base">
          <div className="flex flex-row items-center gap-x-6">
            <div className="flex gap-x-1">
              <input
                type="radio"
                name="type"
                id="suggestion"
                value="suggestion"
                className="accent-green-600"
              />
              <label htmlFor="suggestion">Suggestion</label>
            </div>
            <div className="flex gap-x-1">
              <input
                type="radio"
                name="type"
                id="concern"
                value="concern"
                className="accent-red-600"
              />
              <label htmlFor="concern">Concern</label>
            </div>
            <div className="flex gap-x-1">
              <input
                type="radio"
                name="type"
                id="feedback"
                value="feedback"
                className="accent-amber-500"
              />
              <label htmlFor="feedback">Feedback</label>
            </div>
          </div>
        </div>
        <div className="input-base">
          {/* <label className="sm:basis-30" htmlFor="description">
              Description
            </label> */}
          <div className="flex w-2/3 flex-col">
            <textarea
              className="description"
              name="description"
              type="text"
              placeholder="Enter upto 250 words..."
              onChange={handleChange}
              value={description}
              required
            />
            {isLenghtExcluded && (
              <p className="mt-2 mb-2 rounded-full bg-red-100 px-2 py-1 text-center text-xs text-red-500 sm:text-sm">
                Only 250 words are allowed to send as a message
              </p>
            )}
          </div>
        </div>
        <div className="input-base">
          <LoadingButton
            text1="Submitting..."
            text2="Submit"
            isLoading={isLoading}
          />
        </div>
      </Form>
    </div>
  );
}

export default GrevienceForm;
