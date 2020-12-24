chrome.storage.sync.get("obfuscate", function (data) {
  const checked = data.obfuscate;

  if (checked) {
    document.body.classList.remove("hide-chess-rating-show");
  } else {
    document.body.classList.add("hide-chess-rating-show");
  }
});
