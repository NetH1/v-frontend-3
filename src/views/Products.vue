<template> 
  <div class="container mx-auto w-full h-full"> 
<div class="flex justify-between bg-teal-200 p-6 rounded-xl">
      <h1 class="font-semibold text-lg leading-10">Products</h1> 
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