all: build clean test start
build:
	docker-compose build
start: 
	docker-compose down --volumes --rmi local
	docker-compose up -d mongo
	docker-compose run --service-ports addon start
test: mongo
	docker-compose run addon test --detectOpenHandles
test-ci: mongo
	docker-compose run addon test -- --watchAll=false --forceExit
mongo:
	docker-compose up -d mongo
clean:
	docker-compose down --volumes --rmi local
docs:
	npm run build:docs