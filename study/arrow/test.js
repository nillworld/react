const test1 = () => "yeah~~!!";

const test2 = () => {
  "yeah~~!!";
};

const test3 = () => {
  return "yeah~~!!";
};

function test4() {
  return "yeah!";
}

(() => {
  console.log("yeah");
})();
console.log(test4());
