<template>
   <div v-if="props.visible" class="modal-overlay" role="dialog" aria-modal="true" @click.self="closeModal">
      <div class="modal-content">
         <button class="close-button" @click="closeModal">&times;</button>
         <iframe :class="{ 'modal-content--desktop': isDesktop, 'modal-content--mobile': !isDesktop }" :src="props.videoUrl"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
   </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
   videoUrl: string;
   visible: boolean;
}>();

const emit = defineEmits(['close']);

const isDesktop = computed(() => window.innerWidth > 768);

const handleEsc = (event: KeyboardEvent) => {
   if (event.key === 'Escape') {
      closeModal();
   }
};

const closeModal = () => {
   emit('close');
};

onMounted(() => {
   window.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
   window.removeEventListener('keydown', handleEsc);
});
</script>

<style lang="scss" scoped>
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
   z-index: 1003;
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

.modal-content--desktop {
   width: 800px;
   height: 450px;
}

.modal-content--mobile {
   width: 370px;
   height: 210px;
}
</style>
