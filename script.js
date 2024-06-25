document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("accordion-toggle");
    const accordionContent = document.getElementById("accordion-content");

    toggleButton.addEventListener("click", function() {
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            toggleButton.textContent = "Show Full Résumé";
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            toggleButton.textContent = "View Profile Card";
        }
    });
});
