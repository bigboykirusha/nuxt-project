<template>
   <div v-if="visible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
         <button class="close-button" @click="closeModal">&times;</button>
         <iframe :class="{ 'desktop-size': isDesktop, 'mobile-size': !isDesktop }" :src="videoUrl"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      videoUrl: {
         type: String,
         required: true
      },
      visible: {
         type: Boolean,
         required: true
      }
   },
   computed: {
      isDesktop() {
         return window.innerWidth > 768;
      }
   },
   methods: {
      closeModal() {
         this.$emit('close');
      }
   }
};
</script>

<style scoped>
.modal-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.7);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
}

.modal-content {
   position: relative;
   overflow: auto;
   display: flex;
   flex-direction: column;
}

.close-button {
   top: 0;
   right: 5px;
   background: none;
   border: none;
   font-size: 30px;
   color: white;
   cursor: pointer;
   margin-left: auto;
}

.desktop-size {
   width: 800px;
   height: 450px;
}

.mobile-size {
   width: 370px;
   height: 210px;
}
</style>