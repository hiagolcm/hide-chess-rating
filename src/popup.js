"use strict";

let obfuscateInput = document.getElementById("myonoffswitch");

chrome.storage.sync.get("obfuscate", function (data) {
  obfuscateInput.checked = data.obfuscate;
});

obfuscateInput.onchange = function (element) {
  const checked = element.target.checked;
  chrome.storage.sync.set({ obfuscate: checked });

  const code = !checked
    ? 'document.body.classList.add("hide-chess-rating-show");'
    : 'document.body.classList.remove("hide-chess-rating-show");';

  chrome.tabs.query({ url: "https://www.chess.com/*" }, function (tabs) {
    if (tabs.length === 0) {
      return;
    }
    for (let tab of tabs) {
      chrome.tabs.executeScript(tab.id, {
        code,
      });
    }
  });
};
