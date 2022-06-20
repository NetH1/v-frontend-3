<template>
<div>
        <div class="headset bg-bacg fixed z-50 top-0 left-0 w-full">
        <div class="container mx-auto">
            <div class="flex justify-between items-center py-4">
                <router-link class="text-headtext text-2xl opacity-80 hover:text-white hover:opacity-100 transition-all " to="/"><i class="fab fa-apple"></i></router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="/products">Store</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">Mac</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">iPad</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="/iphone13pro">iPhone</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">Watch</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">AirPods</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">TV & Home</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">Only on Apple</router-link>
                <router-link class="text-headtext text-sm opacity-80 hover:text-white hover:opacity-100 transition-all" to="#">Support</router-link>
            </div>
             <div class="justify-between items-center py-4 block sm:hidden text-center">
               <div class="relative">
                   <i class="fas fa-bars text-headtext text-xl opacity-80 hover:text-white hover:opacity-100 transition-all bars"></i>
                    <router-link class="text-headtext text-2xl opacity-80 hover:text-white hover:opacity-100 transition-all " to="#"><i class="fab fa-apple"></i></router-link>
               </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>