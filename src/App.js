
import { useHMSActions, selectIsConnectedToRoom, useHMSStore } from "@100mslive/react-sdk";
import { useEffect } from "react";
import Lobby from "./components/Lobby";
import ConferenceRoom from "./components/ConferenceRoom";

function App() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);
  return (
    <div >
     { isConnected ? <ConferenceRoom /> : <Lobby /> }
    </div>
  );
}

export default App;
