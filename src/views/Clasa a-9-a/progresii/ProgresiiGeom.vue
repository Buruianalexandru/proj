<template>
    <div v-if="user">
   <div class="continut">
      <h1>Progresii Geometrice</h1>
    <h3>Definiție</h3>
    <p>O progresie geometrică (PG) este un șir de numere în care fiecare termen se obține din termenul precedent înmulțindu-l cu o constantă numită <strong>rație</strong> și notată cu <span class="highlight">q</span>.</p>
    
    <h3>Forma Generală</h3>
    <p>O progresie geometrică are forma generală:</p>
    <p class="formula">a, a * q, a * q<sup>2</sup>, a * q<sup>3</sup>, ..., a * q<sup>n-1</sup></p>
    <p>unde <span class="highlight">a</span> este primul termen, <span class="highlight">q</span> este rația, iar <span class="highlight">n</span> este numărul de termeni.</p>
    
    <h3>Formula Termenului General</h3>
    <p>Termenul general al unei progresii geometrice se poate calcula cu formula:</p>
    <p class="formula">a<sub>n</sub> = a * q<sup>n-1</sup></p>
    <p>unde <span class="highlight">a<sub>n</sub></span> este termenul n, <span class="highlight">a</span> este primul termen, <span class="highlight">q</span> este rația, iar <span class="highlight">n</span> este numărul de termeni.</p>
    
    <h3>Exemplu</h3>
    <p>Considerăm progresia geometrică: 2, 6, 18, 54, ...</p>
    <ul>
        <li>Primul termen: <span class="highlight">a = 2</span></li>
        <li>Rația: <span class="highlight">q = 3</span></li>
    </ul>
    <p>Să calculăm al 5-lea termen:</p>
    <p class="formula">a<sub>5</sub> = 2 * 3<sup>5-1</sup> = 2 * 3<sup>4</sup> = 2 * 81 = 162</p>
    
    <h3>Suma Termenilor unei Progresii Geometrice</h3>
    <p>Suma primilor <span class="highlight">n</span> termeni ai unei progresii geometrice se poate calcula cu formula:</p>
    <p class="formula">S<sub>n</sub> = a * (q<sup>n</sup> - 1) / (q - 1), dacă q ≠ 1</p>
    <p>unde <span class="highlight">S<sub>n</sub></span> este suma primilor <span class="highlight">n</span> termeni, <span class="highlight">a</span> este primul termen, <span class="highlight">q</span> este rația, iar <span class="highlight">n</span> este numărul de termeni.</p>
    
    <h3>Exemplu de Calcul al Sumei</h3>
    <p>Considerăm progresia geometrică: 3, 9, 27, 81, ... Să calculăm suma primilor 4 termeni.</p>
    <ul>
        <li>Primul termen: <span class="highlight">a = 3</span></li>
        <li>Rația: <span class="highlight">q = 3</span></li>
        <li>Numărul de termeni: <span class="highlight">n = 4</span></li>
    </ul>
    <p class="formula">S<sub>4</sub> = 3 * (3<sup>4</sup> - 1) / (3 - 1) = 3 * (81 - 1) / 2 = 3 * 80 / 2 = 120</p>
    
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
