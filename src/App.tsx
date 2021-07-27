import { ThemeProvider } from 'styled-components';
import './App.css';
import Main from './components/main/Main';
import { AppTheme } from './styles/AppTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <Main/>
      </ThemeProvider>
    </div>
  );
}

export default App;
