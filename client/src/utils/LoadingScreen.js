import React from 'react';
import './styles.css';

const LoadingScreen = (props) => {
    return (
        // <div className="triple-spinner-container">
        //     <div className="triple-spinner"/>
        // </div>
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">

                <div
    style={{ "width": props.progress * 100 + "%" }}
    className="
        shadow-none
        flex flex-col
        text-center
        whitespace-nowrap
        text-white
        justify-center
        bg-blue-500
      "
    />
            </div>
        </div>
    );
};

export default LoadingScreen;
