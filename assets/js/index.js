const cross = document.getElementById('cross');
const bar = document.getElementById('bar');
const navItem = document.getElementById('navItem');
bar.addEventListener('click',function(){
    bar.style.display = "none";
    cross.style.display = "block";
    navItem.style.display = "block";
});
cross.addEventListener('click',function(){
    cross.style.display = "none";
    bar.style.display = "block",
    navItem.style.display = "none";
})