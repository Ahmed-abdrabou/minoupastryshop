import React from "react";

import Videos from "../../constants/videos";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="app__content VideoSection">
      <video
        src={Videos.Video1}
        // width={"1000px"}
        // height={"800px"}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default VideoSection;
