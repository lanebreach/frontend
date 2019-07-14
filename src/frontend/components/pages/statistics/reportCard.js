import React from "react";
import "../../../styles/grid.css";
// import "../../../styles/components/reportCard.css";
import Iframe from "react-iframe";

const ReportCard = props => {
  console.log(props.cardData);

  return (
    <section component="ReportCard">
      <div className="reportCard-container">
        <div className="reportCard">
          <div className="reportCard-content">
            {/*  start of reportCard-headers */}
            <div className="reportCard-headers">
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
            </div>
            {/*  end of reportCard-headers */}
            {/*  start of reportCard-content */}
            <div className="reportCard-data">{props.cardData.url}</div>
            {/*  end of reportCard-content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCard;
