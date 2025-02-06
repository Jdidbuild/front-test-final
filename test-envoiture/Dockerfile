# Utilisation d'une image Node.js pour la construction
FROM node:18 AS build

# Définition du répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers Angular
COPY . .

# Construire l'application Angular
RUN npm run build -- --project=test-envoiture --configuration=production

# Étape 2 : Utiliser Nginx pour servir l'Angular
FROM nginx:latest

# Copier les fichiers compilés d'Angular dans le dossier Nginx
COPY --from=build /app/dist/test-envoiture /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]