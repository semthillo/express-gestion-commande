export class ClientManager {
    constructor() {
        this.clients = [];
    }

    addClient(client) {
        this.clients.push(client);
        console.log(`Client ajouté: ${client.nom}`);
    }

    getClients() {
        return this.clients;
    }

    editClient(id, updatedClient) {
        const client = this.clients.find(c => c.id === id);
        if (client) {
            Object.assign(client, updatedClient);
            console.log(`Client ${id} modifié.`);
        }
    }

    destroyClient(id) {
        this.clients = this.clients.filter(c => c.id !== id);
        console.log(`Client ${id} supprimé.`);
    }
}
