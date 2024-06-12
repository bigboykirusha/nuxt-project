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
                  <a href="#" class="header__auth-link">Вход</a>
               </li>
            </ul>
            <button class="header__reg" @click="closeMenu">Регистрация</button>
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
            <a href="#" class="fullscreenMenu__link" @click="closeMenu">Вход</a>
            <button class="header__reg" @click="closeMenu">Регистрация</button>
            <a href="tel:+74951184422" class="fullscreenMenu__link">+7 495 118-44-22</a>
         </div>
      </div>
   </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Ref<T> {
   value: T
}

interface Methods {
   toggleMenu: () => void
   closeMenu: () => void
   disableScroll: () => void
   enableScroll: () => void
}

export default defineComponent({
   setup() {
      const isMenuActive: Ref<boolean> = ref(false)

      const toggleMenu = (): void => {
         isMenuActive.value = !isMenuActive.value
         if (isMenuActive.value) {
            disableScroll()
         } else {
            enableScroll()
         }
      }

      const closeMenu = (): void => {
         isMenuActive.value = false
         enableScroll()
      }

      const disableScroll = (): void => {
         document.body.classList.add('no-scroll')
      }

      const enableScroll = (): void => {
         document.body.classList.remove('no-scroll')
      }

      return {
         isMenuActive,
         toggleMenu,
         closeMenu
      }
   }
})
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
   }

   .fullscreenMenu__link {
      display: block;
      font-family: 'PT Sans', sans-serif;
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      margin: 30px 0;
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

   .no-scroll {
      overflow: hidden;
   }
}
</style>