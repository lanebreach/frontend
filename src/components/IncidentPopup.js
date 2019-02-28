import React from "react";
import styled from 'styled-components';
import Moment from 'react-moment';


const Heading = styled.div`
  background-color: blue;
`;

const Time = styled.div``;

const Supervisor_District = styled.div``;

const Neighborhood = styled.div``;

const Details = styled.div``;

const Media = styled.div``;

const Img = styled.img`
  width: 256px;
  height: 256px;
`

const IncidentPopup = ({
  id,
  time,
  supervisor_district,
  neighborhood,
  details,
  media,
}) => {
  if(media != undefined) {
    return (
      <div>
        <Heading><b>ID:</b> {id}</Heading>
        <div>
          <p style={{display: 'inline'}}><b>Time: </b></p>
          <Moment>{time}</Moment>
        </div>
        <Supervisor_District><b>Supervisor District:</b> {supervisor_district}</Supervisor_District>
        <Neighborhood><b>Neighborhood:</b> {neighborhood}</Neighborhood>
        <Details><b>Details:</b> {details}</Details>
        <Media>
          <b>Media:</b>
          <br/>
          <Img src={media}></Img>
        </Media>
      </div>
    )
  } else {
    return (
      <div>
        <Heading><b>ID:</b> {id}</Heading>
        <div>
          <p style={{display: 'inline'}}><b>Time: </b></p>
          <Moment>{time}</Moment>
        </div>

        <Supervisor_District><b>Supervisor District:</b> {supervisor_district}</Supervisor_District>
        <Neighborhood><b>Neighborhood:</b> {neighborhood}</Neighborhood>
        <Details><b>Details:</b> {details}</Details>
      </div>
    )
  }
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
