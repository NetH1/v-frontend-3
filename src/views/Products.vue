<template> 
  <div class="container mx-auto w-full h-full"> 
<div class="flex justify-between ">
    <p>{{ searchString }}</p> 
    <div><p class="text-lg font-mono mb-2">Поиск по названию</p><input class="w-96 border-4 outline-none border-amber-200" type="text" placeholder="search" v-model="searchString" /> </div>
    <div>
      <p class="text-lg font-mono mb-2">Поиск по ценам</p>
      <input class="w-96 border-4 outline-none border-amber-200 mr-4" type="text" placeholder="min" v-model.number="min" /> 
    <input class="w-96 border-4 outline-none border-amber-200" type="text" placeholder="max" v-model.number="max" /> 
    </div>
</div>
    <div  v-if="fetching">Loading...</div> 
    <div v-else-if="error">Oh no... {{ error }}</div> 
    <div v-else> 
      <div v-if="data" class="flex flex-wrap mt-8 w-full"> 
        <div 
          v-for="p in data.products" 
          :key="p.id" 
          class="rounded-lg mb-3 back hover:my-2  w-1/6 mx-3 bg-slate-200 p-4" 
          @click="move(p.id)" > 
            <img class="" :src="'http://38.242.229.113:8055/assets/' + p.image.id" alt=""> 
     <div class="">
               <p class="text-lg text-black font-medium">{{ p.title }}</p> 
            <p class="mt-2 items-stretch text-lg text-black font-medium ">Цена: <span class="font-bold text-xl">{{ p.price }}</span> <span class="dollar text-green-400 text-xl font-bold"></span></p> 
     </div>
    </div>
    //
    <!-- <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        :src="'http://38.242.229.113:8055/assets/' + p.image.id[3]"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        :src="'http://38.242.229.113:8055/assets/' + p.image.id[3]"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        :src="'http://38.242.229.113:8055/assets/' + p.image.id[3]"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->
//
        </div> 
      </div> 
      <button @click="limit+=10">Show more</button> 
    </div> 
</template> 
 
<script> 
import { useQuery, gql } from "@urql/vue"; 
import { useRouter } from "vue-router"; 
import { ref } from "@vue/reactivity"; 
export default { 
  setup() { 
    const limit = ref(10); 
    const router = useRouter(); 
    const searchString = ref(null); 
    const min = ref(0); 
    const max = ref(10000000); 
    const getProductsQuery = gql` 
     query ($search: String, $min: Float, $max: Float, $limit: Int! = 10) { 
        products( 
          search: $search 
          filter: { 
            _and: [{ price: { _gte: $min } }, { price: { _lte: $max } }] 
          } 
          limit: $limit 
        ) { 
          id 
          title 
          price 
          description 
          image { 
            id 
          } 
        } 
      } 
    `; 
    const move = (id) => router.push("/products/" + id); 
    const getProducts = useQuery({ 
      query: getProductsQuery, 
      variables: { search: searchString, min, max, limit }, 
    }); // TODO: rename to products 
    return { 
      fetching: getProducts.fetching, 
      data: getProducts.data, 
      error: getProducts.error, 
      move, 
      searchString, 
      min, 
      max, 
      limit 
    }; 
  }, 
}; 
</script> 
 
<style scoped>
.dollar::after{
  content: '\0024';
}
.cen::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 5px;
}
</style>