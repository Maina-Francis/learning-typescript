// abstract keyword ensures that no object is created from the class, it's the responsibility of the class extending it
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  // abstract method
  abstract getSepia(): void;
}
// const franc = new TakePhoto("test", "test") //Throws an error

class Insta extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
const franc = new Insta("test", "test", 5);
