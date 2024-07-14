let img=document.getElementById('image')
document.querySelector('.f').addEventListener('click',()=>{
    console.log("first box ..")
    img.src="https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg";
    document.querySelector('.f').style.backgroundColor = "red";
    document.querySelector('.s').style.backgroundColor = "white";
    document.querySelector('.t').style.backgroundColor = "white";
    document.querySelector('.f').style.color = "white";
    document.querySelector('.s').style.color = "black";
    document.querySelector('.t').style.color = "black";
})

document.querySelector('.s').addEventListener('click',()=>{
    console.log("second box ..")
    img.src="https://ucanr.edu/blogs/food//blogfiles/106333_original.jpg";
    document.querySelector('.f').style.backgroundColor = "white";
    document.querySelector('.s').style.backgroundColor = "red";
    document.querySelector('.t').style.backgroundColor = "white";
    
    document.querySelector('.f').style.color = "black";
    document.querySelector('.s').style.color = "white";
    document.querySelector('.t').style.color = "black";


})
document.querySelector('.t').addEventListener('click',()=>{
    console.log("thread box ..")
    img.src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-105616051/105616051.jpg";
    document.querySelector('.f').style.backgroundColor = "white";
    document.querySelector('.s').style.backgroundColor = "white";
    document.querySelector('.t').style.backgroundColor = "red";
    document.querySelector('.f').style.color = "black";
    document.querySelector('.s').style.color = "black";
    document.querySelector('.t').style.color = "white";
})