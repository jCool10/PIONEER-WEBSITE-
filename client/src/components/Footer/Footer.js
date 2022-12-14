import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footerContent">
        <h3 className="footerTitle h3Title">Contact Us</h3>
        <ul className="footerMedia">
          <li>
            <a href="mailto:clbpioneer@gmail.com">
              <i className="fa fa-envelope text-[#FF0000]">
                <span>clbpioneer@gmail.com</span>
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook text-[#699BF7]">
                <span>Pioneer</span>
              </i>
            </a>
          </li>
        </ul>
        <div className="footerImg">
          <img
            src="https://res.cloudinary.com/dpkkgg1hf/image/upload/v1669909149/pioneer/logoPioneer_r1us4m.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
