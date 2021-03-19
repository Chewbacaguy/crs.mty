import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/fotosCrs/Polla.jpg";
import image2 from "assets/img/fotosCrs/Luis Angel.jpg";
import image3 from "assets/img/fotosCrs/Paula.jpg";
import image4 from "assets/img/fotosCrs/Karen Torres.jpg";
import image5 from "assets/img/fotosCrs/ANAFER2.jpg";
import image6 from "assets/img/fotosCrs/Fer.jpg";
import image7 from "assets/img/fotosCrs/Emiliano Jasso.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
             
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      
                      Presidenta: Ana Paola Torres Alvarez
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                     
                      Vicepresidente: Luis Angel Lopez Alvarez
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      
                      Planeacion y Proyectos: Paula Jimena Cortez Gonzales
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image4} alt="Fourth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      
                      Becas y Apoyos Financieros: Karen Denisse Torres Gamez 
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      
                      Administracion y Finanzas: Ana Fernanda Villarreal Colin
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image6} alt="Sixth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Comunicacion y Marketing: Fernanda Vega Garza 
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Seventh slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Transformacion Social: Emiliano Ruben Jasso Huerta 
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
