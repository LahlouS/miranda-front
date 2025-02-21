# first we pull the node image
FROM node:20

# environment variable to dl all the dev tools node need
ENV NODE_ENV=development
ENV PUBLIC_BASE_URL=http://localhost:3000

WORKDIR /app

RUN apt-get update && apt-get install -y vim
RUN npm install -g pnpm

COPY package-lock.json* ./
COPY package.json pnpm-lock.yaml ./
COPY *.config.js ./
COPY tsconfig.json ./
RUN pnpm install

COPY . .


EXPOSE 3000
CMD ["pnpm", "run", "dev", "--port", "3000", "--host", "0.0.0.0"]