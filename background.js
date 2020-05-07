console.log("Chrome插件demo background.js");
chrome.browserAction.setBadgeText({ text: "biu~" });

// 权限非常高
// 参考: https://developer.chrome.com/extensions/contextMenus
chrome.contextMenus.create({
  title: "测试右键菜单",
  onclick: function () {
    chrome.notifications.create(null, {
      type: "basic",
      iconUrl: "icon.png",
      title: "标题",
      message: "您刚才点击了自定义右键菜单！",
    });
  },
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("background.js: 来自content-script的消息", request);
  chrome.storage.sync.set({ color: request.value }, function () {
    console.log("保存成功！");
  });
  sendResponse("来自 background.js：" + JSON.stringify(request));
});
