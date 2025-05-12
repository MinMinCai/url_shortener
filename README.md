# 短網址產生器

## 畫面瀏覽
<!-- [![urlshortener-img](https://i.imgur.com/sFI5sP5m.png)](https://i.imgur.com/sFI5sP5.png)
[![urlshortener2-img](https://i.imgur.com/nIXGfe4m.png)](https://i.imgur.com/nIXGfe4.png) -->

<a href="https://i.imgur.com/sFI5sP5.png" target="_blank">
  <img src="https://i.imgur.com/sFI5sP5m.png" alt="urlshortener-img" style="border: 1px solid #ccc; padding: 4px;">
</a>

<a href="https://i.imgur.com/nIXGfe4.png" target="_blank">
  <img src="https://i.imgur.com/nIXGfe4m.png" alt="urlshortener2-img" style="border: 1px solid #ccc; padding: 4px;">
</a>

## 簡介
簡單的縮網址服務，可以將長網址轉換為短網址。
  
#### 功能
  - 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，送出表單之後，畫面會回傳格式化後的短網址
  - 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入網站產生的短網址，瀏覽器就會導向原本的網站
  - 使用者未輸入網址就按shorten按鈕時，會跳出錯誤警示
  - 使用者可以按 Copy 來複製縮短後的網址

## 使用方式
  1. 請先確認有安裝 node.js 與 npm
  2. 將專案 clone 到本地
  ```bash
  git clone https://github.com/MinMinCai/url_shortener.git
  ```
  3. 在本地開啟之後，透過終端機進入資料夾，輸入：
  ```bash
  npm install
  ```
  4. 安裝完畢後，繼續輸入：
  ```bash
  npm run start
  ```
  5. 若看見此行訊息則代表順利運行
  ```bash
  App is running on http://localhost:3001
  ```
  6. 接著打開瀏覽器進入到以下網址
  ```bash
  http://localhost:3001
  ```
  7. 若欲暫停使用，點兩下快捷鍵：
  ```bash
  Ctrl + C
  ```

## 開發工具
- Node.js 18.20.2
- Express: 5.1.0
- Express-handlebars: 8.0.3
- Express-session: 1.18.1
- Bootstrap 5.2.3
- Body-parser: 2.2.0
- Mongoose: 8.14.1
- Method-override: 3.0.0
- Connect-flash: 0.1.1
- Dotenv: 16.5.0
   
    