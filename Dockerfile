# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the app with Apache (to mimic the actual deployment we have on cpanel)
FROM httpd:2.4-alpine

COPY --from=builder /app/out /usr/local/apache2/htdocs/

RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["httpd-foreground"]
