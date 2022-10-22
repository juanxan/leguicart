import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/menu-admin.interfaces';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuOpts(){
    return this.http.get<Componente[]>('../../assets/data/menu-admin.json');
  }
}
