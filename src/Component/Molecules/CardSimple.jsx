import React from "react";

export const CardSimple = ({ className = "", children }) => {
    return (
        <div
            className={`flex flex-col px-2 py-3 border border-grey-8 bg-white md:px-4 md:py-5 rounded-md  w-max${className}`}
        >
            {children}
        </div>
    );
};
