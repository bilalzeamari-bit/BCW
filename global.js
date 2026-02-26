(() => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("header nav");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (nav) {
        nav.classList.remove("open");
      }
      if (burger) {
        burger.setAttribute("aria-expanded", "false");
      }
    });
  });

  function initRevealAnimation() {
    if (!window.IntersectionObserver) {
      return;
    }

    const targets = document.querySelectorAll(
      ".card, .offer-card, .testimonial-card, .faq-item, .contact-line, .contact-quick-btn, .contact-primary-card, .final-cta-card"
    );

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });
  }

  initRevealAnimation();
})();
