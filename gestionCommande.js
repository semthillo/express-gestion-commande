export class CommandeManager {
    constructor() {
        this.commandes = [];
    }

    addCommande(commande) {
        this.commandes.push(commande);
        console.log(`Commande ajoutée: ${commande.nom}`);
    }

    getCommandes() {
        return this.commandes;
    }

    editCommande(id, updatedCommande) {
        const commande = this.commandes.find(c => c.id === id);
        if (commande) {
            Object.assign(commande, updatedCommande);
            console.log(`Commande ${id} modifiée.`);
        }
    }

    destroyCommande(id) {
        this.commandes = this.commandes.filter(c => c.id !== id);
        console.log(`Commande ${id} supprimée.`);
    }
}
