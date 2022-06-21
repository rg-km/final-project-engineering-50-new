package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./product.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS camp (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		nama_camp TEXT,
		email TEXT,
		payment TEXT,
		status TEXT,
		);

		CREATE TABLE IF NOT EXISTS iisma (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		penjelasan_iisma TEXT,
		booklet_unilist TEXT,
		info_iisma TEXT,
		);

		CREATE TABLE IF NOT EXISTS company (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		penjelasan_company TEXT,
		booklet_companylist TEXT,
		info_company TEXT,
		);

		CREATE TABLE IF NOT EXISTS fyp (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		penjelasan_fyp TEXT,
		booklet_fyplist TEXT,
		info_fyp TEXT,
		);		
	`)
	if err != nil {
		panic(err)
	}
}
