import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionQuestions() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Preguntas Frecuentes</h2>

                <h3 className={classes.h3}> ¿Qué es el Programa de Becas del CRS?</h3>
                <h4>
                Es un programa que tiene el propósito de otorgar becas y apoyos financieros a los y las estudiantes de las diversas carreras del 
                Tecnológico de Monterrey, Campus Monterrey a través de los Grupos Estudiantiles, con el fin de que concluyan sus estudios en el Tec de Monterrey. 
                Asimismo, el programa busca promover un espíritu de filantropía entre los Grupos Estudiantiles para que sean solidarios y empáticos con su comunidad.
                </h4>
                <br/>
                <h3 className={classes.h3}> ¿Quiénes dan las becas del Programa de Becas del CRS? </h3>
                <h4>
                Los Grupos Estudiantiles conformados por alumnos del Tecnológico de Monterrey, Campus Monterrey y 
                los 8 órganos de la FETEC
                </h4>
                <br/>
                <h3 className={classes.h3}>¿Cómo puedo aplicar a las becas?</h3>
                <h4>
                Sigue la página de @crs.mty en Instagram y Facebook, ahí se lanzarán las
                convocatorias a las becas por parte de los Grupos Estudiantiles la semana del 21-27 de Septiembre del 2020. 
                El primer paso es llenar esa convocatoria y más adelante el Grupo Estudiantil se pondrá en contacto contigo 
                para seguir con los requerimientos del proceso. Adicionalmente, 
                puedes revisar todas las  <a href="https://linktr.ee/Crs.Mty!"> convocatorias de becas.</a>
                </h4>
                <br/>
                <h3 className={classes.h3}>¿Cuáles son los requisitos para que un grupo estudiantil pueda dar una beca?</h3>
                <h4>
                    <li> Asistencia obligatoria del Grupo Estudiantil a la Asamblea de Becas.</li>
                    <li> Deben tener el 150% del monto que quieren otorgar para dar beca(s) en la Cuenta de Becas del Grupo Estudiantil.</li>
                    <li> El DRS del Grupo Estudiantil debe asistir al 50% de las asambleas semestrales para entrar al proceso.</li>
                    <li> Los grupos estudiantiles no se pueden juntar para el proceso de becas.</li>
                </h4>
                <br/>
                <h3 className={classes.h3}>¿Quién puede aplicar a las Becas del CRS?</h3>
                <h4>
                Cualquier alumno o alumna que sea representado(a) por el Grupo Estudiantil que otorga la beca a la que se aplica y 
                que cumpla con los requisitos para obtener una beca. Por ejemplo, un alumno o alumna de la carrera de LAE no puede aplicar 
                a una beca de la carrera de IIS, pero un alumno o alumna que estudia IIS sí puede. 
                </h4>
                <br/>
                <h3 className={classes.h3}> ¿Cuáles son los requisitos para obtener una beca?</h3>
                <h4>
                    <li> Ser estudiante inscrito en el Tec de Monterrey en el momento de aplicación y durante el período que se otorgará la beca.</li>
                    <li> Ser representado(a) por el Grupo Estudiantil que ofrece la beca.</li>
                    <li> Promedio mínimo de 85/100 en el último semestre realizado y en el acumulado.</li>
                    <li>Expediente limpio de Deshonestidad Académica o de condicionamiento de la beca por parte del Campus.</li>
                    <li> No contar con otra beca por parte de un Grupo Estudiantil durante el periodo de otorgamiento.</li>
                    <li> Tener entre 50-90% de beca-crédito que otorga el Tecnológico de Monterrey al inicio del período académico en que aplica la beca.</li>
                        <p> ○ En caso de tener una beca de Talento Académico o Talento Estudiantil, se deberá entregar una referencia que certifique la situación económica.</p>
                        <p> ○	En caso de tener una beca de una empresa o fundación, se deberá entregar la carta membretada que explique el tipo de apoyo y el motivo del mismo.</p>
                    <li> No contar con alguna beca de Líderes del Mañana.</li>
                    <li> Con el propósito de mantener la transparencia e imparcialidad, la mesa directiva actual y la del año pasado del Grupo Estudiantil que está otorgando la beca no podrán participar en la
                         aplicación a la convocatoria del propio proceso de becas.</li>
                         <p> ○	Las mesas directivas actuales y la de la gestión anterior podrán pueden participar en las Becas FETEC.</p>
                    <li> Cumplir con un servicio becario del CRS, el cual consiste en acudir como participante o staff a 2 eventos del Grupo Estudiantil y 1 evento de la FETEC.</li>
                    <li> Cumplir con el Reglamento de Becas del CRS y firmar una carta de aceptación de la beca.</li>    
                </h4>

          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}