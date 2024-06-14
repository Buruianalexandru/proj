<template>
    <div v-if="user">
    <div class="continut">
        <h1>Funcția de Gradul 2</h1>
    
    <h2>Definiție</h2>
    <p>Funcția de gradul 2, numită și funcție quadratică, este o funcție de forma f(x) = ax^2 + bx + c, unde a, b și c sunt constante reale, iar a ≠ 0.</p>
    
    <h2>Forma Graficului</h2>
    <p>Graficul unei funcții de gradul 2 este o parabolă. Dacă a > 0, parabola este deschisă în sus. Dacă a < 0, parabola este deschisă în jos.</p>
    
    <h2>Determinarea Vârfului Parabolei</h2>
    <p>Vârful (sau vertexul) parabolei este punctul în care aceasta atinge valoarea minimă sau maximă, în funcție de semnul lui a. Coordonatele vârfului sunt:</p>
    <p class="formula">V(x, y) = (-b / (2a), f(-b / (2a)))</p>
    
    <h2>Rădăcinile Funcției de Gradul 2</h2>
    <p>Rădăcinile (sau soluțiile) funcției de gradul 2 sunt valorile lui x pentru care f(x) = 0. Acestea se găsesc folosind formula generală a ecuațiilor de gradul 2:</p>
    <p class="formula">x = (-b ± √(b^2 - 4ac)) / (2a)</p>
    <p>Discriminantul, Δ = b^2 - 4ac, determină natura rădăcinilor:</p>
    <ul>
        <li>Dacă Δ > 0, funcția are două rădăcini reale distincte.</li>
        <li>Dacă Δ = 0, funcția are o singură rădăcină reală (dublă).</li>
        <li>Dacă Δ < 0, funcția nu are rădăcini reale.</li>
    </ul>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu:</strong> Fie funcția f(x) = 2x^2 - 4x + 1. Determinați coordonatele vârfului, rădăcinile și desenati graficul funcției.</p>
        <p>Rezolvare:</p>
        <p>1. Coordonatele vârfului:</p>
        <p class="formula">x = -(-4) / (2 * 2) = 4 / 4 = 1</p>
        <p class="formula">y = f(1) = 2(1)^2 - 4(1) + 1 = 2 - 4 + 1 = -1</p>
        <p>Deci, vârful este V(1, -1).</p>
        <p>2. Rădăcinile:</p>
        <p class="formula">Δ = (-4)^2 - 4 * 2 * 1 = 16 - 8 = 8</p>
        <p class="formula">x = (4 ± √8) / 4 = (4 ± 2√2) / 4 = 1 ± √2 / 2</p>
        <p>Deci, rădăcinile sunt x1 = 1 + √2 / 2 și x2 = 1 - √2 / 2.</p>
    </div>
    <h3>Relatiile lui Viete</h3>
        <img src="@/assets/viete.png" class="viete">
    </div>
    </div>
    <div v-else>
      <p>Please log in to view this page.</p>
      </div>
    
</template>
<script>
import {computed} from 'vue';
import { useStore } from 'vuex';
export default ({
    setup() {
        const user = computed(() => store.state.user);
        const store = useStore();
         return{user}
    }
   
})
</script>
