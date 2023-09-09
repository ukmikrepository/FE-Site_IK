import React from "react";

const Input = ({ label, type, placeholder, value, name, onChange = undefined, hasFullBorder }) => {
  return (
    <div className={`mb-4 ${type === "radio" ? "flex items-center" : "w-full"}`}>
      {type !== "radio" && (
        <label className="block text-grey-8 text-sm mb-2">{label}</label>
      )}
      <span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange === undefined ? onChange : ""}
        id={value}
        className={`py-2 outline-none text-sm w-full text-grey-2 flex ${
          hasFullBorder ? "rounded-xl px-4" : "border-b border-black"
        }`}
      />
      </span>
      
      {type === "radio" && <span className="ml-2 text-xs"><label htmlFor={value}>{label}</label></span>}
    </div>
  );
};

export default Input;
