<template>
    <div v-if="user">
      <div class="container-page">
        <div class="container-row">
          <div class="content-box">
            <h3>Test practic, nivel: ușor</h3>
            <button @click="goToPage1()">Accesează testul</button>
          </div>
          <div class="content-box">
            <h3>Test practic, nivel: dificil</h3>
          <button @click="goToPage2()">Accesează testul</button>
          </div>
        </div>
      </div>
    
      
     </div>
    <div v-else>
      <p>Please log in to view this page.</p>
    </div>
  </template>

<script>
import {computed} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default({
   setup() {
    const store = useStore(); // Asigură-te că acesta este definit corect
    const router = useRouter();
    const user = computed(() => store.state.user); // 'user' trebuie definit după 'store'

    const goToPage1 = (route) => {
      router.push('/qp1');
    };
const goToPage2 = (route) => {
      router.push('/qp2');
    };
    return {
      user,
      goToPage1,
      goToPage2
    };
  }
})
</script>