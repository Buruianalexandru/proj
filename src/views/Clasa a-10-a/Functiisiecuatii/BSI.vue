<template>
    <div v-if="user">
  <div class="continut">
     <h1>Bijectivitate, Surjectivitate și Injectivitate</h1>
    
    <h3>Definiții</h3>
    <p>În matematică, funcțiile sunt clasificate în funcții injective, surjective și bijective, în funcție de modul în care ele mapează elementele din domeniu în codomeniu.</p>
    
    <h3>Funcție Injectivă (Injecție)</h3>
    <p>O funcție <span class="highlight">f: A → B</span> este injectivă dacă fiecare element din mulțimea țintă <span class="highlight">B</span> este imaginea a cel mult unui element din domeniu <span class="highlight">A</span>. Cu alte cuvinte, f(x₁) = f(x₂) implică x₁ = x₂.</p>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția f(x) = 2x este injectivă deoarece dacă f(a) = f(b), atunci 2a = 2b implică a = b.</p>
    </div>
    
    <h3>Funcție Surjectivă (Surjecție)</h3>
    <p>O funcție <span class="highlight">f: A → B</span> este surjectivă dacă fiecare element din mulțimea țintă <span class="highlight">B</span> este imaginea cel puțin unui element din domeniu <span class="highlight">A</span>. Cu alte cuvinte, pentru fiecare y din B, există cel puțin un x din A astfel încât f(x) = y.</p>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția f(x) = x² este surjectivă dacă domeniul este mulțimea numerelor reale ne-negative și codomeniul este mulțimea numerelor reale ne-negative.</p>
    </div>
    
    <h3>Funcție Bijectivă (Bijecție)</h3>
    <p>O funcție <span class="highlight">f: A → B</span> este bijectivă dacă este atât injectivă, cât și surjectivă. Cu alte cuvinte, fiecare element din mulțimea țintă <span class="highlight">B</span> este imaginea exact unui element din domeniu <span class="highlight">A</span>.</p>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția f(x) = x + 1, unde domeniul și codomeniul sunt mulțimea numerelor reale, este bijectivă.</p>
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
export default({
  setup() {
     const user = computed(() => store.state.user);
     const store = useStore();
         return{user}
  },
})
</script>
