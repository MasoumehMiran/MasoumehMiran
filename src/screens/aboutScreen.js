import { Autorenew, Translate } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React,{useEffect} from 'react'
import  { useLocation } from 'react-router-dom'
import  Title  from '../components/title';
import {getTranslation} from '../localizaions/index'
import { CommonStyle } from '../components/commonStyle';
import Grid from '@material-ui/core/Grid';
import aboutImg from '../assets/images/About.jpg' // Tell webpack this JS file uses this image
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

 
export default function AboutScreen(props) {
    const location = useLocation();
    const transate=getTranslation();
    const commonStyle=CommonStyle();
    
    
    // trigger on component mount
  useEffect(() => {
    props.setPage(location.pathname);
    
  }, [props,location]);
   
    return (
      <>
      <div class={commonStyle.sectionTitle }><Title title={transate.About} /></div>
      
      <Grid  spacing={6}>
  <Grid item xs={6} md={6}>
  <div className={commonStyle.imgContainer}>
    <img
          src={aboutImg}
         
          alt={transate.About}
          loading="lazy"
        />
  </div>
  </Grid>
  <Grid item xs={6} md={6}>
   <div>
     <Typography variant='h2'>I am <Box display='inline' component='span' className={'color-theme'}>
              
              Masoumeh Miran
            </Box> </Typography>
            <Typography varient="p">
            I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            </Typography>
   </div>
  </Grid>
  
</Grid>
      </>
    )
}
