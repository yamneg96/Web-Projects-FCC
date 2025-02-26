function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  let avgs = getAverage(totalScores);
  let stuGrade = getGrade(studentScore);
  if(hasPassingGrade(studentScore)){
    let msg = "Class average: " + avgs + ". Your grade: " + stuGrade + ". You passed the course.";
    return msg;
  }else{
    let msg = "Class average: " + avgs + ". Your grade: " + stuGrade + ". You failed the course.";
    return msg;
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))
