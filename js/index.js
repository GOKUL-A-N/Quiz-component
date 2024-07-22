function wrongAnswer(btn){
    const button = document.getElementById(btn);
    button.className = "w-full bg-white h-[40px] flex bg-red-600"
}

function correctAnswer(){
    const button = document.getElementById("four");
    button.className = "w-full bg-white h-[40px] flex bg-green-600"
}