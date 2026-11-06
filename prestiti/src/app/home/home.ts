import { Component } from '@angular/core';
import { IDispositivo } from '../interfaces/i-dispositivo';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private classe: string = '4B Informatica';
  private numeroOre: number = 66;

  private mioDispositivo: IDispositivo = {
    id: 1,
    modello: 'PC',
    anno: 2026,
    inventario: 'num209',
    marca: 'HP',
    stato: 'manutenzione',
    tipo: 'notebook',
  };
}
