<template>
    <div v-if="user">
    <div class="continut">
         <h1>Combinări</h1>
    
    <h2>Definiție</h2>
    <p>Combinările sunt selecții de elemente dintr-o mulțime, unde ordinea nu contează. Dacă avem o mulțime cu <span class="highlight">n</span> elemente și dorim să alegem <span class="highlight">k</span> elemente din această mulțime, atunci vorbim despre combinări.</p>
    
    <h2>Formula Combinărilor</h2>
    <p>Numărul de combinări de <span class="highlight">k</span> elemente dintr-o mulțime de <span class="highlight">n</span> elemente se notează <span class="highlight">C(n, k)</span> și se calculează cu formula:</p>
    <p class="formula">C(n, k) = n! / [k!(n - k)!]</p>
    <p>unde <span class="highlight">n!</span> reprezintă factorialul lui <span class="highlight">n</span>.</p>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați numărul de combinări de 2 elemente dintr-o mulțime de 4 elemente.</p>
        <p class="formula">C(4, 2) = 4! / [2!(4 - 2)!] = (4 * 3 * 2 * 1) / [2 * 1 * 2 * 1] = 6</p>
        <p>Deci, există 6 combinări posibile.</p>
    </div>
    
    <h2>Proprietăți ale Combinărilor</h2>
    <ul>
        <li>Combinările sunt neordonate, ceea ce înseamnă că ordinea elementelor nu contează.</li>
        <li><strong>Simetria:</strong> C(n, k) = C(n, n-k)</li>
        <li><strong>Valoarea maximă:</strong> C(n, k) are valoarea maximă când k este aproape de n/2</li>
        <li><strong>Relația de recurență:</strong> C(n, k) = C(n-1, k-1) + C(n-1, k)</li>
    </ul>
    
    <h2>Exemplu de Simetrie</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați C(5, 2) și C(5, 3).</p>
        <p class="formula">C(5, 2) = 5! / [2!(5 - 2)!] = 10</p>
        <p class="formula">C(5, 3) = 5! / [3!(5 - 3)!] = 10</p>
        <p>Observăm că C(5, 2) = C(5, 3), demonstrând simetria.</p>
    </div>
    
    <h2>Combinări cu Repetiție</h2>
    <p>În cazul în care elementele pot fi repetate, numărul de combinări se calculează cu formula:</p>
    <p class="formula">C'(n, k) = C(n + k - 1, k)</p>
    
    <h2>Exemplu de Combinări cu Repetiție</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați numărul de combinări de 2 elemente dintr-o mulțime de 3 elemente, cu repetare.</p>
        <p class="formula">C'(3, 2) = C(3 + 2 - 1, 2) = C(4, 2) = 6</p>
        <p>Deci, există 6 combinări posibile cu repetare.</p>
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