import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'

export interface IPeople {
  name: string;
  gender: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  people!: IPeople[]

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
    this.apiService.getPeople().subscribe((res) => (this.people = res.results));
  }
}
