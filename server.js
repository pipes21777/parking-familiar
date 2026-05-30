const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;

const state = {
    parking1: { occupied: false },
    parking2: { occupied: false }
};

const server = new WebSocket.Server({ port: PORT }, () => {
    console.log('Servidor WebSocket en marxa al port ' + PORT);
});

server.on('connection', (ws) => {
    console.log('Nou client connectat');

    // Enviar l'estat actual al nou client
    ws.send(JSON.stringify({ type: 'state', data: state }));

    ws.on('message', (message) => {
        try {
            const msg = JSON.parse(message);

            if (msg.type === 'toggle') {
                const parking = msg.parking;
                if (state[parking]) {
                    state[parking].occupied = msg.occupied;

                    // Broadcast a TOTS els clients (inclòs el que va enviar)
                    const broadcast = JSON.stringify({
                        type: 'update',
                        parking: parking,
                        occupied: msg.occupied
                    });

                    server.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(broadcast);
                        }
                    });
                }
            }
        } catch (e) {
            console.error('Error procesant missatge:', e);
        }
    });

    ws.on('close', () => {
        console.log('Client desconnectat');
    });
});

server.on('error', (err) => {
    console.error('Error del servidor:', err);
});
