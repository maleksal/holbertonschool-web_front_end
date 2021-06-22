
let studentHogwarts = class {
    #privateScore;
    #name;
  
    constructor() {
      this.#privateScore = 0;
      this.#name = null;
    }
  
    #changeScoreBy(points) {
      this.#privateScore += points;
    }
    setName(newName) {
      this.#name = newName;
    }
    rewardStudent() {
      this.#changeScoreBy(1);
    }
    penalizeStudent() {
      this.#changeScoreBy(-1);
    }
  
    get getScore() {
      return `${this.#name}: ${this.#privateScore}`;
    }
  }
  
  const harry = new studentHogwarts();
  harry.setName("Harry");
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());
  
  const draco = new studentHogwarts();
  draco.setName("Draco");
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  console.log(draco.getScore());