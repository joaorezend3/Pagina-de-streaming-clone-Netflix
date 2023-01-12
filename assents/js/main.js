let buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let targetId = button.getAttribute("data-target");
    let targetContent = document.getElementById(targetId);

    let allContents = document.querySelectorAll(".content");
    allContents.forEach(function (content) {
      content.style.display = "none";
    });
    targetContent.style.display = "block";
  });
});
