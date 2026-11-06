export class Dispositivo {
    id: number;
    inventario: string;
    tipo: 'notebook' | 'tablet' | 'proiettore';
    marca: string;
    modello: string;
    anno: number;
    stato: 'disponibile' | 'in prestito' | 'manutenzione';
}
