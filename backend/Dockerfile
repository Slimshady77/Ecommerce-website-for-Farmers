FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3900
COPY package*.json ./
COPY --from=builder /app/build /usr/share/nginx/html
CMD [ "app.js" ]