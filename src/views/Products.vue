<template> 
  <div class="container mx-auto w-full h-full mt-28"> 
    <div  v-if="fetching">Loading...</div> 
    <div v-else-if="error">Oh no... {{ error }}</div> 
    <div v-else> 
      <div v-if="data" class="grid grid-cols-4 gap-x-5 gap-y-7 h-full w-full"> 
        <div 
          v-for="p in data.products" 
          :key="p.id" 
          class="rounded-lg back hover:scale-105	 h-full bg-headtext flex  flex-col " 
          @click="move(p.id)" > 
           <div class="mb-4">
             <img  :src="'http://38.242.229.113:8055/assets/' + p.image.id" alt=""> 
           </div>
            <div class="flex h-full flex-col px-4">
              <div class="flex items-start  flex-auto mb-4">
              <p class="text-xl text-black font-semibold w-full h-fit ">{{ p.title }}</p> 
              </div>
              <div class="pb-4 inline-block align-bottom text-black">
                      <span class="text-lg leading-none align-baseline">$</span>
                      <span class=" text-xl leading-none align-baseline">{{p.price}}</span>
              </div>
          </div>
    </div>
        </div> 
      </div> 
      <button  class="block mx-auto p-3 rounded-md mt-8 mb-8 b_buy text-white" @click="limit+=8">Show more</button> 
    </div> 
</template> 
 
<script> 
import { useQuery, gql } from "@urql/vue"; 
import { useRouter } from "vue-router"; 
import { ref } from "@vue/reactivity"; 
export default { 
  setup() { 
    const limit = ref(8); 
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
.b_buy{
  background: #0071e3;
}
</style>