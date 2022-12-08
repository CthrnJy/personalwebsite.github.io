/*toggle for style switcher/color switcher */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*hide the style switcher or color switcher on scroll */
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*for theme colors*/
const alternateStyles = document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}
/* for light and dark theme*/
const dayNight =document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.replace("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})