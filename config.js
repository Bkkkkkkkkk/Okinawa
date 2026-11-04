// Mu導遊 行程網頁的設定檔：和 index.html 放在同一個資料夾、一起上傳到 GitHub Pages。
// 以後只更新 index.html 時，不要動這個檔案，API_URL 就不會被蓋掉。
window.MU_CONFIG = {
  // GAS 部署網址 + ?action=trip
  // 例如：https://script.google.com/macros/s/xxxxxxxx/exec?action=trip
  // 要用「網頁應用程式」那個以 /exec 結尾的網址，存取權要設成「任何人」。
  API_URL: '',

  // ---- 背景照片（選填）----
  // 檔名（和 index.html 放同一個資料夾，例如 'bg.jpg'）或 https 網址。留空就用原本的海洋漸層。
  // 圖片載入失敗時也會自動維持原本的樣子，不會破圖。
  BG_IMAGE: '',
  BG_POSITION: 'center',  // 照片對齊位置，例如 'center 40%'、'left center'，用來決定畫面裡露出照片的哪一塊
  BG_HEADER: true,        // 頁首使用照片（疊一層海水藍，標題才看得清楚）
  BG_PAGE: true,          // 整頁背景使用照片（淡淡地透出來）
  BG_CREDIT: ''           // 照片作者與授權，例如 '作者名 / CC BY 4.0'。有填會顯示在頁面最下方
};
