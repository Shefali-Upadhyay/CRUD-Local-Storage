  
  let arr = new Array();

  showData();

  function deleteData(i) {
    localStorage.setItem('localData', JSON.stringify(JSON.parse(localStorage.getItem('localData')).splice(parseInt(i), 1)));
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
    // let tr=document.createElement("tr");
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

  };

  //get data from local storage and display the local storage data on the screen
  function showData(){
    let tbl = document.getElementById("tableDisplay");
    let str = localStorage.getItem("localData");
    var x = tbl.rows.length;

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
            <button type="button" class="btn btn-warning" id="editBtn"> Edit </button>
            <button type="button" class="btn btn-danger" onClick="deleteData(${i});"> Delete </button>
          </td>`;
      }
    }
  };

  function deleteLocalStorageData(){
    localStorage.clear();
    document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
  };

  document.getElementById("addBtn").addEventListener("click", addData);
  document.getElementById("clearBtn").addEventListener("click", deleteLocalStorageData);
  