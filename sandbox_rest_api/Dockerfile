FROM node:10
ENV SECRET atf123
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install --production
CMD ["npm", "start"]