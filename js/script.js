{
  const toggleBackgroud = () => {
    const content = document.querySelector(".js__content");
    const themeName = document.querySelector(".js__buttonThemeName");
    content.classList.toggle("white");
    themeName.innerText = content.classList.contains("white") ? "ciemny" : "jasny";
  };

  const init = () => {
    const button = document.querySelector(".js__buttonChangeColor");
    button.addEventListener("click", toggleBackgroud);
  };
  init();

  const yearOfBirth = 1964;
  const spans = document.querySelectorAll("#howOld");

  spans.forEach((span) => {
    const defaultText = span.innerText;

    span.addEventListener("click", () => {
      if (span.innerText === defaultText) {
        const ageValue = parseInt(defaultText) - yearOfBirth;
        span.innerText = ageValue;
      } else {
        span.innerText = defaultText;
      }
    });
  });
}
