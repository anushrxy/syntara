import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="bg-color-primary flex flex-col items-center">
      <div className="w-full bg-color-primary flex flex-col md:flex-row justify-around items-center md:items-start border-t-[2px] border-t-color-secondary pt-5 gap-y-6">
        <h2 className="text-5xl font-bold text-bg-primary">Syntara</h2>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-[500] text-bg-primary">Links</h4>
          <ul className="flex flex-col md:items-start items-center">
            <li className="text-base text-bg-primary cursor-pointer">
              Register
            </li>
            <li className="text-base text-bg-primary cursor-pointer">
              About Syntara
            </li>
            <li className="text-base text-bg-primary cursor-pointer">
              GitHub Link
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-[500] text-bg-primary">Contacts</h4>
          <ul className="flex flex-col md:items-start items-center">
            <li className="text-base text-bg-primary cursor-pointer">
              <a href="mailto:anmolpattnayak2016@gmail.com">
                anmolpattnayak2016@gmail.com
              </a>
            </li>
            <li className="text-base text-bg-primary cursor-pointer">
              <a href="mailto:hi@anushrey.space">hi@anushrey.space</a>
            </li>
            <li className="text-base text-bg-primary cursor-pointer">
              <a href="mailto:me@rajaryan.work">me@rajaryan.work</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-bg-primary w-[90%] h-[2px] mt-5"></div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-2 my-5 md:my-0 w-full">
        <p className="text-bg-primary text-sm md:py-5">
          DBA Hall, NIT Rourkela, India
        </p>
        <p className="text-bg-primary text-sm md:py-5">
          Syntara &copy;{footerYear}. All Rights Reserved
        </p>
        <div className="flex gap-5">
          <p className="cursor-pointer text-bg-primary text-sm md:py-5">
            Privacy Policy
          </p>
          <p className="cursor-pointer text-bg-primary text-sm md:py-5">
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
