// 배열 자료형 확인하기 (isArray)
function callRoll(students) {
  if (!Array.isArray(students)) {
    return;
  }
  students.forEach((student) => {
    console.log(`Are you here, ${student}`);
  });
}

const students = ['Jun', "Ali", "Murry", 'Toby'];
callRoll(students);