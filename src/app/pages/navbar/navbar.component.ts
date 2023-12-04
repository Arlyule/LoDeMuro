import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accessibility, IAccessibilityOptions, IAccessibilityMenuLabelsOptions } from 'accessibility';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  palabrasClave = [
    ["becas", "beca", "juventudes", "juventudesgto"],
    ["exito", "historias", "historias de exito"],
    ["carreras", "carrera", "tsu", "ing", "ingenieria", "ingeniería", "desarrollo"],
    ["valores", "valor", "filosofía", "filosofia"]
  ];

  rutas = [
    "/becas",
    "/exito",
    "/carreras",
    "/valores"
  ];

  ngOnInit(): void {
    this.setupSearch();
  }

  constructor(private router: Router, private cargaScrip: CargarScriptsService) {
    cargaScrip.cargarScripts(['chat']);
    window.addEventListener('load', function () {
      var labels: IAccessibilityMenuLabelsOptions = {
        resetTitle: 'restablecer',
        closeTitle: 'cerrar',
        menuTitle: 'menú',
        increaseText: 'aumentar tamaño de texto',
        decreaseText: 'disminuir tamaño de texto',
        increaseTextSpacing: 'aumentar espaciado de texto',
        decreaseTextSpacing: 'disminuir espaciado de texto',
        increaseLineHeight: 'aumentar altura de línea',
        decreaseLineHeight: 'disminuir altura de línea',
        invertColors: 'invertir colores',
        grayHues: 'tonos de gris',
        underlineLinks: 'subrayar enlaces',
        bigCursor: 'cursor grande',
        readingGuide: 'guía de lectura',
        textToSpeech: 'texto a voz',
        speechToText: 'voz a texto',
        disableAnimations: 'deshabilitar animaciones',
        screenReader: 'Activar lector de pantalla',
      };

      var options: IAccessibilityOptions = {
        labels: labels,
        icon: {
          useEmojis: true,
          position:{
            top: {size:2 ,units:"vh"}
          }
        }

      };

      new Accessibility(options);
    }, false);
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  private setupSearch(): void {
    const searchForm = document.getElementById('searchForm') as HTMLFormElement;

    if (searchForm) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = (searchForm.querySelector('input[type="search"]') as HTMLInputElement).value.toLowerCase();
        this.searchPage(searchTerm);
      });
    }
  }

  private searchPage(searchTerm: string): void {
    let index = 0;
    this.palabrasClave.forEach((element) => {
      if (element.includes(searchTerm.toLowerCase())) {
        this.router.navigate(["/" + this.rutas[index]]);
        return;
      }
      index++;
    });

    // Verifica si document.body o document.body.textContent son nulos
    const body = document.body;
    const allTextContent = body ? body.textContent : '';

    if (allTextContent && allTextContent.toLowerCase().includes(searchTerm)) {
      const allElements = body!.querySelectorAll('*');

      let found = false;
      let firstMatch: HTMLElement | null = null;

      // Iterar sobre los elementos y encontrar el primero que contiene la cadena de búsqueda
      allElements.forEach((element) => {
        if (element.textContent && element.textContent.toLowerCase().includes(searchTerm)) {
          found = true;
          firstMatch = element as HTMLElement;
          firstMatch.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          return;
        }
      });

      if (found && firstMatch !== null) {
        // Ahora, TypeScript debería reconocer correctamente firstMatch como no nulo
        console.log('Se encontró una coincidencia en la página.');
      } else {
        console.log('No se encontraron coincidencias en la página.');
        this.router.navigate(["/si"]);
      }
    } else {
      console.log('No se encontraron coincidencias en la página.');
      this.router.navigate(["/si"]);
    }
  }


}
