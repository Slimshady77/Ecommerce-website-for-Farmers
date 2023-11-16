
#Stage 1 
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
#Stage 2
FROM nginx
EXPOSE 80
EXPOSE 3001
COPY --from=build /app/build /usr/share/nginx/html/
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD [ "nginx", "-g", "daemon off;" ]
