import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Alquiler extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdAlq?: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoAlq: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaInicioAlq: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaFinAlq: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorMensualAlq: number;

  @property({
    type: 'number',
    required: true,
  })
  ValorTotalAlq: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
