function addRow() {
    var email = document.getElementById('email').value;
    var table = document.querySelector('#emailListTable');
    var newRow = table.insertRow(table.rows.length / 2 + 1);
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML = '<input id="isEnabledCheck" type="checkbox" name="isEnabledCheck">';
    cel2.innerHTML = email;
    cel3.innerHTML = '<button onclick="deleteRow(this)" class="delete"><i class="fa fa-trash"></i></button>';
}

function deleteRow(activeRow) {
    var i = activeRow.parentNode.parentNode.rowIndex;
    document.querySelector('#emailListTable').deleteRow(i);
}

function searchEmailListTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("emailListTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function displayChecked() {
    var display = "";
    var onlyChecked = document.getElementById('showEnabled');
    var checkboxes = document.getElementsByName("isEnabledCheck");
    for (var i = 0; i < checkboxes.length; i++) {
        if (onlyChecked.checked) {
            if (checkboxes[i].checked) {
                checkboxes[i].parentNode.parentNode.style.display = "table-row";
            } else {
                checkboxes[i].parentNode.parentNode.style.display = "none";
            }
        } else {
            checkboxes[i].parentNode.parentNode.style.display = "table-row";
        }
    }
}Î