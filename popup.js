console.log("popup.js");
const h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
  console.log("popup biubiu~~");
});

function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
// 每次点击触发
sendMessageToContentScript(
  { cmd: "test", value: "你好，我是popup.js！" },
  function (response) {
    console.log("popup.js：" + response);
  }
);

const changeColor = document.querySelector("#changeColor");

changeColor.addEventListener("click", function () {
  sendMessageToContentScript(
    { cmd: "changeColor", value: randomColor() },
    function (response) {
      console.log("popup.js：" + response);
    }
  );
});

// 随机颜色
function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}
