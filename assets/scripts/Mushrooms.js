class Mushrooms {
    constructor(x, y, level) {
        this.x = x;
        this.y = y;
        this.width = 24;
        this.height = 24;
        this.health = 4;
        this.level = level;
    }

    draw(context) {
        var mushroom = document.getElementById("mushroom");

        context.drawImage(mushroom, (this.health - 1) * 96, this.level * 96, 96, 96, this.x, this.y, 24, 24);

    }

}

module.exports = Mushrooms;