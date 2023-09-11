import React from "react";

const Input = ({ label, type, placeholder, value, name, onChange = undefined, hasFullBorder, className, classLabel }) => {
  return (
    <div className={`mb-4 ${type === "radio" ? "flex items-center" : "w-full"}`}>
      {type !== "radio" && (
        <label className={`${classLabel} block text-sm mb-2`}>{label}</label>
      )}
      <span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange === undefined ? onChange : ""}
        id={value}
        className={`${className} py-2 outline-none text-sm w-full flex ${
          hasFullBorder ? "rounded-xl px-4" : ""
        }`}
      />
      </span>
      
      {type === "radio" && <span className="ml-2 text-xs"><label htmlFor={value} className={className}>{label}</label></span>}
    </div>
  );
};

export default Input;
