import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center flex-wrap gap-2 justify-between py-6 sm:pb-12 px-6  text-[11px] sm:px-12 text-black sm:text-sm mt-2 bg-gray-100 ">
      <aside className="items-center grid-flow-col">
        <p className=" mt-2">Copyright © 2024. Vest Finance</p>
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
