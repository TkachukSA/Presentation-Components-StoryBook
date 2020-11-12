console.log("erfrg");


function Clickhandler(e) {
    e.stopPropagation()       //остонавливает всплытие на нажатом элементе
    console.log(e.currentTarget)
}

 let sm = document.getElementById("small")
 let md = document.getElementById("medium")
 let bg = document.getElementById("big")

sm.onclick=Clickhandler
md.onclick=Clickhandler
bg.onclick=Clickhandler
md.onclick= null


// новый способ добавления клика
md.addEventListener("click", Clickhandler)