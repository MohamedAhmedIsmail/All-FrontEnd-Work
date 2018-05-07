var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
function choose()
{
    var rand=Math.floor(Math.random()*images.length);
    document.getElementById("mypicture").src=images[rand];
}
$(".btn").on("click",function(){
    choose();
});
