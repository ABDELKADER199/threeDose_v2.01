let scroll_btn = document.querySelector('.to_top');
let nav_bar = document.querySelector('.burger-menu i');
let burger_list = document.querySelector('.burger_list');
let li = document.querySelectorAll('.burger_list li');

// i create to top button

document.onscroll = ()=>{
        if(this.scrollY >= 400 ){
            scroll_btn.style.display = "block";
        }else{
            scroll_btn.style.display = "none";
        }
    }
    



scroll_btn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0 ,
        behavior: 'smooth',
    })
})



// i create nav bar 

nav_bar.addEventListener('click', ()=>{
    burger_list.classList.toggle('show');
    background()
})

function background(){
    onscroll = ()=>{
        if(this.scrollY <= 500){
            li[0].style.background = "#8000ff";
            li[1].style.background = "#1a1a1a";
            li[2].style.background = "#1a1a1a";
    
        }else if(window.scrollY <= 1000){
            li[1].style.background = "#8000ff";
            li[0].style.background = "#1a1a1a";
            li[2].style.background = "#1a1a1a";
    
        }else {
            li[2].style.background = "#8000ff";
            li[0].style.background = "#1a1a1a";
            li[1].style.background = "#1a1a1a";
        }
    }
    
}
