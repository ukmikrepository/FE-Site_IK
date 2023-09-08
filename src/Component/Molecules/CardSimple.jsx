import React from "react";

export const CardSimple = ({ className = "", children }) => {
    return (
        <div
            className={`flex flex-col px-2 py-3 bg-white md:px-4 md:py-5 rounded-3xl md:rounded-md shadow-[0px_6px_1px_rgba(205,205,205,1)] w-max${className}`}
        >
            {children}
        </div>
    );
};
