const parallel = $(".hero");
const thunderIcons = $(".thunder-layer img");
const boomImg = $(".hero-boom");
const sFactor = 100;
const logoFactor = 1500;

parallel.on("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  thunderIcons.each(function () {
    $(this).css(
      "transform",
      `translate(${x / sFactor}%, ${y / sFactor}%) rotate(${$(this).data(
        "rotate"
      )}deg)`
    );
  });

  boomImg.css("transform", `translate(${x / logoFactor}%, ${y / logoFactor}%)`);
});

// mobile detetcion
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(
    navigator.userAgent
  )

$(document).ready(() => {

  if (isMobile) {
    window.location.href = "./mobile.html"
  }
});
