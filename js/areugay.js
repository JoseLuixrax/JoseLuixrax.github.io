window.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    })
    let flags = {
        "1": ["10%", "10%"],
        "2": ["10%", "20%"],
        "3": ["10%", "30%"],
        "4": ["10%", "40%"],
        "5": ["10%", "50%"],
        "6": ["10%", "60%"],
        "7": ["10%", "70%"],
        "8": ["10%", "80%"],
        "9": ["20%", "10%"],
        "10": ["20%", "20%"],
        "11": ["20%", "30%"],
        "12": ["20%", "40%"],
        "13": ["20%", "50%"],
        "14": ["20%", "60%"],
        "15": ["20%", "70%"],
        "16": ["20%", "80%"],
        "17": ["50%", "10%"],
        "18": ["50%", "40%"],
        "19": ["50%", "50%"],
        "20": ["50%", "60%"],
        "21": ["50%", "70%"],
        "22": ["50%", "80%"],
        "23": ["60%", "10%"],
        "24": ["60%", "20%"],
        "25": ["60%", "30%"],
        "26": ["60%", "40%"],
        "27": ["60%", "50%"],
        "28": ["60%", "60%"],
        "29": ["60%", "70%"],
        "30": ["60%", "80%"],
        "31": ["70%", "10%"],
        "32": ["70%", "20%"],
        "33": ["70%", "30%"],
        "34": ["70%", "40%"],
        "35": ["70%", "50%"],
        "36": ["70%", "60%"],
        "37": ["70%", "70%"],
        "38": ["70%", "80%"],
        "39": ["80%", "10%"],
        "40": ["80%", "20%"],
        "41": ["80%", "30%"],
        "42": ["80%", "40%"],
        "43": ["80%", "50%"],
        "44": ["80%", "60%"],
        "45": ["80%", "70%"],
        "46": ["80%", "80%"],
    };
    let noButton = document.getElementById("no");
    let siButton = document.getElementById("si");
    
    let activeFlag = "1";
    noButton.addEventListener("mousemove", mover);
    siButton.addEventListener("click", function(){
       alert("Ya lo sabia yo"); 
    });
    noButton.addEventListener("click", function(){
        alert("Enhorabuenas has conseguido pulsar el botón, por desgracia sigues siendo gay");
    })

    function mover() {
        activeFlag = Math.floor(Math.random() * Object.keys(flags).length) + 1;
        noButton.style.top = flags[activeFlag][0];
        console.log(flags[activeFlag][1]);
        noButton.style.left = flags[activeFlag][1];
    }
});