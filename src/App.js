import logo from './logo.svg';
import './App.css';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
      <Quiz/>
      </Box>
    </Container>
  );
}

export default App;
