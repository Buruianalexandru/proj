<template>
    <div v-if="user">
    <div class="continut">
          <h1>Permutări</h1>
    
    <h2>Definiție</h2>
    <p>Permutările sunt aranjamente ordonate ale elementelor unui set. Dacă avem o mulțime cu <span class="highlight">n</span> elemente, o permutare a acestei mulțimi este o rearanjare a celor <span class="highlight">n</span> elemente într-o anumită ordine.</p>
    
    <h2>Formula Permutărilor</h2>
    <p>Numărul de permutări ale unei mulțimi de <span class="highlight">n</span> elemente se notează cu <span class="highlight">P(n)</span> și se calculează folosind formula:</p>
    <p class="formula">P(n) = n!</p>
    <p>unde <span class="highlight">n!</span> reprezintă factorialul lui <span class="highlight">n</span>, adică produsul tuturor numerelor întregi pozitive mai mici sau egale cu <span class="highlight">n</span>.</p>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați numărul de permutări ale unei mulțimi de 4 elemente.</p>
        <p class="formula">P(4) = 4! = 4 * 3 * 2 * 1 = 24</p>
        <p>Deci, există 24 de permutări posibile.</p>
    </div>
    
    <h2>Permutări cu Repetiție</h2>
    <p>În cazul în care elementele se repetă, numărul de permutări se calculează folosind formula:</p>
    <p class="formula">P(n; n<sub>1</sub>, n<sub>2</sub>, ..., n<sub>k</sub>) = n! / (n<sub>1</sub>! * n<sub>2</sub>! * ... * n<sub>k</sub>!)</p>
    <p>unde <span class="highlight">n<sub>1</sub>, n<sub>2</sub>, ..., n<sub>k</sub></span> sunt frecvențele elementelor care se repetă.</p>
    
    <h2>Exemplu de Permutări cu Repetiție</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați numărul de permutări ale cuvântului "AAB".</p>
        <p>Cuvântul are 3 litere, dintre care litera "A" se repetă de 2 ori. Aplicăm formula:</p>
        <p class="formula">P(3; 2, 1) = 3! / (2! * 1!) = (3 * 2 * 1) / (2 * 1) = 3</p>
        <p>Deci, există 3 permutări posibile: AAB, ABA, BAA.</p>
    </div>
    
    <h2>Proprietăți ale Permutărilor</h2>
    <ul>
        <li><strong>Factorial:</strong> Numărul de permutări ale unei mulțimi de <span class="highlight">n</span> elemente este <span class="highlight">n!</span>.</li>
        <li><strong>Simetrie:</strong> Permutările sunt ordonate, ceea ce înseamnă că ordinea elementelor contează.</li>
    </ul>
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