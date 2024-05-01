import { Component } from '@angular/core';
import { Kurser } from '../models/kurser';
import { RamschemaService } from '../services/ramschema.service';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent {
  //Properties
  kurser: Kurser[] = [];    //Array med kurser, importerar interface från models/kurser

  constructor(private Ramschemaservice: RamschemaService ) {}  //Instans av Ramschemaservice injiceras i constructor

  ngOnInit() {
    this.Ramschemaservice.getSchema().subscribe //Metod från ramschema.service.ts  (anropar urlen och returnerar en array med data för ramschemat)
  }

}
