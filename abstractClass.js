"use strict";
// abstract keyword ensures that no object is created from the class, it's the responsibility of the class extending it
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const franc = new TakePhoto("test", "test") //Throws an error
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const franc = new Insta("test", "test", 5);
