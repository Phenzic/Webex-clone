import React from "react";
import {
  useVideo
} from "@100mslive/react-sdk";

const Participant = ({ peer }) => {
    // fetch 100ms video stream to particpant view
    const { videoRef } = useVideo({
        trackId: peer.videoTrack
      });

  return (
    <div className="w-full h-full rounded-lg overflow-hidden z-40">

         {/* video element to shows particpant stream  */}

        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={false}
          className={`object-cover h-full w-full ${peer.isLocal ? "mirror" : ""}`}
        ></video>
    </div>
  );
};

export default Participant;

