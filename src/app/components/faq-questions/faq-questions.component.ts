import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-faq-questions',
  templateUrl: './faq-questions.component.html',
  styleUrls: ['./faq-questions.component.css']
})
export class FaqQuestionsComponent {
constructor(private cargaScrip: CargarScriptsService, private activedRoute: ActivatedRoute){
  cargaScrip.cargarScripts(['progress']);
}
tema: any;
preguntas: any;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  const params= this.activedRoute.snapshot.params;
  this.tema = params['tema'];
      
  // Puedes realizar acciones adicionales con el parámetro, si es necesario
  console.log('Tema:', this.tema);
  
  switch (this.tema) {
    case 'becas':
      // Realiza acciones para preguntas frecuentes
      this.preguntas = [
        {
          "pregunta": "¿Cuáles son los tipos de becas que ofrece la universidad?",
          "respuesta": "La universidad ofrece becas por rendimiento, alimenticias, deportivas, y por necesidad económica."
        },
        {
          "pregunta": "¿Cómo solicito la Beca por Rendimiento Académico?",
          "respuesta": "Debes ser alumno regular, tener un promedio alto, y completar la solicitud correspondiente."
        },
        {
          "pregunta": "¿Documentos necesarios para la Beca Alimenticia?",
          "respuesta": "Necesitas ser alumno regular, presentar solicitud con visto bueno del director, constancia de ingresos, y oficio de recomendación."
        },
        {
          "pregunta": "¿Beneficios de la Beca Deportiva?",
          "respuesta": "Incluye exención del 100% o 50% en la inscripción cuatrimestral y requisitos como promedio alto y participación en actividades deportivas."
        },
        {
          "pregunta": "¿Diferencia entre Beca por Necesidad y otras becas federales?",
          "respuesta": "La Beca por Necesidad ofrece apoyo mensual a estudiantes con extrema necesidad económica, mientras que las becas federales (Benito Juárez y JuventudEsGTO) tienen requisitos y objetivos específicos respaldados por el gobierno federal o estatal."
        }
      ];
      break;
    case 'carreras':
      // Realiza acciones para carreras
      this.preguntas = [
        {
          "pregunta": "¿Cuáles son las áreas disponibles para estudio?",
          "respuesta": "Nuestras áreas de estudio incluyen Tecnologías, Económico Administrativo, e Industrial, Eléctrica y Electrónica."
        },
        {
          "pregunta": "¿Cuáles son los niveles educativos ofrecidos?",
          "respuesta": "Ofrecemos programas en Técnico Superior Universitario, Ingeniería, y Licenciatura."
        },
        {
          "pregunta": "¿Cuáles son las ocupaciones profesionales para los graduados de TSU Desarrollo de Software Multiplataforma?",
          "respuesta": "Los graduados podrán desempeñarse como desarrolladores de aplicaciones móviles, analistas de sistemas, programadores de sistemas, entre otros."
        },
        {
          "pregunta": "¿Cuáles son las competencias adquiridas en el programa de TSU Redes Digitales?",
          "respuesta": "Los estudiantes adquirirán habilidades para administrar seguridad en infraestructura, diseñar redes, responder a incidentes, y más."
        },
        {
          "pregunta": "¿Puedo continuar mis estudios después de completar el TSU en Desarrollo de Software Multiplataforma?",
          "respuesta": "Sí, puedes continuar tus estudios con la Ingeniería en Desarrollo y Gestión de Software."
        }
      ];
      
      break;
      case 'historias-de-exito':
      this.preguntas = [
        {
          "pregunta": "¿Cuáles son las empresas aliadas del instituto?",
          "respuesta": "El instituto tiene convenios estratégicos con las empresas MTI Consultoría SA de CV y NAD Global, S.A. de C.V., con el objetivo de fortalecer ambas instituciones. Para obtener más detalles, puedes ver más en el enlace proporcionado."
        },
        {
          "pregunta": "¿Cómo se seleccionan los estudiantes para intercambio internacional?",
          "respuesta": "Tres estudiantes fueron seleccionados para participar en la misión de intercambio internacional a China a través de la convocatoria del Instituto Estatal de la Juventud Guanajuatense (INJUG). Para conocer más sobre este logro, puedes ver más en el enlace proporcionado."
        },
        {
          "pregunta": "¿Qué proyectos emprendedores han realizado los estudiantes?",
          "respuesta": "Dos estudiantes, Mario Alberto Muñoz Guerrero y Gustavo Alejandro Mata Herrera, desarrollaron una extrusora de filamento para impresora 3D que trabaja con residuos plásticos. Para obtener información detallada sobre este proyecto, puedes ver más en el enlace proporcionado."
        },
        {
          "pregunta": "¿Cómo puedo conocer más sobre las alianzas del instituto?",
          "respuesta": "Si deseas obtener información adicional sobre las alianzas del instituto, te invitamos a ver más sobre las poderosas alianzas con MTI Consultoría SA de CV y NAD Global, S.A. de C.V."
        },
        {
          "pregunta": "¿Dónde puedo encontrar respuestas a otras preguntas frecuentes?",
          "respuesta": "Si no encuentras la información que buscas, te recomendamos consultar nuestras preguntas frecuentes. Aquí podrás encontrar respuestas a diversas consultas comunes."
        }
      ];
      break;
      case 'filosofia':
        this.preguntas = [
          {
            "pregunta": "¿Cómo puedo acceder a la información sobre los valores de la institución?",
            "respuesta": "Puedes encontrar información detallada sobre nuestros valores en la sección de \"Valores\" ubicada en la página principal. También puedes navegar por la barra de navegación utilizando el enlace correspondiente."
          },
          {
            "pregunta": "¿Qué significa la marquesina con valores que se desplaza en la página?",
            "respuesta": "La marquesina muestra de manera dinámica los valores fundamentales de nuestra institución. Cada valor se presenta de manera secuencial para resaltar su importancia. Puedes encontrar una descripción más detallada de cada valor en la sección dedicada en la página."
          },
          {
            "pregunta": "¿Quiénes somos y cuál es nuestra misión?",
            "respuesta": "Somos una institución de Educación Superior Tecnológica comprometida en la formación integral de profesionistas. Nuestra misión es liderar la formación de profesionales en los niveles de Técnico Superior Universitario y Licenciatura, contribuyendo al desarrollo económico y social del estado y la región."
          },
          {
            "pregunta": "¿Qué significa la \"Calidad Educativa\" en nuestra institución?",
            "respuesta": "La \"Calidad Educativa\" representa el reconocimiento público otorgado por un Organismo Acreditador. Esto confirma que cumplimos con criterios y parámetros de calidad, asegurando que nuestros programas educativos son pertinentes y responden a las necesidades del entorno."
          },
          {
            "pregunta": "¿Qué tipo de actividades paraescolares ofrece la universidad?",
            "respuesta": "La universidad ofrece una variedad de actividades paraescolares que permiten el desarrollo físico y cultural de los alumnos fuera del horario escolar normal. Estas actividades complementan la formación académica y brindan oportunidades adicionales para el crecimiento integral de los estudiantes."
          }
        ];
        break;
    default:
      
      break;
  }
  
  // // Puedes acceder a las preguntas y respuestas así:
  // console.log(preguntas[0].pregunta); // Muestra la primera pregunta
  // console.log(preguntas[0].respuesta); // Muestra la respuesta correspondiente
  
}
}
