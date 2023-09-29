// ==========  LIGHT ON
document.querySelector("#on").addEventListener("click", function () {
    document.querySelector("#blubImg").src = "./lighton.jpg";
});
// ==========  LIGHT OF
document.querySelector("#of").addEventListener("click", function () {
    document.querySelector("#blubImg").src = "./lightof.jpg";
});
// ==========  LIGHT ON/OF
document.querySelector("#toggleBtn").addEventListener("click", function () {
    let setActive = document
        .querySelector("#toggleBtn")
        .classList.toggle("toggleLight");
    if (setActive === true) {
        document.querySelector("#toggleBtn").innerHTML = "on";
        document.querySelector("#blubImg").src = "./lighton.jpg";
        document.querySelector("#toggleBtn").innerHTML = "on";
    } else if (setActive === false) {
        document.querySelector("#blubImg").src = "./lightof.jpg";
        document.querySelector("#toggleBtn").innerHTML = "of";
    }
});
