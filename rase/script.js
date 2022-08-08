var Car = function (x, y) {
    this.x = x;
    this.y = y;
}

Car.prototype.draw = function () {
    var carHtml = '<img src="https://i.pinimg.com/originals/45/f6/56/45f656d8e56e503079f29ce4bdde22ae.png" width="150px" height="100px">'
    this.carElement = $(carHtml)
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);

    Car.prototype.moveRight = function () {
        this.x += 5;

        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };

    Car.prototype.moveLeft = function () {
        this.x -= 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };

    Car.prototype.moveUp = function () {
        this.y -= 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };

    Car.prototype.moveDown = function () {
        this.y += 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };
}

let tesla = new Car(20, 20);
let nissan = new Car(100, 200);
tesla.draw();
nissan.draw()


