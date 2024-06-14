<template>
   <header class="header">
      <nav class="header__nav">
         <div class="header__info">
            <NuxtLink to="/" class="header__logo-link" @click="closeMenu">
               <img src="@/assets/images/logo.svg" alt="Logo" class="header__logo" />
            </NuxtLink>
            <ul class="header__menu">
               <li>
                  <NuxtLink to="/tariffs" class="header__menu-link">Тарифы</NuxtLink>
               </li>
               <li>
                  <NuxtLink to="/contacts" class="header__menu-link">Контакты</NuxtLink>
               </li>
            </ul>
         </div>
         <div class="header__auth">
            <ul class="header__auth-menu">
               <li>
                  <a href="tel:+74951184422" class="header__number">+7 495 118-44-22</a>
               </li>
               <li>
                  <NuxtLink to="/login" class="header__auth-link">Вход</NuxtLink>
               </li>
            </ul>
            <NuxtLink class="header__reg" to="/reg">Регистрация</NuxtLink>
         </div>
         <div :class="{ 'burgerMenu': true, 'active': isMenuActive }" @click="toggleMenu">
            <div class="burgerBar bar1"></div>
            <div class="burgerBar bar2"></div>
            <div class="burgerBar bar3"></div>
         </div>
      </nav>
      <div v-if="isMenuActive" class="fullscreenMenu">
         <div class="fullscreenMenu__content">
            <NuxtLink to="/tariffs" class="fullscreenMenu__link" @click="closeMenu">Тарифы</NuxtLink>
            <NuxtLink to="/contacts" class="fullscreenMenu__link" @click="closeMenu">Контакты</NuxtLink>
            <NuxtLink to="/login" class="fullscreenMenu__link" @click="closeMenu">Вход</NuxtLink>
            <a href="tel:+74951184422" class="fullscreenMenu__link">+7 495 118-44-22</a>
            <NuxtLink class="header__reg" @click="closeMenu" to="/reg">Регистрация</NuxtLink>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuActive = ref(false);

const toggleMenu = (): void => {
   isMenuActive.value = !isMenuActive.value;
   updateScrollState(isMenuActive.value);
};

const closeMenu = (): void => {
   isMenuActive.value = false;
   updateScrollState(false);
};

const updateScrollState = (disable: boolean): void => {
   document.body.classList.toggle('no-scroll', disable);
};
</script>

<style lang="scss" scoped>
.header {
   width: 100%;
   height: 60px;
   font-size: 18px;
   background: linear-gradient(90deg, #000000 30%, #1C2734 73%);
   display: flex;

   .header__nav {
      display: flex;
      max-width: 1173px;
      padding: 0 20px;
      width: 100%;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      height: 100%;
   }

   .header__info {
      display: flex;
      align-items: center;
      gap: 30px;

      .header__logo-link {
         cursor: pointer;
         z-index: 10002;

         .header__logo {
            height: 26px;
            display: block;
         }
      }

      .header__menu {
         display: flex;
         list-style: none;
         margin: 0;
         padding: 0;
         gap: 30px;

         @media (max-width: 1024px) {
            display: none;
         }

         li {
            .header__menu-link {
               color: #ffffff;
               text-decoration: none;
               transition: color 0.3s;
               cursor: pointer;

               &:hover {
                  color: #FD8301;
                  text-decoration: underline;
               }
            }
         }
      }
   }

   .header__auth {
      display: flex;
      align-items: center;
      gap: 30px;

      @media (max-width: 1024px) {
         display: none;
      }

      .header__auth-menu {
         display: flex;
         list-style: none;
         margin: 0;
         padding: 0;
         gap: 30px;

         li {
            .header__number {
               font-weight: 700;
            }

            .header__auth-link {
               color: #ffffff;
               text-decoration: none;
               transition: color 0.3s;

               &:hover {
                  color: #FD8301;
               }
            }
         }
      }
   }
}

.header__reg {
   background-color: #0584fe;
   font-size: 15px;
   border-radius: 7px;
   border: none;
   line-height: 120%;
   color: #ffffff;
   padding: 9px 18px;
   transition: background-color 0.3s;
   cursor: pointer;

   @media (max-width: 1024px) {
      height: 53px;
      font-size: 24px;
      border-radius: 25px;
      padding: 11px 25px;
   }

   &:hover {
      background-color: #FD8301;
   }
}

.burgerMenu {
   display: none;
   flex-direction: column;
   justify-content: space-between;
   width: 30px;
   height: 24px;
   cursor: pointer;
   z-index: 10001;

   @media (max-width: 1024px) {
      display: flex;
   }

   &.active .burgerBar {
      background-color: #fff;
   }

   &.active .bar1 {
      transform: rotate(45deg) translate(7.5px, 7.5px);
   }

   &.active .bar2 {
      opacity: 0;
   }

   &.active .bar3 {
      transform: rotate(-45deg) translate(7.5px, -7.5px);
   }

   .burgerBar {
      width: 100%;
      height: 3px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
   }
}

.fullscreenMenu {
   position: fixed;
   z-index: 1005;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #000;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: fadeIn 0.3s ease-in-out;

   &__content {
      text-align: center;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      row-gap: 30px;
   }

   .fullscreenMenu__link {
      display: block;
      font-family: 'PT Sans', sans-serif;
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease-in-out;

      &:hover {
         color: #FD8301;
      }
   }

   @keyframes fadeIn {
      from {
         opacity: 0;
      }

      to {
         opacity: 1;
      }
   }

   @keyframes fadeOut {
      from {
         opacity: 1;
      }

      to {
         opacity: 0;
      }
   }
}
</style>