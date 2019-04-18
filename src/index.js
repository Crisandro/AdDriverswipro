import "./styles.css";
import { isNull } from "util";

document.getElementById("app").innerHTML = `
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Team Revalicious
  </a>
</nav>
<img class="_46-i img" id="srt"
src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.0-0/s180x540/47086410_337443097055986_9198533553787240448_n.png?_nc_cat=105&amp;_nc_ht=scontent.fmnl4-2.fna&amp;oh=8dba1989fe4dbe824d8e9e13a11cb2d5&amp;oe=5D3BDDEE" alt="SRT" width="180" height="85">


<div id="fullcontainer">
  <div id="scrolling">
    <div id="container">
      <div class="form-group">
          <input type="text" placeholder="name" id="name" class="no-border form-control my-1 mr-sm-2"/> 
      </div>

      <hr class="line">

      <div class="form-group row">
        <select id="select1" class="selects form-control my-1 mr-sm-3 col-sm">
          <option>***Select</option>
        </select>
        <select id="select2" class="selects form-control my-1 mr-sm-3 col-sm">
          <option>***Select</option>
        </select>
        <select id="select3" class="selects form-control my-1 mr-sm-3 col-sm">
          <option>***Select</option>
        </select>
        <button id="submit" class="custom-button col-sm">
          Submit
        </button>
      </div>

    </div>

    <div id="results"></div>
    
  </div>
</div>
<div id="contents"></div>
<div id="topresults"></div>
`;
refresh();

var resultstable = [];

function refresh() {
  var select2 = document.getElementById("select2");
  var select3 = document.getElementById("select3");
  var arr = [
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
    { count: 0, name: "Others" }
  ];
  var counter = 0;

  var table = document.getElementById("contents");
  var resultsall = document.getElementById("topresults");

  counterout(counter);

  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("div");
    add.innerHTML = arr[i].count + " | " + arr[i].name;
    add.setAttribute("class", "rows");
    table.appendChild(add);
  }

  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("option");
    var text = document.createTextNode(arr[i].name);
    add.appendChild(text);
    add.value = arr[i].name;
    var select1 = document.getElementById("select1");
    select1.appendChild(add);
  }
  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("option");
    var text = document.createTextNode(arr[i].name);
    add.appendChild(text);
    add.value = arr[i].name;
    var select1 = document.getElementById("select1");
    select2.appendChild(add);
  }
  for (var i = 0; i < arr.length; i++) {
    var add = document.createElement("option");
    var text = document.createTextNode(arr[i].name);
    add.appendChild(text);
    add.value = arr[i].name;
    var select1 = document.getElementById("select1");
    select3.appendChild(add);
  }

  document.getElementById("submit").addEventListener("click", function() {
    var selected1 = select1.value;
    var selected2 = select2.value;
    var selected3 = select3.value;
    if (
      selected1 === "***Select" ||
      selected2 === "***Select" ||
      selected3 === "***Select"
    ) {
      alert("Please Select an Ad Driver!");
      document.getElementsByClassName("selects")[0].selectedIndex = "0";
      document.getElementsByClassName("selects")[1].selectedIndex = "0";
      document.getElementsByClassName("selects")[2].selectedIndex = "0";
    } else if (
      selected1 === selected2 ||
      selected1 === selected3 ||
      selected2 === selected3
    ) {
      alert("The same selected Ad Driver!");
      document.getElementsByClassName("selects")[0].selectedIndex = "0";
      document.getElementsByClassName("selects")[1].selectedIndex = "0";
      document.getElementsByClassName("selects")[2].selectedIndex = "0";
    } else {
      counter++;
      counterout(counter);
      for (var i = 0; i < arr.length; i++) {
        if (
          selected1 === arr[i].name ||
          selected2 === arr[i].name ||
          selected3 === arr[i].name
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

      console.log("table");
      for (var i = 0; i < resultstable.length; i++) {
        console.log(resultstable[i].count + " | " + resultstable[i].name);
      }

      maketable();
      var nameagent = document.getElementById("name").value;
      createresults(nameagent, selected1, selected2, selected3);
    }
  });

  function maketable() {
    console.log("in");
    var table = document.getElementById("contents");
    var rows = document.getElementsByClassName("rows");

    if (rows.length) {
      $(".rows").remove();
    }

    for (var i = resultstable.length - 1; i >= 0; i--) {
      var add = document.createElement("div");
      add.innerHTML = resultstable[i].count + " | " + resultstable[i].name;
      add.setAttribute("class", "rows");
      table.appendChild(add);
    }

    if (counter) $(".topads").remove();
    var title = document.createElement("div");
    title.innerHTML = "TOP 3 AD CONTENT :";
    title.setAttribute("class", "topads");
    resultsall.appendChild(title);
    topads();
  }

  function createresults(name, num1, num2, num3) {
    var results = document.getElementById("results");
    var container = document.createElement("div");

    container.setAttribute("class", "contain");
    var forname = document.createElement("div");
    if (name === "") {
      name = "No Name";
    }

    forname.innerHTML = name;
    forname.setAttribute("class", "names");
    container.appendChild(forname);

    var deleteb = document.createElement("button");
    deleteb.innerHTML = "Delete";
    deleteb.setAttribute("class", "deleter");

    for (var i = 0; i < arr.length; i++) {
      if (
        num1 === arr[i].name ||
        num2 === arr[i].name ||
        num3 === arr[i].name
      ) {
        var add = document.createElement("div");
        add.innerHTML = arr[i].name;
        add.setAttribute("id", "res" + i);
        add.setAttribute("class", "res");
        container.appendChild(add);
      }
    }
    container.appendChild(deleteb);
    results.appendChild(container);
  }

  function counterout(counter) {
    if (counter) $("#countperson").remove();
    var counterout = document.createElement("div");
    counterout.innerHTML =
      "<img src='https://cdn.onlinewebfonts.com/svg/img_38228.png' height='20px'>  No. of Entries: " +
      counter;
    counterout.setAttribute("id", "countperson");
    resultsall.appendChild(counterout);
  }

  function topads() {
    var count = 0;
    var titledone = document.getElementsByClassName("topads")[0];
    for (var i = resultstable.length - 1; i >= resultstable.length - 3; i--) {
      var add = document.createElement("div");
      add.innerHTML = count + 1 + ". " + resultstable[i].name;
      titledone.appendChild(add);
      count++;
    }
  }
}
