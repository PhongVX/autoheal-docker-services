FROM node:16.20.2-alpine
WORKDIR /app
RUN apk add --update curl
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY dist ./dist
EXPOSE 5000
CMD ["yarn","start"]
