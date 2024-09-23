// src/models/Author.js
class AuthorModel {
    constructor(id, name, birth_year, death_year, nationality, genre, notable_works, award, biography, image) {
        this.id = id;
        this.name = name;
        this.birth_year = birth_year;
        this.death_year = death_year;
        this.nationality = nationality;
        this.genre = genre;
        this.notable_works = notable_works;
        this.award = award;
        this.biography = biography;
        this.image = image;
    }
}

export default AuthorModel;
