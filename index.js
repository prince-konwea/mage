

var imgRefreshBtn = document.getElementById("hero__image-refresh");
imgRefreshBtn.onclick =function (){
 document.getElementById("hero__image-refresh").src = "https://picsum.photos/1280/720?rand" + new Date().getTime();
}