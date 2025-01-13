# Utiliser l’image de base node:lts-alpine
FROM node:lts-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du serveur
COPY . .

# Exposer le port 9000
EXPOSE 9000

# Définir la variable d'environnement pour la connexion MongoDB (optionnel, défini dans docker-compose)
ENV MONGO_URI=mongodb://db:27017/mern_database

# Démarrer l’application
CMD ["npm", "start"]
