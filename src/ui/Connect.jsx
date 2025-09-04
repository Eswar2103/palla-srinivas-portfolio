import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { storeData } from "../utils/utils";

function Connect() {
  const [description, setDescription] = useState("");
  const [isLenghtExcluded, setIsLengthExcluded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
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
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    formRef.current.reset();
    setDescription("");
    await storeData(data);
  }
  return (
    <div className="flex gap-x-[60px] items-center bg-yellow-300/10">
      <div className="flex my-4 py-4">
        <Form
          method="POST"
          onSubmit={handleFormData}
          ref={formRef}
          onKeyDown={(e) => e.key === "Enter" && handleFormData}
        >
          <div className="input-base">
            <label htmlFor="name" className="sm:basis-30">
              Full Name
            </label>
            <input
              className="input"
              name="name"
              type="text"
              required
              placeholder="full name"
            />
          </div>
          <div className="input-base">
            <label htmlFor="phone" className="sm:basis-30">
              Phone Number
            </label>
            <input
              className="input"
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              required
              placeholder="phone number"
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
                <input type="radio" name="type" id="concern" value="concern" className="accent-red-600" />
                <label htmlFor="concern">Concern</label>
              </div>
              <div className="flex gap-x-1">
                <input
                  type="radio"
                  name="type"
                  id="feedback"
                  value="feedback"
                  className="accent-amber-600"
                />
                <label htmlFor="feedback">Feedback</label>
              </div>
            </div>
          </div>
          <div className="input-base">
            {/* <label className="sm:basis-30" htmlFor="description">
              Description
            </label> */}
            <div className="flex w-1/2 flex-col">
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
            <span></span>
            <button
              className="rounded-xl w-[30rem] font-bold border border-black/40 px-3 py-1 bg-amber-300 hover:bg-amber-500 left-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
      {/* *********** Geolocation *********** */}
      <div className="flex flex-col gap-y-3">
        {!iframeLoaded && (
          <div className="flex flex-col items-center justify-center w-[600px] h-[450px] bg-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4"></div>
            <div>Loading map...</div>
          </div>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94859.0267220378!2d83.06453704833987!3d17.71183612855708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969cfbf0f83c7%3A0xd0f54d57c514de18!2sTDP%20OFFICE!5e1!3m2!1sen!2sin!4v1755364196402!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIframeLoaded(true)}
        ></iframe>
        <p className="flex items-center gap-2">
          <span className="text-amber-500">
            <FaLocationDot />
          </span>
          Location of gajuvaka TDP office
        </p>
        <p className="flex items-center gap-2">
          <span className="text-amber-500">
            <FaPhone />
          </span>
          940xxx... helpline number of gajuvaka tdp
        </p>
        <p className="flex items-center gap-2">
          <span className="text-amber-500">
            <IoIosMail />
          </span>
          mail.gmail.com
        </p>
      </div>
    </div>
  );
}

export default Connect;
