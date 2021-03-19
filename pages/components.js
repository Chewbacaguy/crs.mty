import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";

import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";


import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import SectionTypography from "../pages-sections/Components-Sections/SectionTypography";
import SectionQuestions from "../pages-sections/Components-Sections/SectionQuestions";
import SectionDownload from "../pages-sections/Components-Sections/SectionDownload";
import CustomDropdown from "../components/CustomDropdown/CustomDropdown";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Tecnologico de Mty"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/rosabg2.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>CRS Mty</h1>
                <h3 className={classes.subtitle}>
                  Consejo de Responsabilidad Social Campus Monterrey.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
      </div>
       
      <div className={classNames(classes.main, classes.mainRaised)}> 
      <TeamSection/>
        <h2 className={classNames(classes.textCenter, classes.h2)} >Becas</h2>
        
        <SectionTabs/>     
        <SectionQuestions />
        <SectionDownload/>
       
       <WorkSection/>
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/components">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                Regresar al incio
              </Button>
            </a>
          </Link>
        </GridItem>      
      </div>
      <Footer />
    </div>
  );
}
