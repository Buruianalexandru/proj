<template>
    <div v-if="user">
    <div class="continut">
        <h1>Șiruri</h1>
    
    <h2>Definiție</h2>
    <p>Un șir este o colecție ordonată de numere, dispuse într-o anumită ordine. Fiecare număr dintr-un șir se numește termen al șirului.</p>
    
    <h2>Notație și Termeni de Bază</h2>
    <p>Un șir poate fi notat astfel:</p>
    <p class="formula">{a<sub>n</sub>}</p>
    <p>unde a<sub>n</sub> reprezintă termenul general al șirului.</p>
    
    <h2>Tipuri de Șiruri</h2>
    <ul>
        <li><strong>Șir Aritmetic:</strong> Un șir în care diferența dintre oricare două termene consecutive este constantă. Diferența se numește rația șirului și se notează cu d.</li>
        <li><strong>Șir Geometric:</strong> Un șir în care raportul dintre oricare două termene consecutive este constant. Raportul se numește rația șirului și se notează cu r.</li>
    </ul>
    
    <h2>Formula Termenului General</h2>
    
    <h3>Șir Aritmetic</h3>
    <p>Termenul general al unui șir aritmetic este dat de formula:</p>
    <p class="formula">a<sub>n</sub> = a<sub>1</sub> + (n - 1) * d</p>
    <p>unde a<sub>1</sub> este primul termen, n este numărul termenului, iar d este rația șirului.</p>
    
    <h3>Șir Geometric</h3>
    <p>Termenul general al unui șir geometric este dat de formula:</p>
    <p class="formula">a<sub>n</sub> = a<sub>1</sub> * r<sup>n-1</sup></p>
    <p>unde a<sub>1</sub> este primul termen, n este numărul termenului, iar r este rația șirului.</p>
    
    <h2>Suma Termenilor</h2>
    
    <h3>Șir Aritmetic</h3>
    <p>Suma primilor n termeni ai unui șir aritmetic este dată de formula:</p>
    <p class="formula">S<sub>n</sub> = n/2 * (2a<sub>1</sub> + (n - 1) * d)</p>
    
    <h3>Șir Geometric</h3>
    <p>Suma primilor n termeni ai unui șir geometric este dată de formula:</p>
    <p class="formula">S<sub>n</sub> = a<sub>1</sub> * (1 - r<sup>n</sup>) / (1 - r)</p>
    <p>dacă r ≠ 1.</p>
    
    <h2>Exemple</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Fie șirul aritmetic cu a<sub>1</sub> = 3 și d = 2. Determinați termenul al 5-lea.</p>
        <p>Folosim formula termenului general:</p>
        <p class="formula">a<sub>5</sub> = 3 + (5 - 1) * 2 = 3 + 4 * 2 = 3 + 8 = 11</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Fie șirul geometric cu a<sub>1</sub> = 2 și r = 3. Determinați termenul al 4-lea.</p>
        <p>Folosim formula termenului general:</p>
        <p class="formula">a<sub>4</sub> = 2 * 3<sup>4-1</sup> = 2 * 3<sup>3</sup> = 2 * 27 = 54</p>
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