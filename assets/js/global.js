document.addEventListener("DOMContentLoaded", () => {
  const cookiesBanner = document.querySelector(".cookies-banner");
  const cookiesBannerDelay = 2000;
  const cookiesBannerCloseButton = document.querySelector(
    ".cookies-banner .button"
  );

  if (cookiesBanner) {
    setTimeout(showBanner, cookiesBannerDelay);
  }

  if (cookiesBannerCloseButton) {
    cookiesBannerCloseButton.addEventListener(
      "click",
      cookiesBannerCloseButtonClicked
    );
  }

  function showBanner() {
    cookiesBanner.classList.add("show");
  }
  function hideBanner() {
    cookiesBanner.classList.remove("show");
  }
  function cookiesBannerCloseButtonClicked(e) {
    e.preventDefault();
    hideBanner();
  }
});
