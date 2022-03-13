import React from "react";
import Screen from "./Screen";
import VideoTile from "./VideoTile";
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers
} from "@100mslive/react-sdk";

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const isModerator = localPeer.roleName === "host";
  const peers = useHMSStore(selectPeers);


   return (
    <div className="flex flex-row">
      <div className="flex flex-row">
          <div className="flex flex-wrap">

{/* {
    isModerator
    :
     */}
   {/* { localPeer && <VideoTile peer={localPeer} isLocal={true} />} */}
   {
      peers &&
        peers
          .filter(peer => !peer.isLocal)
          .map(peer => {
            return (
              <>
                {' '}
                <VideoTile isLocal={false} peer={peer} />{' '}
              </>
            );
          })
  }
      </div>

      <div className=" m-0 h-screen z-10 self-center flex-wrap absolute top-0 left-0" style={{ width: 'calc(90vw - 100px)' }}>
      {
    isModerator
      ? null
      : peers &&
        peers
          .filter(peer => !peer.isLocal)
          .map(peer => {
            return (
              <>
                {' '}
                <Screen isLocal={false} peer={peer} />{' '}
              </>
            );
          })
  }
      </div>
    </div>
    </div>
  );
};

export default Room;
