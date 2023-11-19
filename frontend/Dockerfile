# Stage 1: Build the Node.js application
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Use Nginx to serve the built application
FROM nginx
EXPOSE 80

# Copy the built files from the build stage to the Nginx image
COPY --from=build /app/build /usr/share/nginx/html/

# Copy the corrected Nginx configuration file
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

# The CMD instruction sets the default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
