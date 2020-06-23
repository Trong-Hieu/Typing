    // var newText = ["sharanheyo", "iloveyou", "hiiamhieu", "document",
    //                 "correct", "value", "newtext", "incorrect", "da nang",
    //                 "random"];
    // var fs = require('fs');
    // var TextString = fs.readFileSync('./textForTest.json', 'utf8');
    var newText = ["After all, you are only an immortal until someone manages to kill you. After that, you were just long-lived.",
                    "As long as poverty, injustice and gross inequality persist in our world, none of us can truly rest.",
                    "We were like deaf people trying to dance to a beat we couldn't hear, long after the music actually stopped.",
                    "For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.",
                    "Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing.",
                    "Time plays like an accordion in the way it can stretch out and compress itself in a thousand melodic ways. Months on end may pass blindingly in a quick series of chords, open-shut, together-apart; and then a single melancholy week may seem like a year's pining, one long unfolding note.",
                    "Life is beautiful, as long as it consumes you. When it is rushing through you, destroying you, life is gorgeous, glorious. It's when you burn a slow fire and save fuel, that life's not worth having.",
                    "Before we can count we are taught to be grateful for what others do. As we are broken open by our experience, we begin to be grateful for what is, and if we live long enough and deep enough and authentically enough, gratitude becomes a way of life.",
                    "This long run is a misleading guide to current affairs. In the long run we are all dead. Economists set themselves too easy, too useless a task if in tempestuous seasons they can only tell us that when the storm is long past the ocean is flat again.",
                    "As long as I live, I'll hear waterfalls and birds and winds sing. I'll interpret the rocks, learn the language of flood, storm, and the avalanche. I'll acquaint myself with the glaciers and wild gardens, and get as near the heart of the world as I can."];
    var newText2 = ["heybitch", "babe", "love", "badguy", "none", "fuck", "keyboard", "blue", "hot", "slutt"];
    //     fetch('./textForTest.json')
    //     .then(response => response.json())
    //     .then(data => newText.push(...data))
    //     .catch(error => console.error('Error:', error));
    // var getText = newText.map(item => item.text);

    document.getElementById("text").value = newText2[Math.floor(Math.random()*10)];

    var correct = 0;
    var incorrect = 0;
    var x = document.getElementById("typing").value;
    var text = document.getElementById("text").value;
    var words = 1;
    var textIndex = 0;
    var s = 60;
    var timeout = null;

// if($("#typing").keypress() === true){
//     start()
// }

$("#typing").keypress(function (event) {
    //while(text.length > 0){
        //x = x + e.key;
        // if(x.length <= text.length){
        //     for (var i = 0; i< text.length; i++){
        //         if(text.charAt(i) === x.charAt(i)) correct++;
        //         else incorrect++;
        //     }
        // }

        // Prevent the default action 
        //event.preventDefault();
        // Just in case
        event = event || window.event;
        // Get the pressed key code
        const charCode = event.which || event.keyCode;
        // Read it as a normal key
        const charTyped = String.fromCharCode(charCode);

        if(charTyped === text.charAt(textIndex)){
            if(charTyped === " "){
                // document.getElementById("typing").value = "";
                // reset();
                words++;
                
            }
            correct++;
        }
        else{
            incorrect++;
            charTyped.fontcolor("red");
        };


        textIndex++;

        if(charCode === "Backspace"){  // Backspace key
            textIndex--;
        }

        if(textIndex === text.length){
            reset();
        }

        // if(textIndex === 1){
        //     start();
        // }


        console.log(charTyped)

        // console.log("x: " + x.length);
    //}
  })



function myFunction(){

    // var x = document.getElementById("typing").value;
    // var text = document.getElementById("text").value;

    if(x==text) document.getElementById("demo").innerHTML = "true";
    else document.getElementById("demo").innerHTML = "false";

    // for (var i = 0; i< text.length; i++){
    //     if(text.charAt(i) == x.charAt(i)) correct++;
    //     else incorrect++;
    // }
    document.getElementById("typing").value = "";
    console.log(x);
    console.log(typeof(x));

    document.getElementById("correct").innerHTML = "correct letter: " + correct;
    document.getElementById("incorrect").innerHTML = "incorrect letter: " + incorrect;
    document.getElementById("words").innerHTML = "words: " + words;
    reset();
    restart();
    clearTimeout(timeout);
    //return false;
}
// $(window).keypress(function (e) {
//     if (e.key === ' ' || e.key === 'Spacebar') {
//       // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
//       //e.preventDefault()
//       console.log('Space pressed')
//       document.getElementById("typing").value = "";
//       //myFunction();
//     }
//   })

console.log(text.length);
console.log(x.length);

function start(){
    if(s == -1){
        clearTimeout(timeout);
        //alert("time out");
        myFunction();
        return false;
    }
    document.getElementById('s').innerText = s.toString();
    timeout = setTimeout(function(){
        s--;
        start();
    },1000);

}

function restart(){
    correct = 0;
    incorrect = 0;
    x = document.getElementById("typing").value;
    text = document.getElementById("text").value;
    words = 1;
    textIndex = 0;
    s = 60;
    clearTimeout(timeout);
    document.getElementById('s').innerText = s.toString();
    document.getElementById("typing").value = "";
}
    
function reset(){
    document.getElementById("text").value = newText2[Math.floor(Math.random()*10)];
    text = " " + document.getElementById("text").value;
    textIndex = 0;
}
function myfunction(){
    scoreModal.style.display = "block";
}