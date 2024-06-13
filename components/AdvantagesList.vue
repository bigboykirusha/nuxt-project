<template>
   <div class="advantages-container">
      <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <div class="cards-container">
         <AdvantageCard v-for="(advantage, index) in advantages" :key="index" :advantage="advantage" />
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import adv1 from '@/assets/images/adv1.svg';
import adv2 from '@/assets/images/adv2.svg';
import adv3 from '@/assets/images/adv3.svg';
import adv4 from '@/assets/images/adv4.svg';
import adv5 from '@/assets/images/adv5.svg';
import adv6 from '@/assets/images/adv6.svg';

interface Advantage {
   image: string;
   title: string;
   description: string;
}

const advantages = ref<Advantage[]>([
   {
      image: adv1,
      title: 'Неограниченый автопарк',
      description: 'Можно добавить неограниченное кол-во машин и водителей',
   },
   {
      image: adv2,
      title: 'Сокращение затрат до 50%',
      description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке',
   },
   {
      image: adv3,
      title: 'Безопасность',
      description: 'Данные передаются в зашифрованном виде, они доступны только получателю',
   },
   {
      image: adv4,
      title: 'Уведомление о погашении',
      description: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП',
   },
   {
      image: adv5,
      title: 'Квитанция об оплате',
      description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.',
   },
   {
      image: adv6,
      title: 'Вся история сохраняется по каждой машине',
      description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам',
   },
]);
</script>

<style scoped lang="scss">
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
   }
}
</style>