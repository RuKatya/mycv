const hob = document.getElementById("hobbies")
const hobBtn = document.getElementById("btnHobbie")
const closeBtn = document.getElementById("btnClose")

hobBtn.addEventListener('click', () => {
    console.log('hi')
    hob.style.display = "block"
    hobBtn.style.display = "none"
})

closeBtn.addEventListener('click', () => {
    console.log('bye')
    hob.style.display = "none"
    hobBtn.style.display = "block"
})



