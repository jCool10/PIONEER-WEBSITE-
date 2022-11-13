import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <h3 className="footerTitle h3Title">Contact Us</h3>
      <ul className="footerMedia">
        <li>
          <a href="tel:+12345789">
            <i className="text-[#0FA958] fa fa-phone">
              <span>12345789</span>
            </i>
          </a>
        </li>
        <li>
          <a href="mailto:123@gmail.com">
            <i className="fa fa-envelope text-[#FF0000]">
              <span>2345789@gmail.com</span>
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook text-[#699BF7]">
              <span>facebook</span>
            </i>
          </a>
        </li>
      </ul>
      <div className="footerImg"></div>
    </footer>
  );
}
