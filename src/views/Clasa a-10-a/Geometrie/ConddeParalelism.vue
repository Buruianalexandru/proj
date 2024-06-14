<template>
    <div v-if="user">
    <div class="continut">
      <h1>Condiții de Paralelism</h1>
    
    <h3>Definiție</h3>
    <p>Două drepte sunt paralele dacă ele se află în același plan și nu se intersectează indiferent cât de mult ar fi prelungite. În planul cartezian, există condiții specifice pentru ca două drepte să fie paralele.</p>
    
    <h3>Paralelismul Drepte în Planul Cartezian</h3>
    <p>În planul cartezian, dreptele sunt reprezentate de ecuații de forma <span class="highlight">y = mx + n</span>, unde <span class="highlight">m</span> este panta dreptei și <span class="highlight">n</span> este intersectarea cu axa <span class="highlight">Oy</span>.</p>
    <p>Două drepte sunt paralele dacă și numai dacă au aceeași pantă.</p>
    
    <h3>Condiția de Paralelism</h3>
    <p>Dreptele <span class="highlight">y = m<sub>1</sub>x + n<sub>1</sub></span> și <span class="highlight">y = m<sub>2</sub>x + n<sub>2</sub></span> sunt paralele dacă și numai dacă:</p>
    <p class="formula">m<sub>1</sub> = m<sub>2</sub></p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Considerăm dreptele <span class="highlight">y = 2x + 3</span> și <span class="highlight">y = 2x - 5</span>.</p>
        <p>Pantele celor două drepte sunt <span class="highlight">m<sub>1</sub> = 2</span> și <span class="highlight">m<sub>2</sub> = 2</span>.</p>
        <p>Deoarece <span class="highlight">m<sub>1</sub> = m<sub>2</sub></span>, dreptele sunt paralele.</p>
    </div>
    
    <h3>Vectori Direcție</h3>
    <p>Două drepte sunt paralele dacă vectorii lor direcție sunt colineari. Un vector direcție pentru dreapta <span class="highlight">Ax + By + C = 0</span> este <span class="highlight">v(A, B)</span>.</p>
    <p>Două drepte sunt paralele dacă vectorii lor direcție sunt proporționali:</p>
    <p class="formula">v<sub>1</sub> = k * v<sub>2</sub></p>
    <p>unde <span class="highlight">k</span> este un scalar.</p>
    
    <h3>Exemplu de Vectori Direcție</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Considerăm dreptele <span class="highlight">2x - 3y + 4 = 0</span> și <span class="highlight">4x - 6y - 7 = 0</span>.</p>
        <p>Vectorii lor direcție sunt <span class="highlight">v<sub>1</sub>(2, -3)</span> și <span class="highlight">v<sub>2</sub>(4, -6)</span>.</p>
        <p>Deoarece <span class="highlight">v<sub>2</sub> = 2 * v<sub>1</sub></span>, dreptele sunt paralele.</p>
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
