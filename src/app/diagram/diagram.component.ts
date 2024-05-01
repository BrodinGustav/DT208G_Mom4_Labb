import { Component } from '@angular/core';
import { Kurser } from '../models/kurser';
import { RamschemaService } from '../services/ramschema.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [CommonModule],                    //Import av CommonModule för användning av NgFor i diagram-component.html
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent {
  //Properties
  kurser: Kurser[] = [];    //Array med kurser, importerar interface från models/kurser

  constructor(private Ramschemaservice: RamschemaService ) {}  //Instans av Ramschemaservice injiceras i constructor

  ngOnInit() {
    this.Ramschemaservice.getSchema().subscribe((kurser) => { //Metod från ramschema.service.ts  (anropar urlen och returnerar en array med data för ramschemat)
      this.kurser = kurser;                                   //lagrar kurser för anvädning till template
    });
  }

}
