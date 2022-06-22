package repository

import "database/sql"

type CampRepository struct {
	db *sql.DB
}

func NewCampRepository(db *sql.DB) *CampRepository {
	return &CampRepository{db: db}
}

func (r *CampRepository) GetAll() ([]Camp, error) {
	var camp []Camp
	rows, err := r.db.Query("SELECT * FROM camp")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var b Camp
		err := rows.Scan(&b.Id, &b.NamaCamp, &b.Email, &b.Payment, &b.Status)
		if err != nil {
			return nil, err
		}
		camp = append(camp, b)
	}
	return camp, nil
}

func (r *CampRepository) GetById(id int64) (Camp, error) {
	var b Camp
	err := r.db.QueryRow("SELECT * FROM camp WHERE id = ?", id).Scan(&b.Id, &b.NamaCamp, &b.Email, &b.Payment, &b.Status)
	if err != nil {
		return b, err
	}
	return b, nil
}
