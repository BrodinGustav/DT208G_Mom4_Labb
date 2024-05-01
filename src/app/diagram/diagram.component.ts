import { Component } from '@angular/core';
import { Kurser } from '../models/kurser';
import { RamschemaService } from '../services/ramschema.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [CommonModule, FormsModule], //CommonModule för användning av NgFor i diagram-component.html. FormsModule för ngModule. SortableTableComponent för sortering av tabell.
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent {
  //Properties
  kurser: Kurser[] = [];                  //Array med kurser, importerar interface från models/kurser
  filtreradeKurser: Kurser[] = [];        //Ny array som lagrar kurser som filtreras utan att orginal arrayen (Kurser) raderas
  searchValue: string = "";               //searchValue kommer från ngModel i diagram.component.html
  sortColumn: string = "";                //initierar egenskap för metod sortTable  
  isAscending: boolean = true;            //initierar egenskap för metod sortTable

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
    kurser.coursename.toLowerCase().includes(this.searchValue.toLocaleLowerCase())
      );
  }

  // Metod för att sortera tabellen
  sortTable(column: string): void {
    if (this.sortColumn === column) {         //Kontroll för att se om sortColumn är samma som användaren klickade på
      this.isAscending = !this.isAscending;   //Om samma kolumn byts riktning på sortering
    } else {
      this.sortColumn = column;               
      this.isAscending = true;
    }

    this.filtreradeKurser.sort((a, b) => {            //a, b representerar 2 element som jämförs för att bestämma stigande/fallande ordning
      const valueA = a[column].toLowerCase();         //Hämtar värde för kolumen "a" och konverterar till små bokstäver 
      const valueB = b[column].toLowerCase();
      return this.isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);  //Jämför värde A och B för att se om ordningen ska sorteras stigande eller fallande.
    });
  }

}
