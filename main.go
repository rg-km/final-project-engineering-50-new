package main

import (
	"final-project-engineering-50/login-regist/repository"
	"final-project-engineering-50/login-regist/api"
	"database/sql"
	
	_ "github.com/mattn/go-sqlite3"
)

func main(){
	db, err := sql.Open("sqlite3", "./aimprove.db")
	if err != nil {
		panic(err)
	}

	userRepo := repository.NewUserRepository(db)
	aimproveRepo := repository.NewAimproveRepository(db)
	mainApi := api.NewApi(*userRepo, *aimproveRepo)
	mainApi.Start() 
}