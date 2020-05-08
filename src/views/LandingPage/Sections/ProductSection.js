import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/img1.jpg";
import image3 from "assets/img/img2.jpg";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="space-evenly">
        <GridItem xs={12} sm={12} md={3}>
          <h2 className={classes.title}>Arquitectura para vivir.</h2>
          <h5 className={classes.description}>
          Nuestra arquitectura es cercana, humana y sensata. 
          Queremos obtener la mejor solución posible para cada proyecto, 
          buscando siempre la satisfacción plena de aquellos que lo vayan a habitar. 
          Para ello, buscamos siempre la excelencia en todo lo que hacemos y 
          lo hacemos porque nos apasiona nuestro trabajo. 
          </h5>
        </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card plain>
                  <img src={image2} alt="..."  className={imageClasses}/>
                </Card>
              </GridItem>
      </GridContainer>      
      <GridContainer justify="space-evenly">
        <GridItem xs={12} sm={12} md={3}>
          <h2 className={classes.title}>Productos para emocionar.</h2>
          <h5 className={classes.description}>
          Racional, analítico y por supuesto, emocional. 
          El diseño es la herramienta más potente que un producto pueda tener.
           Estudiamos cada caso desde la primera idea hasta su total 
           desarrollo con mucho mimo y pasión en cada paso que damos. 
           Nuestro mayor objetivo es mejorar la vida de las personas 
           y el mundo en el que vivimos, a través de productos sostenibles 
           en todos sus aspectos que cumplan con las premisas 
           estratégicas, empresariales y sociales.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
                <Card plain>
                  <img src={image3} alt="..."  className={imageClasses}/>
                </Card>
              </GridItem>
      </GridContainer>
    </div>
  );
}   

