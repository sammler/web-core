# -------------------------------------------------------------------
#                               BASE IMAGE
# -------------------------------------------------------------------
FROM node:8.11.4@sha256:cd8ebd022c01f519eb58a98fcbb05c1d1195ac356ef01851036671ec9e9d5580 as BASE

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
