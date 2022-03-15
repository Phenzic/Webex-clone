import React from "react";
import {
  useHMSActions,
  useAVToggle,
  useScreenShare
} from "@100mslive/react-sdk";
import { UploadIcon, XIcon } from "@heroicons/react/solid";
import { MicrophoneIcon, VideoCameraIcon } from "@heroicons/react/outline";

export default function ControlSection() {
  const hmsActions = useHMSActions();

  // controls logic i.e audio, video and screen sharing
  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();

  const { amIScreenSharing } = useScreenShare();

  const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(!amIScreenSharing);
  };

  // end meeting as host or leave as participant
  const endLeaveMeeting = () => {
        hmsActions.endRoom(false, "ended meeting") && hmsActions.leave();
  }

  return (
    <div className="h-[4rem] items-center justify-center flex gap-5 w-full">


      {/* UI elements controls section  */}
      <button
        className="text-white text-base border border-accent rounded-3xl px-4 py-2"
        onClick={toggleAudio}
        active={isLocalAudioEnabled}
      >
        <div className="flex gap-x-3 items-center">
          <MicrophoneIcon className=" h-5 w-5" />
          <span>{isLocalAudioEnabled ? "Mute" : "Unmute"}</span>
        </div>
      </button>
      <button
        className="text-white text-base border border-accent rounded-3xl px-4 py-2"
        onClick={toggleVideo}
      >
        <div className="flex gap-x-3 items-center">
          <VideoCameraIcon className=" h-5 w-5" />
          <span>{isLocalVideoEnabled ? "Stop Video" : "Resume Video"}</span>
        </div>
      </button>
      <button
        className="text-white text-base border border-accent rounded-3xl px-4 py-2"
        onClick={toggleScreen}
        active={!amIScreenSharing}
      >
        <div className="flex gap-x-3 items-center">
          <UploadIcon className=" h-5 w-5" />
          {amIScreenSharing ? "Stop Sharing" : "Share"}
        </div>
      </button>
      <button
        title="End meeting"
        className="text-white bg-red-600 text-base rounded-3xl p-2"
        onClick={endLeaveMeeting}
      >
        <XIcon className="fill-white h-5 w-5" />
      </button>


    </div>
  );
}
