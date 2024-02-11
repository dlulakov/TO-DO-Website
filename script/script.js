let elemDate = new Date();
let elem = document.getElementById("date");
let mounth = parseInt(elemDate.getMonth()) + 1;
let date = getDay(elemDate.getDay())+" "+ elemDate.getDate() +"."+ mounth+"."+ elemDate.getFullYear();
elem.innerHTML = date;
        



function add(){
    let text = document.getElementById("text").value;
    if(text.length > 0){
        let div = document.createElement("div");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let textNode = document.createTextNode(text);
        label.appendChild(textNode);
        input.type = "checkbox";
        input.className = "checkbox";
        div.appendChild(input);
        div.appendChild(label);
        document.getElementById("list").appendChild(div);
    }
}

function addEnter(event){
    if(event.key == "Enter"){
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




