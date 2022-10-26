const accardion = document.querySelectorAll(".title-box");

accardion.forEach((item) => {
    item.addEventListener("click",function(){

        let active = document.querySelector(".active")
        // active.classList.remove("active")
        this.setAttribute("class","box-one active")
        this.classList.toggle("active")
        // if (this.classList.contains("active")) {
            
        // }
    })
});
