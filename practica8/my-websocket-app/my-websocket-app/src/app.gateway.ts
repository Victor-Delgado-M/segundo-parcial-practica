import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable, Logger } from '@nestjs/common';
import { ConceptoInversionService } from './transactions/concepto-inversion.service';
import { InversionistaService } from './transactions/inversionista.service';
import { InversionService } from './transactions/inversion.service';
import { ConceptoInversion } from './entities/concepto-inversion.entity';
import { Inversionista } from './entities/inversionista.entity';
import { Inversion } from './entities/inversion.entity';

@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');

  constructor(
    private readonly conceptoInversionService: ConceptoInversionService,
    private readonly inversionistaService: InversionistaService,
    private readonly inversionService: InversionService,
  ) {}

  async handleConnection(socket: Socket) {
    this.logger.log(`Client connected: ${socket.id}`);
  }

  async handleDisconnect(socket: Socket) {
    this.logger.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('agregar-concepto-inversion')
  async handleAgregarConceptoInversion(client: Socket, payload: ConceptoInversion) {
    try {
      const savedConcepto = await this.conceptoInversionService.create(payload);
      this.server.emit('concepto-inversion-agregado', savedConcepto);
    } catch (error) {
      this.logger.error(`Error al agregar concepto de inversión: ${error.message}`);
      throw error;
    }
  }

  @SubscribeMessage('agregar-inversionista')
  async handleAgregarInversionista(client: Socket, payload: Inversionista) {
    try {
      const savedInversionista = await this.inversionistaService.create(payload);
      this.server.emit('inversionista-agregado', savedInversionista);
    } catch (error) {
      this.logger.error(`Error al agregar inversionista: ${error.message}`);
      throw error;
    }
  }

  @SubscribeMessage('agregar-inversion')
  async handleAgregarInversion(client: Socket, payload: Inversion) {
    try {
      const savedInversion = await this.inversionService.create(payload);
      this.server.emit('inversion-agregada', savedInversion);
    } catch (error) {
      this.logger.error(`Error al agregar inversión: ${error.message}`);
      throw error;
    }
  }

  @SubscribeMessage('consultar-conceptos-inversion')
  async handleConsultarConceptosInversion(client: Socket) {
    try {
      const conceptos = await this.conceptoInversionService.findAll();
      client.emit('conceptos-inversion', conceptos);
    } catch (error) {
      this.logger.error(`Error al consultar conceptos de inversión: ${error.message}`);
      throw error;
    }
  }

  @SubscribeMessage('consultar-inversionistas')
  async handleConsultarInversionistas(client: Socket) {
    try {
      const inversionistas = await this.inversionistaService.findAll();
      client.emit('inversionistas', inversionistas);
    } catch (error) {
      this.logger.error(`Error al consultar inversionistas: ${error.message}`);
      throw error;
    }
  }

  @SubscribeMessage('consultar-inversiones')
  async handleConsultarInversiones(client: Socket) {
    try {
      const inversiones = await this.inversionService.findAll();
      client.emit('inversiones', inversiones);
    } catch (error) {
      this.logger.error(`Error al consultar inversiones: ${error.message}`);
      throw error;
    }
  }
}
