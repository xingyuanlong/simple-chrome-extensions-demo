const colorBtn = document.querySelector("#color");

colorBtn.addEventListener("click", function () {
  // 读取数据
  chrome.storage.sync.get({ color: "pink" }, function (items) {
    console.log("options : color", items.color);
    colorBtn.style.color = items.color;
  });
});
