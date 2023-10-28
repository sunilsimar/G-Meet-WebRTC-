import socketIO from "socket.io-client"
import { useState } from "react";
import { Video } from "./Video"
import { useEffect } from "react";

export function MeetingPage() {
    const [socket, setSocket] = useState(null);
    const [meeting, setMeeting] = useState(false);
    const [videoStream, setVideoStream] = useState();
    const [remoteVideoStream, setRemoteVideoStream] = useState();

    const params = useParams();
    const roomId = params.roomId;

    useEffect(() => {
        const s = socketIO.connect("http://localhost:3000");
        s.on("connect", () => {
            setSocket(s);
            s.emit("join", {
                roomId
            })
        })
    })

}