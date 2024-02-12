window.addEventListener("DOMContentLoaded", function(){
    let obejoBtn = document.getElementById("obejoBtn");
    let avbarcelonaBtn = document.getElementById("avbarcelonaBtn");
    let obejoCount = document.getElementById("obejoCount");
    let avbarcelonaCount = document.getElementById("avbarcelonaCount");
    let obejoBtnNeg = document.getElementById("obejoBtnNeg");
    let avbarcelonaBtnNeg = document.getElementById("avbarcelonaBtnNeg");

    let obejoRealCount = this.localStorage.getItem("obejoCount") ? this.localStorage.getItem("obejoCount") : 0;
    let avbarcelonaRealCount = this.localStorage.getItem("avbarcelonaCount") ? this.localStorage.getItem("avbarcelonaCount") : 0;

    obejoCount.innerHTML = obejoRealCount;
    avbarcelonaCount.innerHTML = avbarcelonaRealCount;

    obejoBtn.addEventListener("click", function(){
        obejoRealCount++;
        obejoCount.innerHTML = obejoRealCount;
        localStorage.setItem("obejoCount", obejoRealCount);
    });

    avbarcelonaBtn.addEventListener("click", function(){
        avbarcelonaRealCount++;
        avbarcelonaCount.innerHTML = avbarcelonaRealCount;
        localStorage.setItem("avbarcelonaCount", avbarcelonaRealCount);
    });
    
    obejoBtnNeg.addEventListener("click", function(){
        if(obejoRealCount > 0){
            obejoRealCount--;
            obejoCount.innerHTML = obejoRealCount;
            localStorage.setItem("obejoCount", obejoRealCount);
        }
    });

    avbarcelonaBtnNeg.addEventListener("click", function(){
        if(avbarcelonaRealCount > 0){
            avbarcelonaRealCount--;
            avbarcelonaCount.innerHTML = avbarcelonaRealCount;
            localStorage.setItem("avbarcelonaCount", avbarcelonaRealCount);
        }
    });
});