const button = document.querySelector(".button-wrapper");
button.addEventListener("click", () => {
  setCookie("penanenado", "1613");
  redirectToIfCookie();
});

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    // additional
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function genUrl() {
  var url = window.location.href.split("r=")[1];
  return url;
}

function redirectToIfCookie() {
  if (this.getCookie("penanenado") !== undefined) {
    window.location.href = genUrl();
  }
}

redirectToIfCookie();
