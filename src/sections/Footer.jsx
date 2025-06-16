import { mySocials } from "../constants";
import React, { useState } from "react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Cuộn về vị trí 0 (đầu trang)
      behavior: "smooth", // Hiệu ứng cuộn mượt mà
    });
  };

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-zinc-300 hover:bg-violet-300 transition-colors shadow-lg"
        title="Lên đầu trang"
      >
        <img
          src="assets/arrow-up-tohome.png"
          alt="Lên đầu trang"
          className="w-5 h-5"
        />{" "}
        {/* Thay SVG bằng img */}
      </button>

      <p> &copy; {new Date().getFullYear()} LNB. All rights reserved</p>
    </section>
  );
};

export default Footer;
