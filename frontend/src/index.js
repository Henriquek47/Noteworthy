const { HomeController } = require("./views/home/script/home_controller");

class Index{
    constructor() {
        this.home = new HomeController();
    }

    initSistem(){
        this.home.init();
    }
}
const index =  Index();
index.initSistem();