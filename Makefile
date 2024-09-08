build:
	docker build -t dashboard-app .

up:
	docker-compose up -d

down:
	docker-compose down