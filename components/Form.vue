<template>
   <div class="form-container">
      <div class="form-content">
         <h2>Проверьте штрафы и<br />зарегистрируйтесь в 1 клик</h2>
         <form @submit.prevent="submitForm">
            <div class="input-group-inline">
               <div class="input-group">
                  <label for="carNumber">Номер автомобиля</label>
                  <input id="carNumber" type="text" v-model="carNumber" :class="{ 'error': errors.carNumber }"
                     @focus="clearError('carNumber')" />
               </div>
               <div class="input-group">
                  <label for="region">Регион</label>
                  <input id="region" type="text" v-model="region" :class="{ 'error': errors.region }"
                     @focus="clearError('region')" />
               </div>
            </div>
            <div class="input-group">
               <label for="registrationCertificate">Свидетельство регистрации TC</label>
               <input id="registrationCertificate" type="text" v-model="registrationCertificate"
                  :class="{ 'error': errors.registrationCertificate }" @focus="clearError('registrationCertificate')" />
            </div>
            <div class="button-group">
               <button type="submit">
                  Проверить штрафы <img src="../assets/images/arrow.svg" alt="" />
               </button>
               <button type="button" class="info-button" @click="showServiceInfo">
                  <img src="../assets/images/yt.svg" alt="" />
                  О сервисе <span>(1 мин. 20 сек)</span>
               </button>
            </div>
         </form>
         <p class="subtitle">
            Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и
            принимаете оферту
         </p>
      </div>
      <div class="form-image">
         <img src="../assets/images/computer.png" alt="Photo" />
      </div>
      <div v-if="showAlert" class="alert">Данные отправлены!</div>
      <Modal :videoUrl="'https://www.youtube.com/embed/dQw4w9WgXcQ'" :visible="isModalVisible"
         @close="isModalVisible = false" />
   </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
   components: {
      Modal
   },
   data() {
      return {
         carNumber: '',
         region: '',
         registrationCertificate: '',
         errors: {},
         showAlert: false,
         isModalVisible: false
      };
   },
   methods: {
      submitForm() {
         this.errors = {
            carNumber: !this.carNumber,
            region: !this.region,
            registrationCertificate: !this.registrationCertificate
         };

         if (this.errors.carNumber || this.errors.region || this.errors.registrationCertificate) {
            return;
         }

         this.showAlert = true;
         this.clearForm();
         setTimeout(() => (this.showAlert = false), 3000);
      },
      showServiceInfo() {
         this.isModalVisible = true;
      },
      clearError(field) {
         this.errors[field] = false;
      },
      clearForm() {
         this.carNumber = '';
         this.region = '';
         this.registrationCertificate = '';
         this.errors = {};
      }
   }
};
</script>

<style lang="scss" scoped>
.form-container {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 80px 0 100px;
   column-gap: 40px;
   position: relative;

   @media (max-width: 1024px) {
      flex-direction: column-reverse;
      margin: 0 0 100px;
   }
}

.form-content {
   flex: 1;

   h2 {
      font-size: 41px;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 25px;
      color: #000;

      @media (max-width: 768px) {
         font-size: 28px;
         text-align: center;
      }
   }

   p.subtitle {
      color: #8f8f8f;
      font-size: 13px;
      line-height: 120%;

      @media (max-width: 768px) {
         text-align: center;
      }
   }
}

form {
   display: flex;
   flex-direction: column;

   @media (max-width: 768px) {
      align-items: center;
      width: 100%;
   }
}

.input-group {
   margin-bottom: 15px;

   label {
      display: block;
      line-height: 120%;
      margin-bottom: 5px;
      font-size: 12px;
      color: #333;
   }

   input[type='text'] {
      width: 100%;
      padding: 11px;
      border: 1px solid #ccc;
      border-radius: 7px;
      transition: border-color 0.3s;

      &:focus {
         border-color: #0584fe;
         outline: none;
      }

      &.error {
         border-color: red;
      }
   }

   @media (max-width: 768px) {
      width: 100%;
   }
}

.input-group-inline {
   display: flex;
   justify-content: space-between;
   gap: 30px;

   .input-group {
      flex: 1;
   }

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;
      width: 100%;

      .input-group {
         width: 100%;
      }
   }
}

.button-group {
   display: flex;
   gap: 20px;
   margin-bottom: 15px;

   button {
      display: flex;
      align-items: center;
      gap: 5px;
      height: 45px;
      padding: 10px 22px;
      font-size: 16px;
      color: #fff;
      background-color: #0584fe;
      border: none;
      border-radius: 7px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
         background-color: #fd8301;
      }

      img {
         height: 14px;
      }
   }

   .info-button {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px 20px;
      font-size: 16px;
      color: #000;
      background-color: transparent;
      border: 1px solid #0584fe;
      border-radius: 7px;
      cursor: pointer;

      &:hover {
         background-color: #bbb;
      }

      span {
         color: #1253a2;
         font-size: 15px;
      }

      img {
         height: 23px;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
      width: 100%;

      button {
         width: 100%;
         justify-content: center;
      }

      .info-button {
         width: 100%;
         justify-content: center;
      }
   }
}

.form-image {
   flex: 1;

   img {
      width: 100%;
      height: auto;
   }

   @media (max-width: 1024px) {
      max-width: 100%;
      margin: 40px 0;
   }

   @media (max-width: 768px) {}
}

.alert {
   position: fixed;
   top: 80px;
   left: 50%;
   transform: translateX(-50%);
   background-color: #0584fe;
   color: #fff;
   padding: 10px 20px;
   border-radius: 5px;
   z-index: 1000;
}
</style>