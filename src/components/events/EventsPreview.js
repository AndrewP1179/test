//@flow
import * as React from 'react';
import { Link } from 'gatsby';

const EventsPreview = (): React.Node => (
  <div className="events-preview-wrapper">
    <div className="indexes">
      <div className="number">03</div>
      <div className="title">Agenda</div>
    </div>
    <Link to="/events">
      <div className="button agenda-btn">View Agenda</div>
    </Link>
  </div>
);

export default EventsPreview;
