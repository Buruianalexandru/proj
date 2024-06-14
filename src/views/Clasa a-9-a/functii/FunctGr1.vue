<template>
    <div v-if="user">
        <div class="continut">
    <h1>Funcția de Gradul 1</h1>
    
    <h2>Definiție</h2>
    <p>Funcția de gradul 1, numită și funcție liniară, este o funcție de forma f(x) = ax + b, unde a și b sunt constante reale, iar a ≠ 0.</p>
    
    <h2>Graficul Funcției de Gradul 1</h2>
    <p>Graficul unei funcții de gradul 1 este o linie dreaptă. Panta acestei drepte este dată de coeficientul a, iar intersecția cu axa y este dată de constanta b.</p>
    
    <h2>Determinarea Pantei și a Intersecției cu Axa y</h2>
    <p>Funcția f(x) = ax + b are următoarele caracteristici:</p>
    <ul>
        <li><strong>Panta (a):</strong> Este coeficientul care indică înclinația dreptei. Dacă a > 0, dreapta este crescătoare; dacă a < 0, dreapta este descrescătoare.</li>
        <li><strong>Intersecția cu axa y (b):</strong> Este punctul unde dreapta intersectează axa y, adică f(0) = b.</li>
    </ul>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Fie funcția f(x) = 2x + 3. Determinați panta și intersecția cu axa y și desenați graficul funcției.</p>
        <p>Rezolvare:</p>
        <p>Panta (a) este 2, deci dreapta este crescătoare.</p>
        <p>Intersecția cu axa y (b) este 3, deci dreapta intersectează axa y în punctul (0, 3).</p>
        <p>Pentru a desena graficul, putem determina și un alt punct, de exemplu pentru x = 1:</p>
        <p>f(1) = 2(1) + 3 = 5, deci punctul (1, 5) este pe dreaptă.</p>
        <p>Graficul este o linie dreaptă care trece prin punctele (0, 3) și (1, 5).</p>
    </div>
        
    </div>
    </div>
    <div v-else>
      <p>Please log in to view this page.</p>
      </div>
</template>
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default ({
    setup() {
         const user = computed(() => store.state.user);
         const store = useStore();
         return{user}
    }
})
</script>
