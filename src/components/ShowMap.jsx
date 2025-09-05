import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function ShowMap() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 w-1/2">
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
  );
}

export default ShowMap;
