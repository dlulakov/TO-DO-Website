let elemDate = new Date();
let elem = document.getElementById("date");
let month = parseInt(elemDate.getMonth()) + 1;
let date = getDay(elemDate.getDay())+" "+ elemDate.getDate() +"."+ month+"."+ elemDate.getFullYear();
elem.innerHTML = date;




if(!localStorage.getItem("list")){
    setId();
}else {
    displayList();
}
function setId(){
    let list = document.getElementById("list").children;
    let string = "";
    for (let div of list){
        string += div.outerHTML;
        string += ":";
    }
    localStorage.setItem("list",string);
}



update();




function displayList() {
    let string = localStorage.getItem("list");
    let parts = string.split(":");
    let list = document.getElementById("list");
    for(let i = 0 ; i < parts.length; ++i){
        list.innerHTML += parts[i];
    }
    checkThem();
}



function checkThem(){
    let list = document.getElementsByClassName("check");
    for(let el of list){
        el.checked = true;
    }
}








function update() {
    let total = document.getElementById("list").children;
    let sum = 0;
    if(total.length > 0){
        for(let element of total){
            if(element.firstChild.firstChild.checked){
                sum+=1;
            }
        }
        document.getElementById("counterh2").innerHTML = `Number of task finished ${sum}/${total.length}`;

    }else{
        document.getElementById("counterh2").innerHTML = "There is no tasks";
    }
}


function check(element){ 
    if(element.checked === true){
        element.className = "check";
    }else{
        element.removeAttribute("class");
    }
    update();
    setId();

}
function add(){
    let text = document.getElementById("text").value;
    if(text.length > 0){
        let div = document.createElement("div");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let textNode = document.createTextNode(text);
        let button = document.createElement("input");
        let toDo = document.createElement("div");
        div.className = "row";
        button.type = "button";
        button.value = "X";
        button.className = "delete";
        button.setAttribute("onclick","deleteElement(this)");
        label.appendChild(textNode);
        label.className = "chekmark";
        input.type = "checkbox";
        input.className = "checkbox";
        input.setAttribute("onclick","check(this)");
        toDo.className = "container";
        toDo.appendChild(input);
        toDo.appendChild(label);
        div.appendChild(toDo);
        div.appendChild(button);
        document.getElementById("list").appendChild(div);
        setId();
        update();
    }
}

function deleteElement(element){
        element.parentElement.remove();
        update();
        setId();
}

function addEnter(event){
    if(event.key === "Enter"){
        document.getElementById("click").click();
    }
}


function getDay(day){
    switch(parseInt(day)){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
        default:
            return "Not valid day";
    }

}




