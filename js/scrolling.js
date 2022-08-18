const boxes = document.querySelectorAll(".scrolling")
const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((scrolling) => {
        const boxTop = scrolling.getBoundingClientRect().top;
        if(boxTop < triggerBottom) scrolling.classList.add("show");
        else scrolling.classList.remove("show");
        });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()