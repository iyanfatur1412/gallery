let array = ["logo1", "logo2", "badge", "brosur", "logo3", "calendar-web", "logo4", "vexel-art", "logo5", "poster", "poster2", "poster-mockup", "poster2-mockup", "poster-web", "vexel-art2", "world-hand", "eri-chan", "isoplus"];
const content = document.querySelector(".content");
const target = document.querySelector(".target");

getImage();



function getImage() {
    let card = "";
    array.forEach(item => card += postImage(item));
    content.innerHTML = card;
    getTarget();
}


function getTarget() {
    const btn = document.querySelectorAll(".post");
    let post = [...btn];
    post.map(item => {
        item.addEventListener("click", function() {
            let card = postTarget(item.dataset.src);
            target.innerHTML = card;
            target.style.left = "0";
            checkSize();
            closeTab();
        })
    })

}

function checkSize() {
    const img = document.querySelector(".post-target img");
    if(img.clientWidth >= img.clientHeight) {
        if(document.body.clientWidth > 512) {
            img.style.width = "40%";
        }else {
            img.style.width = "80%";
        }
    }else {
        img.style.height = "90%";
    }
}

function postImage(data) {
    return `
    <div class="post" data-src="${data}">
        <img src="bahan/${data}.jpg" alt="${data}">
    </div>
    `
}

function postTarget(data) {
    return `
    <span class="close">x</span>
    <div class="post-target">
        <img src="bahan/${data}.jpg" alt="${data}">
    </div>
    `
}


function closeTab() {
    const close = document.querySelector(".close");
    close.addEventListener("click", function() {
        target.style.left = "-120%";
        console.log("ok")
    })
}