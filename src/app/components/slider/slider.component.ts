import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {

  constructor(private http: HttpClient) {}
}
