import React from "react";

export default function OprecPhase({ isEnd, imgId, title, periode, desc }) {
  return (
    <div className="flex flex-row justify-between gap-4 w-full ">
      {/* illustration */}

      <div className="flex flex-row items-center gap-3 relative">
        <div className="mx-auto">
          <div className="bg-white rounded-full border-2 border-grey-4 p-4 w-fit text-end">
            <img src={`/img/oprec/phase${imgId}.svg`} alt="" className="w-[40px]"/>
          </div>
          {!isEnd ? (
              <span className="absolute left-1/3  h-[120px] w-[2px] bg-grey-4"></span>
            ) : (<></>)}
          {/* arrow */}
        </div>
        <span className="w-[25px] h-[2px] bg-grey-4"></span>
        <span className="h-[10px] w-[10px] bg-grey-4 rounded-full -ml-4"></span>
      </div>

      {/* Caption */}
      <div className="flex flex-col w-3/4 ">
        <h1 className="font-mont font-extrabold text-[14px] text-grey-1">{title}</h1>
        <span className="font-bold mt-1 text-[10px] italic text-grey-1">
          {periode}
        </span>
        <p className="text-[12px] font-regular  mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
