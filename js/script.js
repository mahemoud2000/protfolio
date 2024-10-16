
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور لتحسين الأداء
            }
        });
    }, { threshold: 0.1 }); // يتم تفعيل الرصد عندما يظهر 10% من القسم

    sections.forEach(section => {
        observer.observe(section);
    });
});

  // Show or hide scroll buttons
  window.onscroll = function() {
    const scrollBtnTop = document.getElementById('scrollToTop');
    const scrollBtnBottom = document.getElementById('scrollToBottom');
    if (window.scrollY > 200) {
        scrollBtnTop.style.display = "block";
        scrollBtnBottom.style.display = "block";
    } else {
        scrollBtnTop.style.display = "none";
        scrollBtnBottom.style.display = "none";
    }
};

// Scroll to top
document.getElementById('scrollToTop').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Scroll to bottom
document.getElementById('scrollToBottom').onclick = function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};