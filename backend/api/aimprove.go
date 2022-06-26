package api

import (
	"backend/backend/repository"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
)

type AimproveListErrorResponse struct {
	Error string `json:"error"`
}

type ListAimprovecamp struct {
	Id          string `json:"id"`
	Id_User     int64  `json:"id_user"`
	PilihanCamp string `json:"pilihan_camp"`
	Motivasi    string `json:"motivasi"`
}

type CreateAimprovecamp struct {
	Id_User     int64  `json:"id_user"`
	PilihanCamp string `json:"pilihan_camp"`
	Motivasi    string `json:"motivasi"`
}

type AimproveListSuccessResponse struct {
	Aimprove []ListAimprovecamp `json:"aimprove"`
}

func (a *API) getAimprove(w http.ResponseWriter, r *http.Request) {
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	response := AimproveListSuccessResponse{}
	response.Aimprove = make([]ListAimprovecamp, 0)

	aimprove, err := a.aimproveRepo.GetAll()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(AimproveListErrorResponse{Error: err.Error()})
		}
	}()
	if err != nil {
		return
	}
	for _, b := range aimprove {
		response.Aimprove = append(response.Aimprove, ListAimprovecamp{
			Id:          strconv.Itoa(int(b.Id)),
			Id_User:     int64(b.Id_User),
			PilihanCamp: b.PilihanCamp,
			Motivasi:    b.Motivasi,
		})
	}

	encoder.Encode(response)
}

func (a *API) getAimproveById(w http.ResponseWriter, r *http.Request) {
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	response := AimproveListSuccessResponse{}
	response.Aimprove = make([]ListAimprovecamp, 0)

	id := r.URL.Query().Get("id")
	idInt, err := strconv.Atoi(id)

	aimprove, err := a.aimproveRepo.GetById(int64(idInt))
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(AimproveListErrorResponse{Error: err.Error()})
		}
	}()
	if err != nil {
		return
	}
	response.Aimprove = append(response.Aimprove, ListAimprovecamp{
		Id:          strconv.Itoa(int(aimprove.Id)),
		Id_User:     int64(aimprove.Id_User),
		PilihanCamp: aimprove.PilihanCamp,
		Motivasi:    aimprove.Motivasi,
	})
	encoder.Encode(response)

}

func (api *API) daftarAimprove(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var aimprove CreateAimprovecamp
	err := json.NewDecoder(r.Body).Decode(&aimprove)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	create := repository.Aimprove{
		Id_User:     aimprove.Id_User,
		PilihanCamp: aimprove.PilihanCamp,
		Motivasi:    aimprove.Motivasi,
	}
	res, err := api.aimproveRepo.CreateAimprove(create)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res)
}
