import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdUsu?: string;

  @property({
    type: 'string',
    required: true,
  })
  IdentificacionUsu: string;

  @property({
    type: 'string',
    required: true,
  })
  NombresUsu: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosUsu: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailUsu: string;

  @property({
    type: 'string',
    required: true,
  })
  PasswordUsu: string;

  @property({
    type: 'number',
    required: true,
  })
  RolUsu: number;

  @property({
    type: 'string',
    required: true,
  })
  TelefonoUsu: string;

  @property({
    type: 'string',
    required: true,
  })
  DireccionUsu: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
