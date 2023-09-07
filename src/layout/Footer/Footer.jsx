import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import email from "../../assets/images/icon-email.svg";
import location from "../../assets/images/icon-location.svg";
import phone from "../../assets/images/icon-phone.svg";
import logo from "../../assets/images/logo.svg";
import Subscribe from "./Subscribe";
import { aboutUsData, contactUsData } from "./data";

export default function Footer() {
  return (
    <div className="mt-auto bg-[#0C1524]">
      <Subscribe />
      <div className="container wrapper">
        <div className="text-white pt-[8rem]">
          <img src={logo} alt="logo" />
          <div className="grid grid-cols-1 lg:grid-cols-6 my-4 gap-8 items-start">
            <div className="flex gap-2 items-start col-span-1 lg:col-span-2 ">
              <img src={location} alt="location" width={15} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt accusantium veritatis qui, perferendis aperiam aliquid,
                expedita amet quisquam cupiditate consequatur quod iure est
                tenetur nam.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-2">
                <img src={email} alt="email" />
                <p>example@fylo.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={phone} alt="phone" />
                <p>+1-543-123-4567</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <h4 className="font-bold">About Us</h4>
              {aboutUsData.map((link, index) => (
                <a href="/" key={index}>
                  {link.text}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 items-start">
              <h4 className="font-bold">Contact Us</h4>
              {contactUsData.map((link, index) => (
                <a href="/" key={index}>
                  {link.text}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-8 justify-center lg:justify-start">
              <a
                href="/"
                className="rounded-[50%] p-2  border-[1px] border-b-[#fff]"
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href="/"
                className="rounded-[50%] p-2  border-[1px] border-b-[#fff]"
              >
                <IconBrandTwitter size={20} />
              </a>
              <a
                href="/"
                className="rounded-[50%] p-2  border-[1px] border-b-[#fff]"
              >
                <IconBrandInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
