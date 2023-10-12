const faqs = document.querySelectorAll(".faq");
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    // Close all FAQs
    faqs.forEach((faq, idx) => {
      if (index !== idx) {
        faq.classList.remove("active");
      }
    });

    // Toggle the clicked FAQ
    toggle.parentNode.classList.toggle("active");
  });
});
