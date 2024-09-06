import express from "express";
import bodyParser from "body-parser";
import { ClientManager } from "./gestionClient";
import { CommandeManager } from "./gestionCommande";
import { ProduitManager } from "./gestionProduit";
import { CommandeDetailManager } from "./gestionCommandeDetail";

const app = express();
const port = 3000;

app.use(bodyParser.json());

const clientManager = new ClientManager();
const commandeManager = new CommandeManager();
const produitManager = new ProduitManager();
const commandeDetailManager = new CommandeDetailManager();

app.get("/", (req, res) => {
    res.send("Bienvenue dans le système de gestion des commandes !");
});

// Routes pour Clients
app.post("/clients", (req, res) => {
    clientManager.addClient(req.body);
    res.send("Client ajouté avec succès.");
});

app.get("/clients", (req, res) => {
    const clients = clientManager.getClients();
    res.json(clients);
});

app.put("/clients/:id", (req, res) => {
    const { id } = req.params;
    clientManager.editClient(id, req.body);
    res.send(`Client ${id} modifié avec succès.`);
});

app.delete("/clients/:id", (req, res) => {
    const { id } = req.params;
    clientManager.destroyClient(id);
    res.send(`Client ${id} supprimé avec succès.`);
});

// Routes pour Commandes
app.post("/commandes", (req, res) => {
    commandeManager.addCommande(req.body);
    res.send("Commande ajoutée avec succès.");
});

app.get("/commandes", (req, res) => {
    const commandes = commandeManager.getCommandes();
    res.json(commandes);
});

app.put("/commandes/:id", (req, res) => {
    const { id } = req.params;
    commandeManager.editCommande(id, req.body);
    res.send(`Commande ${id} modifiée avec succès.`);
});

app.delete("/commandes/:id", (req, res) => {
    const { id } = req.params;
    commandeManager.destroyCommande(id);
    res.send(`Commande ${id} supprimée avec succès.`);
});

// Routes pour Produits
app.post("/produits", (req, res) => {
    produitManager.addProduit(req.body);
    res.send("Produit ajouté avec succès.");
});

app.get("/produits", (req, res) => {
    const produits = produitManager.getProduits();
    res.json(produits);
});

app.put("/produits/:id", (req, res) => {
    const { id } = req.params;
    produitManager.editProduit(id, req.body);
    res.send(`Produit ${id} modifié avec succès.`);
});

app.delete("/produits/:id", (req, res) => {
    const { id } = req.params;
    produitManager.destroyProduit(id);
    res.send(`Produit ${id} supprimé avec succès.`);
});

// Routes pour CommandeDetail
app.post("/commande-details", (req, res) => {
    commandeDetailManager.addCommandeDetail(req.body);
    res.send("Détail de commande ajouté avec succès.");
});

app.get("/commande-details", (req, res) => {
    const commandeDetails = commandeDetailManager.getCommandeDetails();
    res.json(commandeDetails);
});

app.put("/commande-details/:id", (req, res) => {
    const { id } = req.params;
    commandeDetailManager.editCommandeDetail(id, req.body);
    res.send(`Détail de commande ${id} modifié avec succès.`);
});

app.delete("/commande-details/:id", (req, res) => {
    const { id } = req.params;
    commandeDetailManager.destroyCommandeDetail(id);
    res.send(`Détail de commande ${id} supprimé avec succès.`);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
