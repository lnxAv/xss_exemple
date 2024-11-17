# Utiliser une version plus récente de Node (la v14 est assez ancienne)
FROM node:18-alpine

# Create répertoire
RUN mkdir -p /app/node_modules

# Définir le répertoire de travail
WORKDIR /app

COPY package*.json .
# Installer les dépendances
# Ajout de --production pour une installation plus légère
RUN npm install --omit=dev

# Copier le reste des fichiers
COPY . .

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["node", "server.js"]