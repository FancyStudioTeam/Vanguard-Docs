FROM oven/bun:latest AS build

WORKDIR /main

COPY package.json ./
COPY docs ./docs

RUN bun install
RUN bun run vitepress:build

FROM oven/bun:latest

WORKDIR /main

COPY --from=build /main/docs/.vitepress/dist ./docs/.vitepress/dist
COPY --from=build /main/node_modules ./node_modules
COPY --from=build /main/package.json ./

ENV HOST=0.0.0.0
ENV PORT=3102

EXPOSE 3102

CMD ["bun", "run", "vitepress:preview"]
