import React, { useState, useLayoutEffect } from "react";
import "./Footer.scss";

const FooterContainer = () => {
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className="footer" style={{ width: size }}>
            <div className="text">Copyright © Co.gether All rights reserved.</div>
        </div>
    );
};

export default FooterContainer;
