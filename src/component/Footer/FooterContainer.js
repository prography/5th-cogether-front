import React, { useState, useLayoutEffect, useEffect } from "react";
import "./Footer.scss";

const FooterContainer = () => {
    const [small, setSmall] = useState(false);
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (size > 1100) {
            // If media query matches
            setSmall(false);
        } else {
            setSmall(true);
        }
    }, [size]);

    return (
        <div className="footer" style={{ width: size }}>
            <div className="text">Copyright © Co.gether All rights reserved.</div>
        </div>
    );
};

export default FooterContainer;
