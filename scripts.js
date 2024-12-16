let yes=0;
let no=0;
function increaseYes(){
    yes++;
    console.log("Yes clicked : ",yes)
    doucument.getElementByClassName("Yes").innerHTML="yes :"+yes
}
function increaseNo(){
    no++;
    console.log("No clicked: ",no)
    document.getElementById("Nocount").innerHTML="no :"+no;
}