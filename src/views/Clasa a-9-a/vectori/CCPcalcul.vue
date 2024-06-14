<template>
    <div v-if="user">
   <div class="continut">
     <h1>Coliniaritate, Concurență și Paralelism în Geometrie Plană</h1>

    <h3>Coliniaritate</h3>
    <p>Doi vectori sunt coliniari dacă există un scalar non-zero astfel încât unul din vectori poate fi exprimat ca un multiplu scalar al celuilalt. Acest lucru indică faptul că vectorii sunt pe aceeași linie sau direcție în plan.</p>
    
    <h3>Concurență</h3>
    <p>Trei sau mai multe linii (sau segmente de dreaptă) sunt concurente dacă toate se intersectează într-un singur punct. Acest concept este adesea utilizat în demonstrații geometrice pentru a stabili relații între diferite puncte de pe figură.</p>
    
    <h3>Paralelism</h3>
    <p>Doi vectori sunt paraleli dacă sunt coliniari sau unul dintre vectori este vectorul nul. În termeni geometrice, acest lucru înseamnă că linii sau segmente de dreaptă corespunzătoare nu se intersectează niciodată, indiferent de lungimea lor extinsă.</p>
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
