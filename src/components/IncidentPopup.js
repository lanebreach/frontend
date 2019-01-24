import React from "react";

const IncidentPopup = ({
  id,
  time,
  supervisor_district,
  neighborhood,
  details,
  media,
}) => {
  return (
    <ul>
      <li>id: {id} </li>
      <li>time: {time} </li>
      <li>supervisor_district: {supervisor_district}</li>
      <li>neighborhood: {neighborhood} </li>
      <li>details: {details} </li>
      <li>media: {media}</li>
    </ul>
  );
};

export default IncidentPopup;
