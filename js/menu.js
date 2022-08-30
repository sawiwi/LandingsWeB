//ejectutar funcion evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("btn_back").addEventListener("click", open_close_menu);

var menu_side = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var btn_back = document.getElementById("btn_back");
var body = document.getElementById("body");


function open_close_menu(){
    //body.classList.toggle("body_move");
    menu_side.classList.toggle("menu__side_move");
    
}

function VolverMenu(){
    //body.classList.toggle("body_move");
    
    
}

function AbrirMenu(){
    if (document.getElementById("btn_open").style.display ="none"){
        document.getElementById("btn_back").style.display = "block";
        btn_back.classList.remove("icon_img_back");
        
    }
}

function VolverMenu(){
    if (document.getElementById("btn_back").style.display ="none"){
        document.getElementById("btn_open").style.display = "block";
        btn_back.classList.add("icon_img_back");
    }
}



if(window.innerWidth < 760){
    //body.classList.add("body_move");
    menu_side.classList.add("menu__side_move");
   
    
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        //body.classList.remove("body_move");
        menu_side.classList.remove("menu__side_move");
       
    }
    if(window.innerWidth < 760){
        //body.classList.add("body_move");
        menu_side.classList.add("menu__side_move");
        
    

    }
});  