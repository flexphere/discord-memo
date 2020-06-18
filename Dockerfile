FROM node:12-alpine3.11

WORKDIR /workspace

COPY package.json .

RUN npm install

CMD ["npm", "run", "start"]