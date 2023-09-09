import React from "react";
import Button from "./Button";

export default function CaptionEventCard({ title, date }) {
  return (
    <div className="flex flex-col p-4 bg-white/25 text-white absolute bottom-0 w-full group-hover:h-full group-hover:justify-center group-hover:items-center">
      <h1 className="font-extrabold font-mont">{title}</h1>
      <span className="font-light">{date}</span>
      <Button
        anotherClass={`hidden group-hover:block mt-2 drop-shadow-[0_4px_4px_rgba(85,183,255,1)]`}
        eventHandler={() => {
          fetch("https://ukmik.utdi.ac.id/api/ca-list/1/2")
            .then((response) => response.json())
            .then((responseData) => {
              console.log(responseData)
            })
            .catch((error) => {
              console.error("Error fetching data:", error.message);
            });
        }}
      >
        <span className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">View</span>
      </Button>
    </div>
  );
}
