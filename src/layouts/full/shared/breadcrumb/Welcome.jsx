import React, { useEffect } from 'react';
import './Welcome.css';

const Welcome = () => {
    useEffect(() => {
        const toggleAnimation = () => {
            document.querySelector('.fly-in-text').classList.toggle('hidden');
        };

        const interval = setInterval(toggleAnimation, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ul className="fly-in-text hidden">
            <li>W</li>
            <li>E</li>
            <li>L</li>
            <li>C</li>
            <li>O</li>
            <li>M</li>
            <li>E</li>
        </ul>
    );
};

export default Welcome;
