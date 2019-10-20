# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

### How to build
### $ docker build . -t react-docker
### $ docker run -p 8000:80 react-docker
### To check running containers run $ docker ps
### To dive into your docker container run $ docker exec <container_id> sh