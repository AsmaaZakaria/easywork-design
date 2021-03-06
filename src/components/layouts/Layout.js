import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CssBaseline } from '@material-ui/core';

import Header from './Header';
import Drawer from './Drawer';
import Banner from './Banner';
import Footer from './Footer';

import Services from '../../containers/Services';
import Partners from '../../containers/Partners';
import ContactUs from '../../containers/Contact';
import About from '../../screen/About';

const styles = theme => ({
  root: {
    width: '100%',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    marginTop: '25px',
  },
  content: {
    flexGrow: 1,
  },
});

class Layout extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={this.handleDrawerToggle}
          classes={classes}
        />
        <Drawer
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
          theme={theme}
        />
        <main className={classes.content}>
          <Banner/>
          <Services />
          <About />
          <Partners />
          <ContactUs />
          <Footer />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
