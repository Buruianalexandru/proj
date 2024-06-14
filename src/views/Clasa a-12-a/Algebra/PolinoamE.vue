<template>
    <div v-if="user">
    <div class="continut">
         <h1>Polinoame</h1>
    
    <h2>Definiție</h2>
    <p>Un polinom este o expresie algebrică formată dintr-o sumă finită de termeni, fiecare termen fiind produsul unui coeficient și a unei puteri nenegative a unei variabile. Forma generală a unui polinom în variabila x este:</p>
    <p class="formula">P(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub></p>
    <p>unde a<sub>n</sub>, a<sub>n-1</sub>, ..., a<sub>1</sub>, a<sub>0</sub> sunt coeficienți și n este un număr întreg nenegativ.</p>
    
    <h2>Gradul unui Polinom</h2>
    <p>Gradul unui polinom este cel mai mare exponent al variabilei x care apare în polinom. De exemplu, polinomul P(x) = 4x<sup>3</sup> + 3x<sup>2</sup> + 2x + 1 are gradul 3.</p>
    
    <h2>Operații cu Polinoame</h2>
    
    <h3>Adunarea Polinoamelor</h3>
    <p>Adunarea polinoamelor se face prin adunarea coeficienților termenilor de același grad:</p>
    <p class="formula">(P + Q)(x) = (a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>0</sub>) + (b<sub>m</sub>x<sup>m</sup> + b<sub>m-1</sub>x<sup>m-1</sup> + ... + b<sub>0</sub>)</p>
    
    <h3>Înmulțirea Polinoamelor</h3>
    <p>Înmulțirea polinoamelor se face prin aplicarea distributivității:</p>
    <p class="formula">(P * Q)(x) = (a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>0</sub>) * (b<sub>m</sub>x<sup>m</sup> + b<sub>m-1</sub>x<sup>m-1</sup> + ... + b<sub>0</sub>)</p>
    <p>Fiecare termen din primul polinom este înmulțit cu fiecare termen din al doilea polinom.</p>
    
    <h3>Derivarea Polinoamelor</h3>
    <p>Derivata unui polinom se obține aplicând regula derivării pentru fiecare termen:</p>
    <p class="formula">P'(x) = d/dx [a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub>] = n * a<sub>n</sub>x<sup>n-1</sup> + (n-1) * a<sub>n-1</sub>x<sup>n-2</sup> + ... + a<sub>1</sub></p>
    
    <h2>Exemple de Polinoame</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Fie polinoamele P(x) = 2x<sup>2</sup> + 3x + 1 și Q(x) = x<sup>2</sup> - x + 4. Calculați P(x) + Q(x).</p>
        <p>Rezolvare:</p>
        <p class="formula">(2x<sup>2</sup> + 3x + 1) + (x<sup>2</sup> - x + 4) = 3x<sup>2</sup> + 2x + 5</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Fie polinoamele P(x) = x + 1 și Q(x) = x - 1. Calculați P(x) * Q(x).</p>
        <p>Rezolvare:</p>
        <p class="formula">(x + 1) * (x - 1) = x<sup>2</sup> - 1</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 3:</strong></p>
        <p>Fie polinomul P(x) = 3x<sup>3</sup> + 2x<sup>2</sup> + x + 5. Calculați derivata P'(x).</p>
        <p>Rezolvare:</p>
        <p class="formula">P'(x) = 9x<sup>2</sup> + 4x + 1</p>
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