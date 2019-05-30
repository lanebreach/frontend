import React from "react";
import styled from 'styled-components';
import Moment from 'react-moment';

const Heading = styled.div``;

const Time = styled.div``;

const Supervisor_District = styled.div``;

const Neighborhood = styled.div``;

const Media = styled.div``;

const Img = styled.img`
  width: 256px;
  height: 256px;
`

const MediaElement = (props) => {
  if (props.media_url != undefined) {
    return (
      <Media>
        <b>Media:</b>
        <br/>
        <Img src={props.media_url}></Img>
      </Media>
    );
  }

  return null;
};

const Details = (props) => {
  if (props.deets != "") {
    return (<div style={{maxWidth: "256px"}}><b>Details:</b> {props.deets}</div>);
  }

  return null;
}

const IncidentPopup = ({
  id,
  time,
  supervisor_district,
  neighborhood,
  details,
  media,
}) => {
  return (
    <div>
      <Heading><b>ID:</b> {id}</Heading>
      <div>
        <p style={{display: 'inline'}}><b>Time: </b></p>
        <Moment>{time}</Moment>
      </div>
      <Supervisor_District>
        <b>Supervisor District:</b> {supervisor_district}
      </Supervisor_District>
      <Neighborhood><b>Neighborhood:</b> {neighborhood}</Neighborhood>
      <Details deets={details} />
      <MediaElement media_url={media} />
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
