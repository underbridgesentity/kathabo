/* ============================================================
   Kathabo Group site behaviour
   ============================================================ */

(function () {
  "use strict";

  /* ---------- header scroll state ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("mobile-menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".mobile-menu a").forEach((a) =>
      a.addEventListener("click", () => document.body.classList.remove("mobile-menu-open"))
    );
  }

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- footer year ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- hero slideshow (home) ---------- */
  const hero = document.getElementById("hero");
  if (hero) {
    const slides = hero.querySelectorAll(".slide");
    const headline = document.getElementById("heroHeadline");
    const sub = document.getElementById("heroSub");
    const dotsWrap = document.getElementById("heroDots");

    const lines = [
      ["We create immersive brand experiences", "Integrated event production, strategic marketing and targeted media that bring your vision to life."],
      ["We tell stories that resonate", "From live activations to digital campaigns, we connect you with your audience."],
      ["We elevate brands through unforgettable moments", "Conference activations, bespoke content and powerful media partnerships."],
      ["We drive engagement from start to finish", "Seamless planning, flawless execution and measurable media impact."],
      ["We deliver results that last", "Data-driven marketing, live events and media strategies working together."],
    ];

    let current = 0;
    let timer = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Go to slide " + (i + 1));
      if (i === 0) b.classList.add("active");
      b.addEventListener("click", () => {
        go(i);
        restart();
      });
      dotsWrap.appendChild(b);
    });
    const dots = dotsWrap.querySelectorAll("button");

    function go(i) {
      current = i % slides.length;
      slides.forEach((s, k) => s.classList.toggle("active", k === current));
      dots.forEach((d, k) => d.classList.toggle("active", k === current));
      const [h, p] = lines[current % lines.length];
      headline.textContent = h;
      sub.textContent = p;
      if (!reduceMotion) {
        headline.classList.remove("swap-enter");
        void headline.offsetWidth; /* restart animation */
        headline.classList.add("swap-enter");
      }
    }

    function restart() {
      if (timer) clearInterval(timer);
      if (!reduceMotion) timer = setInterval(() => go(current + 1), 6500);
    }
    restart();
  }

  /* ---------- gallery filter + lightbox (golf) ---------- */
  const gallery = document.getElementById("golfGallery");
  if (gallery) {
    const items = Array.from(gallery.querySelectorAll("a"));
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.filter;
        items.forEach((it) => {
          const show = f === "all" || it.dataset.group === f;
          it.classList.toggle("hidden", !show);
        });
      });
    });

    /* lightbox */
    const lb = document.getElementById("lightbox");
    const lbImg = lb.querySelector("img");
    const lbCap = lb.querySelector(".caption");
    let idx = 0;

    const visibleItems = () => items.filter((i) => !i.classList.contains("hidden"));

    function openAt(item) {
      const vis = visibleItems();
      idx = vis.indexOf(item);
      render(vis);
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function render(vis) {
      const item = vis[idx];
      lbImg.src = item.href;
      lbImg.alt = item.querySelector("img").alt;
      lbCap.textContent = item.dataset.label || "";
    }
    function step(dir) {
      const vis = visibleItems();
      idx = (idx + dir + vis.length) % vis.length;
      render(vis);
    }
    function close() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }

    items.forEach((item) =>
      item.addEventListener("click", (e) => {
        e.preventDefault();
        openAt(item);
      })
    );
    lb.querySelector(".close").addEventListener("click", close);
    lb.querySelector(".prev").addEventListener("click", () => step(-1));
    lb.querySelector(".next").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------- service sub-nav active state ---------- */
  const serviceNav = document.querySelector(".service-nav");
  if (serviceNav) {
    const links = serviceNav.querySelectorAll("a");
    const blocks = Array.from(links).map((l) => document.querySelector(l.getAttribute("href")));
    const spy = () => {
      let active = 0;
      blocks.forEach((b, i) => {
        if (b && b.getBoundingClientRect().top < 220) active = i;
      });
      links.forEach((l, i) => l.classList.toggle("active", i === active));
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });
  }

  /* ---------- contact form -> mailto ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (id) => (document.getElementById(id).value || "").trim();
      const first = v("firstName");
      const last = v("lastName");
      const email = v("email");
      const phone = v("phone");
      const msg = v("message");

      if (!first || !last || !email) {
        document.getElementById("formNote").textContent = "Please fill in your first name, last name and email.";
        return;
      }

      const subject = encodeURIComponent("Website enquiry: " + first + " " + last);
      const body = encodeURIComponent(
        "Name: " + first + " " + last + "\n" +
        "Email: " + email + "\n" +
        (phone ? "Phone: " + phone + "\n" : "") +
        "\n" + (msg || "(no message)")
      );
      window.location.href = "mailto:info@kathabo.co.za?subject=" + subject + "&body=" + body;
    });
  }
})();
