export class Tamagotchi {
  constructor(foodLevel, playLevel, restLevel) {
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.restLevel = restLevel;
  }


  getFood() {
    let that = this;
    //return that.foodLevel;
    document.getElementById("test").innerHTML = that.foodLevel;
  }
  getPlay() {
    let that = this;
    //return that.playLevel;
    document.getElementById("test1").innerHTML = that.playLevel;
  }
  getRest(){
    let that = this;
    //return that.restLevel;
    document.getElementById("test2").innerHTML = that.restLevel;
  }


startGame() {
  const test = setInterval(() => {
  this.foodLevel -= 1;
  this.getFood();
  //document.getElementById("test").innerHTML = this.foodLevel;
  this.playLevel -= 1;
  this.getPlay();
  //document.getElementById("test1").innerHTML = this.playLevel;
  this.restLevel -= 1;
  this.getRest();
  //document.getElementById("test2").innerHTML = this.restLevel;
  if (this.foodLevel === 0) {
    clearInterval(test);
    document.getElementById("test3").innerHTML = "Dead by food";
  } else if (this.playLevel === 0) {
    clearInterval(test);
    document.getElementById("test3").innerHTML = "Dead by bus or something";
  } else if (this.restLevel === 0) {
    clearInterval(test);
    document.getElementById("test3").innerHTML = "Deaddddd by sleep";
  }
}, 50);
}
// getFood() {
//   const test = setInterval(() => {
//
//   this.foodLevel -= 1;
//   console.log(this.foodLevel)
//   return this.foodLevel;
// }, 50);
// }




  addFood() {
    this.foodLevel += 10;
  }
  addPlay() {
    this.playLevel += 10;
  }
  addRest() {
    this.restLevel += 10;
  }


}
