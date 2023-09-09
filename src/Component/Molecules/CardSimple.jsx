import React from "react";

export const CardSimple = ({ className = "", children }) => {
    return (
        <div
            className={`${className} flex flex-col px-2 py-3 md:px-4 md:py-5 rounded-md`}
        >
            {children}
        </div>
    );
};
