<template>
    <div v-if="user">
    <div class="continut">
       <h1>Reperul Cartezian</h1>
    
    <h3>Definiție</h3>
    <p>Reperul cartezian este un sistem de coordonate utilizat în geometria analitică pentru a localiza punctele din plan. Este format din două axe perpendiculare, numite axa x (absciselor) și axa y (ordonatelor), care se intersectează într-un punct numit origine, notat cu <span class="highlight">(0, 0)</span>.</p>
    
   
    
    <h3>Elementele Reperului Cartezian</h3>
    <ul>
        <li><strong>Originea:</strong> Punctul de intersecție al axelor x și y, notat cu <span class="highlight">(0, 0)</span>.</li>
        <li><strong>Axa x (absciselor):</strong> Axa orizontală.</li>
        <li><strong>Axa y (ordonatelor):</strong> Axa verticală.</li>
        <li><strong>Coordonate:</strong> Fiecare punct din plan poate fi descris printr-o pereche ordonată de numere <span class="highlight">(x, y)</span>, unde x reprezintă coordonata pe axa absciselor și y reprezintă coordonata pe axa ordonatelor.</li>
        <li><strong>Patru cadrane:</strong> Planul este împărțit în patru cadrane de axele x și y.
            <ul>
                <li><strong>Primul cadran:</strong> x > 0, y > 0</li>
                <li><strong>Al doilea cadran:</strong> x < 0, y > 0</li>
                <li><strong>Al treilea cadran:</strong> x < 0, y < 0</li>
                <li><strong>Al patrulea cadran:</strong> x > 0, y < 0</li>
            </ul>
        </li>
    </ul>
    
    <h3>Reprezentarea Punctelor în Reperul Cartezian</h3>
    <p>Pentru a reprezenta un punct în reperul cartezian, se folosește o pereche ordonată de coordonate <span class="highlight">(x, y)</span>. De exemplu, punctul <span class="highlight">(3, 2)</span> se află la 3 unități la dreapta originii și 2 unități în sus.</p>
    
    <h3>Exemplu</h3>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Reprezentați punctele <span class="highlight">A(2, 3)</span> și <span class="highlight">B(-1, 4)</span> în reperul cartezian.</p>
        <p>Punctul A se află în primul cadran, iar punctul B se află în al doilea cadran.</p>
    </div>
    
    <h3>Operații în Reperul Cartezian</h3>
    <p>În reperul cartezian, putem efectua diverse operații, cum ar fi calculul distanței dintre două puncte, determinarea mijlocului unui segment, și multe altele.</p>
    
    <h3>Distanța Dintre Două Puncte</h3>
    <p>Distanța dintre două puncte <span class="highlight">A(x<sub>1</sub>, y<sub>1</sub>)</span> și <span class="highlight">B(x<sub>2</sub>, y<sub>2</sub>)</span> se calculează cu formula:</p>
    <p class="formula">d = √[(x<sub>2</sub> - x<sub>1</sub>)² + (y<sub>2</sub> - y<sub>1</sub>)²]</p>
    
    <h3>Mijlocul unui Segment</h3>
    <p>Mijlocul segmentului determinat de punctele <span class="highlight">A(x<sub>1</sub>, y<sub>1</sub>)</span> și <span class="highlight">B(x<sub>2</sub>, y<sub>2</sub>)</span> are coordonatele:</p>
    <p class="formula">M = ((x<sub>1</sub> + x<sub>2</sub>) / 2, (y<sub>1</sub> + y<sub>2</sub>) / 2)</p>
    
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
