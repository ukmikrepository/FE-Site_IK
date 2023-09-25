import React from "react";
// import EventCard from "../../Molecules/EventCard";
// import Marquee from "react-fast-marquee";
import { isMobile } from "react-device-detect";
// import EventHead from "../../Molecules/EventHead";
import EventMobile from "./Mobile/EventMobile";

export default function Event() {
  return (
    <div className="py-12">
      <div className="">
        {isMobile ? (
          <div className="container mx-auto">
            <EventMobile/>
          </div>
        ) : (
          <div>
            {/* <EventHead />
            <Marquee direction="right" pauseOnHover="true">
              <div className="flex relative flex-nowrap flex-grow-0 overflow-auto gap-4 mt-8 mr-4">
                <EventCard
                  date="24-25 September 2022"
                  title="Latihan Kader 1"
                  imageUrl="/img/event/lk1.jpg"
                />
                <EventCard
                  date="1 Juli 2023"
                  title="Talkshow Teknologi & Informasi"
                  imageUrl="/img/event/talkshow.jpg"
                />
                <EventCard
                  date="7 Januari 2023"
                  title="Study Club"
                  imageUrl="/img/event/studyclub.jpg"
                />
                <EventCard
                  date="18 Maret 2023"
                  title="Pelantikan Anggota"
                  imageUrl="/img/event/pelantikan.jpg"
                />
              </div>
            </Marquee>
            <Marquee direction="left" pauseOnHover="true">
              <div className="flex flex-nowrap flex-grow-0 overflow-auto gap-4 mt-8 mr-4">
                <EventCard
                  date="12-13 November 2022"
                  title="Latihan Kader 2"
                  imageUrl="/img/event/lk2.jpg"
                />
                <EventCard
                  date="5 April 2023"
                  title="HUT UKM Informatika & Komputer"
                  imageUrl="/img/event/hut.jpg"
                />
                <EventCard
                  date="3 Juni 2023"
                  title="Bakti Sosial"
                  imageUrl="/img/event/baksos.jpg"
                />
                <EventCard
                  date="7-8 Agustus 2023"
                  title="Rapat Anggota Tahunan"
                  imageUrl="/img/event/rat.jpg"
                />
              </div>
            </Marquee> */}
          </div>
        )}
      </div>
    </div>
  );
}
