<template>
  <div  class='apple_component'>
    <div class="mt-14 text-center pt-20 hero">
        <h1 class="font-semibold text-3xl sm:text-6xl">iPhone 13 Pro</h1>
        <p class="text-xl sm:text-3xl sm:my-3"> Oh. So. Pro.</p>
        <router-link class="text-xl text-links" to="/iphone13pro"><span class="hover:underline">Learn more</span> ></router-link>
    </div>
<!-- hero -->
     <div class="mt-4 text-center pt-20 iphone">
        <h1 class="font-semibold text-3xl sm:text-6xl text-white">iPhone 13</h1>
        <p class="text-xl sm:text-3xl sm:my-3 text-ipink">Your new superpower.</p>
        <router-link class="text-xl text-links" to="/iphone13pro"><span class="hover:underline">Learn more</span> ></router-link>
    </div>
<!-- iphone -->
     <div class="text-center pt-14 watch">
        <div class="logowatch">
            <img class=" block mx-auto" src="https://www.apple.com/v/home/ap/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png" alt="">
        </div>
        <p class="text-xl sm:text-3xl sm:my-3">Full screen ahead.</p>
        <router-link class="text-xl text-links" to="#"><span class="hover:underline">Learn more</span> ></router-link>
    </div>
<!-- watch -->
<div class="flex flex-wrap justify-evenly">
  <div class="mt-4 text-center pt-20 mackbook w-full sm:w-setblock justify-evenly">
            <h1 class="font-semibold text-4xl">MackBook Pro</h1>
        <p class="text-xl ">Supercharged for pros.</p>
        <router-link class="text-lg text-links" to="#"><span class="hover:underline">Learn more</span> ></router-link>
    </div>
<!-- mac -->
<div class="mt-4 text-center pt-20 airpods w-full sm:w-setblock justify-evenly">
        <h1 class="font-semibold text-4xl">AirPods</h1>
        <p class="text-xl">All-new with spatial audio</p>
        <router-link class="text-lg text-links" to="#"><span class="hover:underline">Learn more</span> ></router-link>
    </div>
<!-- airpods -->
</div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
    background-image: url('@/assets/iphone13.jpg');
    background-size: cover;
    background-position: center bottom;
    padding-bottom: 500px;
}
.airpods {
    background-image: url('@/assets/airpods.jpg');
    background-size: cover;
    background-position: center top;
    padding-top: 400px;
}
.iphone {
    background-image: url('@/assets/iphone 14.jpg');
    background-size: cover;
    background-position: center bottom;
    padding-bottom: 500px;
}
.mackbook {
    background-image: url('@/assets/mackbook.jpg');
    background-size: cover;
    background-position: center top;
    padding-bottom: 400px;
}
.watch {
    background-image: url('@/assets/wats.jpg');
    background-size: cover;
    background-position: center bottom;
    padding-bottom: 500px;
}

</style>