# Etapa 1: Build
FROM node:16 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir a aplicação Angular
RUN npm run build --prod

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copiar os arquivos gerados na etapa de build para o Nginx
COPY --from=build /app/dist/pagamento-teste-prova-web /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
