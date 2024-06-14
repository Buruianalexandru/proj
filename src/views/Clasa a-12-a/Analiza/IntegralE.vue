<template>
    <div v-if="user">
    <div class="continut">
          <h1>Integrale</h1>
    
    <h2>Definiție</h2>
    <p>O integrală este o funcție care asociază unei funcții date f(x) suma infinită a valorilor acesteia pe un interval dat. Există două tipuri principale de integrale: integrale definite și integrale nedefinite.</p>
    
    <h2>Integrală Nedefinită</h2>
    <p>O integrală nedefinită, sau antiderivată, a unei funcții f(x) este o funcție F(x) a cărei derivată este f(x). Se notează ∫ f(x) dx și rezultatul este ∫ f(x) dx = F(x) + C, unde F(x) este primitiva și C este constanta de integrare.</p>
    
    <h2>Integrală Definită</h2>
    <p>O integrală definită a unei funcții f(x) pe intervalul [a, b] este suma valorilor funcției pe acest interval. Se notează ∫<sub>a</sub><sup>b</sup> f(x) dx și rezultatul este F(b) - F(a), unde F este primitiva funcției f.</p>
    
    <h2>Proprietăți ale Integralei</h2>
    <ul>
        <li><strong>Linealitatea:</strong> ∫ (f(x) + g(x)) dx = ∫ f(x) dx + ∫ g(x) dx</li>
        <li><strong>Constanta multiplicativă:</strong> ∫ k * f(x) dx = k * ∫ f(x) dx, unde k este o constantă</li>
        <li><strong>Adunarea intervalelor:</strong> ∫<sub>a</sub><sup>b</sup> f(x) dx + ∫<sub>b</sub><sup>c</sup> f(x) dx = ∫<sub>a</sub><sup>c</sup> f(x) dx</li>
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
        <p>Găsiți integrala nedefinită a funcției f(x) = 3x^2.</p>
        <p>Rezolvare:</p>
        <p>∫ 3x^2 dx = 3 * ∫ x^2 dx = 3 * (x^3 / 3) = x^3 + C</p>
        <p>Deci, primitiva este F(x) = x^3 + C.</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Găsiți integrala definită a funcției f(x) = e^x pe intervalul [0, 1].</p>
        <p>Rezolvare:</p>
        <p>∫<sub>0</sub><sup>1</sup> e^x dx = e^x |<sub>0</sub><sup>1</sup> = e^1 - e^0 = e - 1</p>
        <p>Deci, valoarea integralei definite este e - 1.</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 3:</strong></p>
        <p>Găsiți integrala nedefinită a funcției f(x) = 1/x.</p>
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