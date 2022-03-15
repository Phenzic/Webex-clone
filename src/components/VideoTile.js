import React from "react";
import {
  useVideo
} from "@100mslive/react-sdk";

const VideoTile = ({ peer }) => {
    // fetch 100ms video stream to particpant view
    const { videoRef } = useVideo({
        trackId: peer.videoTrack
      });

  return (
    <div className="w-full h-full rounded-lg overflow-hidden z-40">
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

export default VideoTile;
