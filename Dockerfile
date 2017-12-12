FROM node:carbon

ADD . /opt/bike-app/app

WORKDIR /opt/bike-app/app

RUN npm install
RUN npm run build
#RUN npm i -g forever
#RUN npm i -g forever-service

# Expose port
EXPOSE 3010

# Start the app
ENV NODE_ENV production
#RUN forever-service install bike-app -e "NODE_ENV=production"
#RUN n

#CMD [ "node", "app.js" ]

ENTRYPOINT node app.js
