import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";
import { CasinoSharp, Check, EmojiFoodBeverage, Feedback, FormatListBulletedRounded, Home, HouseTwoTone, LiveHelpSharp, LocalActivityOutlined, LocationOffOutlined, Money, MoneyOutlined, MoneyRounded, School, SupervisedUserCircleSharp, VerifiedUser, VerifiedUserOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3 headerColor="black" className={classes.textCenter} >Tipos de Becas</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
             
              <CustomTabs
                headerColor= "primary"
                tabs={[
                  {
                    tabName: "Colegiatura",
                    tabIcon: School, 
                    tabContent: (
                      <p className={classes.textCenter}>
                        Consiste en el pago de adeudos pendientes que alumno o alumna tenga con el Tec de Monterrey, Campus Monterrey. 
                        Dichos montos dependen del adeudo de cada alumno o alumna con necesidad económica. La beca será aplicable una vez 
                        que el beneficiario o beneficiaria haya realizado su inscripción y deberá de verse reflejado en su estado de cuenta 
                        durante el primer mes de clases.
                      </p>
                    )
                  },
                  {
                    tabName: "Manutención",
                    tabIcon: Check,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Consta en darle al alumno o alumna 4 mensualidades de $2,500 pesos ($10,000 pesos en total)
                         para que el alumno o alumna
                         los utilice para el pago de su renta, servicios o alimentos.
                      </p>
                    )
                  },
                  {
                    tabName: "Residencia",
                    tabIcon: HouseTwoTone,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Consiste en pagar la totalidad de 
                        alguna de las residencias del Tec por un semestre.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "FETEC",
      
                    tabContent: (
                      <p className={classes.textCenter}>
                       Apoyo económico abierto a cualquier alumno(a) proactivo(a) de 
                       Campus Monterrey que consiste en el pago de 8 unidades Tec20 ó 3 
                       unidades Tec21 para el próximo semestre. 
                      </p>
                    )
                  },
                  {
                    tabName: "Vivienda",
                    tabIcon: Home,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Es un apoyo de un espacio en 
                        la Casa de Becados del Grupo Estudiantil.
                      </p>
                    )
                  },
                  {
                    tabName: "Mérito Estudiantil",
                    tabIcon: VerifiedUser,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Es un apoyo que se otorga para fines específicos de acuerdo a las necesidades e intereses
                         del Grupo Estudiantil, como por ejemplo el boleto de avión para alguna competencia 
                         o la beca de alguna licencia de software.
                      </p>
                    )
                  },
                  {
                    tabName: "Meal Plan",
                    tabIcon: EmojiFoodBeverage,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Consiste en un apoyo económico de $5,000 o $10,000 pesos para que el alumno o 
                        alumna pueda comer en las cafeterías dentro del Tec de Monterrey, Campus Monterrey. 
                        Las Cafeterías Tec donde es aceptada la tarjeta de
                         Meal Plan son: El Jubileo, CupTime, El Semillero, Chilaquiles Tec y Señor Latino.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    
  );
}
