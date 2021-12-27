import { Typography } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { getDirection } from '../localizaions/index';
const direction=getDirection();

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '15px',
    textTransform: 'uppercase'
  },
  title: {
    textAlign:direction =='ltr'?'left':'right',
    '&:after': {
      content: "''",
      position: 'absolute',
      left: direction =='ltr'?'0':'auto',
      right: direction =='ltr'?'auto':'0',
      bottom: 0,
      height: 5,
      borderRadius: '100px',
      width: 35,
      background: '#037fff'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      left: direction =='ltr'?'0':'auto',
      right: direction =='ltr'?'auto':'0',
      bottom: 0,
      height: 5,
      borderRadius: '100px',
      width: 100,
      background: 'rgba(3, 127, 255, 0.3)'
    }},
    subitile: {
      fontSize: '4.5rem',
      position: 'absolute',
      left: 15,
      top: '100%',
      lineHeight: '1rem',
      fontWeight: 900,
      color: 'rgba(25,29,43,44)',
      display: 'inline-block',
      zIndex: -1,
      transform: 'translateY(-40%)'
    }
  
}))

export default function Title ({ title }) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {title}
      </Typography>
    </div>
  )
}
