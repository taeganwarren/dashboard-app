FROM node:20.12.2

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install pm2 -g

EXPOSE 5000

CMD ["pm2", "start", "bin/server.js", "--no-daemon"]