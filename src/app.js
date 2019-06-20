var arr = new Array();
var editIndex= null;
showData(); 
//
//delete the data from the local storage
function deleteData(index) {
  arr.splice(parseInt(index), 1);
  var value = JSON.stringify(arr);
  localStorage.setItem("localData", value); 
  
  //display the local storage data after deleting
  //todo; DELETE ROW INSTEAD OF SHOWDATA
  //showData();
}; 

//edit the data in the local storage
function editData(index) {
  editIndex = index;
  document.getElementById("fName").value = arr[index].fName;
  document.getElementById("lName").value = arr[index].lName;
  document.getElementById("age").value = arr[index].age;
  document.getElementById("email").value = arr[index].email;
  document.getElementById("number").value = arr[index].number;
  document.getElementById("addBtn").style.display = "none";
  document.getElementById("saveBtn").style.display = "block";
}; 

document.getElementById("saveBtn").addEventListener("click", function () {

  arr[editIndex].fName = document.getElementById("fName").value;
  arr[editIndex].lName = document.getElementById("lName").value;
  arr[editIndex].age = document.getElementById("age").value;
  arr[editIndex].email = document.getElementById("email").value;
  arr[editIndex].number = document.getElementById("number").value;

  // if(arr[editIndex].fName.trim()==""){ 
  //   alert("Please fill Your First Name!"); 
  //   return false; 
  // } 
  // if(arr[editIndex].email.trim()==""){ 
  //   alert("Please fill Your Email Address!"); 
  //   return false; 
  // } 
  // if(arr[editIndex].number.trim()==""){ 
  //   alert("Please fill Your Contact Number!"); 
  //   return false; 
  // } 

  localStorage.setItem("localData", JSON.stringify(arr));
  showData();
});

//add data to local storage
function addData() {
  let var1 = document.getElementById("fName").value;
  let var2 = document.getElementById("lName").value;
  let var3 = document.getElementById("age").value;
  let var4 = document.getElementById("email").value;
  let var5 = document.getElementById("number").value;

  // if(var1.trim()==""){ 
  //   alert("Please fill Your First Name!"); 
  //   return false; 
  // } 
  // if(var4.trim()==""){ 
  //   alert("Please fill Your Email Address!"); 
  //   return false; 
  // } 
  // if(var5.trim()==""){ 
  //   alert("Please fill Your Contact Number!"); 
  //   return false; 
  // } 

  arr.push({
    fName: var1,
    lName: var2,
    age: var3,
    email: var4,
    number: var5
  });

  localStorage.setItem("localData", JSON.stringify(arr)); 
  
  //displaying the added data
  showData(); 
  
  //clearing the input feild
  init();
}; 

//get data from local storage and display the local storage data on the screen
function showData() {
  var tbl = document.getElementById("tableDisplay");
  var str = localStorage.getItem("localData");
  var x = tbl.rows.length;

  while (--x) {
    tbl.deleteRow(x);
  } 
  
  //checking whether the local storage is not empty
  if (str != null) {
    arr = JSON.parse(str);

    for (var i = 0; i < arr.length; i++) {
      var r = tbl.insertRow();
      r.innerHTML=`
        <td>${arr[i].fName}</td>
        <td>${arr[i].lName}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].number}</td>
        <td>
          <button type="button" class="btn btn-warning" onClick="editData(${i});"> Edit </button>
          <button type="button" class="btn btn-danger" onClick="deleteData(${i});"> Delete </button>
        </td>`;
    }
  }

  init();
}; 

//how the screen should look initially
function init() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("saveBtn").style.display = "none";
  document.getElementById("addBtn").style.display = "block";
}; 

//empty the local storage
function deleteLocalStorageData() {
  localStorage.clear();
  document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
};

// document.getElementById("addBtn").addEventListener("click", addData);
document.getElementById("clearBtn").addEventListener("click", deleteLocalStorageData);