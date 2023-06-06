FROM node:lts-alpine

# ENV NODE_ENV=production

RUN mkdir "frontend_app"

WORKDIR /frontend_app

COPY ["package.json", "package-lock.json*", "./"] /frontend_app

# COPY . /frontend_app 

# WORKDIR /frontend_app

# RUN npm install --production --silent && mv node_modules ../
RUN npm install 
RUN npm install react-router-dom@6
RUN npm install react-icons
RUN npm install styled-components

# what does this copy do? why should we copy again? (ar del node_modules - to copy them over?)
COPY . .

EXPOSE 3000

# RUN chown -R node /frontend_app
# USER node

CMD ["npm", "start"]
