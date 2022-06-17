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
            <div class="w-3/5">
                <h2 class="text-xl font-semibold mt-2">Описание</h2>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Модельный год</p>
                    <p>{{data.products_by_id.year }}</p>
                </div>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Диагональ дисплея, дюйм</p>
                    <p>{{data.products_by_id.diagonal }}</p>
                </div>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Разрешение дисплея</p>
                    <p>{{data.products_by_id.resolution }}</p>
                </div>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Тип матрицы</p>
                    <p>{{data.products_by_id.matrix }}</p>
                </div>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Частота обновления</p>
                    <p>{{data.products_by_id.hz }}</p>
                </div>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Объем оперативной памяти, ГБ</p>
                    <p>{{data.products_by_id.ram }}</p>
                </div>
                <div class="flex justify-between items-center border-b border-dashed border-gray-300 my-2">
                    <p>Объем встроенной памяти, ГБ</p>
                    <p>{{data.products_by_id.hard }}</p>
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