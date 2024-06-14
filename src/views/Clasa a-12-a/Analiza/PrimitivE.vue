<template>
    <div v-if="user">
    <div class="continut">
         <h1>Primitive</h1>
    
    <h2>Definiție</h2>
    <p>O primitivă a unei funcții f(x) este o funcție F(x) a cărei derivată este f(x). Cu alte cuvinte, F'(x) = f(x). Procesul de a găsi o primitivă se numește integrare.</p>
    
    <h2>Notație</h2>
    <p>Primitiva funcției f(x) se notează ∫ f(x) dx. Rezultatul integrării, ∫ f(x) dx = F(x) + C, unde F(x) este primitiva și C este constanta de integrare.</p>
    
    <h2>Proprietăți ale Primitivei</h2>
    <ul>
        <li><strong>Linia de bază:</strong> Dacă F(x) este o primitivă a lui f(x), atunci F(x) + C este o altă primitivă a lui f(x), unde C este o constantă arbitrară.</li>
        <li><strong>Linealitatea:</strong> Primitiva unei sume de funcții este suma primitivelor: ∫ (f(x) + g(x)) dx = ∫ f(x) dx + ∫ g(x) dx.</li>
        <li><strong>Constanta multiplicativă:</strong> Primitiva unei funcții înmulțită cu o constantă este constanta înmulțită cu primitiva funcției: ∫ k * f(x) dx = k * ∫ f(x) dx, unde k este o constantă.</li>
    </ul>
    
    <h2>Formule de Bază</h2>
    <ul>
        <li>∫ x^n dx = (x^(n+1)) / (n+1) + C, pentru orice n ≠ -1</li>
        <li>∫ dx = x + C</li>
        <li>∫ e^x dx = e^x + C</li>
        <li>∫ 1/x dx = ln|x| + C</li>
        <li>∫ cos(x) dx = sin(x) + C</li>
        <li>∫ sin(x) dx = -cos(x) + C</li>
    </ul>
    
    <h2>Exemple</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Găsiți primitiva funcției f(x) = 3x^2.</p>
        <p>Rezolvare:</p>
        <p>∫ 3x^2 dx = 3 * ∫ x^2 dx = 3 * (x^(2+1) / (2+1)) = 3 * (x^3 / 3) = x^3 + C</p>
        <p>Deci, primitiva este F(x) = x^3 + C.</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Găsiți primitiva funcției f(x) = e^x.</p>
        <p>Rezolvare:</p>
        <p>∫ e^x dx = e^x + C</p>
        <p>Deci, primitiva este F(x) = e^x + C.</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 3:</strong></p>
        <p>Găsiți primitiva funcției f(x) = 1/x.</p>
        <p>Rezolvare:</p>
        <p>∫ 1/x dx = ln|x| + C</p>
        <p>Deci, primitiva este F(x) = ln|x| + C.</p>
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