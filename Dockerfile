# -------------------------------------------------------------------
#                               BASE IMAGE
# -------------------------------------------------------------------
FROM node:8.9.4 as BASE

ARG PORT=4000
ENV PORT=$PORT

ENV HOME /opt/web-core

ENV NPM_CONFIG_LOGLEVEL warn

ARG APP_ENV=development
ENV APP_ENV=$APP_ENV

RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json package-lock.json ./

RUN npm install
RUN npm rebuild node-sass

## -------------------------------------------------------------------
##                                RELEASE
## -------------------------------------------------------------------

COPY ./ ./

CMD if [ ${APP_ENV} = production ]; \
	then \
	  echo "Production mode ..." && \
		npm rebuild node-sass && \
    npm install -g http-server && \
    npm run build && \
    cd build && \
    hs -p ${PORT}; \
  else \
    echo "Development mode ..." && \
    npm rebuild node-sass && \
    npm run start; \
	fi

EXPOSE $PORT
