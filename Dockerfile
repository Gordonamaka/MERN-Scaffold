FROM node:latest

# Copies all files from current directory
COPY . .

# Installs all dependencies
RUN npm install

# Command to run application
CMD node server/index.js