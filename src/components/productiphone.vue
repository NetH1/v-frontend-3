<template>
<div class="bg-headtext">
  <div class="container mx-auto"> 
    <div class="container mx-auto ">
    <div class="mt-14 text-center pt-20 pro">
        <h1 class="text-xl sm:text-xl sm:my-3">iPhone 13 Pro</h1>
        <p class="font-semibold text-3xl sm:text-6xl"> Oh. So. Pro.</p>
        <p class="mt-6 text-xl text-neblack">iPhone 13 Pro takes a huge leap forward, bringing incredible <br> speed to everything you do and dramatic new photo and video <br> capabilities — all in two great sizes.</p>
        <p class="text-info text-xl my-7">From $41.62/mo. for 24 mo. or $999 before trade‑in1</p>
        <button class="bg-knopka text-white py-2 px-4 rounded-full">Buy</button>
        <div class="mt-12 relative ">
            <img v-if="color === 1" class="w-3/4 mx-auto " src="../assets/iphoneblue.png" alt="">
            <img v-if="color === 2" class="w-3/4 mx-auto " src="../assets/iphonesilver.png" alt="">
            <img v-if="color === 3" class="w-3/4 mx-auto " src="../assets/iphonegold.png" alt="">
            <img v-if="color === 4" class="w-3/4 mx-auto " src="../assets/iphonegrap.png" alt="">
        </div>
        <div class="flex justify-center mt-10">
            <div @click="color = 1" class="w-16" :class="ac">
                <div class="w-8 h-8 bg-sierrablue mx-auto m-3 rounded-full" :class="{ 'border-2 rounded-full border-blue-400': color == 1}"></div>
                <p class="text-sm">Sierra Blue</p>
            </div>
            <div @click="color = 2" class="w-16">
                <div class="w-8 h-8 bg-silver rounded-full mx-auto m-3" :class="{ 'border-2 rounded-full border-blue-400': color == 2}"></div>
                <p class="text-sm">Silver</p>
            </div>
            <div @click="color = 3" class="w-16 ">
                <div class="w-8 h-8 bg-gold rounded-full mx-auto m-3" :class="{ 'border-2 rounded-full border-blue-400': color == 3}"></div>
                <p class="text-sm">Gold</p>
            </div>
            <div @click="color = 4" class="w-16">
                <div class="w-8 h-8 bg-graphite rounded-full mx-auto m-3" :class="{ 'border-2 rounded-full border-blue-400': color == 4}"></div>
                <p class="text-sm">Graphite</p>
            </div>
        </div>
    </div>

</div>
    <!-- iphonehero -->
    <div class="bg-headtext pt-20 w-full h-full relative z-10">
    <div class="container mx-auto">
   <div class="flex justify-between">
        <div class="relative">
            <video muted="muted" autoplay="autoplay"  src="@/assets/a15.mp4" class="rounded-3xl"></video>
            <span class="absolute left-0 top-0 z-10 text-white font-semibold text-5xl pl-8 pt-6"> The fastest chip <br> in a smartphone.</span>
            <button class="plus"></button>
        </div>
        <div class="flex flex-col justify-center bg-white rounded-3xl pr-44 pl-20 relative mb-6 bat13">
            <h3 class="font-semibold text-xl text-neblack">iPhone 13 Pro Max has</h3>
            <h3 class="text-neblack text-7xl font-semibold">the best</h3>
            <span class="text-neblack text-7xl font-semibold batery">battery life</span>
            <h3 class="text-neblack text-7xl font-semibold">ever on</h3>
            <h3 class="text-neblack text-7xl font-semibold">iPhone.</h3>
            <button class="plus1"></button>
        </div>
   </div>
</div>
</div>
    <!-- iphone15 -->
    <div class="procam">
       <div class="flex justify-center flex-col pt-6 px-56 bg-white rounded-3xl">
         <p class="text-5xl font-semibold text-center pb-6">A dramatically more powerful <br> Pro camera system.</p>
         <img src="@/assets/procamera.jpg" alt="">
         <button class="plus1"></button>
        </div>
    </div>
    <!-- shootmarco -->
        <div>
        <div class="flex justify-center flex-col pt-6 px-80 bg-white rounded-3xl relative mt-6">
         <p class="text-5xl font-semibold text-center pb-6">Superfast. Superfluid. <br>Super Retina XDR display with ProMotion.</p>
         <video muted="muted" autoplay="autoplay"  src="@/assets/video1.mp4" class="rounded-3xl "></video>
         <button class="plus1"></button>
        </div>
    </div>
    <!-- superfast -->
        <div class=" pt-6 w-full bg-kosmo rounded-3xl relative mt-6 bg-no-repeat bg-center h-full kosm ">
    </div>
    <!-- kosmo -->
        <div class="selfi h-full relative">
        <div class="flex justify-between mt-6">
    <div class="bg-white rounded-3xl px-72 relative">
        <p class="font-semibold text-5xl pt-4">Does it selfie? <br>Does it ever.</p>
        <img class="pt-4" src="@/assets/selfi.jpg" alt="">
        <button class="plus1"></button>
    </div>
    <div class="bg-white rounded-3xl my-auto px-24 py-56">
        <img src="@/assets/5g.jpg" alt="">
        <button class="plus1"></button>
    </div>
  </div>
    </div>
    <!-- selfi -->
  </div>
</div>
</template>
<script>
export default {
    data() {
        return{ 
            color: 1
        }
    }
}
</script>

<style scoped>

</style>