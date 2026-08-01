import React, { useState, useEffect } from 'react';
import './DigitalClock.css';
import { Typography } from '@mui/material';

const DigitalClock = () => {
    const [dateTime, setDateTime] = useState({
        date: '',
        time: ''
    });

    useEffect(() => {
        const updateClock = () => {
            let d = new Date();

            let year = d.getFullYear();
            let month = d.toLocaleString("en-US", { month: "long" });
            let date = ("0" + d.getDate()).slice(-2);
            let dayNum = d.getDay();
            let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNum];
            let hr = ("0" + d.getHours()).slice(-2);
            let min = ("0" + d.getMinutes()).slice(-2);
            let sec = ("0" + d.getSeconds()).slice(-2);

            setDateTime({
                date: `${day}, ${month} ${date}, ${year}`,
                time: `${hr}:${min}`
            });
        };

        updateClock();
        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <Typography color="textSecondary" variant="subtitle" fontWeight={400}>{dateTime.date}</Typography>
            <Typography color="textSecondary" variant="h2" fontWeight={200}>{dateTime.time}</Typography>
            {/* <div className="clock-date">{dateTime.date}</div> */}
            {/* <div className="clock-time">{dateTime.time}</div> */}
        </div>
    );
};

export default DigitalClock;
