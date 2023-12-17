import React from 'react'
import YouTube from "react-youtube";
const RespoYTVid = ({ videoId }) => {
    const opts = {
        width: "100%",
        height: "100%",
      };
  return (
    <div className="videoWrapper">
    <YouTube videoId={videoId} opts={opts} />
  </div>
  )
}

export default RespoYTVid