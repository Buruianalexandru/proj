<template>
    <div v-if="user">
    <div class="continut">
        <h1>Derivate</h1>
    
    <h2>Definiție</h2>
    <p>Derivata unei funcții reprezintă rata de schimbare a valorii funcției în raport cu variația unei variabile. În termeni simpli, derivata indică cât de repede crește sau scade o funcție într-un punct dat.</p>
    
    <h2>Notație și Concepte de Bază</h2>
    <p>Derivata funcției f(x) în punctul x se notează:</p>
    <p class="formula">f'(x) sau df(x)/dx</p>
    <p>Definiția formală a derivatei este:</p>
    <p class="formula">f'(x) = lim (h → 0) (f(x+h) - f(x))/h</p>
    
    <h2>Reguli de Derivare</h2>
    <ul>
        <li><strong>Derivata unei constante:</strong> d(c)/dx = 0, unde c este o constantă.</li>
        <li><strong>Derivata funcției identitate:</strong> d(x)/dx = 1.</li>
        <li><strong>Regula sumei:</strong> d(f(x) + g(x))/dx = f'(x) + g'(x).</li>
        <li><strong>Regula produsului:</strong> d(f(x) * g(x))/dx = f'(x) * g(x) + f(x) * g'(x).</li>
        <li><strong>Regula catului:</strong> d(f(x)/g(x))/dx = (f'(x) * g(x) - f(x) * g'(x))/(g(x))^2.</li>
        <li><strong>Derivata unei puteri:</strong> d(x^n)/dx = n * x^(n-1), unde n este un număr real.</li>
    </ul>
    
    <h2>Exemple de Derivare</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Calculați derivata funcției f(x) = 3x^2 + 2x + 1.</p>
        <p>Aplicăm regulile de derivare:</p>
        <p class="formula">f'(x) = d(3x^2)/dx + d(2x)/dx + d(1)/dx</p>
        <p>f'(x) = 3 * 2x + 2 * 1 + 0 = 6x + 2</p>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Calculați derivata funcției g(x) = (2x^3 - 3x + 5)/x.</p>
        <p>Folosim regula catului:</p>
        <p class="formula">g'(x) = ((2x^3 - 3x + 5)' * x - (2x^3 - 3x + 5) * (x)')/(x^2)</p>
        <p>g'(x) = ((6x^2 - 3) * x - (2x^3 - 3x + 5) * 1)/(x^2)</p>
        <p>g'(x) = (6x^3 - 3x - 2x^3 + 3x - 5)/(x^2)</p>
        <p>g'(x) = (4x^3 - 5)/(x^2) = 4x - 5/x^2</p>
    </div>
    
    <h2>Aplicații ale Derivatelor</h2>
    <p>Derivatele au multe aplicații practice, inclusiv:</p>
    <ul>
        <li><strong>Calcularea vitezei și accelerației:</strong> Derivata poziției în raport cu timpul dă viteza, iar derivata vitezei dă accelerația.</li>
        <li><strong>Maxime și minime:</strong> Derivatele sunt folosite pentru a găsi punctele maxime și minime ale funcțiilor.</li>
        <li><strong>Modelare economică:</strong> Derivatele sunt folosite pentru a determina costul marginal și venitul marginal în economie.</li>
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