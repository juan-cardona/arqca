import React from 'react';

import classNames from "classnames";

import { makeStyles } from '@material-ui/core/styles';

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js"
import GridContainer from 'components/Grid/GridContainer';
import Parallax from "components/Parallax/Parallax.js";
import GridItem from "components/Grid/GridItem.js";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

import styles from "assets/jss/views/arquitectura.js";

const useStyles = makeStyles(styles);

const dashboardRoutes = []

export default function Arquitectura(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
        <Header
        color="transparent"
        routes={dashboardRoutes}
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
          <Parallax filter image={require("assets/img/bghome.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Conoce nuestra arquitectura.</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
                <div className={classes.root} >
                    <GridContainer>
                        <GridItem>
                        <Gallery photos={photos} margin={10}/>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}