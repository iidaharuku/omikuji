var username;
var userresult;


username = prompt("お名前を教えて下さい。");
document.getElementById("name").innerHTML = username;


var rand = Math.floor( Math.random() * 5) ;
if(rand ==0){
    userresult ="大吉";
}
if(rand ==1){
    userresult ="中中吉";
}
if(rand ==1){
    userresult ="小吉";
}
if(rand ==1){
    userresult ="吉";
}
if(rand ==1){
    userresult ="凶";
}
if(username ==""){
    document.getElementById("name").innerHTML = "空白";
}