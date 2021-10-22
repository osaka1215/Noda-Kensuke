<template>
  <div id="header" class="wrapper content">
    <h1 class="title">Noda Kensuke</h1>
    <div class="content">
      <p class="text">kensuke0417@icloud.com</p>
      <p class="text">Instagram: nodaken.photo</p>
      <p class="text">Twitter:kesunke_dano</p>
    </div>
    <nav class="nav">
      <ul>
        <li>
          <a href="https://instagram.com/nodaken.photo?utm_medium=copy_link">
            <img
              class="img"
              src="../assets/2WhIkKhuoS6YMGy1632270896_1632270950.png"
              alt="インスタグラムのロゴ"
            />
          </a>
        </li>
        <li>
          <a href="https://mobile.twitter.com/kesunke_dano">
            <img
              class="img"
              src="../assets/2021 Twitter logo - white.png"
              alt="ツイッターのロゴ"
            />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#header {
  height: 70px;
  background-color: #000;
  padding: 0 25px;
  justify-content: space-between;
}
.wrapper {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 4%;
}
.content {
  display: flex;
  align-items: center;
}
.title {
  size: 30px;
  font-weight: 400;
  color: #fff;
  line-height: 21px;
  text-decoration: none;
}
.text {
  size: 10px;
  font-family: Oswald;
  font-weight: 400;
  color: #fff;
  line-height: 21px;
  text-decoration: none;
  margin-right: 15px;
}
.nav {
  display: none;
}

@media screen and (max-width: 768px) {
  #header {
    padding-top: 25px;
  }
  .text {
    display: none;
  }
  .nav {
    display: block;
    text-align: right;
  }
  .nav ul {
    display: flex;
  }
  .nav ul li {
    margin-right: 20px;
  }

  .img {
    width: 20px;
    height: 20px;
    object-fit: scale-down;
    opacity: 1;
    transition: 0.3s;
  }
  .img:hover {
    opacity: 0.5;
  }
}

@media screen and (max-width: 480px) {
  #header {
    padding-top: 15px;
    height: 60px;
  }
  .text {
    display: none;
  }
  .nav {
    display: block;
    text-align: right;
  }
  .nav ul {
    display: flex;
  }
  .nav ul li {
    margin-right: 20px;
  }

  .img {
    width: 20px;
    height: 20px;
    object-fit: scale-down;
    opacity: 1;
    transition: 0.3s;
  }
  .img:hover {
    opacity: 0.5;
  }
}
</style>
