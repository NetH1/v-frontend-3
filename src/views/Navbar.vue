<template>
  <div>
    <div class="container mx-auto w-full">
      <div class="flex justify-between py-5">
        <div class="flex items-center py-1 px-2 rounded-md bg-white">
          <i class="fas fa-map-marker-alt text-bluee"></i>
          <select name="" id="">
            <option value="">Алматы</option>
            <option value="">Астана</option>
            <option value="">Павлодар</option>
            <option value="">Актобе</option>
          </select>
        </div>
        <div class="bg-orangee p-2 rounded-md flex items-center">
          <i class="fas fa-phone-alt text-yellou"></i>
          <p class="mx-3 text-yellou">Горячая линия с 08:00 до 00:00</p>
          <a class="text-lg font-semibold" href="tel:1717">1717</a>
        </div>
      </div>
    </div>
    <div class="bg-slate-300 container mx-auto rounded-xl mb-10">
      <div class="flex items-center justify-between container mx-auto ">
        <div class="flex items-center">
          <img class="w-44 h-full"
          src="@/assets/logo.png"
          alt=""
        /> <p class="text-2xl font-semibold text-black">Огонь Сайт</p>
        </div>
        <div class="flex text-center text-lg">
          <div class="mx-3 hover:text-oran hover:cursor-pointer">
            <i class="fa-solid fa-heart"></i>
            <p class="text-yellou">Избранное</p>
          </div>
          <div class="mx-3">
            <i class="fa-solid fa-scale-unbalanced"></i>
            <p class="text-yellou">Сравнить</p>
          </div>
          <div class="mx-3">
            <i class="fa-solid fa-cart-shopping"></i>
            <p class="text-yellou">Корзина</p>
          </div>
          <div class="mx-3">
            <i class="fa-solid fa-user"></i>
            <p class="text-yellou">Вход</p>
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