import React from "react";

export const CardSimple = ({ className = "", children }) => {
    return (
        <div
            className={`flex flex-col px-2 py-3 bg-grey-10 md:px-4 md:py-5 rounded-3xl md:rounded-[36px] shadow-[0px_1px_8px_rgba(0,0,0,0.08)] w-96${className}`}
        >
            {children}
        </div>
    );
};
