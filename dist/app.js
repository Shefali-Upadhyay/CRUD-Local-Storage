"use strict";

var arr = new Array();
showData();

function deleteData(i) {
  localStorage.setItem('localData', JSON.stringify(JSON.parse(localStorage.getItem('localData')).splice(parseInt(i), 1)));
} //add data to local storage


function addData() {
  arr.push({
    fName: document.getElementById("fName").value,
    lName: document.getElementById("lName").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value
  });
  localStorage.setItem("localData", JSON.stringify(arr)); //displaying the added data

  showData(); // let tr=document.createElement("tr");
  // tr.innerHTML=`
  //   <td>${document.getElementById("fName").value}</td>
  //   <td>${document.getElementById("lName").value}</td>
  //   <td>${document.getElementById("age").value}</td>
  //   <td>${document.getElementById("email").value}</td>
  //   <td>${document.getElementById("number").value}</td>
  //   <td>
  //     <button type="button" class="btn btn-warning" id="editBtn"> Edit </button>
  //     <button type="button" class="btn btn-danger" onClick="deleteData(${i});"> Delete </button>
  //   </td>`;
  // document.getElementById("tableDisplay").appendChild(tr);
  //clearing the input feild

  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
}

; //get data from local storage and display the local storage data on the screen

function showData() {
  var tbl = document.getElementById("tableDisplay");
  var str = localStorage.getItem("localData");
  var x = tbl.rows.length;

  while (--x) {
    tbl.deleteRow(x);
  } //checking whether the local storage is not empty


  if (str != null) {
    arr = JSON.parse(str);

    for (var i = 0; i < arr.length; i++) {
      var r = tbl.insertRow();
      r.innerHTML = "\n          <td>".concat(arr[i].fName, "</td>\n          <td>").concat(arr[i].lName, "</td>\n          <td>").concat(arr[i].age, "</td>\n          <td>").concat(arr[i].email, "</td>\n          <td>").concat(arr[i].number, "</td>\n          <td>\n            <button type=\"button\" class=\"btn btn-warning\" id=\"editBtn\"> Edit </button>\n            <button type=\"button\" class=\"btn btn-danger\" onClick=\"deleteData(").concat(i, ");\"> Delete </button>\n          </td>");
    }
  }
}

;

function deleteLocalStorageData() {
  localStorage.clear();
  document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
}

;
document.getElementById("addBtn").addEventListener("click", addData);
document.getElementById("clearBtn").addEventListener("click", deleteLocalStorageData);