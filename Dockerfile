FROM node:11

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /azyk-client-app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]