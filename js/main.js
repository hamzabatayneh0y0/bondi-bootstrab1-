let lis = document.querySelectorAll(".our-works .list li");
let imgs = document.querySelectorAll(".our-works .img-holder .box");
lis.forEach((li) => {
  li.onclick = (ev) => {
    lis.forEach((li) => {
      li.classList.remove("main-btn", "rounded-pill");
    });
    ev.target.classList.add("main-btn", "rounded-pill");
    imgs.forEach((img) => {
      img.style.display = "none";
      if (li.innerHTML.toLowerCase() === "all") {
        img.style.display = "block";
      } else
        document
          .querySelectorAll(
            `.our-works .img-holder .box[data-work=${li.innerHTML}]`
          )
          .forEach((el) => {
            el.style.display = "block";
          });
    });
  };
});
