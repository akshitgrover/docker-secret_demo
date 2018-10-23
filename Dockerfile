#Base image [alpine-os]
FROM node:alpine

#Creating a working directory
WORKDIR /app

#Copying application files
COPY index.js /app

#Exposing listener port
EXPOSE 3000

#Defining entrypoint
ENTRYPOINT ["node"]

#Specifying default entrypoint argument
CMD ["index.js"]