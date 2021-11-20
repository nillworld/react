console.log(test4);
console.log(test1);

const test = (test) => test * 3;
const test_2 = (test) => {
  console.log(test * 3);
};

var test1 = () => "test1";

const test2 = () => {
  "test2";
};

const test3 = () => {
  return "test3";
};

function test4() {
  return "test4";
}

function test5() {
  return "test5";
}

(() => {
  console.log("yeah");
})();
console.log(test_2(10));
console.log(test4());
