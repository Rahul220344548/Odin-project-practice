
const band = {
    name: "ColdPlay",
    nationality: "England",
    genre: "Rock",
    members: 5,
    formed: 2010,
    split: false,
    albums: [("A", 1), ("B", 2)],

    biographySelf: function () {
        console.log(`${this.name} is from ${this.nationality} ,
                     were formed in ${this.formed}, and they play ${this.genre} music
                      and their first album was ${this.albums[0]},
                      ${this.albums[1]}`);
    },
};

band.biographySelf();