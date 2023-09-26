import React from 'react'
import QuizQuestion from '../Component/Organism/Content/QuizQuestion'
import QuizResult from '../Component/Organism/Content/QuizResult'
import { mbtiData } from '../libs/personalities'

export default function Quiz() {
  return (
    <div>
        <QuizQuestion />
        <QuizResult {...mbtiData[0]} />
    </div>
  )
}
