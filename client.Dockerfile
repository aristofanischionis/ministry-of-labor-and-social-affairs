FROM node:12-alpine

RUN mkdir -p /home/project/client
WORKDIR /home/project/client

RUN npm install -g serve
ENV NODE_ENV production
COPY ./packages/client .
RUN yarn install
RUN yarn build
USER 1001
# port for deployed react
EXPOSE 5000

CMD ["serve", "-s", "build" ]