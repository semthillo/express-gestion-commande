export class ProduitManager {
    constructor() {
        this.produits = [];
    }

    addProduit(produit) {
        this.produits.push(produit);
        console.log(`Produit ajouté: ${produit.nom}`);
    }

    getProduits() {
        return this.produits;
    }

    editProduit(id, updatedProduit) {
        const produit = this.produits.find(p => p.id === id);
        if (produit) {
            Object.assign(produit, updatedProduit);
            console.log(`Produit ${id} modifié.`);
        }
    }

    destroyProduit(id) {
        this.produits = this.produits.filter(p => p.id !== id);
        console.log(`Produit ${id} supprimé.`);
    }
}
