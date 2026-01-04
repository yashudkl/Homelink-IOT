import { Test, TestingModule } from '@nestjs/testing';
import { SocketConnectionGateway } from './socket-connection.gateway';

describe('SocketConnectionGateway', () => {
  let gateway: SocketConnectionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketConnectionGateway],
    }).compile();

    gateway = module.get<SocketConnectionGateway>(SocketConnectionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
