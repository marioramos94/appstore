FROM node:10-alpine as build
COPY . .
RUN yarn install
RUN yarn run build

FROM node:10-alpine as release
COPY --from=build /build ./build
RUN yarn global add serve
EXPOSE 5000
CMD [ "serve", "-s", "build" ]