var plus = document.getElementsByClassName("plus-btn");
for (let i=0;i<plus.length;i++){
    let oneplus = plus[i];
    oneplus.addEventListener("click" , function() {
        oneplus.previousElementSibling.value++;
        totalprice();
        total1();
        total2();
        total3();
    })
}
var minus = document.getElementsByClassName("minus-btn");
for (i=0;i<minus.length;i++){
    let oneminus = minus[i];
    oneminus.addEventListener("click" , function(){
        if(oneminus.nextElementSibling.value>1){
            oneminus.nextElementSibling.value--;
            totalprice();
            total1();
            total2();
            total3();
        }
    }) 

        }
var hearts = document.getElementsByClassName("like");
for (let i=0;i<hearts.length;i++){
    let likee = hearts[i];
    likee.addEventListener("click" , function(){
        if(likee.firstElementChild.style.color == "black"){
            likee.firstElementChild.style.color = "red" ;
        }else{
            likee.firstElementChild.style.color = "black" ;
        }
    })
}
var deletes = document.getElementsByClassName("delete");
for(let i=0;i<deletes.length;i++){
    let del = deletes[i];
    del.addEventListener("click" , function(){
    del.parentElement.remove();
    totalprice();
    total1();
    total2();
    total3();
    });
}
let items = document.getElementsByClassName("Item");

function totalprice(){
    let total = document.getElementById("finalPrice");
    s = 0
    for(i=0;i<items.length;i++) {
        let item=items[i];
        s = s + item.querySelector(".Quant").value*item.querySelector(".price").innerText;
    }
    return (total.value=s);
}
function total1(){
    let q1 = document.getElementById("q1");
    let p1 = document.getElementById("p1");
    p1.innerText = 1379*q1.value ;
    
}
function total2(){
    let q2 = document.getElementById("q2");
    let p2 = document.getElementById("p2");
    p2.innerText = 176*q2.value ;
    
}
function total3(){
    let q3 = document.getElementById("q3");
    let p3 = document.getElementById("p3");
    p3.innerText = 249*q3.value ;
    
}

