# Usar a imagem node:16.14-alpine como base
FROM node:16-alpine

# Mudar para o diretório de trabalho /app-frontend
WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run" ]
CMD ["start"]