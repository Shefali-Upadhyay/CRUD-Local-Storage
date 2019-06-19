
  let arr = new Array();

  showData();

  function deleteData(index) {
    arr.splice(parseInt(index), 1);
    let value = JSON.stringify(arr);
    localStorage.setItem("localData",value);
    showData();
  }

  function editData(index) {

    document.getElementById("fName").value = arr[index].fName;
    document.getElementById("lName").value = arr[index].lName;
    document.getElementById("age").value = arr[index].age;
    document.getElementById("email").value = arr[index].email;
    document.getElementById("number").value = arr[index].number;

    document.getElementById("addBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "block";

    document.getElementById("saveBtn").addEventListener("click", () => {
      let localData = JSON.parse(localStorage.localData);
      localData[index].fName = document.getElementById("fName").value;
      localData[index].lName = document.getElementById("lName").value;
      localData[index].age = document.getElementById("age").value;
      localData[index].email = document.getElementById("email").value;
      localData[index].number = document.getElementById("number").value;
      localStorage.setItem("localData", JSON.stringify(localData));
      showData();
    });

  }

  //add data to local storage
  function addData(){
    arr.push({
      fName:document.getElementById("fName").value,
      lName:document.getElementById("lName").value,
      age:document.getElementById("age").value,
      email:document.getElementById("email").value,
      number:document.getElementById("number").value,
    });
    localStorage.setItem("localData",JSON.stringify(arr));
  
    //displaying the added data
    showData();

    //clearing the input feild
    init();
  };

  //get data from local storage and display the local storage data on the screen
  function showData(){
    let tbl = document.getElementById("tableDisplay");
    let str = localStorage.getItem("localData");
    let x = tbl.rows.length;

    while(--x){
      tbl.deleteRow(x);
    }
    //checking whether the local storage is not empty
    if(str != null){
      arr = JSON.parse(str);
      for( let i=0; i<arr.length ; i++ ){
        let r = tbl.insertRow();
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

  function init(){
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";
  };

  function deleteLocalStorageData(){
    localStorage.clear();
    document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
  };

  document.getElementById("addBtn").addEventListener("click", addData);
  document.getElementById("clearBtn").addEventListener("click", deleteLocalStorageData);
  