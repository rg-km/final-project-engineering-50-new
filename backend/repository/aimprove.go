package repository

import "database/sql"

type AimproveRepository struct {
	db *sql.DB
}

func NewAimproveRepository(db *sql.DB) *AimproveRepository {
	return &AimproveRepository{db: db}
}

func (r *AimproveRepository) GetAll() ([]Aimprove, error) {
	var aimprove []Aimprove
	rows, err := r.db.Query("SELECT * FROM aimprove")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var b Aimprove
		err := rows.Scan(&b.Id, &b.Id_User, &b.Motivasi, &b.PilihanCamp)
		if err != nil {
			return nil, err
		}
		aimprove = append(aimprove, b)
	}
	return aimprove, nil
}

func (r *AimproveRepository) GetById(id int64) (Aimprove, error) {
	var b Aimprove
	err := r.db.QueryRow("SELECT * FROM aimprove WHERE id = ?", id).Scan(&b.Id, &b.Id_User, &b.Motivasi, &b.PilihanCamp)
	if err != nil {
		return b, err
	}
	return b, nil
}

func (r *AimproveRepository) CreateAimprove(b Aimprove) (Aimprove, error) {
	var s Aimprove
	err := r.db.QueryRow("INSERT INTO aimprove (id_user, pilihan_camp, motivasi) VALUES (?, ?, ?) RETURNING id, id_user, pilihan_camp, motivasi",
		b.Id_User, b.PilihanCamp, b.Motivasi).Scan(&s.Id, &s.Id_User, &s.PilihanCamp, &s.Motivasi)
	if err != nil {
		return s, err
	}
	return s, nil
}
