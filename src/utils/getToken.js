const endPoint = "https://prod-in.100ms.live/hmsapi/webbx.app.100ms.live/";
export default async function getToken(role) {
	const response = await fetch(`${endPoint}api/token`, {
		method: 'POST',
		body: JSON.stringify({
			user_id: '6225ece844ae04b51cafe260', // a reference user id for the user
			role: role, // stage, viewer
			room_id: "622c6e27f097c15b9c7c3de7" // as present on the dashboard
		}),
	});
	const { token } = await response.json();

    return token
}