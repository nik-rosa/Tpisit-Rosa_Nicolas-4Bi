export class Dispositivo {
    id: number;
    inventario: string;
    tipo: 'notebook' | 'tablet' | 'proiettore';
    marca: string;
    modello: string;
    anno: number;
    stato: 'disponibile' | 'in prestito' | 'manutenzione';

    constructor(id: number, inventario: string, tipo: 'notebook' | 'tablet' | 'proiettore', marca: string, modello: string, anno: number, stato: 'disponibile' | 'in prestito' | 'manutenzione'){
        this.id = id;
        this.inventario = inventario;
        this.tipo = tipo;
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.stato = stato;    
    }

    public toString(): string{
        return "" + this.id + "-" + this.inventario;
    }
}
 