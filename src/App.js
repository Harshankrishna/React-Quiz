import "./App.css";
import Quiz from "./components/Quiz";
import PlayQuiz from "./components/PlayQuiz";
import Results from "./components/Result";
// import { app } from "./firebase-config";
import Login from "./components/Button/Login";
import Register from "./components/Button/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app-main">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Quiz />} />
          <Route exact path="/play" element={<PlayQuiz />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
