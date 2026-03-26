# syntax=docker/dockerfile:1
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
# pnpm patchedDependencies require patch files before install
COPY patches ./patches
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm exec vite build

FROM nginx:alpine

RUN apk add --no-cache curl

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/public /usr/share/nginx/html

EXPOSE 80
