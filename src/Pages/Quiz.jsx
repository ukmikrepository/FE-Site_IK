import React from "react";
import QuizQuestion from "../Component/Organism/Content/QuizQuestion";
import QuizResult from "../Component/Organism/Content/QuizResult";
import { mbtiData, getMbtiDataByType } from "../libs/personalities";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Component/Organism/Nav/Navbar";
import Footer from "../Component/Organism/Nav/Footer";
import { useEffect } from "react";

export default function Quiz() {
  const [username, setUsername] = useState("Dian Setiawan");
  const [result, setResult] = useState({});
  const [type, setType] = useState();

  useEffect(()=> {
    setType(result.type);
  }, [result])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizQuestion setResult={setResult} />} />
        <Route
          path="/result"
          element={
            <QuizResult
              username={username}
              result={result}
              setResult={setResult}
              {...getMbtiDataByType(type)}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
