import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function ShowMap() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      {!iframeLoaded && (
        <div className="flex flex-col items-center justify-center w-[600px] h-[450px] bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4"></div>
          <div>Loading map...</div>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.675484092829!2d80.58581757496333!3d16.441299684293334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f16278d72bb9%3A0x81527adac604b7b6!2sTelugu%20Desam%20Party%20Central%20Office.!5e0!3m2!1sen!2sin!4v1757781388648!5m2!1sen!2sin"
        className="h-[300px] w-[350px] sm:h-[450px] sm:w-[600px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIframeLoaded(true)}
      ></iframe>
      <p className="flex items-center gap-2">
        <span className="text-amber-500">
          <FaLocationDot />
        </span>
        Location of TDP central office
      </p>
      <p className="flex items-center gap-2">
        <span className="text-amber-500">
          <FaPhone />
        </span>
        +914030699999
      </p>
      <p className="flex items-center gap-2">
        <span className="text-amber-500">
          <IoIosMail />
        </span>
        contact@telugudesam.org
      </p>
    </div>
  );
}

export default ShowMap;
