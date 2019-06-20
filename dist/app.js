"use strict";

var arr = new Array();
var editIndex = null;
showData(); //delete the data from the local storage

function deleteData(index) {
  arr.splice(parseInt(index), 1);
  var value = JSON.stringify(arr);
  localStorage.setItem("localData", value); //display the local storage data after deleting

  showData();
}

; //edit the data in the local storage

function editData(index) {
  editIndex = index;
  document.getElementById("fName").value = arr[index].fName;
  document.getElementById("lName").value = arr[index].lName;
  document.getElementById("age").value = arr[index].age;
  document.getElementById("email").value = arr[index].email;
  document.getElementById("number").value = arr[index].number;
  document.getElementById("addBtn").style.display = "none";
  document.getElementById("saveBtn").style.display = "block";
}

;
document.getElementById("saveBtn").addEventListener("click", function () {
  arr[editIndex].fName = document.getElementById("fName").value;
  arr[editIndex].lName = document.getElementById("lName").value;
  arr[editIndex].age = document.getElementById("age").value;
  arr[editIndex].email = document.getElementById("email").value;
  arr[editIndex].number = document.getElementById("number").value;
  localStorage.setItem("localData", JSON.stringify(arr));
  showData();
}); //add data to local storage

function addData() {
  arr.push({
    fName: document.getElementById("fName").value,
    lName: document.getElementById("lName").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value
  });
  localStorage.setItem("localData", JSON.stringify(arr)); //displaying the added data

  showData(); //clearing the input feild

  init();
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
      r.innerHTML = "\n        <td>".concat(arr[i].fName, "</td>\n        <td>").concat(arr[i].lName, "</td>\n        <td>").concat(arr[i].age, "</td>\n        <td>").concat(arr[i].email, "</td>\n        <td>").concat(arr[i].number, "</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-warning\" onClick=\"editData(").concat(i, ");\"> Edit </button>\n          <button type=\"button\" class=\"btn btn-danger\" onClick=\"deleteData(").concat(i, ");\"> Delete </button>\n        </td>");
    }
  }

  init();
}

; //how the screen should look initially

function init() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("saveBtn").style.display = "none";
  document.getElementById("addBtn").style.display = "block";
}

; //empty the local storage

function deleteLocalStorageData() {
  localStorage.clear();
  document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
}

;
document.getElementById("addBtn").addEventListener("click", addData);
document.getElementById("clearBtn").addEventListener("click", deleteLocalStorageData);