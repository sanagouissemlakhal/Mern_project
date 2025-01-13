require('dotenv').config(); // Charger les variables d'environnement depuis .env
const express = require('express');
const projectApi = require('./routes/projects');
const taskApi = require('./routes/tasks');
const userApi = require('./routes/users');
const cors = require('cors');

const app = express();

// Middleware pour parser les requêtes au format JSON
app.use(express.json());

// Middleware CORS pour permettre les requêtes depuis tous les domaines
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Importer et utiliser la connexion à la base de données
require('./config/connect'); // Cela exécute connect.js pour établir la connexion

// Définir les routes
app.use('/project', projectApi);
app.use('/task', taskApi);
app.use('/user', userApi);

// Définir le port sur lequel le serveur doit écouter
const port = process.env.PORT || 3001; // Utiliser le port défini dans les variables d'environnement ou 3000 par défaut

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
