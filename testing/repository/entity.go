package repository

type Camp struct {
	Id       int64  `db:"id" json:"id"`
	NamaCamp string `db:"nama_camp" json:"nama_camp"`
	Email    string `db:"email" json:"email"`
	Payment  string `db:"payment" json:"payment"`
	Status   string `db:"status" json:"status"`
}

type Iisma struct {
	Id              int64  `db:"id" json:"id"`
	PenjelasanIisma string `db:"penjelasan_iisma" json:"penjelasan_iisma"`
	BookletUnilist  string `db:"booklet_unilist" json:"booklet_unilist"`
	InfoIisma       string `db:"info_iisma" json:"info_iisma"`
}

type Company struct {
	Id                 int64  `db:"id" json:"id"`
	PenjelasanCompany  string `db:"penjelasan_company" json:"penjelasan_company"`
	BookletCompanylist string `db:"booklet_companylist" json:"booklet_companylist"`
	InfoCompany        string `db:"info_company" json:"info_company"`
}

type Fyp struct {
	Id            int64  `db:"id" json:"id"`
	PenjelasanFyp string `db:"penjelasan_fyp" json:"penjelasan_fyp"`
	BookletFyp    string `db:"booklet_fyplist" json:"booklet_fyplist"`
	InfoFyp       string `db:"info_fyp" json:"info_fyp"`
}
