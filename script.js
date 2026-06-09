document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       0. FLOATING PARTICLES
       ========================================= */
  function createParticles() {
    const container = document.createElement("div");
    container.classList.add("particles-container");
    document.body.prepend(container);

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size, position, and duration
      const size = Math.random() * 20 + 10; // 10px to 30px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 15 + 10; // 10s to 25s
      const delay = Math.random() * 5; // 0s to 5s

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `100%`; // Start from bottom
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      container.appendChild(particle);
    }
  }



  /* =========================================
       0.0. INJECT MISSING UI ELEMENTS
       ========================================= */
  function injectMissingUI() {
    const uiElements = [
      { tag: "div", class: "noise-overlay" },
      { tag: "div", class: "mesh-gradient" },
      { tag: "div", class: "cursor-dot" },
      { tag: "div", class: "cursor-outline" },
    ];

    uiElements.forEach((el) => {
      if (!document.querySelector(`.${el.class}`)) {
        const div = document.createElement(el.tag);
        div.classList.add(el.class);
        document.body.appendChild(div);
      }
    });

    // Re-select cursor elements if they were just injected
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    // Move UI elements to the top of body for consistency
    const overlay = document.querySelector(".noise-overlay");
    const mesh = document.querySelector(".mesh-gradient");
    if (overlay) document.body.prepend(overlay);
    if (mesh) document.body.prepend(mesh);
  }

  injectMissingUI();
  createParticles();

  /* =========================================
       1. SCROLL ANIMATIONS (Intersection Observer)
       ========================================= */
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Elements to animate
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  /* =========================================
       2. TYPING EFFECT (Only if element exists)
       ========================================= */
  const textElement = document.querySelector(".typing-text");

  function type() {
    if (!textElement) return;
    const roles = ["Java Enthusiast", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, 500);
      } else {
        setTimeout(typeLoop, isDeleting ? 100 : 200);
      }
    }
    typeLoop();
  }

  /* =========================================
     3. CUSTOM CURSOR & MAGNETIC EFFECT
     ========================================= */
  let cursorDot = document.querySelector(".cursor-dot");
  let cursorOutline = document.querySelector(".cursor-outline");

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Re-select if null (happens if elements were injected after initialization)
    if (!cursorDot) cursorDot = document.querySelector(".cursor-dot");

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function animateCursor() {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * 0.15;
    outlineY = outlineY + distY * 0.15;

    // Re-select if null
    if (!cursorOutline)
      cursorOutline = document.querySelector(".cursor-outline");

    if (cursorOutline) {
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  function bindCursorHovers() {
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, .project-card-glass, .skill-card, .contact-card, .back-btn, .btn-github, .btn-demo",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!cursorOutline)
          cursorOutline = document.querySelector(".cursor-outline");
        if (cursorOutline) cursorOutline.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        if (cursorOutline) cursorOutline.classList.remove("hover");
      });
    });
  }

  bindCursorHovers();

  // Magnetic Buttons
  const magnets = document.querySelectorAll(".btn, .logo");
  magnets.forEach((magnet) => {
    magnet.addEventListener("mousemove", (e) => {
      const rect = magnet.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      magnet.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });

    magnet.addEventListener("mouseleave", () => {
      magnet.style.transform = `translate(0px, 0px) scale(1)`;
    });
  });

  /* =========================================
     4. NAVBAR & PROGRESS SCROLL EFFECT
     ========================================= */
  const navbar = document.querySelector(".navbar");
  const progressBar = document.createElement("div");
  progressBar.classList.add("page-progress");
  document.body.prepend(progressBar);

  window.addEventListener("scroll", () => {
    // Navbar effect
    if (window.scrollY > 50) {
      if (navbar) navbar.classList.add("scrolled");
    } else {
      if (navbar) navbar.classList.remove("scrolled");
    }

    // Progress Scroll
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";
  });

  /* =========================================
     4.1. MOBILE HAMBURGER MENU TOGGLE
     ========================================= */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }

  // 3D Tilt Effect for Cards
  const tiltCards = document.querySelectorAll(
    ".project-card-glass, .skill-card, .glass-card, .contact-card, .featured-card",
  );
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });

  /* =========================================
     5. FLOATING ACTION BUTTON
     ========================================= */
  const fabMain = document.getElementById("fabMain");
  const fabMenu = document.getElementById("fabMenu");

  if (fabMain && fabMenu) {
    fabMain.addEventListener("click", () => {
      fabMain.classList.toggle("active");
      fabMenu.classList.toggle("active");

      // Update icon
      const icon = fabMain.querySelector("i");
      if (fabMain.classList.contains("active")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-plus");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!fabMain.contains(e.target) && !fabMenu.contains(e.target)) {
        fabMain.classList.remove("active");
        fabMenu.classList.remove("active");
        const icon = fabMain.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-plus");
      }
    });
  }

  /* =========================================
     6. THEME SWITCHER
     ========================================= */
  const themeBtns = document.querySelectorAll(".theme-btn");
  const savedTheme = localStorage.getItem("portfolio-theme") || "purple";

  // Apply saved theme on load
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateActiveBtn(savedTheme);

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("portfolio-theme", theme);
      updateActiveBtn(theme);
    });
  });

  function updateActiveBtn(theme) {
    themeBtns.forEach((btn) => {
      if (btn.getAttribute("data-theme") === theme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  /* =========================================
     7. CODE EDITOR TABS
     ========================================= */
  const editorTabs = document.querySelectorAll(".editor-tab");
  const codeContents = document.querySelectorAll(".code-content");

  editorTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      editorTabs.forEach((t) => t.classList.remove("active"));
      codeContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Show corresponding content
      const lang = tab.getAttribute("data-lang");
      const targetContent = document.getElementById(`code-${lang}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  type();

  /* =========================================
       0.1. BACK TO TOP & SMOOTH SCROLL
       ========================================= */
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Smooth scroll for footer links
  document.querySelectorAll(".footer-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  /* =========================================
     CONTACT FORM - EmailJS Integration
     ========================================= */

  // Initialize EmailJS (User needs to replace with their credentials)
  // Get your credentials from: https://www.emailjs.com/
  const EMAILJS_CONFIG = {
    serviceID: "service_82ikemk", // Replace with your EmailJS Service ID
    templateID: "template_67j7w4q", // Replace with your EmailJS Template ID
    publicKey: "7UP_GjPBcrLiMOJuY", // Replace with your EmailJS Public Key
  };

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = document.getElementById("submit-btn");
      const btnText = document.getElementById("btn-text");
      const btnIcon = document.getElementById("btn-icon");
      const formStatus = document.getElementById("form-status");

      // Auto-populate date field
      const dateField = document.getElementById("contact-date");
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      dateField.value = formattedDate;

      // Validate form
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !subject || !message) {
        showStatus("Please fill in all fields!", "error");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showStatus("Please enter a valid email address!", "error");
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      btnText.textContent = "Sending...";
      btnIcon.className = "fa-solid fa-spinner fa-spin";
      formStatus.style.display = "none";

      // Send email via EmailJS
      emailjs
        .sendForm(
          EMAILJS_CONFIG.serviceID,
          EMAILJS_CONFIG.templateID,
          this,
          EMAILJS_CONFIG.publicKey,
        )
        .then(
          function (response) {
            // Success
            showStatus(
              "✅ Message sent successfully! I'll get back to you soon.",
              "success",
            );
            contactForm.reset();

            // Reset button
            setTimeout(() => {
              submitBtn.disabled = false;
              btnText.textContent = "Send Message";
              btnIcon.className = "fa-solid fa-paper-plane";
            }, 2000);
          },
          function (error) {
            // Error
            console.error("EmailJS Error:", error);

            // Check if it's a configuration error
            if (EMAILJS_CONFIG.serviceID === "YOUR_SERVICE_ID") {
              showStatus(
                "⚠️ EmailJS not configured yet. Please check the setup instructions.",
                "error",
              );
            } else {
              showStatus(
                "❌ Failed to send message. Please try again or email me directly.",
                "error",
              );
            }

            // Reset button
            submitBtn.disabled = false;
            btnText.textContent = "Send Message";
            btnIcon.className = "fa-solid fa-paper-plane";
          },
        );
    });

    function showStatus(message, type) {
      const formStatus = document.getElementById("form-status");
      formStatus.textContent = message;
      formStatus.style.display = "block";
      formStatus.style.padding = "15px";
      formStatus.style.borderRadius = "12px";
      formStatus.style.fontSize = "0.95rem";
      formStatus.style.fontWeight = "500";

      if (type === "success") {
        formStatus.style.background = "rgba(34, 197, 94, 0.1)";
        formStatus.style.border = "1px solid rgba(34, 197, 94, 0.3)";
        formStatus.style.color = "#22c55e";
      } else {
        formStatus.style.background = "rgba(239, 68, 68, 0.1)";
        formStatus.style.border = "1px solid rgba(239, 68, 68, 0.3)";
        formStatus.style.color = "#ef4444";
      }

      // Auto-hide after 5 seconds
      setTimeout(() => {
        formStatus.style.display = "none";
      }, 5000);
    }
  }
});
