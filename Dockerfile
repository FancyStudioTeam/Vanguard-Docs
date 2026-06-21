FROM oven/bun:latest AS base

WORKDIR /main

COPY package.json ./
COPY docs ./docs

RUN bun install
RUN bun run vitepress:build

ENV HOST=0.0.0.0
ENV PORT=3102

ENV NODE_ENV=production

EXPOSE 3102

CMD ["bun", "run", "vitepress:preview"]
