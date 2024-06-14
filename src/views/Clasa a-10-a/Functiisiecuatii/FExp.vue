<template>
    <div v-if="user">
  <div class="continut">
        <h1>Funcția Exponențială</h1>
    
    <h3>Definiție</h3>
    <p>Funcția exponențială este o funcție de forma <span class="highlight">f(x) = a<sup>x</sup></span>, unde <span class="highlight">a</span> este o constantă pozitivă diferită de 1, numită baza exponențialului.</p>
    
    <h3>Proprietăți</h3>
    <ul>
        <li><strong>Domeniu:</strong> Domeniul funcției exponențiale este mulțimea numerelor reale, <span class="highlight">ℝ</span>.</li>
        <li><strong>Codomeniu:</strong> Codomeniul funcției exponențiale este <span class="highlight">(0, ∞)</span>.</li>
        <li><strong>Monotonie:</strong> Funcția exponențială este strict monotonă crescătoare dacă <span class="highlight">a > 1</span> și strict monotonă descrescătoare dacă <span class="highlight">0 < a < 1</span>.</li>
        <li><strong>Intersecții:</strong> Funcția exponențială intersectează axa <span class="highlight">Oy</span> în punctul (0, 1).</li>
        <li><strong>Asimptote:</strong> Axa <span class="highlight">Ox</span> este o asimptotă orizontală la graficul funcției exponențiale.</li>
    </ul>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția <span class="highlight">f(x) = 2<sup>x</sup></span>:</p>
        <ul>
            <li>Domeniul este <span class="highlight">ℝ</span>.</li>
            <li>Codomeniul este <span class="highlight">(0, ∞)</span>.</li>
            <li>Este strict monotonă crescătoare deoarece baza 2 este mai mare decât 1.</li>
            <li>Intersectează axa <span class="highlight">Oy</span> în punctul (0, 1).</li>
            <li>Axa <span class="highlight">Ox</span> este o asimptotă orizontală.</li>
        </ul>
    </div>
     <h3>Funcția Exponențială Naturală</h3>
    <p>Funcția exponențială naturală este de forma <span class="highlight">f(x) = e<sup>x</sup></span>, unde <span class="highlight">e</span> este baza logaritmului natural, aproximativ egală cu 2.71828. Această funcție are proprietăți speciale:</p>

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
