const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// خواندن آخرین وضعیت از localStorage یا شروع از مرحله اول
let currentActive = parseInt(localStorage.getItem("progressStep")) || 1;

// Event Listeners
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// امکان کلیک روی دایره‌ها برای جابجایی
circles.forEach((circle, idx) => {
  circle.addEventListener("click", () => {
    // idx از 0 شروع می‌شود، پس برای مطابقت با currentActive باید 1+ شود
    currentActive = idx + 1;
    update();
  });
});

function update() {
  // به‌روزرسانی کلاس active برای دایره‌ها
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // به‌روزرسانی نوار پیشرفت
  const actives = document.querySelectorAll(".active");
  const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  // فعال/غیرفعال کردن دکمه‌ها
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  // ذخیره وضعیت فعلی در localStorage
  localStorage.setItem("progressStep", currentActive);
}

// اجرای تابع برای تنظیم وضعیت اولیه هنگام بارگذاری صفحه
update();
