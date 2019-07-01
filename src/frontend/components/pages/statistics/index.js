import React from "react";
import StatCard from "./statCard";
import { Navigation } from "../../navigation";

import "../../../styles/grid.css";
import "../../../styles/components/statistics.css";

const Statistics = () => {
  // Top Blockers card data
  const topBlockersCardData = {
    title: {
      name: "Top Blockers"
    },
    headers: {
      name: "Blocker",
      metric_1: "Month",
      metric_2: "Year"
    },
    items: [
      {
        name: "Uber/Lift",
        metric_1: "48",
        metric_2: "502"
      },
      {
        name: "Private",
        metric_1: "100",
        metric_2: "600"
      }
    ]
  };

  const mostCongestedCardData = {
    title: {
      name: "Most Congested"
    },
    headers: {
      name: "Street",
      metric_1: "Month",
      metric_2: "Year"
    },
    items: [
      {
        name: "Valencia",
        metric_1: "103",
        metric_2: "789"
      },
      {
        name: "Howard",
        metric_1: "98",
        metric_2: "679"
      }
    ]
  };

  const biggestChangeCardData = {
    title: {
      name: "Biggest Change"
    },
    headers: {
      name: "Street",
      metric_1: "Difference"
    },
    items: [
      {
        name: "Valencia",
        metric_1: "-30%/-20%"
      },
      {
        name: "Howard",
        metric_1: "+10%/+13%"
      }
    ]
  };

  const blockedLanesThisYear = 1302;
  const blockedLanesSinceStartOfMonth = 203;

  return (
    <section component="Statistics">
      <Navigation />
      <div className="stats-container container">
        <div className="stats">
          <div className="stats-header rows">
            <div className="">
              <h2>{blockedLanesThisYear} blocked lanes this year.</h2>
            </div>
            <div className="">
              <h2>
                {blockedLanesSinceStartOfMonth} since the beginning of june.
              </h2>
            </div>
          </div>
          <div className="columns wrap center-horizontal">
            <div className="column">
              <StatCard cardData={topBlockersCardData} />
            </div>
            <div className="column">
              <StatCard cardData={mostCongestedCardData} />
            </div>
            <div className="column">
              <StatCard cardData={biggestChangeCardData} />
            </div>
            <div className="column">
              <StatCard cardData={mostCongestedCardData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Statistics };
