<template>
  <div id="main">
    <hooper
      ref="carousel"
      @slide="updateCarousel"
      class="hooper"
      :settings="hooperSettings"
    >
      <slide v-for="image in images" :key="image" class="hooper-slide">
        <img :src="image" class="image" />
      </slide>
      <div class="space"></div>
      <hooper-pagination class="hooper-addons" slot="hooper-addons" />
    </hooper>
    <div class="content wrapper">
      <div class="btn_wrapper">
        <div class="prev_btn" @click="slidePrev"></div>
        <div class="next_btn" @click="slideNext"></div>
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
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  // Progress as HooperProgress
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    // HooperProgress
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        mouseDrag: true,
        touchDrag: true,
        wheelControl: true,
        keysControl: true,
        shortDrag: true,
        transition: 2000,
        breakpoints: {
          480: {
            itemsToShow: 1,
          },
          768: {
            itemsToShow: 1,
          },
          1024: {
            itemsToShow: 2,
            itemsToSlide: 2,
          },
        },
      },
      images: [
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_0.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_2.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_7.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_8.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_9.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_10.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_11.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_13.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_14.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_15.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_16.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_17.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_18.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_19.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_21.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_23.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_25.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_27.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_28.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_29.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_30.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_31.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_33.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_35.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_37.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_38.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_41.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_43.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_44.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_45.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_46.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_47.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_48.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_49.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_50.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_51.jpg'),
        require('../assets/o86623c4e7741283242e8abd57a442d9d_45559212_210817_54.jpg'),
      ],
    }
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData)
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide
    },
  },
}
</script>

<style scoped>
#main {
  width: 100%;
  height: 850px;
  background-color: #000;
}
.hooper {
  height: 90%;
}
.hooper-slide {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 2px solid #000;
  font-size: 30px;
  border-radius: 10px;
}

/* 画像サイズ */
.image {
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: scale-down;
}
.space {
  height: 20px;
  background-color: #fff;
}

.btn_wrapper {
  position: relative;
}

/* 戻るボタン */
.prev_btn {
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  position: absolute;
  top: 30%;
  left: 100px;
  cursor: pointer;
}
.prev_btn:hover {
  border-left: 2px solid #4285f4;
  border-bottom: 2px solid #4285f4;
}

/* 次へボタン */
.next_btn {
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  position: absolute;
  top: 30%;
  left: 140px;
  cursor: pointer;
}
.next_btn:hover {
  border-right: 2px solid #4285f4;
  border-bottom: 2px solid #4285f4;
}

.wrapper {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 4%;
}
.nav {
  text-align: right;
}
.nav ul {
  display: flex;
}
.nav ul li {
  margin-right: 20px;
}
.content {
  display: flex;
  justify-content: space-between;
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

/* レスポンシブデザイン */
@media screen and (max-width: 768px) {
  #main {
    max-height: 1024px;
  }
  .hooper-addons {
    display: none;
  }
  .image {
    object-fit: contain;
  }
  .btn_wrapper {
    display: none;
  }
  .nav {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  #main {
    height: 800px;
  }
  .hooper-addons {
    display: none;
  }
  .image {
    object-fit: contain;
  }
  .btn_wrapper {
    display: none;
  }
  .nav {
    display: none;
  }
}
</style>
