import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Particles from 'react-particles-js'
import '../assets/css/scss/pages/_home.scss'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'

import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    flexDirection: 'row',
    justifyContent: 'center'
    ,'& >div':{
maxWidth:'800px' ,
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    flexDirection: 'column',
    justifyContent: 'center'
    }
  },
  horizantalList:{
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    alignItems:'center',
    justifyContent: 'center',
  '& a':{
    alignSelf: 'stretch',
    width:'auto',
    padding: '5px',
    border: '1px solid',
    marginRight: '15px',
    borderRadius: '50%',
    marginLeft: '15px',
    marginTop: '15px',
    '&:hover':{
      color:'white',
      transition:'0.3s'
    }
    }
  }
}))
// /src/assets/css/scss/pages/_home.scss
function ListItemLink (props) {
  return <ListItem button component='a' target='_blank' {...props} />
}

export default function Homescreen (props) {
  const location = useLocation()
  const classes = useStyles()
  useEffect(() => {
    props.setPage(location.pathname)
  }, [props, location])

  return (
    <>
      <Grid
        container
        item
        align='center'
        alignItems='center'
        className={classes.root}
      >
        <div>
          <Typography variant='h1'>
            {' '}
            Hi, I am
            <Box display='inline' component='span' className={'color-theme'}>
              {' '}
              Masoumeh Miran
            </Box>
          </Typography>
          <Typography variant='subtitle1' component='p'>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </Typography>
          <div>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component='nav'
              aria-labelledby='social-list' className={classes.horizantalList}
            >
              <ListItemLink href='http://google.com'>
                <GitHubIcon />
              </ListItemLink>
              <ListItemLink href="https://www.linkedin.com/in/masome.miran/">
                <LinkedInIcon />
              </ListItemLink>
              <ListItemLink>
                <LinkedInIcon />
              </ListItemLink>
            </List>
          </div>
          ّ
        </div>
      </Grid>

      <Particles
        id='tsparticles'
        params={{
          background: {
            color: {
              value: '#10121b'
            }
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: false
              }
            },
            size: {
              value: 6,
              random: true
            },
            color: {
              value: '#3b3d44'
            },
            move: {
              direction: 'top',
              outMode: 'out'
            },
            links: {
              enable: false
            }
          },
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'remove'
              }
            },
            modes: {
              remove: {
                quantity: 10
              }
            }
          }
        }}
      />
    </>
  )
}
