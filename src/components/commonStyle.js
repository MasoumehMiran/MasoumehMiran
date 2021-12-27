import { Typography } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { getDirection } from '../localizaions/index'
const direction = getDirection()

const CommonStyle = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: '60px',
    position: 'relative',
    zIndex: '1'
  },
  imgContainer: {
    position: 'relative',
    lineHeight:0,
    "&:before, &:after": {
      // your styles
      content: "''",
      position: 'absolute',
      height: '65%',
    width: '15px',
    background: 'rgba(3,127,255,.6)'
    },
    '&:after': {
      left: '0',
    top: '0'
      
    },
    '&:before': {
      left: 'auto',
      right: '0',
      top: 'auto',
      bottom: '0'
      
      
    }
  
  
    // '&:after': {
    //   left: 'auto',
    //   right: '0',
    //   top: 'auto',
    //   bottom: '0',
    //   content:''
    // },
    // '&, &:before, &:after': {
    //  content:''
    // },
    // '&:before': {
    //   right: 'auto',
    //   left: '0',
    //   bottom: 'auto',
    //   top: '0'
    // }
  }
}))

export { CommonStyle }
