import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import getToken from "../utils/getToken";

function Lobby() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });

  const [role, setRole] = useState("guest");
  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getToken(role).then((token) => {
      hmsActions.join({
        userName: inputValues?.name,
        authToken: token,
      });
    });
  };

  return (
    <div className="bg-main h-screen flex justify-center items-center">
      <form
        className="max-w-sm container mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2>Join Room</h2>
        <div className="w-full">
          <label htmlFor="name" className="text-white text-base p-2">Display Name</label>
          <input
            required
            value={inputValues.name}
            onChange={handleInputChange}
            id="name"
            type="text"
            className="w-full p-3 my-2 rounded-xl"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div className="w-full">
        <label htmlFor="name" className="text-white text-base p-2">Role</label>

          <select
            className="w-full p-3 my-2 rounded-xl"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option id="only" value="host">
              Host
            </option>
            <option value="guest">Guest</option>
          </select>
        </div>
        <button className=" bg-btnGreen p-3 rounded-lg text-white">Join</button>
      </form>
    </div>
  );
}

export default Lobby;
