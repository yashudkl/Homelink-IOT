import { OnGatewayConnection, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class SocketConnectionGateway implements OnGatewayConnection {
    handleConnection(client: Socket, ...args: any[]) {

    }
    @SubscribeMessage("join-device")
    handleDeviceConnection(client: Socket, payload: "light-device" | "fan-device" | "gate-device") {
        console.log(payload)
        client.join("device")
        client.join(payload)
    }
}
