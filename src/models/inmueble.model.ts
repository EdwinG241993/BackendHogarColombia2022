import {Entity, model, property} from '@loopback/repository';

@model()
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdInm?: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreInm: string;

  @property({
    type: 'string',
    required: true,
  })
  DescripcionInm: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoInm: string;

  @property({
    type: 'string',
    required: true,
  })
  DepartamentoInm: string;

  @property({
    type: 'string',
    required: true,
  })
  CiudadInm: string;

  @property({
    type: 'string',
    required: true,
  })
  DireccionInm: string;

  @property({
    type: 'any',
    required: true,
  })
  ImagenInm: any;

  @property({
    type: 'string',
    required: true,
  })
  EstadoInm: string;

  @property({
    type: 'any',
  })
  ContratoInm?: any;


  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
