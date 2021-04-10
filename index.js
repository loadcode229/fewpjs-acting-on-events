// Your code here
document.addEventListener("keydown", function(e) {
    if (e.key === "Arrow Left") {
        moveDodgerLeft();
    } else if (e.key === "Arrow Right") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
};