function marks(num) {
  if (num >= 85) {
    console.log("D");
  } else if (num >= 65) {
    console.log("FC");
  } else if (num >= 35) {
    console.log("SC");
  } else {
    console.log("FAIL");
  }
}
var num = prompt("enter the number");
marks(num);
