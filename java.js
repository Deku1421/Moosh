
onload = () => {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector("#new-link");
  link.addEventListener("click", () => {
      console.log("Link to new page clicked!");
  });
});