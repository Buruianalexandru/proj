<template>
    <div v-if="user">
    <div class="continut">
         <h1>Funcția Radical</h1>
    
    <h3>Definiție</h3>
    <p>Funcția radical este o funcție de forma <span class="highlight">f(x) = √x</span>, unde <span class="highlight">√x</span> reprezintă rădăcina pătrată a lui <span class="highlight">x</span>. Aceasta poate fi generalizată la forma <span class="highlight">f(x) = x^(1/n)</span>, unde <span class="highlight">n</span> este un număr natural mai mare decât 1.</p>
    
    <h3>Proprietăți</h3>
    <ul>
        <li><strong>Domeniu:</strong> Domeniul funcției radical pătrat este <span class="highlight">[0, ∞)</span>. Pentru funcția generalizată <span class="highlight">x^(1/n)</span>, domeniul depinde de paritatea lui <span class="highlight">n</span>.</li>
        <li><strong>Codomeniu:</strong> Codomeniul funcției radical pătrat este <span class="highlight">[0, ∞)</span>.</li>
        <li><strong>Monotonie:</strong> Funcția radical pătrat este strict monotonă crescătoare.</li>
        <li><strong>Intersecții:</strong> Funcția radical pătrat intersectează axa <span class="highlight">Ox</span> în punctul (0, 0).</li>
    </ul>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția <span class="highlight">f(x) = √x</span>:</p>
        <ul>
            <li>Domeniul este <span class="highlight">[0, ∞)</span>.</li>
            <li>Codomeniul este <span class="highlight">[0, ∞)</span>.</li>
            <li>Este strict monotonă crescătoare.</li>
            <li>Intersectează axa <span class="highlight">Ox</span> în punctul (0, 0).</li>
        </ul>
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
