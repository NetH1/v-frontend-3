<template>
  <div> for search min price or max price
      <p class="text-lg font-mono mb-2">Поиск по ценам</p>
      <input class="w-96 border-4 outline-none border-amber-200 mr-4" type="text" placeholder="min" v-model.number="min" /> 
    <input class="w-96 border-4 outline-none border-amber-200" type="text" placeholder="max" v-model.number="max" /> 
    </div>
</template>