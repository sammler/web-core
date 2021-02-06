# -------------------------------------------------------------------
#                               BASE IMAGE
# -------------------------------------------------------------------
FROM node:8.17.0@sha256:a681bf74805b80d03eb21a6c0ef168a976108a287a74167ab593fc953aac34df as BASE

ARG PORT=4000
ENV PORT=$PORT

ENV HOME /opt/web-core

ENV NPM_CONFIG_LOGLEVEL warn

ARG APP_ENV=development
ENV APP_ENV=$APP_ENV

RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json ./

RUN npm install --silent
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
