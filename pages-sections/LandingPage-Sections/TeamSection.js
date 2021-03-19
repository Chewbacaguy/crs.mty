import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team2 from "assets/img/fotosCrs/logo4.png";




const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
    
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>¿Qué es el Consejo de Responsabilidad Social Estudiantil FETEC?</h2>
      <div>
        <GridContainer className={classes.justifyCenter}>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={15} sm={15} md={7} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
              Consejo de Responsabilidad Social
                <br />
                <small className={classes.smallTitle}>Grupo Estudiantil</small>
              </h3>
              <CardBody>
                <h4 className={classes.description}>
                El CRS es el Consejo Estudiantil encargado de promover la responsabilidad social 
                de los Grupos Estudiantiles mediante proyectos con impacto social, 
                servicios sociales y la coordinación y otorgamiento de becas de alumnos(as) para alumnos(as).
                </h4>
              </CardBody>
              <a href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_7VspuXvyBofcb8q" target="_blank">
                <Button color="rose" round size ="lg">
                  Encuesta CRS
                </Button>
              </a>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
