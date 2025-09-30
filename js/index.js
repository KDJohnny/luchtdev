const heart = document.getElementById("clickable-heart");
const btnContainer = document.getElementById("button-container");
const textEl = document.getElementById("typewriter-text");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const message = "Do you love me? <3";

function typeWriter(text, element, speed) {
    let i = 0;
    element.style.visibility = "visible";
    element.classList.add("cursor-visible");
    btnContainer.style.opacity = 0;
    btnContainer.style.pointerEvents = "none";

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            const btnContainer = document.getElementById("button-container");
            btnContainer.style.opacity = 1;
            btnContainer.style.pointerEvents = "auto";
            setTimeout(() => {
                btnContainer.style.opacity = 1;
            }, 50);
        }
    }
    typing();
}

function noClicked(text, element, speed) {
    let i = 0;
    element.style.visibility = "visible";
    element.classList.add("cursor-visible");

    function typing() {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
    typing();
}

function deleteText(element, speed, callback) {
    let text = element.textContent;
    let i = text.length;

    function deleting() {
        if (i > 0) {
            element.textContent = text.substring(0, i - 1);
            i--;
            setTimeout(deleting, speed);
        } else {
            if (callback) callback();
        }
    }
    deleting();
}

heart.addEventListener("click", () => {
    heart.classList.add("big");

    setTimeout(() => {
        heart.style.display = "none";
        textEl.classList.remove("hidden");
        typeWriter(message, textEl, 100);
    }, 1000);
});

noBtn.addEventListener("click", () => {
    btnContainer.style.opacity = 0;
    btnContainer.style.pointerEvents = "none";

    const newMessage = "...";

    deleteText(textEl, 50, () => {
        noClicked(newMessage, textEl, 100);
    });

    setTimeout(() => {
            const finalMessage = "Ouch :( ...";
            deleteText(textEl, 100, () => {
                noClicked(finalMessage, textEl, 100);
            });
    }, 3000);
});

yesBtn.addEventListener("click", firstYesClick);

function firstYesClick() {
    btnContainer.style.opacity = 0;
    btnContainer.style.pointerEvents = "none";

    const newMessage = "I love you too <3";

    deleteText(textEl, 50, () => {
        noClicked(newMessage, textEl, 100);

        setTimeout(() => {
            const finalMessage = "Do you want to be my girlfriend?...";
            deleteText(textEl, 50, () => {
                typeWriter(finalMessage, textEl, 100);
            });
        }, 3000);
    });

    yesBtn.removeEventListener("click", firstYesClick);

    yesBtn.addEventListener("click", secondYesClick);
}

function secondYesClick() {
    btnContainer.style.opacity = 0;
    btnContainer.style.pointerEvents = "none";
    
    deleteText(textEl, 50, () => {
        noClicked("Then kiss me already! :*", textEl, 100);
    });
}