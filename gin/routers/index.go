package routers

import (
	"gin/controller"
	"gin/middleware"

	"github.com/gin-gonic/gin"
)

// 用户路由
func setAuthRoute(router *gin.Engine) {
	authController := new(controller.AuthController)

	router.POST("/login", authController.Login)
	router.POST("/signup", authController.Signup)

	// 中间件
	authGroup := router.Group("/")
	authGroup.Use(middleware.Authentication())
	authGroup.GET("/profile", authController.Profile)
}

// InitRoute ..
func InitRoute() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	setAuthRoute(router)

	return router
}
