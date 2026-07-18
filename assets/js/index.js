const cross = document.getElementById('cross');
const bar = document.getElementById('bar');
const navItem = document.getElementById('navItem');
bar.addEventListener('click', function () {
    bar.style.display = "none";
    cross.style.display = "block";
    navItem.style.display = "block";
});
cross.addEventListener('click', function () {
    cross.style.display = "none";
    bar.style.display = "block";
    navItem.style.display = "none";
})
// Heart count
const heartCounts = document.getElementsByClassName('heartCount');
for (const heartCount of heartCounts) {
    heartCount.addEventListener('click', () => {
        const heart = parseInt(document.getElementById('showHeartPoint').innerText);
        document.getElementById('showHeartPoint').innerText = heart + 1;
        redHeart();
    })
}
const heart = parseInt(document.getElementById('showHeartPoint').innerText);
function redHeart (heart){
    if (heart !== 0) {
        document.getElementById('redHeart').style.display = "block"
        document.getElementById('blankHeart').style.display = "none"
    } else {
        document.getElementById('blankHeart').style.display = "block"
        document.getElementById('redHeart').style.display = "none"
    }
}
