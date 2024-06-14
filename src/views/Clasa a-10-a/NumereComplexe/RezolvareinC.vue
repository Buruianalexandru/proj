<template>
    <div v-if="user">
    <div class="continut">
          <h1>Rezolvarea Ecuațiilor în Mulțimea Numerelor Complexe (\(\mathbb{C}\))</h1>
    
    <h2>Definiție și Importanță</h2>
    <p>Mulțimea numerelor complexe \(\mathbb{C}\) include toate numerele de forma <span class="highlight">z = a + bi</span>, unde <span class="highlight">a</span> și <span class="highlight">b</span> sunt numere reale, iar <span class="highlight">i\)</span> este unitatea imaginară, definită prin <span class="highlight">i² = -1</span>. Rezolvarea ecuațiilor în această mulțime este esențială pentru găsirea soluțiilor în cazurile în care soluțiile reale nu există.</p>
    
    <h2>Formele Ecuațiilor</h2>
    <p>Există diverse tipuri de ecuații pe care le putem rezolva în mulțimea numerelor complexe, printre care:</p>
    <ul>
        <li><strong>Ecuații simple:</strong> <span class="highlight">z = a + bi</span></li>
        <li><strong>Ecuații liniare:</strong> <span class="highlight">az + b = 0</span></li>
        <li><strong>Ecuații de gradul al doilea:</strong> <span class="highlight">az² + bz + c = 0</span></li>
    </ul>
    
    <h2>Rezolvarea Ecuațiilor Simple</h2>
    <p>O ecuație simplă în mulțimea numerelor complexe are forma:</p>
    <p class="formula">z = a + bi</p>
    <p>unde <span class="highlight">a</span> și <span class="highlight">b</span> sunt numere reale, iar <span class="highlight">i</span> este unitatea imaginară.</p>
    
    <h2>Exemplu de Ecuație Simplă</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Rezolvați ecuația: <span class="highlight">z = 3 + 4i</span>.</p>
        <p>Solutia este directă, <span class="highlight">z = 3 + 4i</span>.</p>
    </div>
    
    <h2>Rezolvarea Ecuațiilor Liniare</h2>
    <p>O ecuație liniară în mulțimea numerelor complexe are forma:</p>
    <p class="formula">az + b = 0</p>
    <p>Pentru a rezolva această ecuație, se izolează <span class="highlight">z</span>:</p>
    <p class="formula">az = -b</p>
    <p class="formula">z = -b / a</p>
    
    <h2>Exemplu de Ecuație Liniară</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Rezolvați ecuația: <span class="highlight">2z + 3i = 0</span>.</p>
        <p>Izolăm <span class="highlight">z</span>:</p>
        <p class="formula">2z = -3i</p>
        <p class="formula">z = -3i / 2 = 0 - 1.5i</p>
        <p>Deci, <span class="highlight">z = -1.5i</span>.</p>
    </div>
    
    <h2>Rezolvarea Ecuațiilor de Gradul al Doilea</h2>
    <p>O ecuație de gradul al doilea în mulțimea numerelor complexe are forma:</p>
    <p class="formula">az² + bz + c = 0</p>
    <p>Pentru a rezolva această ecuație, folosim formula quadratică:</p>
    <p class="formula">z = \(\frac{-b \pm \sqrt{b² - 4ac}}{2a}\)</p>
    <p>Unde <span class="highlight">Δ = b² - 4ac</span> este discriminantul. Dacă Δ < 0, soluțiile vor fi complexe.</p>
    
    <h2>Exemplu de Ecuație de Gradul al Doilea</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Rezolvați ecuația: <span class="highlight">z² + 2z + 5 = 0</span>.</p>
        <p>Aplicăm formula quadratică:</p>
        <p class="formula">a = 1, b = 2, c = 5</p>
        <p>Discriminantul este:</p>
        <p class="formula">Δ = b² - 4ac = 2² - 4 * 1 * 5 = 4 - 20 = -16</p>
        <p>Pentru Δ < 0, soluțiile sunt complexe:</p>
        <p class="formula">z = \(\frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i\)</p>
        <p>Deci, soluțiile sunt: <span class="highlight">z = -1 + 2i</span> și <span class="highlight">z = -1 - 2i</span>.</p>
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