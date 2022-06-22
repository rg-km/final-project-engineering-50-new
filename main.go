package main

import (
	"database/sql"
	"Backend/repository"
	"Backend/api"

	database
	
	
	_ "github.com/mattn/go-sqlite3"
)

func main(){
	db, err := sql.Open("sqlite3", "./aimprove.db")
	if err != nil {
		panic(err)
	}

	userRepo := repository.NewUserRepository(db)
	aimproveRepo := repository.NewAimproveRepository(db)
	cartRepo := repository.NewCampRepository(db)
	iismaRepo := repository.NewIismaRepository(db)
	companyRepo := repository.NewCompanyRepository(db)
	fypRepo := repository.NewFypRepository(db)
	mainApi := api.NewApi(*userRepo, *aimproveRepo, *cartRepo, *iismaRepo, *companyRepo, *fypRepo)

	mainApi.Start() 
}