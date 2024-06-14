<template>
    <div v-if="user">
    <div class="continut">
      <h1>Ecuația Dreptei</h1>
    
    <h2>Definiție</h2>
    <p>Ecuația dreptei este o relație matematică ce descrie toate punctele care se află pe o dreaptă într-un plan cartezian. Există mai multe forme ale ecuației dreptei, cele mai comune fiind forma pantei-intercept și forma generală.</p>
    
    <h2>Forma Pantei-Intercept (Ecuația Redusă)</h2>
    <p>Forma pantei-intercept a ecuației dreptei este:</p>
    <p class="formula">y = mx + n</p>
    <p>unde <span class="highlight">m</span> este panta dreptei (sau coeficientul de direcție), iar <span class="highlight">n</span> este interceptul pe axa y (punctul în care dreapta intersectează axa y).</p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Ecuația <span class="highlight">y = 2x + 3</span> descrie o dreaptă cu panta <span class="highlight">m = 2</span> și interceptul pe axa y <span class="highlight">n = 3</span>.</p>
    </div>
    
    <h2>Forma Generală</h2>
    <p>Forma generală a ecuației dreptei este:</p>
    <p class="formula">Ax + By + C = 0</p>
    <p>unde <span class="highlight">A</span>, <span class="highlight">B</span> și <span class="highlight">C</span> sunt coeficienți reali.</p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Ecuația <span class="highlight">3x - 4y + 7 = 0</span> este o dreaptă în forma generală.</p>
    </div>
    
    <h2>Transformarea între Forme</h2>
    <p>Putem transforma ecuația unei drepte din forma pantei-intercept în forma generală și invers.</p>
    <h3>Din Forma Pantei-Intercept în Forma Generală</h3>
    <p>Dată ecuația <span class="highlight">y = mx + n</span>, o putem rescrie ca:</p>
    <p class="formula">y - mx - n = 0</p>
    <p>Apoi putem muta termenii pentru a obține forma generală:</p>
    <p class="formula">mx - y + n = 0</p>
    
    <h3>Din Forma Generală în Forma Pantei-Intercept</h3>
    <p>Dată ecuația <span class="highlight">Ax + By + C = 0</span>, o putem rescrie pentru a izola <span class="highlight">y</span>:</p>
    <p class="formula">By = -Ax - C</p>
    <p>Apoi împărțim totul la <span class="highlight">B</span>:</p>
    <p class="formula">y = - (A/B)x - (C/B)</p>
    <p>Astfel, panta <span class="highlight">m = -A/B</span> și interceptul <span class="highlight">n = -C/B</span>.</p>
    
    <h2>Determinarea Ecuației Dreptei</h2>
    <p>Putem determina ecuația unei drepte dacă cunoaștem:</p>
    <ul>
        <li><strong>Un punct și panta:</strong> Dacă știm un punct <span class="highlight">(x<sub>1</sub>, y<sub>1</sub>)</span> pe dreaptă și panta <span class="highlight">m</span>, folosim formula pantei-intercept:</li>
        <p class="formula">y - y<sub>1</sub> = m(x - x<sub>1</sub>)</p>
        <li><strong>Două puncte:</strong> Dacă știm două puncte <span class="highlight">(x<sub>1</sub>, y<sub>1</sub>)</span> și <span class="highlight">(x<sub>2</sub>, y<sub>2</sub>)</span> pe dreaptă, mai întâi calculăm panta:</li>
        <p class="formula">m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>)</p>
        <p>Apoi folosim formula pantei-intercept.</p>
    </ul>
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
