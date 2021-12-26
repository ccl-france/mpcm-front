FROM node:16-alpine

EXPOSE 3000
WORKDIR /opt

COPY package* ./
RUN npm ci

COPY . ./

CMD npm run preview
