/*Typing animation*/
var typed =new Typed(".typing",{
    strings:["just an ordinary girl.","soon to be a Web Developer."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/*lside navigation active*/
const nav=document.querySelector(".nav"),
    navList =nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let i=0; i<totalNavList; i++){

        const a =navList[i].querySelector("a");
        a.addEventListener("click",function(){

            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }

            for(let c=0; c<totalNavList; c++){

                if(navList[c].querySelector("a").classList.contains("active")){
                    allSection[c].classList.add("back-section");
                }

                navList[c].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth <1200){
                lsideSectionTogglerBtn();
            }
        })
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    /*for home, button more about me*/
    function updateNav(element){
        for(let i=0;i<totalNavList;i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    /*for home - button more about me */
    document.querySelector(".visit").addEventListener("click",function(){
        showSection(this);
        updateNav(this);
    })

    /*for about - button send a message */
    document.querySelector(".mess").addEventListener("click",function(){
        showSection(this);
        updateNav(this);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        lside =document.querySelector(".lside");
        navTogglerBtn.addEventListener("click",()=>{
            lsideSectionTogglerBtn();
        })
        function lsideSectionTogglerBtn(){
            lside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0;i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
        }