let myLeads = [];
const inputBtn = document.getElementById("btn");
const input = document.getElementById("textfield");
const ul = document.getElementById("ul");
const clear = document.getElementById("clear");
const copy = document.getElementById("copy");
const tab = document.getElementById("tab");

//local storage
let linksFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//if there is something in local storage, render list
if (linksFromLocalStorage) {
    myLeads = linksFromLocalStorage;
    renderList();
}

//gets current tab's website and inputs it in myLead array
tab.addEventListener("click", function(){
    myLeads.push(window.location.href); 
    renderList();
})
//puts text field value into myLeads array and calls updateList function
inputBtn.addEventListener("click", function(){
    myLeads.push(input.value);
    console.log(myLeads);
    input.value="";
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderList();
});


//clears whatever is in input value and copies list of myLeads into clipboard
copy.addEventListener("click", function(){
    input.value="";
    navigator.clipboard.writeText(ul.innerText);
})

//clears myLeads array, list in element ul, localstorage, and input value
clear.addEventListener("click", function(){
    myLeads = [];
    ul.innerHTML= "";
    input.value="";
    localStorage.clear();
})



//updates list based on how many elements are in hy myLeads array
function renderList(){
    ul.innerHTML ="";
    for (let i=0; i<myLeads.length;i++){
        const li = document.createElement("li");
        if (myLeads[i].includes(".")){
            //creates a link
            li.innerHTML = `<a target='_blank' href ="${myLeads[i]}">${myLeads[i]}</a>`;
        }
        else {
            //creates a text
            li.innerHTML = `${myLeads[i]}`;
        }
        ul.append(li);
    }
}