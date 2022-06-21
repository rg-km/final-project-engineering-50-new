package api

import (
	"testing/repository"
	"fmt"
	"net/http"
)

type API struct {
	mux         *http.ServeMux
	campRepo    repository.CampRepository
	iismaRepo   repository.IismaRepository
	companyRepo repository.CompanyRepository
	fypRepo     repository.FypRepository
}

func NewApi(campRepo repository.CampRepository, iismaRepo repository.IismaRepository,
	companyRepo repository.CompanyRepository, fypRepo repository.FypRepository) *API {
	mux := http.NewServeMux()

	api := &API{
		mux:         mux,
		campRepo:    campRepo,
		iismaRepo:   iismaRepo,
		companyRepo: companyRepo,
		fypRepo:     fypRepo,
	}

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", api.Handler())
}
