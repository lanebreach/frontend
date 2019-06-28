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
      },
      {
        name: "Government",
        metric_1: "NaN",
        metric_2: "NaN"
      }
    ]
  };

  return (
    <section component="statistics">
      <Navigation />
      <div>Statistic</div>
      <StatCard cardData={topBlockersCardData} />
    </section>
  );
};

export { Statistics };
