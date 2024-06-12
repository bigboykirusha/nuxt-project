<template>
   <div class="advantages-container">
      <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <div class="cards-container">
         <div v-for="(advantage, index) in advantages" :key="index" class="card">
            <img :src="advantage.image" :alt="advantage.title" class="card-image">
            <div class="card-content">
               <h3 class="card-title">{{ advantage.title }}</h3>
               <p class="card-description">{{ advantage.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
export default {
   props: {
      advantages: {
         type: Array as () => Array<{ image: string, title: string, description: string }>,
         required: true
      }
   }
};
</script>

<style lang="scss" scoped>
.advantages-container {
   margin-bottom: 85px;

   @media (max-width: 768px) {
      margin-bottom: 100px;
   }

   h2 {
      font-size: 34px;
      font-weight: bold;
      margin-bottom: 40px;
      text-align: center;
      color: #000;

      @media (max-width: 768px) {
         font-size: 28px;
      }
   }

   .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 35px;
      justify-content: center;

      @media (max-width: 768px) {
      }
   }

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
            margin-bottom: 5px;

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
}
</style>
