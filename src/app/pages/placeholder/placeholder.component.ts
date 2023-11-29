import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {
  images = [1, 2, 3, 4, 5].map((n) => `./../../../assets/img/placeholder_img0${n}.jpg`);
  //./../../../assets/img/placeholder_img01.jpg
  constructor() { }
}
