import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function UpdateSchedules() {
  const [showPassword, setShowPassword] = useState(false);
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const formRef = useRef(null);
  const passwordRef = useRef(null);
  const [eventsList, setEventsList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    let finalEventList = {
      date: date,
      place: place,
      events: eventsList,
    };
    console.log("finalEventList-----:", finalEventList);
    console.log("password-----:", passwordRef.current.value);
    passwordRef.current.value = "";
    setPlace("");
    setDate("");
  }

  function handleStoreEvent(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    data["time"] = convertTimeFormat(data["time"]);
    console.log("data-----:", data);
    setEventsList([...eventsList, data]);
    formRef.current.reset();
  }

  function convertTimeFormat(time24) {
    const date = new Date(`1970-01-01T${time24}:00`);
    const time12 = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return time12;
  }

  return (
    <div className="flex justify-center mt-15">
      <div className="mt-8">
        <div className="input-base">
          <label
            htmlFor="place"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Place of Event
          </label>
          <input
            name="place"
            type="text"
            placeholder="Event City name, e.g., Gajuwaka, Visakhapatnam"
            className="input"
            value={place}
            required
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="input-base">
          <label
            htmlFor="date"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Date of Event
          </label>
          <input
            name="date"
            type="date"
            required
            placeholder="12 September"
            className="input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Form method="POST" onSubmit={handleStoreEvent} ref={formRef}>
          <p className="flex justify-center font-bold">Add scheduled Events</p>
          <div className="input-base mt-3">
            <label
              htmlFor="time"
              className="basis-20 sm:basis-30 text-sm sm:text-lg"
            >
              Time of Event
            </label>
            <input name="time" type="time" required className="input" />
          </div>
          <div className="input-base">
            <label
              htmlFor="name"
              className="basis-20 sm:basis-30 text-sm sm:text-lg"
            >
              Details of event
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Event details"
              className="input"
            />
          </div>
          <div className="input-base">
            <label
              htmlFor="venue"
              className="basis-20 sm:basis-30 text-sm sm:text-lg"
            >
              Location of event
            </label>
            <input
              name="venue"
              type="text"
              required
              placeholder="Location of visit"
              className="input"
            />
          </div>
          <div className="input-base">
            <label
              htmlFor="type"
              className="basis-20 sm:basis-30 text-sm sm:text-lg"
            >
              Type of event
            </label>
            <input
              name="type"
              type="text"
              required
              placeholder="e.g., Public meeting, inauguration"
              className="input"
            />
          </div>
          <div className="flex justify-center ">
            <button
              className="cursor-pointer font-bold text-white px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
              type="submit"
            >
              Add another event
            </button>
          </div>
        </Form>
        <div>
          <div className="input-base mt-3">
            <label
              htmlFor="password"
              className="basis-20 sm:basis-30 text-sm sm:text-lg"
            >
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="input"
              ref={passwordRef}
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
          <div className="flex justify-center">
            <button
              className="cursor-pointer font-bold text-black px-3 py-2 bg-amber-400 rounded-lg hover:bg-amber-500"
              type="button"
              onClick={handleSubmit}
            >
              Push to database
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateSchedules;
