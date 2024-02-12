window.addEventListener("DOMContentLoaded", function(){
    let obejoBtn = document.getElementById("obejoBtn");
    let avbarcelonaBtn = document.getElementById("avbarcelonaBtn");
    let obejoCount = document.getElementById("obejoCount");
    let avbarcelonaCount = document.getElementById("avbarcelonaCount");
    let obejoBtnNeg = document.getElementById("obejoBtnNeg");
    let avbarcelonaBtnNeg = document.getElementById("avbarcelonaBtnNeg");
    let resetBtn = document.getElementById("resetBtn");

    let obejoRealCount = this.localStorage.getItem("obejoCount") ? this.localStorage.getItem("obejoCount") : 0;
    let avbarcelonaRealCount = this.localStorage.getItem("avbarcelonaCount") ? this.localStorage.getItem("avbarcelonaCount") : 0;

    obejoCount.innerHTML = obejoRealCount;
    avbarcelonaCount.innerHTML = avbarcelonaRealCount;

    obejoBtn.addEventListener("click", function(){
        obejoRealCount++;
        localStorage.setItem("obejoCount", obejoRealCount);
        obejoCount.innerHTML = localStorage.getItem("obejoCount");
    });

    avbarcelonaBtn.addEventListener("click", function(){
        avbarcelonaRealCount++;
        localStorage.setItem("avbarcelonaCount", avbarcelonaRealCount);
        avbarcelonaCount.innerHTML = localStorage.getItem("avbarcelonaCount");
    });
    
    obejoBtnNeg.addEventListener("click", function(){
        if(obejoRealCount > 0){
            obejoRealCount--;
            localStorage.setItem("obejoCount", obejoRealCount);
            obejoCount.innerHTML = localStorage.getItem("obejoCount");
        }
    });

    avbarcelonaBtnNeg.addEventListener("click", function(){
        if(avbarcelonaRealCount > 0){
            avbarcelonaRealCount--;
            localStorage.setItem("avbarcelonaCount", avbarcelonaRealCount);
            avbarcelonaCount.innerHTML = localStorage.getItem("avbarcelonaCount");
        }
    });

    resetBtn.addEventListener("click", function(){
        localStorage.setItem("obejoCount", 0);
        localStorage.setItem("avbarcelonaCount", 0);
        obejoCount.innerHTML = 0;
        avbarcelonaCount.innerHTML = 0;
        obejoRealCount = 0;
        avbarcelonaRealCount = 0;
    });
});