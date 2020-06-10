const X = require("./X");

class Boat extends X {
  constructor(id, x, x) {
    super(id, 0, "bwom");
    this.type = type;
    this.crew = crew;
  }
  useHorn() {
    console.log(this.sound);
  }
  crewSoundOff() {
    this.crew.forEach(member => {
      console.log(`${member.name} reporting for duty!`);
    });
  }
}