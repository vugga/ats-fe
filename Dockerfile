FROM mhart/alpine-node:10 AS builder

WORKDIR /srv

COPY ./ ./
# RUN apk add --no-cache make gcc g++ python
RUN yarn
RUN yarn build

# use lighter image
FROM mhart/alpine-node:base-10
COPY --from=builder /srv .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "build/server.js"]

