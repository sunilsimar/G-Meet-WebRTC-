import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

export function Appbar() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const formatTime = (time) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
        }}>
            <div style={{ display: 'flex', }}>
                <VideocamOutlinedIcon fontSize="large"></VideocamOutlinedIcon>
                <Typography variant="h5" fontStyle={'arabic'}>Google Meet</Typography>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: 100 }}>
                    <Typography variant="body1" fontStyle={'arabic'} color="textSecondary">
                        {formatTime(currentTime)},{currentTime.toDateString()}
                    </Typography>
                </div>
                <div>
                    <Button variant="contained">SignUp</Button>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <Button variant="outlined">Join a Meeting</Button>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <Button variant="contained">Start Meeting</Button>
                </div>
            </div>

        </div >
    );
}