<template>
    <div v-if="user">
    <div class="continut">
        <h1>Coordonatele unui Vector</h1>
    
    <h3>Definiție</h3>
    <p>În geometrie, un vector este o entitate care are atât magnitudine (lungime), cât și direcție. Coordonatele unui vector în planul cartezian sunt determinate de punctele sale de început și de sfârșit.</p>
    
    <h3>Reprezentarea Vectorilor</h3>
    <p>Un vector <span class="highlight">AB</span> cu punctul de început <span class="highlight">A(x<sub>1</sub>, y<sub>1</sub>)</span> și punctul de sfârșit <span class="highlight">B(x<sub>2</sub>, y<sub>2</sub>)</span> are coordonatele:</p>
    <p class="formula">AB = (x<sub>2</sub> - x<sub>1</sub>, y<sub>2</sub> - y<sub>1</sub>)</p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Fie punctele <span class="highlight">A(1, 2)</span> și <span class="highlight">B(4, 6)</span>. Coordonatele vectorului <span class="highlight">AB</span> sunt:</p>
        <p class="formula">AB = (4 - 1, 6 - 2) = (3, 4)</p>
    </div>
    
    <h3>Operații cu Vectori</h3>
    <h3>Adunarea Vectorilor</h3>
    <p>Adunarea a doi vectori <span class="highlight">u = (u<sub>1</sub>, u<sub>2</sub>)</span> și <span class="highlight">v = (v<sub>1</sub>, v<sub>2</sub>)</span> se face componentă cu componentă:</p>
    <p class="formula">u + v = (u<sub>1</sub> + v<sub>1</sub>, u<sub>2</sub> + v<sub>2</sub>)</p>
    
    <h3>Scăderea Vectorilor</h3>
    <p>Scăderea a doi vectori <span class="highlight">u = (u<sub>1</sub>, u<sub>2</sub>)</span> și <span class="highlight">v = (v<sub>1</sub>, v<sub>2</sub>)</span> se face componentă cu componentă:</p>
    <p class="formula">u - v = (u<sub>1</sub> - v<sub>1</sub>, u<sub>2</sub> - v<sub>2</sub>)</p>
    
    <h3>Înmulțirea Vectorului cu un Scalar</h3>
    <p>Înmulțirea unui vector <span class="highlight">u = (u<sub>1</sub>, u<sub>2</sub>)</span> cu un scalar <span class="highlight">k</span> se face componentă cu componentă:</p>
    <p class="formula">k * u = (k * u<sub>1</sub>, k * u<sub>2</sub>)</p>
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
