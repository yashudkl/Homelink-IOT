import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
@WebSocketGateway()
export class LightGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private server: Server
    handleConnection(client: Socket, ...args: any[]) {
        
    }

    handleDisconnect(client: Socket) {
        
    }


    @SubscribeMessage('message')
    handleMessage(client: any, payload: any): string {
        return 'Hello world!';
    }

    @SubscribeMessage("light-on")
    handleLightOn(client: Socket, payload: any){
        this.server.to("light-device").emit("light-on", {isOn: true});
    }
    
    
    @SubscribeMessage("light-off")
    handleLightOff(client: Socket, payload: any){
        this.server.to("light-device").emit("light-off", {isOn: false});
    }
    
}
