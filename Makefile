
DOCKER_IMAGE_NAME = sammlerio/web-core
DOCKER_IMAGE_SIZE = $(shell docker images --format "{{.Repository}} {{.Size}}" | grep $(DOCKER_IMAGE_NAME) | cut -d\   -f2)

help:								## Show this help.
	@echo ''
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''
.PHONY: help

gen-readme:					## Generate README.md (using docker-verb)
	docker run --rm -v ${PWD}:/opt/verb stefanwalther/verb
.PHONY: gen-readme

build:						## Build the docker image
	@echo 'Building the docker image ...'
	@echo ''
	docker build --force-rm --rm --squash -t $(DOCKER_IMAGE_NAME) .
	@echo ''
	@echo 'Size of the image: ${DOCKER_IMAGE_SIZE}'
.PHONY: build

run: 							## Run the docker image
	docker run -p 4000:4000 -it $(DOCKER_IMAGE_NAME)
.PHONY: run

up:	 build				## Bring up the entire environment
	docker-compose up
.PHONY: up

up-deps:					## Bring up only dependencies
	docker-compose --f=docker-compose.deps.yml up
.PHONY: up-deps

down-deps:				## Bring down the dependencies
	docker-compose --f=docker-compose.deps.yml down
.PHONY: down-deps

down:							## Bring down the entire environment
	docker-compose down
.PHONY: down

rs: down up				## Restart the entire environment
.PHONY: rs
