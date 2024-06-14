<template>
    <div v-if="user">
    <div class="continut">
            <h1>Progresii Aritmetice</h1>
    <h3>Definiție</h3>
    <p>O progresie aritmetică (PA) este un șir de numere în care diferența dintre orice termen și termenul precedent este constantă. Această constantă se numește <strong>rație</strong> și se notează cu <span class="highlight">r</span>.</p>
    
    <h3>Forma Generală</h3>
    <p>O progresie aritmetică are forma generală:</p>
    <p class="formula">a, a + r, a + 2r, a + 3r, ..., a + (n-1)r</p>
    <p>unde <span class="highlight">a</span> este primul termen, <span class="highlight">r</span> este rația, iar <span class="highlight">n</span> este numărul de termeni.</p>
    
    <h3>Formula Termenului General</h3>
    <p>Termenul general al unei progresii aritmetice se poate calcula cu formula:</p>
    <p class="formula">a<sub>n</sub> = a + (n - 1)r</p>
    <p>unde <span class="highlight">a<sub>n</sub></span> este termenul n, <span class="highlight">a</span> este primul termen, <span class="highlight">r</span> este rația, iar <span class="highlight">n</span> este numărul de termeni.</p>
    
    <h3>Exemplu</h3>
    <p>Considerăm progresia aritmetică: 2, 5, 8, 11, ...</p>
    <ul>
        <li>Primul termen: <span class="highlight">a = 2</span></li>
        <li>Rația: <span class="highlight">r = 3</span></li>
    </ul>
    <p>Să calculăm al 5-lea termen:</p>
    <p class="formula">a<sub>5</sub> = 2 + (5 - 1) * 3 = 2 + 4 * 3 = 2 + 12 = 14</p>
    
    <h3>Suma Termenilor unei Progresii Aritmetice</h3>
    <p>Suma primilor <span class="highlight">n</span> termeni ai unei progresii aritmetice se poate calcula cu formula:</p>
    <p class="formula">S<sub>n</sub> = n/2 * (2a + (n - 1)r)</p>
    <p>unde <span class="highlight">S<sub>n</sub></span> este suma primilor <span class="highlight">n</span> termeni, <span class="highlight">a</span> este primul termen, <span class="highlight">r</span> este rația, iar <span class="highlight">n</span> este numărul de termeni.</p>
    
    <h3>Exemplu de Calcul al Sumei</h3>
    <p>Considerăm progresia aritmetică: 3, 6, 9, 12, ... Să calculăm suma primilor 4 termeni.</p>
    <ul>
        <li>Primul termen: <span class="highlight">a = 3</span></li>
        <li>Rația: <span class="highlight">r = 3</span></li>
        <li>Numărul de termeni: <span class="highlight">n = 4</span></li>
    </ul>
    <p class="formula">S<sub>4</sub> = 4/2 * (2 * 3 + (4 - 1) * 3) = 2 * (6 + 9) = 2 * 15 = 30</p>
    
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
