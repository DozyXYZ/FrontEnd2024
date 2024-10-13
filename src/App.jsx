// import css and the component "todolist"
// import './App.css' - remove due to use MUI now
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
// import Todolist from './components/todolist' - render the main component show Home and Todo tabs
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Main from './components/Main';

// basically run the app
function App() {

  return (

    <Container maxWidth="xl">

      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            My Todos
          </Typography>
        </Toolbar>
      </AppBar>

      <CssBaseline />

      <Main />

    </Container>
  )
}

export default App
