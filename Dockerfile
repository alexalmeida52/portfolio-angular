# Use a imagem base do Node.js para compilar a aplicação Angular
FROM node:16 AS build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir) para instalar as dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Compile a aplicação Angular
RUN npm run build --prod

# Use uma imagem base do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos compilados para o diretório padrão do Nginx
COPY --from=build /app/dist/views/ /usr/share/nginx/html

# Exponha a porta 80 para acessar o servidor
EXPOSE 80

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]