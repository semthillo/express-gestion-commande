export class CommandeDetailManager {
    constructor() {
        this.commandeDetails = [];
    }

    addCommandeDetail(commandeDetail) {
        this.commandeDetails.push(commandeDetail);
        console.log(`Détail de commande ajouté: ID Commande ${commandeDetail.commandeId}`);
    }

    getCommandeDetails() {
        return this.commandeDetails;
    }

    editCommandeDetail(id, updatedCommandeDetail) {
        const commandeDetail = this.commandeDetails.find(cd => cd.id === id);
        if (commandeDetail) {
            Object.assign(commandeDetail, updatedCommandeDetail);
            console.log(`Détail de commande ${id} modifié.`);
        }
    }

    destroyCommandeDetail(id) {
        this.commandeDetails = this.commandeDetails.filter(cd => cd.id !== id);
        console.log(`Détail de commande ${id} supprimé.`);
    }
}
