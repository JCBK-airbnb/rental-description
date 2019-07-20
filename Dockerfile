FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 80
CMD [ "npm", "run", "start:docker"]
