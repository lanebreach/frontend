import React from "react";
import { Navigation } from "../../navigation";
import moment from "moment";
import Iframe from "react-iframe";

import "../../../styles/grid.css";
import "../../../styles/components/statistics.css";
import { func } from "prop-types";

const Statistics = () => (
  <section id="about">
    <h1>Bike Data Explorer</h1>
    <p>
      Placeholder page that will eventually display reports, etc
    </p>
    <p className="content">
    <Iframe
                url="https://datastudio.google.com/embed/reporting/143a8WOiZiJuYTYUUHscE-Bd-sv-ttk9d/page/mMot"
                width="1200px"
                height="900px"
                id="dataStudio"
                frameborder="0"
                className="dataStudioClass"
                style="border:0"
                allowfullscreen
                display="initial"
                position="relative"
              />
    </p>
    </section>
);

export { Statistics };
