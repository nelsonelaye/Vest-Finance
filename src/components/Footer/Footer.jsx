import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-6 pb-12 px-12 text-black text-sm mt-2 bg-gray-100 ">
      <aside className="items-center grid-flow-col">
        <p className="text-sm mt-2">
          Copyright © 2024. All right reserved. Vest Finance
        </p>
      </aside>

      <aside>
        <a href="#" className="underline">
          <span>Feedback</span>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
