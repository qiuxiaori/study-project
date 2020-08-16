package db

import (
	"log"

	"github.com/goonode/mogo"
)

var mongoConnection *mogo.Connection = nil

//GetConnection is for get mongo connection
func GetConnection() *mogo.Connection {
	if mongoConnection == nil {
		config := &mogo.Config{
			ConnectionString: "localhost",
			Database:         "go-test",
		}
		mongoConnection, err := mogo.Connect(config)
		if err != nil {
			log.Fatal(err)
		} else {
			return mongoConnection
		}
	}
	return mongoConnection
}
