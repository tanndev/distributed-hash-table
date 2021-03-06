import NetworkConfig from './classes/NetworkConfig';
import Node from "./classes/Node";

console.log('Starting new network...')
const networkConfig = new NetworkConfig();
Node.startNetwork(networkConfig)
    .then(async bootstrapNode => {
        console.log('Boostrapper launched. Replicating nodes...')
        const host = 'localhost';
        const port = await bootstrapNode.ready;

        // Launch another node.)
        const node2 = await Node.joinNetwork(host, port);

    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    })