var select1;
var select2;
var select3;
var table;
var resultsall;
var counterdisplay;
var add;
var rows;
var submitbutton;
var resultstable = [];
var entries = [];
var counter = 0;
var countsaresults = 0;
var flag = 0;
var arr = [
    { count: 0, name: "SFA" },
    { count: 0, name: "Weight Loss Products" },
    { count: 0, name: "Weight Loss Programs/Training" },
    { count: 0, name: "Supplement Products" },
    { count: 0, name: "Vaccines" },
    { count: 0, name: "Branded Alcohol" },
    { count: 0, name: "Selling/Promoting Illegal drugs" },
    { count: 0, name: "Selling Wrinkle Products" },
    { count: 0, name: "Selling Weapons & Accessory" },
    { count: 0, name: "Dating Site" },
    { count: 0, name: "Webinars, Seminars, Online Masterclass" },
    { count: 0, name: "Facebook Events" },
    { count: 0, name: "Selling Apartments/ Houses/ Properties" },
    { count: 0, name: "Houses/ Apartments/ Properties for rent" },
    { count: 0, name: "IG Pages" },
    { count: 0, name: "Messenger" },
    { count: 0, name: "WhatsApp" },
    { count: 0, name: "Error 403/404" },
    { count: 0, name: "Branded Shoes" },
    { count: 0, name: "Branded Apparels" },
    { count: 0, name: "Branded Multiple Products" },
    { count: 0, name: "Non Branded Shoes" },
    { count: 0, name: "Non Branded Apparels" },
    { count: 0, name: "Non Branded Jewelry" },
    { count: 0, name: "Non Branded Multiple Products" },
    { count: 0, name: "Entertainment Articles" },
    { count: 0, name: "News Articles" },
    { count: 0, name: "Quizzes" },
    { count: 0, name: "Slideshows" },
    { count: 0, name: "Quizzes with Slideshows" },
    { count: 0, name: "Employment" },
    { count: 0, name: "Gambling" },
    { count: 0, name: "Others" }
];

function initialize(){
    select1 = document.getElementById("select1");
    select2 = document.getElementById("select2");
    select3 = document.getElementById("select3");
    table = document.getElementById("contents");
    resultsall = document.getElementById("topresults");
    submitbutton = document.getElementById("submit");
    
    //for the Ad contents list
    add = document.createElement("div");
    add.innerHTML = "List of Ad Contents:";
    add.setAttribute("id", "title");
    table.appendChild(add);
    for (var i = 0; i < arr.length; i++) {
        add = document.createElement("div");
        add.innerHTML = arr[i].count + " | " + arr[i].name;
        add.setAttribute("class", "rows");
        table.appendChild(add);
    }
    
    //for options 
    for (var i = 0; i < arr.length; i++) {
        add = document.createElement("option");
        var text = document.createTextNode(arr[i].name);
        add.appendChild(text);
        add.value = arr[i].name;
        select1.appendChild(add);
    }
    for (var i = 0; i < arr.length; i++) {
        add = document.createElement("option");
        var text = document.createTextNode(arr[i].name);
        add.appendChild(text);
        add.value = arr[i].name;
        select2.appendChild(add);
    }
    for (var i = 0; i < arr.length; i++) {
        add = document.createElement("option");
        var text = document.createTextNode(arr[i].name);
        add.appendChild(text);
        add.value = arr[i].name;
        select3.appendChild(add);
    }
    
    counterout();
    
    submitbutton.addEventListener("click",function(){
        
        if (
            select1.value === "***Select" ||
            select2.value === "***Select" ||
            select3.value === "***Select"
        ) {
            alert("Please Select an Ad Driver!");
            document.getElementsByClassName("selects")[0].selectedIndex = "0";
            document.getElementsByClassName("selects")[1].selectedIndex = "0";
            document.getElementsByClassName("selects")[2].selectedIndex = "0";
        } else if (
            select1.value === select2.value ||
            select1.value === select3.value ||
            select2.value === select3.value
        ) {
            alert("The same selected Ad Driver!");
            document.getElementsByClassName("selects")[0].selectedIndex = "0";
            document.getElementsByClassName("selects")[1].selectedIndex = "0";
            document.getElementsByClassName("selects")[2].selectedIndex = "0";
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (
                    select1.value === arr[i].name ||
                    select2.value === arr[i].name ||
                    select3.value === arr[i].name
                ) {
                    arr[i].count = parseInt(arr[i].count) + 1;
                }
            }
            console.log("results!");
            arr.sort(function(a, b) {
                return a.count - b.count;
            });

            resultstable = [];
            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i].count + " | " + arr[i].name);
                resultstable.push(arr[i]);
            }
            counter++;
            counterout();
            //adding to the table list
            maketable();
            var nameagent = document.getElementById("name").value;
            createresults(nameagent, select1.value, select2.value, select3.value)
        
            $(".deleter").click(function(event) {
                //event.preventDefault();
                var str = $(this)
                .closest("#inside").text();
                console.log(str);

                var separate = str.split("-");
                console.log(separate[1]);

                $(this).closest(".contain").remove();

                for(var i=0 ; i<arr.length; i++){
                    if(separate[1] == arr[i].name ||
                       separate[2] == arr[i].name ||
                       separate[3] == arr[i].name){
                        arr[i].count--;    
                    }
                }
                counter--;
                counterout();
                maketable();
                event.stopImmediatePropagation();
            });
        }
    });
}

