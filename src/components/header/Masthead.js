//@flow
import * as React from 'react';
import FitText from '@kennethormandy/react-fittext';

const Masthead = (): React.Node => (
  <div className="masthead-wrapper">
    <div className="masthead">
      <FitText minFontSize={50} maxFontSize={125} comressor={3}>
        <h1 className="title">femeie restart</h1>
      </FitText>
      <div className="masthead-info">
        <div className="date">Apr 18, 2023, 7:00 PM</div>
        <a className="buy-ticket button" href="#">
          Get tickets
        </a>
      </div>
    </div>
  </div>
);

export default Masthead;
