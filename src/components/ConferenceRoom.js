import React from 'react'
// import Screen from "./Screen";
import VideoTile from "./VideoTile";
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers
} from "@100mslive/react-sdk";
import ControlSection from './ControlSection';

export default function ConferenceRoom() {
    const localPeer = useHMSStore(selectLocalPeer);
    // const isModerator = localPeer.roleName === "host";
    const peers = useHMSStore(selectPeers);
const tiles = peers.length ;
  return (
    <div className='h-screen w-full bg-main flex'>
        <div className='flex flex-col w-full h-full justify-between items-center'>
            <div className="max-w-6xl flex items-center justify-center mx-auto h-[80vh] mt-16 container">
                <div className={`grid ${ tiles <= 4 ? "grid-cols-2 grid-rows-2" : "grid-cols-4 grid-rows-4"} items-center justify-center content-center  w-full gap-3 h-full`}>

                            {/* {
    isModerator
      ? null
      : peers &&
        peers
          .filter(peer => !peer.isLocal)
          .map(peer => {
            return (
              <>
                  <div className={`w-full h-full ${ tiles <= 4 ? "max-h-[20rem]" : "max-h-[10rem]"} bg-accent rounded-lg flex items-center justify-center`}>

                <Screen isLocal={false} peer={peer} />

            </div>
              </>
            );
          })
  } */}
                <div className={`w-full h-full relative ${ tiles <= 4 ? "max-h-[20rem]" : "max-h-[10rem]"} bg-accent rounded-lg flex items-center justify-center` }>
                       { !localPeer ? <span className='text-2xl text-white'>
                            Tester 1
                            {/* can be name */}
                        </span>
                        : <VideoTile isLocal={true} peer={localPeer} />
                         }

                         <div className="absolute bottom-1 z-[99] left-1">
                            <span className='bg-black bg-opacity-40 p-1 px-4 text-xs rounded-3xl text-white'>
                                {localPeer?.name} ({localPeer?.roleName === "host" ? "Host," : null} me)
                            </span>
                        </div>
                    </div>


                {

      peers &&
        peers
          .filter(peer => !peer.isLocal)
          .map(peer => {
            return (
              <>
                {' '}
                <div className="w-full h-full max-h-[20rem] bg-accent rounded-lg flex items-center justify-center">
                       { !peer ? <span className='text-2xl text-white'>
                            Tester 1

                        </span>
                        : <VideoTile isLocal={false} peer={peer} />
                         }
                    </div>
              </>
            );
          })
  }
                </div>
            </div>
       <ControlSection />
        </div>

    </div>
  )
}
