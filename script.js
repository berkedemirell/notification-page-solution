

const messageDivs = document.querySelectorAll(".notifi-div")
const redDot = document.querySelectorAll(".red-dot")
const readAllButton = document.querySelector(".mark-all")
const number = document.querySelector(".number")
const userP = document.querySelector(".user-p")
const unread = document.querySelectorAll(".not-read")

console.log(unread);

const getHover = () => {
    messageDivs.forEach(div => {
        if(div.classList.contains("not-read")) {
            div.classList.add("unread")
        } else {
            return
        }
    })
}
getHover();



readAllButton.addEventListener("click", () => {
    messageDivs.forEach(div => {
        if(div.classList.contains("not-read")) {
            div.removeChild(div.lastElementChild)
        }
        div.classList.remove("not-read")
        div.classList.remove("unread");
    });
    number.innerHTML = "0";
})



const getDot = () => {
    let html = `
        <span class="red-dot"></span>
        `
        messageDivs.forEach(div => {
            if(div.classList.contains("not-read")) {
                div.insertAdjacentHTML("beforeend", html)
        } else {
            return 
        }
    })
    number.innerHTML = unread?.length;
}
getDot();

