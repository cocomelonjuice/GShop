import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-evenly bg-teal-300 text-black ">
      <h1><FaFacebook /></h1>
      <h1><IoMdMail /></h1>
      <h1><IoIosPhonePortrait /></h1>
    </div>
  )
}

