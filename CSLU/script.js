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

// mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const currentPage = window.location.pathname;

if (isMobile && !currentPage.includes("mobile.html")) {
  // mobile user on desktop page → redirect to mobile.html
  window.location.replace("./mobile.html");
} else if (!isMobile && currentPage.includes("mobile.html")) {
  // desktop user on mobile page → redirect to index.html
  window.location.replace("./index.html");
} else {
  // correct page for the device → show content
  document.addEventListener("DOMContentLoaded", () => {
    document.body.style.visibility = "visible";
  });
}
