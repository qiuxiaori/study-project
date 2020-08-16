package main

import (
	"gin/routers"
	"gin/utils"
)

func main() {
	router := routers.InitRoute()
	port := utils.EnvVar("SERVER_PORT")
	router.Run(port)
}
