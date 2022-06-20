<template>
<div class="bg-white w-full h-full">
  <div class="container mx-auto">
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
 
<style scoped></style>