function solve2(){
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function solve() {
      await setTimeoutPromisified(1000);
      console.log("hi");
    //   await setTimeoutPromisified(3000);
      console.log("hello");
      await setTimeoutPromisified(5000);
      console.log("hi there");
  }
  
  solve();
  console.log("hiii")
  if(1)
  {
    console.log("nh")
    return;
  }
}
solve2();
console.log("dfhasjkf")