import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, [])

  function handleNewQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(q) {
    const updatedQuestions = questions.filter((question) => question.id !== q.id);
    setQuestions(updatedQuestions);
  }

  function handleAnswerChange(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else { 
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onPost={handleNewQuestion} /> : <QuestionList questions={questions} handleDeleteQuestion={handleDeleteQuestion} onNewAnswerChange={handleAnswerChange} />}
    </main>
  );
}

export default App;
