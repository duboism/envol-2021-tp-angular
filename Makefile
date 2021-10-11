UID := 1000
GID := 1000

list:
	@echo ""
	@echo "Useful targets:"
	@echo ""
	@echo "  rebuild          > Rebuild all images and start containers for dev only"
	@echo "  start            > Start containers"
	@echo "  restart          > Restart containers"
	@echo "  stop             > Stop and kill running containers"
	@echo "  status           > Display stack containers status"
	@echo "  logs             > Display containers logs"
	@echo "  install          > Install dependancies"
	@echo "  build            > Generate the Angular client dist application (html, css, js)"
	@echo "  shell            > Shell into client container"
	@echo "  tests            > Starts the unit tests"
	@echo "  tests-wc         > Starts the unit tests and generate code coverage"
	@echo ""

rebuild:
	@docker-compose up --build -d

start:
	@docker-compose up -d

restart: stop start

stop:
	@docker-compose kill
	@docker-compose rm -v --force

status:
	@docker-compose ps

logs:
	@docker-compose logs -f -t

install:
	@docker run --init -it --rm --user $(UID):$(GID) \
	-v $(CURDIR)/client:/project \
	-w /project node:16-slim yarn install

build:
	@docker-compose exec client ng build

shell:
	@docker-compose exec client bash

tests:
	@docker-compose exec client npx jest

tests-wc:
	@docker-compose exec client npx jest --coverage --collectCoverageFrom='src/**/*.ts'
