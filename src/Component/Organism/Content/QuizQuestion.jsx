import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuizQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/questions');
      if (response.ok) {
        const data = await response.json();
        setQuestions(data.questions);
      } else {
        console.error('Failed to fetch questions.');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAnswer = (answer, id) => {
    const hasAnswer = answers.some(item => item.includes(`${id}_`));
    if(hasAnswer){
      setAnswers([...answers.filter(answer => answer.split('_')[0] !== id.toString()), answer]);
    }else{
      setAnswers([...answers, answer]);
    }
  };

  const handleSubmit = () => {
    // Lakukan sesuatu dengan hasil tes saat tombol "Submit" diklik
    // Misalnya, hitung tipe MBTI berdasarkan jawaban
    console.log('Hasil MBTI:');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Tes MBTI</h1>
      {questions.length > 0 ? (
        <ProgressBarWrapper>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${((progress) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="w-full text-center">
            Pertanyaan ke <span className="text-gray-400">
            {currentQuestion}/{questions.length}
            </span>
          </div>
        </ProgressBarWrapper>
      ) : null}
      {questions.length > 0 && currentQuestion < questions.length ? (
        <>
          <p>{questions[currentQuestion]?.text}</p>
          <div className="grid grid-cols-7 gap-2 mt-4">
            {[
              "Sangat Tidak Setuju",
              "Tidak Setuju",
              "Agak Tidak Setuju",
              "Netral",
              "Agak Setuju",
              "Setuju",
              "Sangat Setuju",
            ].map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border ${
                  answers[currentQuestion] === `${questions[currentQuestion]?.id}_${index + 1}`
                    ? 'bg-blue-500 text-black'
                    : 'bg-white'
                }`}
                onClick={() =>
                  handleAnswer(`${questions[currentQuestion]?.id}_${index + 1}`, questions[currentQuestion]?.id)
                }
              >
                {option}
              </button>
            ))}
          </div>
          </>
      ) : <>
        <h1>Selesai</h1>
      </>}
      {showSubmit ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4"
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1)
            setProgress(progress + 1)
            if (currentQuestion + 1 === questions.length) {
              setShowSubmit(true);
            }
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

const ProgressBarWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  .progress-bar {
    height: 0.5rem;
    background-color: #ccc;
    border-radius: 0.25rem;
    .progress {
      height: 100%;
      background-color: #3498db;
      border-radius: 0.25rem;
      transition: width 0.3s ease-in-out;
    }
  }
`;


export default QuizQuestion;
