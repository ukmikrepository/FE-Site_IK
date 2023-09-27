import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuizQuestion = ({setResult}) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalAnswers, setAnswers] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

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
    const hasAnswer = finalAnswers.some(item => item.includes(`${id}_`));
    if(hasAnswer){
      setAnswers([...finalAnswers.filter(answer => answer.split('_')[0] !== id.toString()), answer]);
    }else{
      setAnswers([...finalAnswers, answer]);
    }
  };

  const handleSubmit = async() => {
    // Lakukan sesuatu dengan hasil tes saat tombol "Submit" diklik
    // Misalnya, hitung tipe MBTI berdasarkan jawaban
    console.log('Hasil MBTI:');
    let answers = [];
    finalAnswers.map(answer => {
      let ans = answer.split('_');
      answers.push({ questionId: Number(ans[0]), answer: Number(ans[1]) });
    })


    const name = "Dian Setiawan";
      const options = {
        body: JSON.stringify({ answers, name }),
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      };
    
      const response = await fetch("http://localhost:3001/users", options);
      if (!response.ok) throw Error(response.statusText);
      const data = await response.json(); 
      setResult(data);
      navigate('result');
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4">Cek Kepribadianmu!!</h1>
      {questions.length > 0 ? (
        <ProgressBarWrapper>
          <div className="progress-bar w-[100vh]">
            <div
              className="progress"
              style={{
                width: `${((progress) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="w-full text-center mt-2">
            Pertanyaan ke <span className="text-primary-1 font-bold">
            {currentQuestion}/{questions.length}
            </span>
          </div>
        </ProgressBarWrapper>
      ) : null}
      {questions.length > 0 && currentQuestion < questions.length ? (
        <>
          <p className='text-xl my-8'>{questions[currentQuestion]?.text}</p>
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
                  finalAnswers[currentQuestion] === `${questions[currentQuestion]?.id}_${index + 1}`
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
        <h1 className='font-mont font-bold'>Yeyy!! Kamu sudah mengisi semua Quiz. Submit Jawabanmu!!</h1>
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
              console.log(finalAnswers);
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
