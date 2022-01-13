// ******** HEADER ******** //

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const experience = document.getElementById("experience-btn");
experience.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const work = document.getElementById("work-btn");
work.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const contact = document.getElementById("contact-btn");
contact.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const resume = document.getElementById("resume-btn");
resume.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// EXPERIENCE
const huskyBtn = document.getElementById("husky-btn");
const niigonBtn = document.getElementById("niigon-btn");
const geotabBtn = document.getElementById("geotab-btn");

const huskyInfo = document.getElementById("husky-info");
const niigonInfo = document.getElementById("niigon-info");
const geotabInfo = document.getElementById("geotab-info");

huskyBtn.addEventListener("click", () => {
  huskyBtn.classList.add("active-btn");
  niigonBtn.classList.remove("active-btn");
  geotabBtn.classList.remove("active-btn");
  huskyInfo.classList.remove("hide");
  niigonInfo.classList.add("hide");
  geotabInfo.classList.add("hide");
});

niigonBtn.addEventListener("click", () => {
  huskyBtn.classList.remove("active-btn");
  niigonBtn.classList.add("active-btn");
  geotabBtn.classList.remove("active-btn");
  huskyInfo.classList.add("hide");
  niigonInfo.classList.remove("hide");
  geotabInfo.classList.add("hide");
});

geotabBtn.addEventListener("click", () => {
  huskyBtn.classList.remove("active-btn");
  niigonBtn.classList.remove("active-btn");
  geotabBtn.classList.add("active-btn");
  huskyInfo.classList.add("hide");
  niigonInfo.classList.add("hide");
  geotabInfo.classList.remove("hide");
});
