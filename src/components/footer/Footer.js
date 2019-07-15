//@flow

import * as React from 'react';

const Footer = (): React.Node => (
  <div className="footer">
    <div className="social-media">
      <a href="#">
        <img src="assets/7177d158c36d432b93f51e54f80e2f3c.webp" alt="" />
      </a>
      <a href="#">
        <img src="assets/d3470ec8ca26475da4b228f0199b5d3d.webp" alt="" />
      </a>
    </div>
    <div className="copyright">
      © Drupal Moldova Association. All rights reserved | Developed by
      <a href="https://www.linkedin.com/in/popoviciandrew/"> Popovici Andrei</a>
    </div>
  </div>
);

export default Footer;
