const meetingEndpoint = process.env.REACT_APP_MEETING_ENDPOINT;
const roomID = process.env.REACT_APP_ROOM_ID;

export default async function getAuthToken(role) {
	const response = await fetch(`${meetingEndpoint}api/token`, {
		method: 'POST',
		body: JSON.stringify({
			user_id: '6225ece844ae04b51cafe234', // a reference user id for the user
			role: role, // host, guest
			room_id: roomID // as present on the dashboard
		}),
	});
	const { token } = await response.json();
    return token
}