FROM node:12-alpine

RUN mkdir -p /home/project/server
WORKDIR /home/project/server

ENV NODE_ENV production
COPY . .
RUN yarn install
USER 1001
# port for nodejs servers
EXPOSE 8000

CMD ["node", "-r", "esm", "./src/index.js"]