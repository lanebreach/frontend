import React from "react";
import "../../../styles/grid.css";
import "../../../styles/components/statCard.css";

const generateStatCardItems = items => {
  let statCardItems = [];
  items.forEach(element => {
    statCardItems.push(
      <div key={element.name}>
        <div className="columns">
          <div className="column">{element.name}</div>
          <div className="column">{element.metric_1}</div>
          {element.metric_2 && <div className="column">{element.metric_2}</div>}
        </div>
      </div>
    );
  });
  return statCardItems;
};

const StatCard = props => {
  console.log(props.cardData);

  return (
    <section component="StatCard">
      <div className="statCard-container">
        <div className="statCard">
          {/*  start of statCard-title */}
          <h4 className="statCard-title">{props.cardData.title.name}</h4>
          {/*  end of statCard-title */}

          <div className="statCard-content">
            {/*  start of statCard-headers */}
            <div className="statCard-headers">
              <div className="columns">
                <div className="column">{props.cardData.headers.name}</div>
                <div className="column">{props.cardData.headers.metric_1}</div>
                {props.cardData.headers.metric_2 && (
                  <div className="column">
                    {props.cardData.headers.metric_2}
                  </div>
                )}
              </div>
            </div>
            {/*  end of statCard-headers */}

            {/*  start of statCard-content */}
            <div className="statCard-data">
              {generateStatCardItems(props.cardData.items)}
            </div>
            {/*  end of statCard-content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatCard;
