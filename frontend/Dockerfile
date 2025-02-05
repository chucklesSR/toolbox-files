# Usa la imagen de Node.js como compilador
FROM node:16 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto y paquetes
COPY package*.json ./
RUN npm install

COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen ligera para servir la aplicación
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
