import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    facingMode: "environment",
    width: 1080,
    height: 720,
};

const Camera = () => {
    const webcamRef = React.useRef(null);

    const capture = async() => {
        const image = webcamRef.current.getScreenshot();
        console.log(image);
        alert("Image captured")
    }
    // decode:
    /**
     * var image = new Image();
     image.src = image;
     document.body.appendChild(image);
     */

    return (
        <div className="flex h-screen bg-gray-300">
            <div className="m-auto">
                {/*<div className="camera">*/}
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={1}
                    videoConstraints={videoConstraints}
                />
                {/*<button className="flex m-auto bg-red-300" onClick={capture}>Capture</button>*/}
                <button
                    className="btn flex m-auto text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={capture}>
                    Capture
                </button>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Camera;
