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

// mobile warning
const isMobileOrTablet =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(
    navigator.userAgent
  ) ||
  (window.innerWidth <= 1024 && window.innerHeight <= 1366);

$(document).ready(() => {
  $("body").css("visibility", "visible");

  const audio = $("#kuruAudio");

  if (isMobileOrTablet) {
    $("#device-warning").show();
    $("#device-warning img").on("click", () => {
      audio[0].play();
    });

    // Hide all the other sections
    $(
      ".hero, .cslu-information, .rehack-info, .cysec-info, .supp-organization, .objective, .banner, .timeline-venue, .key-activities, .join-us, footer"
    ).hide();
  }
});
