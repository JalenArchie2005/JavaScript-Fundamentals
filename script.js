console.log("JavaScript connected!");
console.log("Module 1 started");
const output = document.querySelector("#output");
output.textContent = "JavaScript changed this paragraph!";
console.log("Module 1 finished");

// Values describing a student
const studentName = "Alex";
let completedLessons = 1;
const isLearning = true;
completedLessons = completedLessons + 1;
const profile = document.querySelector("#profile");
profile.textContent =
  studentName + " completed " + completedLessons + " lessons.";
console.log(typeof studentName, typeof completedLessons, typeof isLearning);

let points = 0;
const pointText = document.querySelector("#pointText");
const pointBtn = document.querySelector("#pointBtn");
function earnPoints() {
  points += 5;
  pointText.textContent = "Points: " + points;
}
pointsBtn.addEventListener("click", earnPoints);
