
var selectedRow = null

function onFormSubmit() {
	     event.preventDefault();
        if (selectedRow == null){
            validate(this);
		}
        else{
            updateRecord();
		}
        resetForm();    
}
function validate(){
    var fn = document.getElementById('f1').value;
    var ln = document.getElementById('l1').value;
    var em = document.getElementById('e1').value;
    // var g = document.getElementById('gender').value;
    var g = document.getElementById('gender').innerText = gender.gender;
    var genderNew = "";
    for(i = 0; i < gender.length ; i++) {
        if(gender[i].checked){
        genderNew = " "+gender[i].value;
    }
    }

    var proffesion = document.getElementById('proffesion').value;
    var add = document.getElementById('ad').value;
    var mo = document.getElementById('mo').value;
    var up = `<button onClick="onEdit(this)">Edit</button>` ;
    var del = `<button onClick="onDelete(this)">Delete</button>`;

    var letters = /^[A-Za-z]+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (fn == '' || ln == '' || mo == '' || e1 == '') {
        alert ("please enter details...")
    }
    else if(!letters.test(fn)) {
        alert('First Name is incorrect must contain alphabets only');
    }
    
    else if(!letters.test(ln)) {
        alert('Last Name is incorrect must contain alphabets only');
    }
    else if (proffesion == '') {
        alert("Please select your designation!");
    }
    else if (add == '') {
        alert("enter valid address details");
    }
    else if(!phoneno.test(mo)) {
        alert('"mobile number is invalid"');
    }
    else {
    var table = `<tr>   
                    <td>${fn}</td>
                    <td>${ln}</td>
                    <td>${em}</td>
                    <td>${genderNew}</td>
                    <td>${proffesion}</td>
                    <td>${add}</td>
                    <td>${mo}</td>
                    <td>${up}</td>
                    <td>${del}</td>
                <tr>`;

    document.getElementById("tbl").innerHTML += table;       

    }
    
        document.getElementById('f1').value = "";
        document.getElementById('l1').value = "";
        document.getElementById('e1').value = "";
        document.getElementById('proffesion').value = "";
        document.getElementById('ad').value = "";
        document.getElementById('mo').value = "";   
        // document.getElementById('genderNew').value = "";
           
}
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("f1").value = selectedRow.cells[0].innerHTML;
        document.getElementById("l1").value = selectedRow.cells[1].innerHTML;
        document.getElementById("e1").value = selectedRow.cells[2].innerHTML;
        document.getElementById("proffesion").value = selectedRow.cells[4].innerHTML;
        document.getElementById("ad").value = selectedRow.cells[5].innerHTML;
        document.getElementById("mo").value = selectedRow.cells[6].innerHTML;
        // document.getElementById("genderNew").value = selectedRow.cells[3].innerHTML;
}
    function updateRecord() {

        var fn = document.getElementById('f1').value;
        var ln = document.getElementById('l1').value;
        var em = document.getElementById('e1').value;
        var genderNew = "";
            for(i = 0; i < gender.length ; i++) {
            if(gender[i].checked){
            genderNew = " "+gender[i].value;
            }
            }
        var proffesion = document.getElementById('proffesion').value;
        var add = document.getElementById('ad').value;
        var mo = document.getElementById('mo').value;

        selectedRow.cells[0].innerHTML = f1.value;
        selectedRow.cells[1].innerHTML = l1.value;
        selectedRow.cells[2].innerHTML = e1.value;
        selectedRow.cells[4].innerHTML = proffesion;
        selectedRow.cells[5].innerHTML = ad.value;
        selectedRow.cells[6].innerHTML = mo;
        // selectedRow.cells[3].innerHTML = genderNew;
}
    //Reset the data
    function resetForm() {
        document.getElementById("f1").value = '';
        document.getElementById("l1").value = '';
        document.getElementById("e1").value = '';
        document.getElementById("proffesion").value = '';
        document.getElementById("ad").value = '';
        document.getElementById("mo").value = '';
        // document.getElementById("genderNew").value = '';
        selectedRow = null;
}

        function onDelete(td) {
            if (confirm('Do you want to delete this record?')) {
                row = td.parentElement.parentElement;
                document.getElementById('tb1').deleteRow(row.rowIndex);
                resetForm();
            }
        }