import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Compra extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdCom?: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoCom: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorCom: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaCompraCom: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
