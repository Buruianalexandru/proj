<template>
    <div v-if="user">
    <div class="continut">
        <h1>Binomul lui Newton</h1>
    
    <h3>Definiție</h3>
    <p>Binomul lui Newton este o formulă care descrie dezvoltarea unei puteri a unui binom. Formula este utilizată pentru a extinde expresiile de forma <span class="highlight">(a + b)<sup>n</sup></span>, unde <span class="highlight">n</span> este un număr natural.</p>
    
    <h3>Formula Binomului lui Newton</h3>
    <p>Formula binomului lui Newton este:</p>
    <p class="formula">(a + b)<sup>n</sup> = ∑<sub>k=0</sub><sup>n</sup> C(n, k) * a<sup>n-k</sup> * b<sup>k</sup></p>
    <p>unde <span class="highlight">C(n, k)</span> este coeficientul binomial și se calculează folosind formula:</p>
    <p class="formula">C(n, k) = n! / [k!(n - k)!]</p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Să dezvoltăm expresia <span class="highlight">(a + b)<sup>3</sup></span> folosind formula binomului lui Newton.</p>
        <p>Aplicăm formula:</p>
        <p class="formula">(a + b)<sup>3</sup> = C(3, 0) * a<sup>3</sup> * b<sup>0</sup> + C(3, 1) * a<sup>2</sup> * b<sup>1</sup> + C(3, 2) * a<sup>1</sup> * b<sup>2</sup> + C(3, 3) * a<sup>0</sup> * b<sup>3</sup></p>
        <p>Calculăm coeficienții binomiali:</p>
        <p class="formula">C(3, 0) = 1, C(3, 1) = 3, C(3, 2) = 3, C(3, 3) = 1</p>
        <p>Rezultatul este:</p>
        <p class="formula">(a + b)<sup>3</sup> = 1 * a<sup>3</sup> + 3 * a<sup>2</sup> * b + 3 * a * b<sup>2</sup> + 1 * b<sup>3</sup></p>
        <p>Deci, <span class="highlight">(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></span></p>
    </div>
    
    <h3>Proprietăți ale Coeficienților Binomiali</h3>
    <ul>
        <li><strong>Simetria:</strong> C(n, k) = C(n, n-k)</li>
        <li><strong>Valoarea maximă:</strong> C(n, k) are valoarea maximă când k este aproape de n/2</li>
        <li><strong>Relația de recurență:</strong> C(n, k) = C(n-1, k-1) + C(n-1, k)</li>
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
