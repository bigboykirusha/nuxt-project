<template>
   <section class="document">
      <div class="document__navbar">
         <NuxtLink class="link" to="/">
            Главная страница
         </NuxtLink>
         <div class="dot"></div>
         <span class="link">Документы</span>
         <div class="dot"></div>
         <span>{{ decodedTitle }}</span>
      </div>
      <h2 class="document__name">{{ decodedTitle }}</h2>
      <h3 class="document__title">Заголовок 1</h3>
      <p class="document__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
         deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum.</p>
      <h3 class="document__title">Заголовок 2</h3>
      <p class="document__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
         deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum.</p>
   </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const decodedTitle = decodeURIComponent(route.query.title || '')
</script>

<style lang="scss" scoped>
$document-font-size: 18px;
$document-line-height: 120%;
$document-color: #000;

.document {
   &__navbar {
      font-size: 13px;
      line-height: 120%;
      color: $document-color;
      display: flex;
      align-items: center;
      margin: 20px 0;

      .link {
         color: #000;

         &:hover {
            text-decoration: underline;
         }
      }

      @media (max-width: 768px) {
         font-size: 12px;
         margin-bottom: 25px;
      }

      span {
         color: #8F8F8F;
      }
   }

   &__name {
      font-size: 41px;
      line-height: 120%;
      color: $document-color;
      margin-bottom: 40px;

      @media (max-width: 768px) {
         font-size: 28px;
         margin-bottom: 25px;
      }
   }

   &__title {
      color: #383838;
      font-size: 41px;
      line-height: 120%;
      margin-bottom: 25px;

      @media (max-width: 768px) {
         font-size: 28px;
         margin-bottom: 15px;
      }
   }

   &__desc {
      font-size: $document-font-size;
      line-height: $document-line-height;
      color: $document-color;
      margin-bottom: 25px;
   }
}

.dot {
   width: 5px;
   height: 5px;
   background-color: $document-color;
   border-radius: 50%;
   margin: 0 10px;
}
</style>
