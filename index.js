var amt=0;
function data(){
    var des = document.getElementById("Description").value;
    var exp =document.getElementById("Expense").value;
    amt=Number(amt)+Number(exp);
    var date =document.getElementById("Date").value;
    var table=document.getElementsByTagName('table')[0];
    var newrow = table.insertRow(2);
    var cell=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2)
    cell.innerHTML= des;
    cell2.innerHTML = exp;
    cell3.innerHTML = date;
   document.getElementById("amtprint").innerHTML= amt;
}

