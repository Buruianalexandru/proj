<template>
    <div v-if="user">
    <div class="continut">
        <h1>Funcția Logaritmică</h1>
    
    <h3>Definiție</h3>
    <p>Funcția logaritmică este inversa funcției exponențiale și are forma <span class="highlight">f(x) = log<sub>a</sub>(x)</span>, unde <span class="highlight">a</span> este baza logaritmului, iar <span class="highlight">a</span> este un număr real pozitiv diferit de 1.</p>
    
    <h3>Proprietăți</h3>
    <ul>
        <li><strong>Domeniu:</strong> Domeniul funcției logaritmice este <span class="highlight">(0, ∞)</span>.</li>
        <li><strong>Codomeniu:</strong> Codomeniul funcției logaritmice este mulțimea numerelor reale, <span class="highlight">ℝ</span>.</li>
        <li><strong>Monotonie:</strong> Funcția logaritmică este strict monotonă crescătoare dacă <span class="highlight">a > 1</span> și strict monotonă descrescătoare dacă 0 < a < 1.</li>
        <br>
        <li><strong>Intersecții:</strong> Funcția logaritmică intersectează axa <span class="highlight">Ox</span> în punctul (1, 0).</li>
        <li><strong>Asimptote:</strong> Axa <span class="highlight">Oy</span> este o asimptotă verticală la graficul funcției logaritmice.</li>
    </ul>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția <span class="highlight">f(x) = log<sub>2</sub>(x)</span>:</p>
        <ul>
            <li>Domeniul este <span class="highlight">(0, ∞)</span>.</li>
            <li>Codomeniul este <span class="highlight">ℝ</span>.</li>
            <li>Este strict monotonă crescătoare deoarece baza 2 este mai mare decât 1.</li>
            <li>Intersectează axa <span class="highlight">Ox</span> în punctul (1, 0).</li>
            <li>Axa <span class="highlight">Oy</span> este o asimptotă verticală.</li>
        </ul>
    </div>
    
    <h3>Derivata Funcției Logaritmice</h3>
    <p>Derivata funcției logaritmice <span class="highlight">f(x) = log<sub>a</sub>(x)</span> este:</p>
    <p class="formula">f'(x) = 1 / (x * ln(a))</p>
    <p>unde <span class="highlight">ln(a)</span> este logaritmul natural al bazei <span class="highlight">a</span>.</p>
    
    <h3>Funcția Logaritmică Naturală</h3>
    <p>Funcția logaritmică naturală este de forma <span class="highlight">f(x) = ln(x)</span>, unde <span class="highlight">ln</span> este logaritmul în baza <span class="highlight">e</span>, cu <span class="highlight">e</span> aproximativ egal cu 2.71828. Această funcție are proprietăți speciale:</p>
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
