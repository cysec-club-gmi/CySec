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

  // highlight button for past events
  const y1 = document.querySelector(".y1");
  const y2 = document.querySelector(".y2");
  var yearHighlightStatus = "2025";

  const displayPastEvents = (year, data) => {
    const container = document.querySelector(".events-container");
    container.innerHTML = "";

    const yearKey = `year${year}`;
    const events = data.events.pastEvent[yearKey];
    const pathImage = `./resources/past events/${year} event/`;

    events.forEach((event, index) => {
      const isWhite = index % 2 === 0;
      const isLast = index === events.length - 1;

      const pageDiv = document.createElement("div");
      pageDiv.className = isWhite ? "white-page" : "grey-page";

      pageDiv.innerHTML = `
      <div class="content">
        <div class="content-container">
          ${
            isWhite
              ? `
            <div class="image-sliding" >
              <div class="slider-container" id="event-slide">
                <div class="slider">
                  ${event.image
                    .map(
                      (img, i) => `
                      <div class="slide">
                        <img src="${pathImage + img}" alt="Slide ${i + 1}" />
                      </div>
                    `
                    )
                    .join("")}
                </div>
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
              </div>
              <div class="dots-container"></div>
            </div>
            <div class="text">
              <h4>🚩 ${event.title || ""}</h4>
              <p>${event.description || ""}</p>
            </div>
          `
              : `
            <div class="text">
              <div class="text-wrap">
                <h4>🚩 ${event.title || ""}</h4>
                <p>${event.description || ""}</p>
              </div>
            </div>
            <div class="image-sliding" >
              <div class="slider-container" id="event-slide">
                <div class="slider">
                ${event.image
                  .map(
                    (img, i) => `
                    <div class="slide">
                      <img src="${pathImage + img}" alt="Slide ${i + 1}" />
                    </div>
                  `
                  )
                  .join("")}
              </div>
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
              </div>
              <div class="dots-container"></div>
            </div>
          `
          }
        </div>
      </div>
      ${
        isLast
          ? `
          <div class="coming-soon-curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
              class="shape-fill"
            ></path>
          </svg>
          </div>`
          : `<div class="wave">
          ${
            isWhite
              ? `
            <div class="grey-page-wave-blue-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,
                  172-41.86,82.39-16.72,168.19-17.73,
                  250.45-.39C823.78,31,906.67,72,985.66,
                  92.83c70.05,18.48,146.53,26.09,214.34,
                  3V0H0V27.35A600.21,600.21,0,0,0,
                  321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>
            <div class="grey-page-wave-grey-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,
                  172-41.86,82.39-16.72,168.19-17.73,
                  250.45-.39C823.78,31,906.67,72,985.66,
                  92.83c70.05,18.48,146.53,26.09,214.34,
                  3V0H0V27.35A600.21,600.21,0,0,0,
                  321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>
          `
              : `
            <div class="grey-page-wave-blue-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,
                  172-41.86,82.39-16.72,168.19-17.73,
                  250.45-.39C823.78,31,906.67,72,985.66,
                  92.83c70.05,18.48,146.53,26.09,214.34,
                  3V0H0V27.35A600.21,600.21,0,0,0,
                  321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>
            <div class="grey-page-wave-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,
                  172-41.86,82.39-16.72,168.19-17.73,
                  250.45-.39C823.78,31,906.67,72,985.66,
                  92.83c70.05,18.48,146.53,26.09,214.34,
                  3V0H0V27.35A600.21,600.21,0,0,0,
                  321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>
          `
          }
        </div>`
      }
    `;

      container.appendChild(pageDiv);
    });
    initializeSliders();
  };

  const displayLatestEvent = (data, img, h4, p) => {
    const newImg = document.createElement("img");
    const title = h4;
    const desc = p;
    year = "2025";
    imgPath = `./resources/past events/${year} event/`;

    img.appendChild(newImg);
    newImgName = data.events.pastEvent.year2025[0].image[0];
    newImg.src = imgPath + newImgName;
    title.textContent = `🚩 ${data.events.pastEvent.year2025[0].title}`;
    desc.textContent = data.events.pastEvent.year2025[0].description;
  };

  // hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger?.addEventListener("click", (e) => {
    navMenu.classList.toggle("active");

    hamburger.style.color = navMenu.classList.contains("active")
      ? "black"
      : "white";

    e.stopPropagation();
  });

  // when user click outside hamburger and menu
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navMenu.classList.remove("active");
      hamburger.style.color = "white";
    }
  });

  // image sliding
  const initializeSliders = () => {
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
  };

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

      if (
        latestEventimgElement &&
        latestEventh4Element &&
        latestEventPElement
      ) {
        displayLatestEvent(
          data,
          latestEventimgElement,
          latestEventh4Element,
          latestEventPElement
        );
      }

      if (upomingEventPElement) {
        upomingEventPElement.textContent = data.events.upcomingEvent.title;
      }

      if (upomingEventImgElement && upomingEventPElement) {
        if (data.events.upcomingEvent.image.length == 0) {
          const buttonReg = document.querySelector(
            "#event .sec-section .content button"
          );
          buttonReg.style.display = "none";
          upomingEventImgElement.src =
            "./resources/events/NO UPCOMING EVENT.png";
          upomingEventImgElement.style = "margin-bottom: 5rem;";
        } else {
          const buttonReg = document.querySelector(
            "#event .sec-section .content button a"
          );
          upomingEventImgElement.src = `./resources/events/${data.events.upcomingEvent.image}`;
          buttonReg.href = data.events.upcomingEvent.link;
        }
      }

      if (currentPage === "events.html") {
        displayPastEvents("2025", data);
      }

      if (currentPage === "events.html") {
        y1.addEventListener("click", () => {
          y1.classList.add("active-year");
          y2.classList.remove("active-year");
          yearHighlightStatus = "2024";
          displayPastEvents(yearHighlightStatus, data);
        });

        y2.addEventListener("click", () => {
          y2.classList.add("active-year");
          y1.classList.remove("active-year");
          yearHighlightStatus = "2025";
          displayPastEvents(yearHighlightStatus, data);
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  initializeSliders();
  main();
});
