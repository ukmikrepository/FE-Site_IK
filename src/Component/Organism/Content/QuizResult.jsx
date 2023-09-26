import React from 'react';


export default function QuizResult ({ type, illustration_image_file, short_desc_of_personalities, potensi, tokoh }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <img src={illustration_image_file} alt={illustration_image_file} className="w-full" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{type}</h2>
        <p className="text-gray-600 mb-4">{short_desc_of_personalities}</p>
        <div className="mb-4">
          <strong>Potensi:</strong> {potensi}
        </div>
        <div>
          <strong>Tokoh Terkenal:</strong> {tokoh}
        </div>
      </div>
    </div>
  );
};