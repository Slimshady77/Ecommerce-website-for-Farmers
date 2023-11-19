# First stage: Builder
FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Second stage: Final image
FROM nginx
EXPOSE 3900
WORKDIR /usr/share/nginx/html

# Copy the source code to the final image
COPY --from=builder /app /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
