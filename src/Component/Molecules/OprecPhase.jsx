import React from "react";

export default function OprecPhase({ isEnd, imgId, title, periode, desc }) {
  return (
    <div className="flex items-center w-full gap-4 w-full">
      {/* illustration */}

      <div className="bg-white rounded-full p-4 w-fit text-end relative">
        <img src={`/img/oprec/phase${imgId}.svg`} alt="" className="w-[40px]" />
        {!isEnd ? (
          <span className="absolute left-1/2 bottom-[-60px] h-[50px] w-[2px] bg-black"></span>
        ) : null}
      </div>

      {/* arrow */}
      <span className="w-[45px] h-[2px] bg-black"></span>
      <span className="h-[10px] w-[10px] bg-black rounded-full -ml-4"></span>

      {/* Caption */}
      <div className="flex flex-col w-2/4">
        <h1 className="font-mont font-extrabold">{title}</h1>
        <span className="font-bold mt-1 text-[9px] italic text-grey-2">
          {periode}
        </span>
        <p className="text-[10px] font-regular mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
