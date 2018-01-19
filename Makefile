# Makefile

SERVER_IP:="212.24.104.202"
IMAGE_NAME:="bike_app"
CONTAINER_NAME:="bike_app"
PORT:="80"

PHONY: deploy
deploy:
	@echo "-------------------------------------------------------"
	@echo "Uploading and running app in a docker container"
	@echo "-------------------------------------------------------"
	@ssh root@$(SERVER_IP) \
		" rm -rf bike-routes; \
		git clone https://github.com/MrJonas/bike-routes.git; \
		cd bike-routes ; \
		docker stop $(CONTAINER_NAME) ; \
		docker rm $(CONTAINER_NAME) ; \
		docker build --tag $(IMAGE_NAME) . ; \
		docker run -e "VIRTUAL_HOST=dviraciumarsrutai.lt" \
			-e "LETSENCRYPT_HOST=dviraciumarsrutai.lt"  \
			-e "LETSENCRYPT_EMAIL=jonas.l.antanaitis@gmail.com"  \
			 --name $(CONTAINER_NAME) --link mongo_instance:mongo_instance -d $(IMAGE_NAME) ; \
		"

