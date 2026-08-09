let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){

      if (inp.value.trim() === "") {
        alert("Empty input!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
     delbtn.classList.add("delete");
     item.appendChild(delbtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    }
})