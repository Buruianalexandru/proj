<template>
    <div v-if="user">
   <div class="continut">
     <h1>Funcția cu Exponent Număr Natural</h1>
    
    <h3>Definiție</h3>
    <p>O funcție de forma <span class="highlight">f(x) = x<sup>n</sup></span>, unde <span class="highlight">n</span> este un număr natural, se numește funcție de putere. Aceasta ridică baza <span class="highlight">x</span> la puterea <span class="highlight">n</span>.</p>
    
    <h3>Forma Generală</h3>
    <p>Forma generală a funcției este:</p>
    <p class="formula">f(x) = x<sup>n</sup></p>
    <p>unde <span class="highlight">x</span> este baza și <span class="highlight">n</span> este exponentul.</p>
    
    <h3>Proprietăți</h3>
    <ul>
        <li><strong>Monotonie:</strong> Funcția <span class="highlight">f(x) = x<sup>n</sup></span> este monotonă crescătoare dacă <span class="highlight">n</span> este par și <span class="highlight">x</span> ≥ 0, și monotonă descrescătoare dacă <span class="highlight">x</span> < 0.</li>
        <li><strong>Simetrie:</strong> Dacă <span class="highlight">n</span> este par, funcția este simetrică față de axa <span class="highlight">Oy</span>. Dacă <span class="highlight">n</span> este impar, funcția este simetrică față de origine.</li>
        <li><strong>Paritate:</strong> Dacă <span class="highlight">n</span> este par, funcția este pară. Dacă <span class="highlight">n</span> este impar, funcția este impară.</li>
       <br>
        <li><strong>Intersecții:</strong> Funcția intersectează axa <span class="highlight">Oy</span> în punctul (0, 0).</li>
    </ul>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Funcția <span class="highlight">f(x) = x<sup>2</sup></span>:</p>
        <ul>
            <li>Este o funcție pară deoarece exponentul 2 este par.</li>
            <li>Este monotonă crescătoare pentru <span class="highlight">x</span> ≥ 0 și monotonă descrescătoare pentru <span class="highlight">x</span> < 0.</li>
            <li>Este simetrică față de axa <span class="highlight">Oy</span>.</li>
        </ul>
        <p>Graficul funcției este o parabolă cu vârful în origine și deschisă în sus.</p>
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
