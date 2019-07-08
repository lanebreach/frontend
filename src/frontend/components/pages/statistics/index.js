import React from "react";
import StatCard from "./statCard";
import { Navigation } from "../../navigation";
import moment from "moment";

import "../../../styles/grid.css";
import "../../../styles/components/statistics.css";
import { func } from "prop-types";

const dataFetcher = require("../../../common/fetchData.js");

export class Statistics extends React.Component {
  constructor() {
    super();
    var now = moment();
    this.state = {
      bike_lane_reports: [],
      numReportsThisYear: 0,
      numReportsThisMonth: 0,
      thisMonth: now.format("MMMM"),
      thisYear: now.format("YYYY"),
      counts: {
        uber: 0,
        lyft: 0,
        lyftOrUber: {
          month: 0,
          year: 0
        }
      }
    };
  }

  componentDidMount = async () => {
    // fetch the data from a local api to avoid CORS
    var bikeLaneReports = await dataFetcher.fetch311();

    //attach month as an explicit property to filter against
    // bikeLaneReports.features = bikeLaneReports.features.map(function(d) {
    //   d.properties.month = new Date(d.properties.time).getMonth();
    //   return d;
    // });

    await this.setState({
      bike_lane_reports: bikeLaneReports.features
    });
    this.initializeStats();
  };

  initializeStats() {
    var reports = this.state.bike_lane_reports;
    console.log(reports);
    let monthCount = 0;
    let yearCount = 0;
    // let lyftCount = 0;
    // let uberCount = 0;
    let tncMonth = 0;
    let tncYear = 0;
    let c = 0;

    for (var i = 0; i < reports.length; i++) {
      let reportProps = reports[i].properties;
      let date = moment(reportProps.requested_datetime);
      let desc = reportProps.description;

      if (date.isAfter("2019-06-30")) {
        // get metrics for this month
        monthCount++;

        if (desc != null) {
          if (desc.toLowerCase().includes("uber")) {
            c++;
          }
          if (
            desc.toLowerCase().includes("uber") ||
            desc.toLowerCase().includes("lyft")
          ) {
            tncMonth++;
          }
        }
      }
      if (date.isAfter("2018-12-31")) {
        //get metrics for this year
        yearCount++;
        if (desc != null) {
          if (
            desc.toLowerCase().includes("uber") ||
            desc.toLowerCase().includes("lyft")
          ) {
            tncYear++;
          }
        }
      }

      // category metrics
    }

    console.log(c);

    this.setState({
      numReportsThisMonth: monthCount,
      numReportsThisYear: yearCount,
      counts: {
        lyftOrUber: {
          month: tncMonth,
          year: tncYear
        }
      }
    });

    // Top Blockers card data
    // const topBlockersCardData = {
    //   title: {
    //     name: "Top Blockers"
    //   },
    //   headers: {
    //     name: "Blocker",
    //     metric_1: "Month",
    //     metric_2: "Year"
    //   },
    //   items: [
    //     {
    //       name: "Uber/Lift",
    //       metric_1: "48",
    //       metric_2: "502"
    //     },
    //     {
    //       name: "Private",
    //       metric_1: "100",
    //       metric_2: "600"
    //     }
    //   ]
    // };
    // const mostCongestedCardData = {
    //   title: {
    //     name: "Most Congested"
    //   },
    //   headers: {
    //     name: "Street",
    //     metric_1: "Month",
    //     metric_2: "Year"
    //   },
    //   items: [
    //     {
    //       name: "Valencia",
    //       metric_1: "103",
    //       metric_2: "789"
    //     },
    //     {
    //       name: "Howard",
    //       metric_1: "98",
    //       metric_2: "679"
    //     }
    //   ]
    // };
    // const biggestChangeCardData = {
    //   title: {
    //     name: "Biggest Change"
    //   },
    //   headers: {
    //     name: "Street",
    //     metric_1: "Difference"
    //   },
    //   items: [
    //     {
    //       name: "Valencia",
    //       metric_1: "-30%/-20%"
    //     },
    //     {
    //       name: "Howard",
    //       metric_1: "+10%/+13%"
    //     }
    //   ]
    // };
    // const blockedLanesThisYear = 1302;
    // const blockedLanesSinceStartOfMonth = 203;
  }

  render() {
    const blockedLanesThisYear = this.state.numReportsThisYear; // todo slow
    const blockedLanesSinceStartOfMonth = this.state.numReportsThisMonth;
    const thisMonth = this.state.thisMonth;
    const thisYear = this.state.thisYear;

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
          name: "Uber/Lyft",
          metric_1: this.state.counts.lyftOrUber.month,
          metric_2: this.state.counts.lyftOrUber.year
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

    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%"
    };

    return (
      <section component="Statistics">
        <Navigation />
        <div className="stats-container container">
          <div className="stats">
            <div className="stats-header rows">
              <div className="">
                <h2>
                  {blockedLanesThisYear} blocked lanes in {thisYear}
                </h2>
              </div>
              <div className="">
                <h2>
                  {blockedLanesSinceStartOfMonth} since the beginning of{" "}
                  {thisMonth}
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
