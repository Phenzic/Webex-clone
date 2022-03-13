import React from "react";
import {
    useHMSActions,
    useHMSStore,
    selectLocalPeer,
    selectCameraStreamByPeerID
  } from "@100mslive/react-sdk";


const VideoTile = ({peer, isLocal }) => {

    const hmsActions = useHMSActions();
    const videoRef = React.useRef(null);
    const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));
    const localPeer = useHMSStore(selectLocalPeer);
    const isModerator = localPeer.roleName === "host";

    React.useEffect(() => {
        (async () => {
          console.log(videoRef.current);
          console.log(videoTrack);
          if (videoRef.current && videoTrack) {
            if (videoTrack.enabled) {
              await hmsActions.attachVideo(videoTrack.id, videoRef.current);
            } else {
              await hmsActions.detachVideo(videoTrack.id, videoRef.current);
            }
          }
        })();
      }, [hmsActions, videoTrack]);

    // Video attach and dettach function


    return (
        <div className="w-full h-full  rounded-lg overflow-hidden z-40">
     {
  isModerator ? (

    <video
      ref={videoRef}
      autoPlay={true}
      playsInline
      muted={false}
      className={` object-cover h-full w-full ${isLocal ? 'local' : ''}`}
    ></video>
  ) : (
    <video
      ref={videoRef}
      autoPlay={true}
      playsInline
      muted={false}
      className={` object-cover h-full w-full ${isLocal ? 'local' : ''}`}
    ></video>
  )
}
      </div>

    );

}

export default VideoTile;