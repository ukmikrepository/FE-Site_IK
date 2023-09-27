import React from "react";
import Results from "./QuizResults/Results";
import parse from "html-react-parser";
import { Navigate } from "react-router-dom";
import Button from "../../Atoms/Button";

export default function QuizResult({
  username,
  type,
  name,
  illustration_image_file,
  short_desc_of_personalities,
  potensi,
  tokoh,
  result,
  setResult,
}) {
  if (Object.keys(result).length === 0) {
    return <Navigate replace to="/quiz" />;
  } else {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 w-full max-w-3xl py-8">
          <div className="relative w-full flex flex-col items-center text-center">
            <h1 className="text-2xl font-mont mb-12">
              Hasil Tes <br /> 
              {/* <b>{username}</b> */}
            </h1>
            <img
              src={`/img/quiz/${illustration_image_file}`}
              alt="MBTI Illustration"
              className="w-max h-[200px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                {type}
              </h2>
              <h4>{name}</h4>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <Results results={result} />
            <p className="text-gray-800 mb-4 mt-12 w-3/4">
              {parse(short_desc_of_personalities ? short_desc_of_personalities : '')}
            </p>
            <div className="mb-4">
              <strong className="text-lg block mb-1">
                Potensi kamu di masa depan :
              </strong>
              <span className="text-gray-700">{potensi}</span>
            </div>

            <div>
              <strong className="text-lg block mb-1">
                Tokoh Terkenal yang kamu banget :
              </strong>
              <span className="text-gray-700">{tokoh}</span>
            </div>
            <div className="w-full text-center mt-8">
              <Button
                anotherClass={`text-white`}
                eventHandler={() => {
                  setResult({});
                  return <Navigate to="/quiz" />;
                }}
              >
                Ambil Tes Lagi
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
