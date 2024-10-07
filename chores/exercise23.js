/*

13. Write a JavaScript program to create a Clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"

To redo
*/

const clock = (secondsToDisplay) => {
  let i = 0
  const intervalId = setInterval(()=> {

    if(i >= secondsToDisplay){
      clearInterval(intervalId);
      return;
    }
    const presentDay = new Date();
    let hours = presentDay.getHours();
    let minutes = presentDay.getMinutes();
    let seconds = presentDay.getSeconds();

    console.log(`"${hours} : ${minutes} : ${seconds}"`);
    i++;
  }, 1000);
  return `second to show ${secondsToDisplay}`;
}

// console.log(clock(60));

export default clock