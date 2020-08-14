function hide() {
    console.log(1);
    document.getElementById("search-hide").style.display="none";
}
mybutton = document.getElementById("top-page");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("top-page").style.display = "block";
    }
    else {
        document.getElementById("top-page").style.display = "none";
    }
}

function backTop(){
    document.documentElement.scrollTop = 0;
}