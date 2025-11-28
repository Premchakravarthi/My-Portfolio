// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Contact form: open default mail app with pre-filled content
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = encodeURIComponent(formData.get("name") || "");
    const email = encodeURIComponent(formData.get("email") || "");
    const message = encodeURIComponent(formData.get("message") || "");

    const subject = `Portfolio contact from ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${decodeURIComponent(email)}\n\n` +
      `Message:\n${decodeURIComponent(message)}`;

    window.location.href = `mailto:premchakravathi1924@gmail.com?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;

    form.reset();
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
