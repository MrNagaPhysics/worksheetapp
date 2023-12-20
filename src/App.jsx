import './App.css';
import FinalScreen from './components/FinalScreen.js';
import Home from './components/Home.js';
import Quiz from "./components/Quiz.jsx"
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MathJaxContext } from "better-react-mathjax";
function App() {
  return (
    <MathJaxContext>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Router>
              <Routes>
                {/* uncomment in developenv */}
              <Route exact path="quiz/:id" element = {<Quiz />} />

              {/* uncomment in local env */}
              {/* <Route exact path="quiz" element = {<Quiz />} /> */}
              </Routes>

              <Routes>
              <Route exact path="/" element = {<Home  />} />
              </Routes>

              <Routes>
              <Route exact path="/score" element = {<FinalScreen />} />
              </Routes>

            </Router>
          </Box>
        </Container>
    </MathJaxContext>
  );
}

export default App;