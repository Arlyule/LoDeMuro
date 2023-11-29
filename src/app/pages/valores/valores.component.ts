import { Component } from '@angular/core';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent {
  // Aquí puedes definir los valores que quieres mostrar en el componente
  valores = [
    { nombre: 'Rendición de Cuentas: ', descripcion: 'Ejercemos nuestras funciones en el marco de las leyes, reglamentos y normas que las rigen.' },
    { nombre: 'Transparencia: ', descripcion: 'Brindamos acceso a la toda la información pública que se genera o posea la universidad.' },
    { nombre: 'Honestidad: ', descripcion: 'Ofrecemos lo que podemos cumplir y nos esmeramos en lograrlo.' },
    { nombre: 'Responsabilidad: ', descripcion: 'Ponemos atención especial en nuestras decisiones.' },
    { nombre: 'Respeto: ', descripcion: 'Tratamos a las personas con dignidad y apreciamos sus opiniones.' },
    { nombre: 'Paz: ', descripcion: 'Rechazamos cualquier tipo de violencia. Practicamos la empatía y asertividad. Somos solidarios (as) con los demás. Respetamos las opiniones de los demás.' }
  ];
  mision = ["Educando al Futuro de México  |  Somos una institución de Educación Superior Tecnológica comprometida en la formación integral de profesionistas líderes en los niveles de Técnico Superior Universitario y Licenciatura con programas educativos de excelencia, contribuyendo así, al desarrollo económico y social del estado y la región."]
}
