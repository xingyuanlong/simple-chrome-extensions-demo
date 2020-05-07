(function () {
  console.log("Chrome插件demo content-script！");
})();

// 获取的是页面的DOM
document.addEventListener("click", function () {
  console.log("document biubiu~~");
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd === "test") {
    console.log("content script:", request.value);
  }
  // 此时可以根据指令操作页面
  if (request.cmd === "changeColor") {
    console.log("content script: 随机的颜色", request.value);
    // 危险的操作  dangerous
    Array.from(document.querySelectorAll("p")).map((x) => {
      x.style.color = request.value;
    });
    chrome.runtime.sendMessage(
      { cmd: "changeColor", value: request.value },
      function (response) {
        console.log("content script:: background.js 回复：" + response);
      }
    );
  }

  sendResponse("我收到了你的消息！");
});
