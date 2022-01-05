import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdSol?: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoSol: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoSol: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoInmuebleSol: string;

  @property({
    type: 'string',
    required: true,
  })
  ComentariosSol: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaSol: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
