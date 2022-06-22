package api

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type CampListErrorResponse struct {
	Error string `json:"error"`
}

type ListCamp struct {
	Id          string     `json:"id"`
	NamaCamp    string    `json:"nama_camp"`
	Email       string    `json:"email"`
	Payment     string    `json:"payment"`
	Status      string    `json:"status"`
}

type CampListSuccessResponse struct {
	Camp []ListCamp `json:"camp"`
}

func (a *API) getCamp(w http.ResponseWriter, r *http.Request) {
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	response := CampListSuccessResponse{}
	response.Camp = make([]ListCamp, 0)

	camp, err := a.campRepo.GetAll()
	defer func(){
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(CampListErrorResponse{Error: err.Error()})
		}
	}()
	if err != nil {
		return
	}
	for _, b := range camp {
		response.Camp = append(response.Camp, ListCamp{
			Id: strconv.Itoa(int(b.Id)),
			NamaCamp : b.NamaCamp,
			Payment : b.Payment,
			Status : b.Status,
		})
	}
	
	encoder.Encode(response)
}

func (a *API) getCampById(w http.ResponseWriter, r *http.Request) {
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	response :=CampListSuccessResponse{}
	response.Camp = make([]ListCamp, 0)

	id := r.URL.Query().Get("id")
	idInt, err := strconv.Atoi(id)

	camp, err := a.campRepo.GetById(int64(idInt))
	defer func(){
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(CampListErrorResponse{Error: err.Error()})
		}
	}()
	if err != nil {
		return
	}
	response.Camp = append(response.Camp, ListCamp{
		Id: strconv.Itoa(int(camp.Id)),
		NamaCamp : camp.NamaCamp,
		Payment : camp.Payment,
		Status : camp.Status,
	})
	encoder.Encode(response)
}