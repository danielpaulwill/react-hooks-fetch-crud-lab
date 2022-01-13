import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, handleDeleteQuestion, onNewAnswerChange }) {

  const listOfQuestions = questions.map((question) => (
    <QuestionItem 
      key={question.id} 
      question={question} 
      onDeleteQuestion={handleDeleteQuestion}
      onNewAnswerChange={onNewAnswerChange}
    />
    ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {listOfQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
