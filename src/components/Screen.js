import React from "react";
import {
  useHMSActions,
  useHMSStore,
  selectScreenShareByPeerID,
} from "@100mslive/react-sdk";

const Screen = ({ peer, isLocal }) => {
  const hmsActions = useHMSActions();
  const screenRef = React.useRef(null);
  const screenTrack = useHMSStore(selectScreenShareByPeerID(peer.id));

  React.useEffect(() => {
    (async () => {
      console.log(screenRef.current);
      console.log(screenTrack);
      if (screenRef.current && screenTrack) {
        if (screenTrack.enabled) {
          await hmsActions.attachVideo(screenTrack.id, screenRef.current);
        } else {
          await hmsActions.detachVideo(screenTrack.id, screenRef.current);
        }
      }
    })();
  }, [hmsActions, screenTrack]);

  // Screen function

  return (
    <div className="w-full h-full  rounded-lg overflow-hidden z-50">
      <video
        ref={screenRef}
        autoPlay={true}
        playsInline
        muted={false}
        className={`object-cover h-full w-full ${isLocal ? 'local' : ''}`}
      ></video>
    </div>
  );
};

export default Screen;
