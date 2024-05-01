import { Component } from '@angular/core';
import { Kurser } from '../models/kurser';
import { RamschemaService } from '../services/ramschema.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [CommonModule, FormsModule],                    //Import av CommonModule för användning av NgFor i diagram-component.html. Import av FormsModule för ngModule
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent {
  //Properties
  kurser: Kurser[] = [];                  //Array med kurser, importerar interface från models/kurser
  filtreradeKurser: Kurser[] = [];        //Ny array som lagrar kurser som filtreras utan att orginal arrayen (Kurser) raderas
  searchValue: string = "";               //searchValue kommer från ngModel i diagram.component.html

  constructor(private Ramschemaservice: RamschemaService ) {}  //Instans av Ramschemaservice injiceras i constructor

  ngOnInit() {
    this.Ramschemaservice.getSchema().subscribe((kurser) => { //Metod från ramschema.service.ts  (anropar urlen och returnerar en array med data för ramschemat)
      this.kurser = kurser;                                   //lagrar kurser för anvädning till template
      this.filtreradeKurser = kurser;                         //Samma värden i kurser som filtreradeKurser när appilikation startar.
    });
  }

  applyFilter(): void {                                       //Metod som filtrerar datan och lagrar i variablen filtreradeKurser
    this.filtreradeKurser = this.kurser.filter((kurser) => 
      kurser.code.toLowerCase().includes(this.searchValue.toLocaleLowerCase()) ||
    kurser.coursename.toLowerCase().includes(this.searchValue.toLocaleLowerCase()) ||
    kurser.progression.toLowerCase().includes(this.searchValue.toLocaleLowerCase()) 
  );
  }

}
