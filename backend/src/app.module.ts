import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketConnectionGateway } from './common/socket-connection/socket-connection.gateway';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, SocketConnectionGateway],
})
export class AppModule { }
