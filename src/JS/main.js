// Data
const reviews = [
  {
    name: "علی رضائی",
    image: "./assets/images/person-1.png",
    job: "توسعه دهنده فرانت اند",
    rating: 5,
    comment:
      "از نتیجهٔ نهایی پروژه رضایت زیادی داشتم. ایده‌ای که در ذهنم بود با دقت اجرا شد و تغییراتی که در طول کار پیشنهاد دادم، به‌خوبی در نظر گرفته شدند. خروجی نهایی از نظر طراحی و عملکرد بسیار خوب بود و دقیقاً همان چیزی شد که دنبالش بودم.",
  },
  {
    name: "امیر حسین تهرانی",
    image: "./assets/images/person-2.jpg",
    job: "متخصص SEO",
    rating: 4,
    comment:
      "همکاری با این مجموعه تجربه بسیار خوبی برای من بود. استراتژی‌های پیشنهادی در زمینه سئو باعث افزایش بازدید ارگانیک سایت شدند و از دقت، تخصص و پشتیبانی حرفه‌ای تیم واقعاً رضایت دارم.",
  },
  {
    name: "سارا احمدی",
    image: "./assets/images/person-3.png",
    job: "توسعه دهنده فرانت اند",
    rating: 5,
    comment:
      "از همکاری با این تیم برای طراحی و توسعه وب‌سایت بسیار راضی بودم. کیفیت کدنویسی، دقت در جزئیات و توجه به تجربه کاربری واقعاً قابل‌توجه بود. نتیجه نهایی دقیقاً مطابق انتظاراتم بود و تجربه همکاری خوبی داشتم.",
  },
  {
    name: "Milad",
    image: "./assets/images/person-4.png",
    job: "توسعه‌دهنده فول‌استک",
    rating: 3,
    comment:
      "تجربه همکاری با این تیم بسیار رضایت‌بخش بود. طراحی رابط کاربری، توسعه بخش بک‌اند و هماهنگی تمام قسمت‌های پروژه به‌خوبی انجام شد و نتیجه نهایی فراتر از انتظاراتم بود.",
  },
];

// Elements
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".user-name");
const userJob = document.querySelector(".user-job");
const userComment = document.querySelector(".user-comment");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const userRating = document.querySelectorAll(".star");

// Current Index
let currentIndex = 0;

// Display Review
const displayReview = () => {
  // Currently stored review
  const currentReview = reviews[currentIndex];
  // Changes
  userImage.src = currentReview.image;
  userName.textContent = currentReview.name;
  userJob.textContent = currentReview.job;
  userComment.textContent = currentReview.comment;
  // User Rating
  userRating.forEach((star, index) => {
    star.classList.toggle("fill-amber-400", currentReview.rating > index);
    star.classList.toggle("fill-gray-300",  index >= currentReview.rating);
  });
};

// Initial Display
displayReview();

// Events
nextBtn.addEventListener("click", () => {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
    displayReview();
  }
});

previousBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayReview();
  }
});
