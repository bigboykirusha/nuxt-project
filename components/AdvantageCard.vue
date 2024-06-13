<template>
   <div class="card">
      <img :src="advantage.image" :alt="advantage.title" class="card-image">
      <div class="card-content">
         <h3 class="card-title">{{ advantage.title }}</h3>
         <p class="card-description">{{ advantage.description }}</p>
      </div>
   </div>
</template>

<script setup lang="ts">
interface Advantage {
   image: string;
   title: string;
   description: string;
}

const props = defineProps<{ advantage: Advantage }>();
</script>

<style scoped lang="scss">
.card {
   display: flex;
   align-items: flex-start;
   background-color: #fbfcfd;
   border: 1px solid #eeeff1;
   border-radius: 10px;
   padding: 24px 20px;
   height: 100%;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s;

   &:hover {
      transform: translateY(-5px);
   }

   .card-image {
      width: 60px;
      height: 60px;
      margin: 20px auto;
      align-self: center;
      margin-right: 20px;
      margin-left: 0;

      @media (max-width: 480px) {
         width: 50px;
         height: 50px;
         margin-right: 25px;
      }
   }

   .card-content {
      .card-title {
         font-size: 18px;
         font-weight: bold;
         color: #1253a2;
         margin-bottom: 10px;

         @media (max-width: 480px) {
            font-size: 15px;
         }
      }

      .card-description {
         font-size: 15px;
         color: #333;

         @media (max-width: 480px) {
            font-size: 12px;
         }
      }
   }
}
</style>