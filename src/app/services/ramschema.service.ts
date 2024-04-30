import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kurser } from '../models/kurser';

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
//properties
url: string ="https://webbutveckling.miun.se/files/ramschema_ht23.json";

  constructor(private http: HttpClient) { }

//Methods
getSchema(): Observable<Kurser[]> {
  return this.http.get<Kurser[]>(this.url);

}
}
