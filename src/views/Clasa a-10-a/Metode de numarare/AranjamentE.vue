<template>
    <div v-if="user">
   <div class="continut">
        <h1>Aranjamente</h1>
    
    <h3>Definiție</h3>
    <p>Aranjamentele sunt selecții ordonate de elemente dintr-o mulțime. Dacă avem o mulțime cu <span class="highlight">n</span> elemente și dorim să alegem <span class="highlight">k</span> elemente din această mulțime, unde ordinea contează, atunci vorbim despre aranjamente.</p>
    
    <h3>Formula Aranjamentelor</h3>
    <p>Numărul de aranjamente de <span class="highlight">k</span> elemente dintr-o mulțime de <span class="highlight">n</span> elemente se notează <span class="highlight">A(n, k)</span> și se calculează cu formula:</p>
    <p class="formula">A(n, k) = n! / (n - k)!</p>
    <p>unde <span class="highlight">n!</span> reprezintă factorialul lui <span class="highlight">n</span>.</p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați numărul de aranjamente de 2 elemente dintr-o mulțime de 4 elemente.</p>
        <p class="formula">A(4, 2) = 4! / (4 - 2)! = 4! / 2! = (4 * 3 * 2 * 1) / (2 * 1) = 12</p>
        <p>Deci, există 12 aranjamente posibile.</p>
    </div>
    
    <h3>Proprietăți ale Aranjamentelor</h3>
    <ul>
        <li>Aranjamentele sunt ordonate, ceea ce înseamnă că ordinea elementelor contează.</li>
        <li>Numărul de aranjamente este întotdeauna mai mare sau egal cu numărul de combinații pentru aceleași valori de <span class="highlight">n</span> și <span class="highlight">k</span>, deoarece combinațiile nu țin cont de ordine.</li>
    </ul>
    
    <h3>Aranjamente cu Repetiție</h3>
    <p>În cazul în care elementele pot fi repetate, numărul de aranjamente se calculează cu formula:</p>
    <p class="formula">A'(n, k) = n<sup>k</sup></p>
    
    <h3>Exemplu de Aranjamente cu Repetiție</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Calculați numărul de aranjamente de 2 elemente dintr-o mulțime de 3 elemente, cu repetare.</p>
        <p class="formula">A'(3, 2) = 3<sup>2</sup> = 9</p>
        <p>Deci, există 9 aranjamente posibile cu repetare.</p>
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
