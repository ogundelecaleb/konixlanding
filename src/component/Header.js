import React, { useState } from "react";

import { GooglePlay, Apple, HambergerMenu, CloseSquare } from "iconsax-react";

const Header = ({ device }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute px-[16px] sm:px-[36px] md:px-[48px] lg:px-[64px] pt-4 z-40 w-full">
      <div className="flex items-center justify-between  z-60">
        <img src="./images/logo.png" className="h-[48px] w-[102px]" alt="" />

        <ul className="hidden md:flex gap-[40px] items-center">
          <a href="#home">
            {" "}
            <li className="text-black text-lg leading-[24px] tracking-[0.002]">
              Home
            </li>
          </a>
          <a href="#benefit">
            {" "}
            <li className="text-black text-lg leading-[24px] tracking-[0.002]">
              Benefits
            </li>
          </a>
          <a href="#howitworks">
            {" "}
            <li className="text-black text-lg leading-[24px] tracking-[0.002]">
              How it works
            </li>
          </a>
          <a href="#faq">
            {" "}
            <li className="text-black text-lg leading-[24px] tracking-[0.002]">
              FAQs
            </li>
          </a>
        </ul>
        <Link
          className="cursor-pointer max-w-[275px]"
          to={
            device === "Android"
              ? "https://play.google.com/store/apps/details?id=com.konix.app&pcampaignid=web_share"
              : device === "iOS"
              ? "https://app.apple.com/ng/app/konix/id6464203231"
              : "https://play.google.com/store/apps/details?id=com.konix.app&pcampaignid=web_share"
          }
          target="_blank"
        >
          <div className="cursor-pointer max-w-[275px] hidden lg:flex gap-[24px] rounded-[40px] px-[24px] py-[16px] bg-[#f3efff] hover:bg-[#e6dffa]">
            <p className="text-[16px] leading-[24px] tracking-[0.002]">
              Download our app
            </p>{" "}
            <div className="flex items-center gap-[16px]">
              <GooglePlay size="24" color="#000" variant="Bold" />{" "}
              <Apple size="24" color="#000" variant="Bold" />
            </div>
          </div>
        </Link>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden"
        >
          {!open ? (
            <HambergerMenu size="32" color="#000" />
          ) : (
            <CloseSquare size="32" color="#000" />
          )}
        </button>
      </div>

      {open && (
        <div class="md:hidden rounded-lg shadow-lg  bg-white" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-6">
            <a
              href="#home"
              class="text-[#000] hover:bg-[#936DFF] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#benefit"
              class="text-[#000] hover:bg-[#936DFF] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Benefits
            </a>
            <a
              href="#howitworks"
              class="text-[#000] hover:bg-[#936DFF] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              How it works
            </a>
            <a
              href="#faq"
              class="text-[#000] hover:bg-[#936DFF] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              FAQs
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
