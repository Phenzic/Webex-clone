import React from "react";
import {
  useHMSActions,
  useHMSStore,
  selectScreenShareByPeerID,
} from "@100mslive/react-sdk";

const Screen = ({ presenter }) => {
  const hmsActions = useHMSActions();
  const screenRef = React.useRef(null);
  const screenTrack = useHMSStore(selectScreenShareByPeerID(presenter.id));

  // attach 100ms screensharing stream to video element

  React.useEffect(() => {
    (async () => {

      if (screenRef.current && screenTrack) {
        if (screenTrack.enabled) {
          await hmsActions.attachVideo(screenTrack.id, screenRef.current);
        } else {
          await hmsActions.detachVideo(screenTrack.id, screenRef.current);
        }
      }
    })();
  }, [hmsActions, screenTrack]);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden z-50">

     {/* video element to show screensharing/ presenting screen  */}

      <video
        ref={screenRef}
        autoPlay={true}
        playsInline
        muted={false}
        className={`object-cover h-full w-full ${presenter.isLocal ? 'local' : ''}`}
      ></video>


    </div>
  );
};

export default Screen;