function counterout() {
    resultsall = document.getElementById("topresults");
    $("#countperson").remove();
    
    if(counter == 0){
        counterdisplay = document.createElement("div");
        counterdisplay.innerHTML = "CAMOTES !!!!";
        counterdisplay.setAttribute("id", "countperson");
        resultsall.appendChild(counterdisplay);
    }else{
        counterdisplay = document.createElement("div");
        counterdisplay.innerHTML = "<img src='https://cdn.onlinewebfonts.com/svg/img_38228.png' height='20px'>  No. of Entries: " + counter;
        counterdisplay.setAttribute("id", "countperson");
        resultsall.appendChild(counterdisplay);
    }
}


function maketable() {
    rows = document.getElementsByClassName("rows");

    if (rows.length) {
      $(".rows").remove();
    }

    for (var i = resultstable.length - 1; i >= 0; i--) {
      var add = document.createElement("div");
      add.innerHTML = resultstable[i].count + " | " + resultstable[i].name;
      add.setAttribute("class", "rows");
      table.appendChild(add);
    }

    $(".topads").remove();
    var title = document.createElement("div");
    title.innerHTML = "TOP 3 AD CONTENT :";
    title.setAttribute("class", "topads");
    resultsall.appendChild(title);
    
    //listing the top 3 ads
    topads();
}

function topads() {
    var count = 0;
    var first = resultstable.length-1;
    if( resultstable[first].count == 0){
        var titledone = document.getElementsByClassName("topads")[0];
        var add = document.createElement("div");
        add.innerHTML = "1. TINGBITS</br>2. NA </br>3.JUD!";
        titledone.appendChild(add);
    }
    else{
        var titledone = document.getElementsByClassName("topads")[0];
        for (var i = resultstable.length - 1; i >= resultstable.length - 3; i--) {
            var add = document.createElement("div");
            add.innerHTML = count + 1 + ". " + resultstable[i].name;
            titledone.appendChild(add);
            count++;
        }
    }
    
    
}


function createresults(name, num1, num2, num3) {
    if (name === "") {
        name = "No Name";
    }
    //entries.push({ name: name, num1: num1, num2: num2, num3: num3 });

    var results = document.getElementById("results");
    var container = document.createElement("div");
    container.setAttribute("class", "contain");
    container.setAttribute("id", countsaresults );
    container.innerHTML = 
    "<div class='names'>" + name +
    "</div><div id='inside'>-" + num1 + "</br>"+
    "-" + num2 + "</br>"+
    "-" + num3 + "</br>"+
    "<button class='deleter'></button></div></div>";
    results.appendChild(container);
    
    countsaresults++;   
}

window.addEventListener("load", initialize);
