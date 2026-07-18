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
function redHeart(heart) {
    if (heart !== 0) {
        document.getElementById('redHeart').style.display = "block"
        document.getElementById('blankHeart').style.display = "none"
    } else {
        document.getElementById('blankHeart').style.display = "block"
        document.getElementById('redHeart').style.display = "none"
    }
}

//Call
const cards = document.querySelectorAll('.card');
for (const card of cards) {
    const call = card.querySelector('.calls');
    call.addEventListener('click', () => {
        //decrease coin
        const coin = parseInt(document.querySelector('.coin').innerText);
        if (coin <= 0) {
            alert("✖ You have no coin");
        } else {
            //coin
            document.querySelector('.coin').innerHTML = coin - 20;
            //alert for success call
            const cardTitle = card.querySelector('.title').innerHTML;
            const number = card.querySelector('.phoneNumber').innerHTML;
            alert(`📞 ${cardTitle} ${number}`);

            //history create
            const parent = document.querySelector('.cardAlert');
            const popup = document.createElement('div');
            popup.setAttribute('role', "alert");
            popup.setAttribute('class', 'alert alertItem alert-vertical flex mb-4 justify-between sm:alert-horizontal');
            parent.appendChild(popup);
            const popup1 = document.createElement('div');
            popup.appendChild(popup1);
            const popup2 = document.createElement('h3');
            popup2.setAttribute('class', "font-bold");
            const node = document.createTextNode(cardTitle);
            popup2.appendChild(node);
            popup1.appendChild(popup2);
            const popupS2 = document.createElement('div');
            popupS2.setAttribute('class', 'text-xs');
            const node2 = document.createTextNode(number);
            popupS2.appendChild(node2)
            popup1.appendChild(popupS2);
            const time = document.createElement('p');
            // const currentTime = new Date();
            // let realTime = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
            let date = new Date();
            let n = date.toLocaleString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            const node3 = document.createTextNode(n);
            time.appendChild(node3)
            popup.appendChild(time);
        }
    })
    //Copy Clipboard
    card.querySelector('#copy').addEventListener('click', () => {
    const number = card.querySelector('.phoneNumber').innerHTML;
    navigator.clipboard.writeText(number);
    const copyNumber = parseInt(document.querySelector("#copyNumber").innerText);
    document.querySelector("#copyNumber").innerText = copyNumber + 1;
        alert("Your copy Number is " + number)

    })
}
//remove history
document.querySelector('#clear').addEventListener('click', () => {
    const alertItem = document.querySelector('.alertItem');
    alertItem.remove();
})
