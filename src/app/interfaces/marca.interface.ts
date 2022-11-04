export interface Marca{
    id: number;
    nombre: string;
}

export interface Electrodomestic {
    id:                  number;
    nombre:              string;
    descripcion:         string;
    precio:              string;
    numeroReferencia:    string;
    idMarca:             number;
    idCategoria:         number;
    unidadesDisponibles: number;
    tiempoGarantia:      number;
    alto:                number;
    largo:               number;
    ancho:               number;
}
