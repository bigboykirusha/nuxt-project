<template>
   <h2 class="slider__title">Документы</h2>
   <div class="slider__container">
      <Swiper :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
         :pagination="{ type: 'bullets', el: '.pagination', clickable: 'true' }" :breakpoints="{
            621: {
               slidesPerView: 2,
               slidesPerGroup: 2
            },
            991: {
               slidesPerView: 3,
               slidesPerGroup: 3
            }
         }" :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" :autoplay="{
            delay: 10000,
            disableOnInteraction: false
         }" loop :space-between="35" centeredSlides: true>
         <SwiperSlide v-for="slide in slides" :key="slide.id">
            <div class="slide-content">
               <h2>{{ slide.title }}</h2>
               <p>{{ slide.description }}</p>
               <button @click="navigateToDocument(slide.title)">Перейти</button>
            </div>
         </SwiperSlide>
      </Swiper>
      <div class="pagination"></div>
      <div class="nav__container">
         <div class="custom-prev"><img src="../assets/images/prew.svg" alt=""></div>
         <div class="custom-next"><img src="../assets/images/next.svg" alt=""></div>
      </div>
   </div>
</template>

<script setup>

const slides = [
   { id: 1, title: 'Информация об оплате', description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.' },
   { id: 2, title: 'Политика обработки персональных данных', description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.' },
   { id: 3, title: 'Лицензионный договор', description: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.' },
   { id: 4, title: 'Соглашение об услугах', description: 'Договор, заключаемый между поставщиком и потребителем услуг для установления прав и обязанностей сторон.' },
   { id: 5, title: 'Условия использования', description: 'Документ, определяющий правила и условия, с которыми пользователь соглашается при использовании продукта или услуги.' },
   { id: 6, title: 'Конфиденциальность данных', description: 'Политика, регламентирующая сбор, использование и защиту персональных данных пользователей.' }
];

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDocument = (title) => {
   router.push({
      path: '/document',
      query: { title: encodeURIComponent(title) }
   })
}
</script>

<style lang="scss" scoped>
.slider__title {
   color: #000;
   font-size: 34px;
   text-align: center;
   margin-bottom: 40px;

   @media (max-width: 991px) {
      font-size: 28px;
   }
}

.slider__container {
   position: relative;
   overflow: hidden;
}

.swiper {
   padding: 0 25px;
}

.slide-content {
   display: flex;
   flex-direction: column;
   height: 450px;
   padding: 25px;
   background-color: #FFFFFF;
   border: 1px solid #EEEFF1;
   border-radius: 10px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   cursor: pointer;

   @media (max-width: 991px) {
      height: 400px;
   }
}

.slide-content h2 {
   color: #1253A2;
   font-size: 31px;
   line-height: 120%;
   margin-bottom: 10px;

   @media (max-width: 991px) {
      font-size: 24px;
   }
}

.slide-content p {
   color: #000;
   font-size: 18px;
   line-height: 120%;
}

.slide-content button {
   background-color: #0584FE;
   border-radius: 7px;
   font-size: 18px;
   color: #FFFFFF;
   height: 45px;
   margin-top: auto;
   border: none;
   cursor: pointer;
   transition: background-color 0.3s;
}

.slide-content button:hover {
   background-color: #1253A2;
}

.nav__container {
   position: absolute;
   top: 0;
   z-index: 100;
   display: flex;
   width: 100%;
   top: calc(50% - 40px);
   justify-content: space-between;
}

.custom-prev,
.custom-next {
   background-color: rgba(166, 183, 212, 0.5);
   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding: 0 18px;
   border-radius: 50%;
   height: 80px;
   width: 80px;
   cursor: pointer;
   transition: background-color 0.3s ease-in;
}

.custom-next {
   margin-right: -40px;
   justify-content: flex-start;
}

.custom-prev {
   margin-left: -40px;
}

.custom-next:hover,
.custom-prev:hover {
   background-color: rgba(166, 183, 212, 0.9);
}

.pagination {
   margin-top: 10px !important;
   width: fit-content;
   margin: 0 auto;
}
</style>
