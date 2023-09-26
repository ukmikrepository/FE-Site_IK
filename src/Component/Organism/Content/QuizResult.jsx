import React from 'react';


export default function QuizResult ({ type, illustration_image_file, short_desc_of_personalities, potensi, tokoh }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 w-full max-w-3xl">
      <div className="relative w-full h-60">
        <img src="/img/quiz/mbti.jpeg" alt="MBTI Illustration" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">{type}</h2>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <p className="text-gray-600 mb-4">{short_desc_of_personalities}</p>
        
        <div className="mb-4">
          <strong className="text-lg block mb-1">Potensi:</strong>
          <span className="text-gray-700">{potensi}</span>
        </div>
        
        <div>
          <strong className="text-lg block mb-1">Tokoh Terkenal:</strong>
          <span className="text-gray-700">{tokoh}</span>
        </div>
      </div>
    </div>
  </div>
  );
};