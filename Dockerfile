FROM node

WORKDIR /usr/app
ENV PORT=180
ENV JWT_KEY="Finosys@KCCI2022!"
ENV SecretKey="KCCIFinosys@2022"
ENV NODE_ENV="production"
ENV dbHost="40.81.28.195"
ENV dbPort="1533"
ENV dbUser="sa"
ENV dbPass="kfk9072p!"
ENV dbName_master="FNS_KCCI"
ENV Build="2.0.0"

COPY ./package.json ./

RUN npm install

COPY ./ ./

COPY ./data-types.js ./node_modules/sequelize/lib/data-types.js

RUN mkdir uploads
RUN chmod -R 777 ./uploads

EXPOSE 180

RUN rm -f ../../bin/bash
RUN rm -f ../../bin/cat

CMD ["npm","start"]

