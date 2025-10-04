import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link  } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{backgroundColor:'#61DAFB'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ fontSize: 18, fontFamily: 'Inter', fontWeight: 'bold'}}>
              Hélio Ferreira
            </Typography>
            <div className='menu'>
                <ul>
                    <li>
                        <Link to="#home">Home</Link>
                    </li>
                    <li>
                        <Link to="#career">Carreira</Link>
                    </li>
                    <li>
                        <Link to="#projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="#contact">Contato</Link>
                    </li>
                </ul>
            </div>
            <div className='social-media-icons'>
                <ul>
                    <li>
                        <Link to="https://github.com/Helio-Junio" target="_blank">
                            <GitHubIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/heliojunio_1" target="_blank">
                            <InstagramIcon />
                        </Link>
                    </li>
                </ul>
            </div>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
