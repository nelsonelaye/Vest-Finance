import React from "react";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" items-center flex-wrap gap-2 justify-between py-6 sm:pb-12 px-6  text-[11px] sm:px-12 text-black sm:text-sm mt-2 bg-gray-100 ">
      <aside className="flex items-center justify-between mb-3">
        <p className=" ">Copyright © 2024. Vest Finance</p>

        <div className="underline">
          <a
            href="https://linkedin.com/in/elayenelson"
            className="flex gap-1 items-center "
            target="_blank"
          >
            creator
            <IoLogoLinkedin color="blue" className="text-inherit" />
          </a>
        </div>
      </aside>

      <aside>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfle0ZnG3SEvUmnmpEq8AZB7um43xwtluFSfWI3KYQona5FSA/viewform"
          target="_blank"
          className="underline"
        >
          <span>Feedback</span>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
