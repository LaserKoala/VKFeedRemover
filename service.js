
chrome.runtime.onInstalled.addListener(() => {
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      return {redirectUrl: "https://vk.com/im"}
    },
    {
      urls: [
        "https://vk.com/feed"
      ]
    }
  )
  });