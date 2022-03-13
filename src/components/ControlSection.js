import React from 'react'
import {
    useHMSActions,
    useHMSStore,
    // selectPeers,
    // selectLocalPeer,
    selectIsLocalAudioEnabled,
    selectIsLocalVideoEnabled,
    selectIsLocalScreenShared
  } from "@100mslive/react-sdk";
  import {  UploadIcon, XIcon } from '@heroicons/react/solid'
  import {  MicrophoneIcon, VideoCameraIcon } from '@heroicons/react/outline'


export default function ControlSection() {
    // const peers = useHMSStore(selectPeers);
    const hmsActions = useHMSActions();
    // const localPeer = useHMSStore(selectLocalPeer);
    // const isModerator = localPeer.roleName === "host";
    const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
    const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
    const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

    // Toggle options
// update toggle otions from sdk demo on 100ms
    const toggleAudio = async () => {
      await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
    };
    const toggleVideo = async () => {
      await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
    };

    const toggleScreen = async () => {
      await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
    }

  return (
    <div className='h-[4rem] items-center justify-center flex gap-5 w-full'>
        <button className='text-white text-base border border-accent rounded-3xl px-4 py-2'   onClick={toggleAudio}
    active={isLocalAudioEnabled}>  <div className='flex gap-x-3 items-center'>
    <MicrophoneIcon className=' h-5 w-5' />
     <span>
     {isLocalAudioEnabled ? "Mute"  : "Unmute"}
         </span>
    </div>
    </button>
        <button className='text-white text-base border border-accent rounded-3xl px-4 py-2'  onClick={toggleVideo}><div className='flex gap-x-3 items-center'>
    <VideoCameraIcon className=' h-5 w-5' />
     <span>
     {isLocalVideoEnabled ?  "Stop Video"  : "Resume Video"}
         </span>
    </div>
        </button>
        <button className='text-white text-base border border-accent rounded-3xl px-4 py-2'   onClick={toggleScreen}
      active={!isLocalScreenShared}>
      <div className='flex gap-x-3 items-center'>
    <UploadIcon className=' h-5 w-5' />{isLocalScreenShared ? "Stop Sharing" : "Share"}
    </div>
    </button>
        <button title='End meeting' className='text-white bg-red-600 text-base rounded-3xl p-2'  onClick={() => { hmsActions.endRoom(false, "session ended") && hmsActions.leave();
        }}>
            <XIcon className='fill-white h-5 w-5' />
            </button>


     </div>
  )
}
