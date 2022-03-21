const product__small__galary = document.getElementById("product__small__galary");

for (let i = 0; i < product__small__galary.childNodes.length; i++) {
    const element = product__small__galary.childNodes[i];
    element.addEventListener("click", (e) => {
        console.log(e.target);
        document.getElementById("product__img").src = e.target.src;
    })
}