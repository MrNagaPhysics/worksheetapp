import './App.css';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';
import { Provider } from 'react-redux';
import store from "./redux/store"
import handleScoreChange from "./redux/actions"

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Quiz/>
        </Box>
      </Container>
    </Provider>
 
  );
}

export default App;
