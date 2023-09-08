import React from "react";
import EventCard from "../../Molecules/EventCard";
import Marquee from "react-fast-marquee";
import EventHead from "../../Molecules/EventHead";

export default function Event() {
  return (
    <div className="my-24">
        <EventHead />
      <Marquee direction="right" pauseOnHover="true">
        <div className="flex relative flex-nowrap flex-grow-0 overflow-auto gap-4 mt-8 mr-4">
          <EventCard
            date="12 November 2022"
            title="Latihan Kader 1"
            imageUrl="https://source.unsplash.com/random/300×300"
          />
          <EventCard
            date="15 July 2022"
            title="Latihan Kader 2"
            imageUrl="https://source.unsplash.com/random/1920×1280"
          />
          <EventCard
            date="1 Juni 2022"
            title="Study Club"
            imageUrl="https://source.unsplash.com/random/320×300"
          />
          <EventCard
            date="1 Februari 2022"
            title="Pelantikan Anggota"
            imageUrl="https://source.unsplash.com/random/1920×1010"
          />
        </div>
      </Marquee>
      <Marquee direction="left" pauseOnHover="true">
        <div className="flex flex-nowrap flex-grow-0 overflow-auto gap-4 mt-8 mr-4">
          <EventCard
            date="12 November 2022"
            title="Latihan Kader 1"
            imageUrl="https://source.unsplash.com/random/300×300"
          />
          <EventCard
            date="15 July 2022"
            title="Latihan Kader 2"
            imageUrl="https://source.unsplash.com/random/1920×1280"
          />
          <EventCard
            date="1 Juni 2022"
            title="Study Club"
            imageUrl="https://source.unsplash.com/random/320×300"
          />
          <EventCard
            date="1 Februari 2022"
            title="Pelantikan Anggota"
            imageUrl="https://source.unsplash.com/random/1920×1010"
          />
        </div>
      </Marquee>
    </div>
  );
}
