<template>
<div class="w-full h-full dark">
  <!-- <div class="container mx-auto">
    <div class="flex justify-between items-center w-full ">
      <div class="flex items-center bg-headtext ">
        <div class="bg-headtext w-2/4">
        <img class="" :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id" alt="">
      </div>
      <div class="">
      <h1 class="text-lg mb-8">{{data.products_by_id.title}}</h1>
      <p class="w-2/3 mb-16">{{data.products_by_id.description}}</p>
      </div>
      </div>
     <div class="w-1/3 h-full ">
       <div class="bg-headtext rounded-md w-2/3 h-fit py-48 bg-cover text-center ">
        <p class="mb-12">0-0-12</p>
        <p class="mb-16">{{data.products_by_id.price}}</p>
        <button class="bg-knopka rounded-lg text-white">Купить</button>
      </div>
     </div>
    </div>
  </div> -->

<div class="min-w-screen min-h-screen bg-gray-200 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id" class="w-full relative z-10" alt="">
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5 w-2/3">{{data.products_by_id.title}}</h1>
                    <p class="text-sm ">{{data.products_by_id.description}} <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"> <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{{data.products_by_id.price}}</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button @click="addToCart(p)" class="b_buy opacity-75  text-white rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
 
<script> 
import { useRoute } from "vue-router"; 
import { useQuery, gql } from "@urql/vue"; 

export default { 
  setup() { 
    const route = useRoute(); 
    const getProductQuery = gql` 
      query ($id: ID!) { 
        products_by_id(id: $id) { 
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
    const getProduct = useQuery({ query: getProductQuery, variables: { id: route.params.id } }); 
    return { 
      fetching: getProduct.fetching, 
      data: getProduct.data, 
      error: getProduct.error, 
    };
  }, 
}; 
</script> 
 
<style scoped>
.b_buy{
  background: #0071e3;
}
</style>