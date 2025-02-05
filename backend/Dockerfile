# Usa la imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos y paquetes
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto del backend
EXPOSE 3001

# Comando de inicio del backend
CMD ["npm", "start"]
