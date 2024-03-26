import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bottom-0  m-auto  left-0 right-0 flex flex-col  bg-teal-300 text-black min-h-10 content-center items-center">
      <div className="flex flex-row gap-20 justify-evenly">
      <a href="https://www.facebook.com/juice.cocomelonjuice/"><FaFacebook /></a>
      <a href="mailto:minhtiendh2018@gmail.com"><IoMdMail /></a>
      <a href="tel:0765162701"><IoIosPhonePortrait /></a>
      </div>
      <h1>2024, ShopG.</h1>
    </div>
  )
}

