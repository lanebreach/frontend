import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import moment from "moment";

const Heading = styled.div``;
const SubmittedTime = styled.div``;
const Supervisor_District = styled.div``;
const Neighborhood = styled.div``;
const BikeLaneId = styled.div``;
const Media = styled.div``;

const Img = styled.img`
  width: 256px;
  height: 256px;
`;

const MediaElement = props => {
  if (props.media_url != undefined) {
    return (
      <Media>
        <b>Media:</b>
        <br />
        <Img src={props.media_url} />
      </Media>
    );
  }

  return null;
};

const Details = props => {
  if (props.deets != "") {
    return (
      <div style={{ maxWidth: "256px" }}>
        <b>Details:</b> {props.deets}
      </div>
    );
  }

  return null;
};

const IncidentPopup = props => {
  console.log(props);
  let time = moment(props.requested_datetime).format("ddd DD/MM/YY h:mm:ss a");
  let bikeLaneId;
  if (props.meta_data) {
    bikeLaneId = JSON.parse(props.meta_data).bikeway_network_id;
  }
  return (
    <div>
      <Heading>
        <b>ID:</b> {props.id}
      </Heading>
      <SubmittedTime>
        <b>Submitted at: </b>
        {time}
      </SubmittedTime>
      <Supervisor_District>
        <b>Supervisor District:</b> {props.supervisor_district}
      </Supervisor_District>
      <Neighborhood>
        <b>Neighborhood:</b> {props.neighborhoods_sffind_boundaries}
      </Neighborhood>
      <BikeLaneId>
        <b>Bike Lane ID: </b>
        {bikeLaneId}
      </BikeLaneId>
      <Details deets={props.description} />
      <MediaElement media_url={props.media_url} />
    </div>
  );
};

export default IncidentPopup;
//
// <ul style={containerStyle}>
//   <li>id: {id} </li>
//   <li>time: {time} </li>
//   <li>supervisor_district: {supervisor_district}</li>
//   <li>neighborhood: {neighborhood} </li>
//   <li>details: {details} </li>
//   <li>media: {media}</li>
// </ul>
