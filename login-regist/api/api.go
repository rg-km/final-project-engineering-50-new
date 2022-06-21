package api

import (
	"final-project-engineering-50/login-regist/repository"
	"fmt"
	"net/http"
)

type API struct {
	mux *http.ServeMux
	userRepo repository.UserRepository
	aimproveRepo repository.AimproveRepository
	//iismaRepo repository.IismaRepository
	//companyRepo repository.CompanyRepository
	//fypRepo repository.FypRepository
}

func NewApi(userRepo repository.UserRepository, aimproveRepo repository.AimproveRepository) *API {
	mux := http.NewServeMux()

	api := &API{
		mux: mux,
		userRepo: userRepo,
		aimproveRepo: aimproveRepo,
		
	}

	mux.Handle("/api/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/register", api.POST(http.HandlerFunc(api.register)))

	mux.Handle("/api/user", api.GET(http.HandlerFunc(api.getUser)))
	mux.Handle("/api/user/", api.GET(http.HandlerFunc(api.getUserById)))
	mux.Handle("/api/aimprove", api.GET(http.HandlerFunc(api.getAimprove)))
	mux.Handle("/api/aimprove/", api.GET(http.HandlerFunc(api.getAimproveById)))


	//mux.Handle("/api/iisma", api.GET(http.HandlerFunc(api.getIisma)))
	//mux.Handle("/api/iisma/", api.GET(http.HandlerFunc(api.getIismaById)))
	//mux.Handle("/api/company", api.GET(http.HandlerFunc(api.getCompany)))
	//mux.Handle("/api/company/", api.GET(http.HandlerFunc(api.getCompanyById)))
	//mux.Handle("/api/fyp", api.GET(http.HandlerFunc(api.getFyp)))
	//mux.Handle("/api/fyp/", api.GET(http.HandlerFunc(api.getFypById)))
	return api
}

func (api *API) Handler() *http.ServeMux{
	return api.mux
}

func (api *API) Start(){
	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", api.Handler())
}




