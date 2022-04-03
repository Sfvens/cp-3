<template>
<div>
  <div class="wrapper">
    <div class="search">
      <!-- <form class="pure-form"> -->
        <!-- pure css above -->
        <!-- <i class="fas fa-search"></i><input v-model="searchText" />
      </form> -->
    </div>
  </div>
  <ReviewComp :reviews="reviews" />
  <!-- displays the product component we defined in ProductList -->
</div>
</template>

<script>
import ReviewComp from "../components/ReviewComp.vue"
export default {
  name: 'ReviewView',
  components: {
    ReviewComp
  },
  data() {
    return {
      searchText: '', // allows transfer of text info to other components
    }
  },
  computed: {
    reviews() {
    //   return this.$root.$data.reviews.filter(review => review.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    return this.$root.$data.reviews;
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

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
