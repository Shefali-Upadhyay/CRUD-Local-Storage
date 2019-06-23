"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserDetails =
/*#__PURE__*/
function () {
  function UserDetails() {
    _classCallCheck(this, UserDetails);

    this.arr = [];
    this.editIndex = null;
  } //delete the data from the local storage


  _createClass(UserDetails, [{
    key: "deleteData",
    value: function deleteData(index) {
      this.arr.splice(parseInt(index), 1);
      var value = JSON.stringify(this.arr);
      localStorage.setItem("localData", value);
      var td = event.target.parentNode;
      var tr = td.parentNode;
      tr.parentNode.removeChild(tr);
    } //get data from local storage and display the local storage data on the screen

  }, {
    key: "showData",
    value: function showData() {
      var tbl = document.getElementById("tableDisplay");
      var str = localStorage.getItem("localData");
      var x = tbl.rows.length;

      while (--x) {
        tbl.deleteRow(x);
      } //checking whether the local storage is not empty


      if (str != null) {
        this.arr = JSON.parse(str);

        for (var _i = 0; _i < this.arr.length; _i++) {
          var r = tbl.insertRow();
          r.innerHTML = "\n          <td>".concat(this.arr[_i].fName, "</td>\n          <td>").concat(this.arr[_i].lName, "</td>\n          <td>").concat(this.arr[_i].age, "</td>\n          <td>").concat(this.arr[_i].email, "</td>\n          <td>").concat(this.arr[_i].number, "</td>\n          <td>\n            <button type=\"button\" class=\"btn btn-warning\" onClick=\"test.editData(").concat(_i, ");\"> Edit </button>\n            <button type=\"button\" class=\"btn btn-danger\" onClick=\"test.deleteData(").concat(_i, ");\"> Delete </button>\n          </td>");
        }
      }

      document.getElementById("fName").value = "";
      document.getElementById("lName").value = "";
      document.getElementById("age").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("saveBtn").style.display = "none";
      document.getElementById("addBtn").style.display = "block";
    } //empty the local storage

  }, {
    key: "deleteLocalStorageData",
    value: function deleteLocalStorageData() {
      localStorage.clear();
      document.getElementById("tableDisplay").innerHTML = "All Data Deleted!";
    } //edit the data in the local storage

  }, {
    key: "editData",
    value: function editData(index) {
      this.editIndex = index;
      document.getElementById("fName").value = this.arr[index].fName;
      document.getElementById("lName").value = this.arr[index].lName;
      document.getElementById("age").value = this.arr[index].age;
      document.getElementById("email").value = this.arr[index].email;
      document.getElementById("number").value = this.arr[index].number;
      document.getElementById("addBtn").style.display = "none";
      document.getElementById("saveBtn").style.display = "block";
    }
  }, {
    key: "saveEdit",
    value: function saveEdit() {
      this.arr[this.editIndex] = {
        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value
      };
      localStorage.setItem("localData", JSON.stringify(this.arr));
      this.showData();
    } //add data to local storage

  }, {
    key: "addData",
    value: function addData() {
      this.arr.push({
        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value
      });
      localStorage.setItem("localData", JSON.stringify(this.arr));
      var tr = document.createElement("tr");
      tr.innerHTML = "\n    <td>".concat(name, "</td>\n    <td>").concat(age, "</td>\n    <td>").concat(email, "</td>\n    <td>").concat(contact, "</td>\n    <td>\n      <button type=\"button\" class=\"btn btn-warning\" onClick=\"test.editData(").concat(i, ");\"> Edit </button>\n      <button type=\"button\" class=\"btn btn-danger\" onClick=\"test.deleteData(").concat(i, ");\"> Delete </button>\n    </td>");
      document.getElementById("tableDisplay").appendChild(tr);
      document.getElementById("fName").value = "";
      document.getElementById("lName").value = "";
      document.getElementById("age").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("saveBtn").style.display = "none";
      document.getElementById("addBtn").style.display = "block";
    }
  }]);

  return UserDetails;
}();

var test = new UserDetails();
test.showData();