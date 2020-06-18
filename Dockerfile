FROM node:12-alpine3.11

WORKDIR /workspace

COPY . .

RUN npm install

CMD ["node", "index.js"]