<template>
  <div class="my-10">
    <div class="container mx-auto">
      <div class="flex items-start justify-between">
        <div class="bg-white rounded-lg p-12 w-4/6 mr-3">
        <h1 class="text-2xl font-semibold mb-2">
          {{data.products_by_id.title }}
        </h1>
        <div class="flex items-start justify-between w-full">
            <div class="w-2/5 mt-7 mr-4">
             <img :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id" alt=""> 
            </div>
            <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
        </div>
      </div>
      </div>
      <div>
        
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