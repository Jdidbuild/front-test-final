# Utilisation d'une image Node.js officielle
FROM node:18

# Définition du répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json avant d'installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du dossier backend
COPY . .

# Exposer le port du serveur Node.js
EXPOSE 3000

# Démarrer l'application
CMD ["node", "server.js"]