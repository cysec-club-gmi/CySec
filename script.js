document.addEventListener("DOMContentLoaded", () => {
  // clicked header button
  let header_button = document.querySelectorAll(".header-nav a");

  header_button.forEach((link) => {
    link.addEventListener("click", function () {
      header_button.forEach((el) => el.classList.remove("clicked"));
      this.classList.add("clicked");
    });
  });

  // highlight button for different page
  const committee = document.getElementById("committee");
  const pastEvents = document.getElementById("events");
  const currentPage = window.location.pathname.split("/").pop();

  const diffPageHighlight = (committee, events) => {
    if (currentPage === "committee.html") {
      committee.classList.add("clicked");
    }

    if (currentPage === "events.html") {
      events.classList.add("clicked");
    }
  };

  diffPageHighlight(committee, pastEvents);

  // event button dropdown
  const dropbtn = document.querySelector(".dropbtn");
  const dropdown = dropbtn?.closest(".dropdown");

  dropbtn?.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown?.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });

  // hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger?.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    hamburger.style.color = navMenu.classList.contains("active")
      ? "black"
      : "white";
  });

  // image sliding
  document.querySelectorAll(".image-sliding").forEach((container) => {
    let currentIndex = 1;
    const slider = container.querySelector(".slider");
    const slides = container.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const dotsContainer = container.querySelector(".dots-container");
    let isSliding = false;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    const updatedSlides = container.querySelectorAll(".slide");
    const totalUpdatedSlides = updatedSlides.length;

    for (let i = 0; i < totalSlides; i++) {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => goToSlide(i + 1));
      dotsContainer.appendChild(dot);
    }

    const dots = container.querySelectorAll(".dot");
    updateDots();

    slider.style.transform = `translateX(${-currentIndex * 100}%)`;

    function updateSlide(withTransition = true) {
      if (withTransition) {
        isSliding = true;
        slider.style.transition = "transform 0.5s ease-in-out";
      } else {
        slider.style.transition = "none";
      }

      slider.style.transform = `translateX(${-currentIndex * 100}%)`;

      setTimeout(() => {
        isSliding = false;
      }, 500);

      updateDots();
    }

    function moveSlide(direction) {
      if (isSliding) return;

      currentIndex += direction;
      updateSlide(true);

      setTimeout(() => {
        if (currentIndex === totalUpdatedSlides - 1) {
          currentIndex = 1;
          updateSlide(false);
        } else if (currentIndex === 0) {
          currentIndex = totalUpdatedSlides - 2;
          updateSlide(false);
        }
      }, 500);
    }

    function goToSlide(slideNumber) {
      if (isSliding) return;
      currentIndex = slideNumber;
      updateSlide(true);
    }

    function updateDots() {
      dots.forEach((dot) => dot.classList.remove("active"));
      let realIndex =
        currentIndex === totalUpdatedSlides - 1
          ? 1
          : currentIndex === 0
          ? totalSlides
          : currentIndex;
      dots[realIndex - 1].classList.add("active");
    }

    let slideInterval = setInterval(() => moveSlide(1), 3000);

    container
      .querySelector(".slider-container")
      .addEventListener("mouseover", () => clearInterval(slideInterval));
    container
      .querySelector(".slider-container")
      .addEventListener("mouseleave", () => {
        slideInterval = setInterval(() => moveSlide(1), 3000);
      });

    container
      .querySelector(".prev")
      .addEventListener("click", () => moveSlide(-1));
    container
      .querySelector(".next")
      .addEventListener("click", () => moveSlide(1));
  });

  const trandingfunc = () => {
    let trandingSlider = document.querySelector(".tranding-slider");

    if (trandingSlider) {
      var TrandingSlider = new Swiper(trandingSlider, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  };

  trandingfunc();

  // fetch json data
  async function fetchData() {
    try {
      const res = await fetch("./data/data.json");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("file not found", err);
    }
  }

  // handle the data
  async function main() {
    try {
      const data = await fetchData();
      if (!data) {
        console.error("data is missing");
        return;
      }

      const latestEventimgElement = document.querySelector(
        "#event .first-section .content .content-container .image-crop .container"
      );
      const latestEventh4Element = document.querySelector(
        "#event .first-section .content .content-container .text h4"
      );
      const latestEventPElement = document.querySelector(
        "#event .first-section .content .content-container .text p"
      );

      const upomingEventPElement = document.querySelector(
        "#event .sec-section .head-text p"
      );
      const upomingEventImgElement = document.querySelector(
        "#event .sec-section .content .image-wrapper img"
      );

      if (latestEventimgElement) {
        const newImg = document.createElement("img");
        latestEventimgElement.appendChild(newImg);
        newImg.src = data.events.latestEvent.image;
      }

      if (latestEventh4Element) {
        latestEventh4Element.textContent += data.events.latestEvent.title;
      }

      if (latestEventPElement) {
        latestEventPElement.innerHTML = data.events.latestEvent.description;
      }

      if (upomingEventPElement) {
        upomingEventPElement.innerHTML = data.events.upcomingEvent.title;
      }

      if (upomingEventImgElement) {
        if (data.events.upcomingEvent.image.length == 0) {
          const buttonReg = document.querySelector(
            "#event .sec-section .content button"
          );

          buttonReg.style.display = "none";
          upomingEventImgElement.src = "./resources/events/NO UPCOMING EVENT.png";
          upomingEventImgElement.style = "margin-bottom: 5rem;";
        } else {
          upomingEventImgElement.src = data.events.upcomingEvent.image;
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  main();
});
