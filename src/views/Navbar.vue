<template>
<div>
        <div class="relative ">
        <div class="fixed top-0 left-0 right-0 z-30 bg-bacg w-full">
            <div class="container mx-auto ">
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
                <button @click="searche = 1"><i class="fa-solid fa-magnifying-glass text-headtext text-lg opacity-80 hover:text-white hover:opacity-100 transition-all"></i></button>
                <form v-if="searche === 1" class="w-1/5 ">
                <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"  placeholder="Search.... " required v-model="searchString" >
                </div>
                </form>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  setup() {

    return{
        searche: 0
    }
  }
}
</script>
