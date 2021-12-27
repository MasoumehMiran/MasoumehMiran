import { createTheme } from "@material-ui/core/styles";
import { getDirection, getFonts } from "../localizaions";
import palette from "./palette";


const theme = createTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 4,

    typography: {
        htmlFontSize: 18,
        lineHeight: 1.8,
        h1: {
            fontWeight: 700,
            fontSize: '2.9857rem',
            lineHeight: '4rem',
            fontFamily: getFonts(),
         
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: '2.7rem',
            fontFamily: getFonts()
        },
        h3: {
            fontWeight: 600,
            fontSize: '2.7rem',
            lineHeight: '2.7rem',
            fontFamily: getFonts()
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.43rem',
            lineHeight: '2.14rem',
            fontFamily: getFonts()
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.14rem',
            lineHeight: '1.857rem',
            fontFamily: getFonts()
        },
        subtitle1: {
            marginTop: '15px',
            fontSize: '1.25rem',
            lineHeight: '2rem'
        }, body1: {
            marginTop: '15px',
            fontSize: '0.93rem',
            lineHeight: 1.75,
            fontFamily: getFonts()
        },
        body2: {
            marginTop: '15px',
            fontSize: '0.93rem',
            lineHeight: '1.75rem',
            fontFamily: getFonts()
        },
        button: {
            fontSize: 0.9,
            lineHeight: 50,
            color: '#fff',
            fontWeight: 400

        },
        a:{
            color:'red'
        }
    }
});

export default theme;
