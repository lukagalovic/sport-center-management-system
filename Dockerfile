FROM node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use a smaller Node.js image for the final container
FROM node:18-slim

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/migrations ./migrations
COPY --from=build /usr/src/app/.env ./.env
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/typeOrm.config.ts ./typeOrm.config.ts
COPY --from=build /usr/src/app/typeOrm.config.js ./typeOrm.config.js
COPY start.sh ./

EXPOSE 3000

CMD ["sh", "start.sh"]
