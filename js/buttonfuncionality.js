const buttons=document.querySelectorAll(".tab-btn")

const setActiveButton=(clickedBtn)=>{
    buttons.forEach(btn=>{
        btn.classList.remove("bg-[#4A00FF]" ,"text-white")
    })
    clickedBtn.classList.add("bg-[#4A00FF]" ,"text-white")
}

document.getElementById("all-btn").addEventListener("click", (e) => {
    setActiveButton(e.target);
    showAll();
});

document.getElementById("open-btn").addEventListener("click", (e) => {
    setActiveButton(e.target);
    showOpen();
});

document.getElementById("closed-btn").addEventListener("click", (e) => {
    setActiveButton(e.target);
    showClosed();
});