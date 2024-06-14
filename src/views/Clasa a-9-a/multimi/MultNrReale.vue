<template>
    <div v-if="user">
   <div class="continut">
     <h1>Mulțimea Numerelor Reale</h1>
    <h3>Definiție</h3>
    <p>Mulțimea numerelor reale, notată cu <span class="highlight">ℝ</span>, este mulțimea tuturor numerelor raționale și iraționale. Aceasta include:</p>
    <ul>
        <li>Numerele naturale (ℕ)</li>
        <li>Numerele întregi (ℤ)</li>
        <li>Numerele raționale (ℚ)</li>
        <li>Numerele iraționale</li>
    </ul>
    
    <h3>Numerele Raționale</h3>
    <p>Numerele raționale sunt numere care pot fi exprimate sub formă de fracție <span class="highlight"><sup>p</sup>/<sub>q</sub></span>, unde <i>p</i> și <i>q</i> sunt numere întregi, iar <i>q</i> este diferit de zero. Exemple de numere raționale includ:</p>
    <ul>
        <li><span class="highlight">1/2</span></li>
        <li><span class="highlight">3</span> (deoarece <span class="highlight">3 = 3/1</span>)</li>
        <li><span class="highlight">-5</span> (deoarece <span class="highlight">-5 = -5/1</span>)</li>
    </ul>
    
    <h3>Numerele Iraționale</h3>
    <p>Numerele iraționale sunt numere care nu pot fi exprimate sub formă de fracție. Acestea au reprezentări zecimale infinite și neperiodice. Exemple de numere iraționale includ:</p>
    <ul>
        <li><span class="highlight">π (pi)</span></li>
        <li><span class="highlight">√2 (rădăcina pătrată a lui 2)</span></li>
        <li><span class="highlight">e (numărul lui Euler)</span></li>
    </ul>
    
    <h3>Proprietăți ale Numerelor Reale</h3>
    <p>Numerele reale au câteva proprietăți importante:</p>
    <ul>
        <li><strong>Ordinea</strong>: Pentru orice două numere reale <i>a</i> și <i>b</i>, există o relație de ordine: <i>a</i> &lt; <i>b</i>, <i>a</i> = <i>b</i> sau <i>a</i> &gt; <i>b</i>.</li>
        <li><strong>Completitudinea</strong>: Orice submulțime nevidă a numerelor reale care are o limită superioară are și o limită supremă (cea mai mică limită superioară).</li>
    </ul>
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
