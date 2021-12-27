import React from 'react'
import { changeLanguage, getTranslation, lang, menuUrl } from '../localizaions'
import logo from '../assets/images/Masoumeh.jpg' // Tell webpack this JS file uses this image
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useLocation
} from 'react-router-dom'

import { createBrowserHistory } from 'history'

// import {useHistory, useLocation, browserHistory } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Avatar from '@material-ui/core/Avatar'

import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'

import HomeScreen from './homescreen'
import AboutScreen from './aboutScreen'
import ContactScreen from './contactScreen'
import PortfolioScreen from './portfolioScreen'
import ResumeScreen from './resumeScreen'
import BlogScreen from './blogScreen'

const translate = getTranslation()

// Create a custom hook that uses both useLocation and useEffect
// export const LocationDisplay = () => {
//   const location = useLocation()

//   return <>{location.pathname}</>
// }

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height:'100vh',
    position:'relative'
  },
  icon: {},
  clickState: {
    marginLeft: drawerWidth
  },
  list: {
    width: '100%',
    '& span': {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '600',
      marginTop: '0'
    }
  },

  textCenter: {
    textAlign: 'center'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: '0',
    width: '50px',
    height: '50px',
    border: '1px solid #2e344e',
    borderRadius: '0',
    marginTop: '20px',
    position:'absolute',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    '&:focus': {
      borderColor: '#2e344e',
      transition: 'all .4s ease-out'
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  topDrawer: {
    width: '100%',
    padding: '20px 0',
    borderBottom: '1px solid ' + theme.palette.primary.borderColor,
    textAlign: 'center'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.backgroundColorBox,
    borderRight: '1px solid ' + theme.palette.primary.borderColor,
    height: '100%',
    display: 'flex',
    flexDrection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    overflowY: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  LogoSixze: {
    width: '150px',
    height: '150px',
    margin: '0 auto',
    border: '7px solid #2e344e;'
  },
  CopyRight: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    marginBottom: '0',
    fontSize: '1rem',
    padding: '15px 0',
    borderTop: '1px solid ' + theme.palette.primary.borderColor,
    '& a': {
      color: '#a4acc4',
      transition: 'all .4s ease-out'
    }
  }
}))

function ResponsiveDrawer (props) {
  const { window } = props
  const classes = useStyles()
  const history = createBrowserHistory()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [clicked, setClicked] = React.useState()
  const [isMenuOpen, setMenuOpen] = React.useState('false')
  const [page, setPage] = useState()

  function setPageUrl (newValue) {
    setPage(newValue)
  }

  const handleDrawerToggle = event => {
    setMobileOpen(!mobileOpen)
    console.log('hey')

    // (event.target).classList.add('click-state');
    !isMenuOpen ? setClicked() : setClicked(classes.clickState)
    setMenuOpen(!isMenuOpen)
  }

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <Avatar
          alt='Masoumeh Miran'
          src={logo}
          size='100'
          className={classes.LogoSixze}
        />
      </div>
      <List className={classes.list}>
        <ListItem
          button={false}
          key={translate.Home}
          className={
            page === menuUrl.Home.toLocaleLowerCase() ? 'selected-menu' : ''
          }
          component={Link}
          to={menuUrl.Home}
          selected={page === menuUrl.Home.toLocaleLowerCase()}
        >
          <ListItemText disableTypography={false} primary={translate.Home} />
        </ListItem>
        <ListItem
          button
          key={translate.About}
          className={
            page === menuUrl.About.toLocaleLowerCase() ? 'selected-menu' : ''
          }
          component={Link}
          to={menuUrl.About}
          selected={page === menuUrl.About.toLocaleLowerCase()}
        >
          <ListItemText disableTypography={false} primary={translate.About} />
        </ListItem>
        <ListItem
          button
          key={translate.Resume}
          className={
            page === menuUrl.Resume.toLocaleLowerCase() ? 'selected-menu' : ''
          }
          component={Link}
          to={menuUrl.Resume}
          selected={page === menuUrl.Resume.toLocaleLowerCase()}
        >
          <ListItemText disableTypography={false}  primary={translate.Resume} />
        </ListItem>
        <ListItem
          button
          key={translate.Portfolios}
          className={
            page === menuUrl.Portfolio.toLocaleLowerCase() ? 'selected-menu' : ''
          }
          component={Link}
          to={menuUrl.Portfolio}
          selected={page === menuUrl.Portfolio.toLocaleLowerCase()}
        >
          <ListItemText disableTypography={false} primary={translate.Portfolios} />
        </ListItem>
        <ListItem
          button
          key={translate.Blog}
          className={
            page === menuUrl.Blog.toLocaleLowerCase() ? 'selected-menu' : ''
          }
          component={Link}
          to={menuUrl.Blog}
          selected={page === menuUrl.Resume.toLocaleLowerCase()}
        >
          <ListItemText disableTypography={false} primary={translate.Blog} />
        </ListItem>
        <ListItem
          button
          key={translate.Contact}
          className={
            page === menuUrl.Contact.toLocaleLowerCase() ? 'selected-menu' : ''
          }
          component={Link}
          to={menuUrl.Contact}
          selected={page === menuUrl.Contact.toLocaleLowerCase()}
        >
          <ListItemText disableTypography={false}  primary={translate.Contact} />
        </ListItem>
      </List>

      <p className={classes.CopyRight}>
        © 2021{' '}
        <b>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://nuclearthemes.com'
          >
            NuclearThemes
          </a>
        </b>
      </p>
      <p>
        <button
          onClick={() => changeLanguage('FA')}
         
          className={lang.toLocaleLowerCase() === 'fa' ? 'selectedLink' : ''}
        >
          FA
        </button>{' '}
        |{' '}
        <button  
          onClick={() => changeLanguage('EN')}
          className={lang.toLocaleLowerCase() === 'en' ? 'selectedLink' : ''}
        >
          EN
        </button>
      </p>
   
    </>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  let button
  if (!isMenuOpen) {
    button = <CloseIcon />
  } else {
    button = <MenuIcon />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <IconButton
        color='inherit'
        aria-label='Close'
        // edge="start"

        onClick={handleDrawerToggle}
        className={`wrapper searchDiv ${classes.menuButton} ${clicked ||
          'base-state'}`}
      >
        {button}
      </IconButton>

      <Router history={history}>
        <nav className={classes.drawer} aria-label='mailbox folders'>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation='css'>
            <Drawer
              container={container}
              variant='temporary'
              // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
        <div className={"mi-bglines"}><span></span><span></span><span></span><span></span><span></span></div>
          {/* <div className={classes.toolbar} /> */}
          <Switch>
            <Route exact path='/'>
              <HomeScreen setPage={setPageUrl} />
             
            </Route>
            <Route path='/About'>
              <AboutScreen setPage={setPageUrl} page={page} />
            </Route>
            <Route path='/Contact'>
              <ContactScreen setPage={setPageUrl} />
            </Route>
            <Route path='/Resume'>
              <ResumeScreen setPage={setPageUrl} />
            </Route>
            <Route path='/Portfolio'>
              <PortfolioScreen setPage={setPageUrl} />
            </Route>
            <Route path='/Blog'>
              <BlogScreen setPage={setPageUrl} />
            </Route>
          </Switch>
          {page}
        </main>
      </Router>
    </div>
  )
}

export default ResponsiveDrawer
