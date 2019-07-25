//@flow

import * as React from 'react';

const Footer = (): React.Node => (
  <div className="footer">
    <div className="contacts-block">
      <div className="title">Contact us</div>
      <ul>
        <li>
          <svg
            stroke="#999999"
            fill="#999999"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
          </svg>
          <span>+373 608 441 91</span>
        </li>
        <li>
          <svg
            stroke="#999999"
            fill="#999999"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
          <span>info@drupalmoldova.org</span>
        </li>
      </ul>
      <div className="title">Follow us</div>
      <div className="social-media">
        <a href="#">
          <img src="/assets/7177d158c36d432b93f51e54f80e2f3c.webp" alt="" />
        </a>
        <a href="#">
          <img src="/assets/d3470ec8ca26475da4b228f0199b5d3d.webp" alt="" />
        </a>
      </div>
    </div>

    <div className="copyright">
      © Drupal Moldova Association. All rights reserved | Developed by
      <a href="https://www.linkedin.com/in/popoviciandrew/"> Popovici Andrei</a>
    </div>
  </div>
);

export default Footer;
