
function store() {
    this.shirts = [
        new product("shirts1", "Beach Please", "☜❦☞", 28),
        new product("shirts2", "Ampersand", "☜❦☞", 28),
        new product("shirts3", "Nothing Comes Easy", "☜❦☞", 28),
        new product("shirts4", "Fuschia Ampersand", "☜❦☞", 28),
        new product("shirts5", "Good Things Take Time", "☜❦☞", 28),
        new product("shirts6", "Fail Learn Change", "☜❦☞", 28),
        new product("shirts7", "Maze", "☜❦☞", 28),
        new product("shirts8", "Start Today Transform Tomorrow", "☜❦☞", 28),
        new product("shirts9", "Stars Can't Shine Without", "☜❦☞", 28),
        new product("shirts10", "Numbers", "☜❦☞", 28),
        new product("shirts11", "Love Invented The Future", "☜❦☞", 28),
        new product("shirts12", "Hello Friday", "☜❦☞", 28),
        new product("shirts13", "American Rock", "☜❦☞", 28),
        new product("shirts14", "Leader Of The Pack", "☜❦☞", 28),
        new product("shirts15", "Eat Sleep Kern Repeat", "☜❦☞", 28)
    ];

}

store.prototype.getProduct = function (pco) {
    for (var i = 0; i < this.shirts.length; i++) {
        if (this.shirts[i].pco == pco)
            return this.shirts[i];
    }
    return null;
}
