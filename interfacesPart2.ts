interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

// implementing TakePhoto protocol within Instagram class
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// added more property shot: string, but note, I can't have less than the properties inside TakePhoto
class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shot: string
  ) {}

  createStory(): void {
    console.log("Story created");
  }
}
