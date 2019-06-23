class UserDetails{

  constructor()
  {
    this.arr = [];
    this.editIndex= null;
  }

  //delete the data from the local storage
  deleteData(index) {
    this.arr.splice(parseInt(index), 1);
    let value = JSON.stringify(this.arr);
    localStorage.setItem("localData", value); 
    let td = event.target.parentNode; 
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
  }

  //get data from local storage and display the local storage data on the screen
  showData() {
    let tbl = document.getElementById("tableDisplay");
    let str = localStorage.getItem("localData");
    let x = tbl.rows.length;

  while(--x){
    tbl.deleteRow(x);
  }
    //checking whether the local storage is not empty
    if (str != null) {
      this.arr = JSON.parse(str);

      for (let i = 0; i < this.arr.length; i++) {
        let r = tbl.insertRow();
        r.innerHTML=`
          <td>${this.arr[i].fName}</td>
          <td>${this.arr[i].lName}</td>
          <td>${this.arr[i].age}</td>
          <td>${this.arr[i].email}</td>
          <td>${this.arr[i].number}</td>
          <td>
            <button type="button" class="btn btn-warning" onClick="test.editData(${i});"> Edit </button>
            <button type="button" class="btn btn-danger" onClick="test.deleteData(${i});"> Delete </button>
          </td>`;
      }
    }

    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";
  }

  //empty the local storage
  deleteLocalStorageData() {
    localStorage.clear();
    document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
  }

  //edit the data in the local storage
  editData(index) {
    this.editIndex = index;
    document.getElementById("fName").value = this.arr[index].fName;
    document.getElementById("lName").value = this.arr[index].lName;
    document.getElementById("age").value = this.arr[index].age;
    document.getElementById("email").value = this.arr[index].email;
    document.getElementById("number").value = this.arr[index].number;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "block";
  }

  saveEdit() {

    this.arr[this.editIndex] = {
      fName: document.getElementById("fName").value,
      lName: document.getElementById("lName").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value
    };

    localStorage.setItem("localData", JSON.stringify(this.arr));
    this.showData();
  }

  //add data to local storage
  addData() {
    
    this.arr.push({
      fName: document.getElementById("fName").value,
      lName: document.getElementById("lName").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value
    });

    localStorage.setItem("localData", JSON.stringify(this.arr)); 
    
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${name}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${contact}</td>
    <td>
      <button type="button" class="btn btn-warning" onClick="test.editData(${i});"> Edit </button>
      <button type="button" class="btn btn-danger" onClick="test.deleteData(${i});"> Delete </button>
    </td>`;

    document.getElementById("tableDisplay").appendChild(tr);
    
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";

  }
}

let test = new UserDetails();
test.showData();