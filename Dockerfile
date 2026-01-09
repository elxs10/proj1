# Stage 1: The "Kitchen" (Build stage)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: The "Serving Plate" (Production stage)
FROM node:18-alpine
WORKDIR /app
# We only bring over the libraries, not the extra junk
COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
