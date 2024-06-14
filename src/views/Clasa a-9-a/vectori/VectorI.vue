<template>
    <div v-if="user">
    <div class="continut">
        <h1>Introducere în Vectori</h1>
    <h3>Definiție și Concepte de Bază</h3>
    <p>Un vector este un segment de dreaptă orientat în spațiu. Acesta este definit de un punct de început și un punct de sfârșit și este caracterizat prin direcție, sens și mărime (lungime).</p>
    
    <h3>Reprezentarea Vectorilor</h3>
    <p>Vectorii pot fi reprezentați în coordonate carteziene folosind punctele lor de început și de sfârșit. De exemplu, vectorul definit de punctele A(1,2) și B(3,5) este notat <img src="@/assets/vector.png" class="vector"> </p>

    <h3>Operații cu Vectori</h3>
    <p>Principalele operații cu vectori includ adunarea, scăderea și înmulțirea cu un scalar. Adunarea a doi vectori se face geometric, unindu-se capătul unui vector cu începutul celuilalt.</p>

    </div>
    </div>
    <div v-else>
      <p>Please log in to view this page.</p>
      </div>
</template>
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default ({
    setup() {
         const user = computed(() => store.state.user);
         const store = useStore();
         return{user}
    }
})
</script>
