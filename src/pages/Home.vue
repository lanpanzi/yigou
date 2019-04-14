<template>
  <div class="Home">
    <div class="Home-carousel">
      <Carousel autoplay v-model="value" loop>
        <CarouselItem
          v-for="carouselItem in carousel"
          :key="carouselItem.id">
            <div class="demo-carousel">
              <img :src="carouselItem.img" alt="" />
            </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      value: 0,
      carousel: []
    }
  },
  created() {
    this.$http.getCarouselData()
      .then(res => {
        this.carousel = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>






