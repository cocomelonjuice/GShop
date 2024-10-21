import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Footer() {
  return (
    <div className="flex flex-col pt-4 pb-7 gap-6  bg-blue-800 text-black max-h-40 content-center items-center">
      <h4 className="text-white">Contact me</h4>
      <div className="flex flex-row gap-10 justify-evenly ">
        <a
          href="https://www.facebook.com/juice.cocomelonjuice/"
          className="text-white"
        >
          <FaFacebook size={36} />
        </a>
        <a href="mailto:minhtiendh2018@gmail.com" className="text-white">
          <IoMdMail size={36} />
        </a>
        <a href="tel:0765162701" className="text-white">
          <IoIosPhonePortrait size={36} />
        </a>
      </div>
      <h4 className="text-white">2024, ShopG.</h4>
    </div>
  );
}
