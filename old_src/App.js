import './App.css';
import FinalScreen from './components/FinalScreen';
import Home from './components/Home';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Router>
            <Routes>
            <Route exact path="/quiz" element = {<Quiz />} />
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
  );
}

export default App;
