import './App.css';
import theme from './theme/theme'
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import IndexScreen from './screens/index'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core/styles';

// Configure JSS

import { getDirection } from './localizaions';
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });




function App() {
  return (
    
    getDirection() === "ltr" ? (
      
      <ThemeProvider  theme={theme}>
        <CssBaseline>
          <IndexScreen></IndexScreen>
        </CssBaseline>
      </ThemeProvider>)
      :
      (
        <ThemeProvider theme={theme} jss={jss}>
          <CssBaseline>
            <IndexScreen></IndexScreen>
          </CssBaseline>
        </ThemeProvider>)
  );
}

export default App;
