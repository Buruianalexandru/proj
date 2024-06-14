<template>
    <div v-if="user">
    <div class="continut">
       <h1>Limite</h1>
            
            <h2>Definiție</h2>
            <p>În matematică, limita unei funcții descrie comportamentul funcției atunci când argumentul se apropie de o anumită valoare. Limita este esențială în analiza matematică și este folosită pentru a defini continuitatea, derivatele și integralele.</p>
            
            <h2>Notație și Concepte de Bază</h2>
            <p>Limita funcției f(x) când x tinde la a se notează:</p>
            <p class="formula"> lim (x → a) f(x) = L </p>
            <p>unde L este valoarea la care funcția f(x) se apropie când x se apropie de a.</p>
            
            <h2>Tipuri de Limite</h2>
            <ul>
                <li><strong>Limita la un punct finit:</strong> lim (x → a) f(x)</li>
                <li><strong>Limita la infinit:</strong> lim (x → ∞) f(x) sau lim (x → -∞) f(x)</li>
            </ul>
            
            <h2>Reguli de Calcul pentru Limite</h2>
            <ul>
                <li><strong>Suma:</strong> lim (x → a) [f(x) + g(x)] = lim (x → a) f(x) + lim (x → a) g(x)</li>
                <li><strong>Diferența:</strong> lim (x → a) [f(x) - g(x)] = lim (x → a) f(x) - lim (x → a) g(x)</li>
                <li><strong>Produsul:</strong> lim (x → a) [f(x) * g(x)] = (lim (x → a) f(x)) * (lim (x → a) g(x))</li>
                <li><strong>Catul:</strong> lim (x → a) [f(x) / g(x)] = (lim (x → a) f(x)) / (lim (x → a) g(x)) (dacă lim (x → a) g(x) ≠ 0)</li>
            </ul>
            
            <h2>Limite Laterale</h2>
            <p>Limita din stânga și limita din dreapta la un punct a sunt notate astfel:</p>
            <ul>
                <li><strong>Limita din stânga:</strong> lim (x → a-) f(x)</li>
                <li><strong>Limita din dreapta:</strong> lim (x → a+) f(x)</li>
            </ul>
            <p>Funcția f(x) are limita L la a dacă și numai dacă limitele laterale sunt egale și finite:</p>
            <p class="formula"> lim (x → a-) f(x) = lim (x → a+) f(x) = L </p>
            
            <h2>Exemplu de Calcul al Limitei</h2>
            <div class="example">
                <p><strong>Exemplu:</strong></p>
                <p>Calculați lim (x → 2) (3x + 1).</p>
                <p>Aplicăm regula limitelor pentru suma și produs:</p>
                <p class="formula"> lim (x → 2) (3x + 1) = 3 * lim (x → 2) x + lim (x → 2) 1 </p>
                <p>Calculăm fiecare limită:</p>
                <p class="formula"> lim (x → 2) x = 2 </p>
                <p class="formula"> lim (x → 2) 1 = 1 </p>
                <p>Astfel,</p>
                <p class="formula"> lim (x → 2) (3x + 1) = 3 * 2 + 1 = 7 </p>
            </div>
            
            <h2>Limite Infinite</h2>
            <p>Limita funcției f(x) când x tinde la infinit se notează:</p>
            <p class="formula"> lim (x → ∞) f(x) </p>
            <p>De exemplu, pentru funcția f(x) = 1/x, avem:</p>
            <p class="formula"> lim (x → ∞) (1/x) = 0 </p>
            
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
  mounted() {
        MathJax.typeset();
    },
    updated() {
        MathJax.typeset();
    }
})
</script>