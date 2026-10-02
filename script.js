function enterSite() {

    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 800);

}
