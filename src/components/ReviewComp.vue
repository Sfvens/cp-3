<template>
<div class="wrapper">
  <div class="reviews">
    <div class="review" v-for="review in reviews" :key="review.id">
        <!-- <img :src="review.userimage" /> -->
        <h1>{{review.username}}</h1>
        <p>{{review.color}} {{review.year}} {{review.make}} {{review.model}}</p>
        <div class="image">
            <img :src="review.userimage" />
        </div>
      <div class="info">
        <h2>{{review.tagline}}</h2>
      </div>
      <div class="price">
          <p>{{review.review}}</p>
        <!-- <h2>{{review.tagline}}</h2> -->
        <!-- <button class="auto" @click="add(review)">Add to Cart</button> -->
      </div>
      <div class="info"></div>
    </div>
    <hr>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReviewView',
  props: {
    reviews: Array // must match where we link data with component
  },
  data() {
      return {
          favorites: [],
      }
  },
  methods: {
    add(review) {
        this.$root.$data.add(review);
    },
    parseURL(review) {
        window.location.href = review.userimage;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reviews {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.review {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.review img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.review .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: black;
  color: white;
  padding: 10px 30px;
  /* height: 80px; */
  text-align: center;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

/* button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
} */

.auto {
  margin-left: auto;
}
</style>