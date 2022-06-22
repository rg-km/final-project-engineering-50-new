package main

import (
	"database/sql"
	"testing/api"
	"testing/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./product.db")
	if err != nil {
		panic(err)
	}

	campRepo := repository.NewCampRepository(db)
	iismaRepo := repository.NewIismaRepository(db)
	companyRepo := repository.NewCompanyRepository(db)
	fypRepo := repository.NewFypRepository(db)
	mainApi := api.NewApi(*campRepo, *iismaRepo, *companyRepo, *fypRepo)
	mainApi.Start()
}
