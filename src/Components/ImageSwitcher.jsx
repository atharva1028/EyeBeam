// src/components/ImageSwitcher.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSwitcher = () => {
    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstImage(prevShowFirstImage => !prevShowFirstImage);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="image-switcher">

            {showFirstImage ? (
                <img
                    src="../public/images/card-img-1.png"
                    className="img-fluid"
                    alt="First"
                />
            ) : (
                <img
                    src="../public/images/card-img-2.png"
                    className="img-fluid"
                    alt="Second"
                />
            )}
            {showFirstImage ? (
                <img
                    src="../public/images/card-img-3.png"
                    className="img-fluid"
                    alt="First"
                />
            ) : (
                <img
                    src="../public/images/card-img-6.png"
                    className="img-fluid"
                    alt="Second"
                />
            )}
            {showFirstImage ? (
                <img
                    src="../public/images/card-img-6.png"
                    className="img-fluid"
                    alt="First"
                />
            ) : (
                <img
                    src="../public/images/card-img-5.png"
                    className="img-fluid"
                    alt="Second"
                />
            )}
        </div>
    );
};

export default ImageSwitcher;
