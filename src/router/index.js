import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClasaA9a from '../views/Clasa a-9-a/ClasaA9a.vue'
import ClasaA10a from '../views/Clasa a-10-a/ClasaA10a.vue'
import ClasaA11a from '../views/Clasa a-11-a/ClasaA11a.vue'
import ClasaA12a from '../views/Clasa a-12-a/ClasaA12a.vue'
import BacalaureaT from '../views/Bac/BacalaureaT.vue'
import LogIn from '../views/Autentificare/LogIn.vue'
import SignUp from '../views/Autentificare/SignUp.vue'
import ProfilePage from '../views/ProfilePage.vue'
import ChangePass from '../views/Autentificare/ChangePass.vue'
import ForgotPass from '../views/Autentificare/ForgotPass.vue'
import ForgotPass2  from '../views/Autentificare/ForgotPass2.vue'
import MultimiA9a from '../views/Clasa a-9-a/multimi/MultimiA9a.vue'
import VectoriA9a from '../views/Clasa a-9-a/vectori/VectoriA9a.vue'
import FunctionsA9a from '../views/Clasa a-9-a/functii/FunctionsA9a.vue'
import FunctionGr1 from '../views/Clasa a-9-a/functii/FunctGr1.vue'
import FunctionGr2 from '../views/Clasa a-9-a/functii/FunctGr2.vue'
import ExFunct from '@/views/Clasa a-9-a/functii/ExFunct.vue'
import MultNrReale from '@/views/Clasa a-9-a/multimi/MultNrReale.vue'
import InductMatematica from '@/views/Clasa a-9-a/multimi/InductMatematica.vue' 
import ExMultimi from '../views/Clasa a-9-a/multimi/ExMultimi.vue'
import ExVectori from '@/views/Clasa a-9-a/vectori/ExVectori.vue'
import CCPcalcul from '../views/Clasa a-9-a/vectori/CCPcalcul.vue'
import BijSurjInj from '../views/Clasa a-10-a/Functiisiecuatii/BSI.vue'
import ExFsE from '@/views/Clasa a-10-a/Functiisiecuatii/ExFsE.vue'
import FExp from '@/views/Clasa a-10-a/Functiisiecuatii/FExp.vue'
import FexpNat from '@/views/Clasa a-10-a/Functiisiecuatii/FExpNat.vue'
import FLogaritmica from '@/views/Clasa a-10-a/Functiisiecuatii/FLogaritmica.vue'
import FRad from '@/views/Clasa a-10-a/Functiisiecuatii/FRad.vue'
import FsE10 from '@/views/Clasa a-10-a/Functiisiecuatii/FsE10.vue'
import Vectori from '../views/Clasa a-9-a/vectori/VectorI.vue'
import ConddeParalelism from '@/views/Clasa a-10-a/Geometrie/ConddeParalelism.vue'
import CoordVector from '@/views/Clasa a-10-a/Geometrie/CoordVector.vue'
import EcDreptei from '@/views/Clasa a-10-a/Geometrie/EcDreptei.vue'
import ExGeometrie from '@/views/Clasa a-10-a/Geometrie/ExGeometrie.vue'
import GeometriE from '@/views/Clasa a-10-a/Geometrie/GeometriE.vue'
import ReperCartezian from '@/views/Clasa a-10-a/Geometrie/ReperCartezian.vue'
import AranjamentE from '@/views/Clasa a-10-a/Metode de numarare/AranjamentE.vue'
import BlN from '@/views/Clasa a-10-a/Metode de numarare/BlN.vue'
import CombinarI from '@/views/Clasa a-10-a/Metode de numarare/CombinarI.vue'
import ExMdN from '@/views/Clasa a-10-a/Metode de numarare/ExMdN.vue'
import MFO from '@/views/Clasa a-10-a/Metode de numarare/MFO.vue'
import MtddeNumarare10 from '@/views/Clasa a-10-a/Metode de numarare/MtddeNumarare10.vue'
import PermutarI from '@/views/Clasa a-10-a/Metode de numarare/PermutarI.vue'
import ExNrComplexe from '@/views/Clasa a-10-a/NumereComplexe/ExNrComplexe.vue'
import MultimeaC from '@/views/Clasa a-10-a/NumereComplexe/MultimeaC.vue'
import NrComplexe10 from '@/views/Clasa a-10-a/NumereComplexe/NrComplexe10.vue'
import RezolvareinC from '@/views/Clasa a-10-a/NumereComplexe/RezolvareinC.vue'
import AnalizaA11a from '@/views/Clasa a-11-a/analiza/AnalizaA11a.vue'
import MatriciA11a from '@/views/Clasa a-11-a/matrici/MatriciA11a.vue'
import AnalizaA12a from '@/views/Clasa a-12-a/Analiza/AnalizaA12a.vue'
import AlgebraA12a from '@/views/Clasa a-12-a/Algebra/AlgebraA12a.vue'
import GrupurI from '@/views/Clasa a-12-a/Algebra/GrupurI.vue'
import InelesiCorpuri from '@/views/Clasa a-12-a/Algebra/InelesiCorpuri.vue'
import PolinoamE from '@/views/Clasa a-12-a/Algebra/PolinoamE.vue'
import ExAlg from '@/views/Clasa a-12-a/Algebra/ExAlg.vue'
import ExAnaliza12 from '@/views/Clasa a-12-a/Analiza/ExAnaliza12.vue'
import IntegralE from '@/views/Clasa a-12-a/Analiza/IntegralE.vue'
import PrimitivE from '@/views/Clasa a-12-a/Analiza/PrimitivE.vue'
import MatricI from '@/views/Clasa a-11-a/matrici/MatricI.vue'
import SdeEcLin from '@/views/Clasa a-11-a/matrici/SistdeEcLin.vue'
import LimiteFunc from '@/views/Clasa a-11-a/analiza/LimiteFunc.vue'
import SirurI from '@/views/Clasa a-11-a/analiza/SirurI.vue'
import ExMatriciSist from '@/views/Clasa a-11-a/matrici/ExMatriciSist.vue'
import ExAnaliza from '@/views/Clasa a-11-a/analiza/ExAnaliza.vue'
import ExProgr from '@/views/Clasa a-9-a/progresii/ExProgr.vue'
import ProgresiiArit from '@/views/Clasa a-9-a/progresii/ProgresiiArit.vue'
import ProgresiiA9a from '@/views/Clasa a-9-a/progresii/ProgresiiA9a.vue'
import ProgresiiGeom from '@/views/Clasa a-9-a/progresii/ProgresiiGeom.vue'
import DerivatE from '@/views/Clasa a-11-a/analiza/DerivatE.vue'
import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/a9',
    name: 'a9',
    component: ClasaA9a
  },
  {
    path: '/a10',
    name: 'a10',
    component: ClasaA10a
  },
  {
    path: '/a11',
    name: 'a11',
    component: ClasaA11a
  },
  {
    path: '/a12',
    name: 'a12',
    component: ClasaA12a
  },
  {
    path: '/bac',
    name: 'bac',
    component: BacalaureaT
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path:'/profile',
    name:'profile',
    component:ProfilePage
  },
  {
    path: '/changepass',
    name:'changepass',
    component:ChangePass
  },
  {
    path:'/forgotpass',
    name:'forgotpass',
    component:ForgotPass
  },
  {
    path: '/forgotpass2',
    name: 'forgotpass2',
    component: ForgotPass2
  },
  {
    path:'/functions',
    name:'functions',
    component:FunctionsA9a
  },
  {
    path:'/multimi',
    name:'multimi',
    component:MultimiA9a
  },
  {
    path:'/vector',
    name:'vector',
    component:VectoriA9a
  },
  {
    path:'/functgr1',
    name:'functgr1',
    component:FunctionGr1
  },
  {
    path: '/functgr2',
    name: 'functgr2',
    component: FunctionGr2
  },
  {
    path:'/exfunct',
    name:'exfunct',
    component:ExFunct
  },
  {
    path:'/multnrreale',
    name:'multnrreale',
    component:MultNrReale
  },
  {
    path:'/indmate',
    name:'indmate',
    component:InductMatematica
  },

  {
    path:'/exmultimi',
    name:'exmultimi',
    component:ExMultimi
  },
  {
    path:'/exvectori',
    name:'exvectori',
    component:ExVectori
  },
  {
    path:'/vectori',
    name:'vectori',
    component:Vectori
  },
  {
    path:'/ccp',
    name:'ccp',
    component:CCPcalcul
  },
  {
    path: '/bsi',
    name: 'bsi',
    component: BijSurjInj
  },
  {
    path: '/exfse',
    name: 'exfse',
    component: ExFsE
  },
  {
    path: '/fexp',
    name: 'fexp',
    component: FExp
  },
  {
    path: '/fexpnat',
    name: 'fexpnat',
    component: FexpNat
  },
  {
    path: '/flog',
    name: 'flog',
    component: FLogaritmica
  },
  {
    path: '/frad',
    name: 'frad',
    component: FRad
  },
  {
    path: '/fse',
    name: 'fse',
    component: FsE10
  },
  {
    path: '/cdp',
    name: 'cdp',
    component: ConddeParalelism
  },
  {
    path: '/coordv',
    name: 'coordv',
    component: CoordVector
  },
  {
    path: '/ecdr',
    name: 'ecdr',
    component: EcDreptei
  },
  {
    path: '/exgeometrie',
    name: 'exgeometrie',
    component: ExGeometrie
  },
  {
    path: '/repercartezian',
    name: 'repercartezian',
    component: ReperCartezian
  },
  {
    path: '/geometrie',
    name: 'geometrie',
    component: GeometriE
  },
  {
    path: '/aranjamente',
    name: 'aranjamente',
    component: AranjamentE
  },
  {
    path: '/bln',
    name: 'bln',
    component: BlN
  },
  {
    path: '/combinari',
    name: 'combinari',
    component: CombinarI
  },
  {
    path: '/exmdn',
    name: 'exmdn',
    component: ExMdN
  },
  {
    path: '/mfo',
    name: 'mfo',
    component: MFO
  },
  {
    path: '/mtddenumarare',
    name: 'mtddenumarare',
    component: MtddeNumarare10
  },
  {
    path: '/permutari',
    name: 'permutari',
    component: PermutarI
  },
  {
    path: '/exnrcomplexe',
    name: 'exnrcomplexe',
    component: ExNrComplexe
  },
  {
    path: '/multimeaC',
    name: 'multimeaC',
    component: MultimeaC
  },
  {
    path: '/nrcomplexe',
    name: 'nrcomplexe',
    component: NrComplexe10
  },
  {
    path: '/rezolvareainC',
    name: 'rezolvareainC',
    component: RezolvareinC
  },
  {
    path:'/matricia11a',
    name:'matrici11',
    component:MatriciA11a
  },
  {
    path:'/analiza11',
    name:'analiza',
    component:AnalizaA11a
  },
  {
    path:'/algebra',
    name:'algebra',
    component:AlgebraA12a
  },
  {
    path:'/analiza12',
    name:'analiza12',
    component:AnalizaA12a
  },
  {
    path:'/exalg',
    name:'exalg',
    component:ExAlg
  },
  {
    path:'/grupuri' ,
    name: 'grupuri',
    component:GrupurI
  },
  {
    path: '/inelesicorpuri',
    name: 'inelesicorpuri',
    component:InelesiCorpuri
  },
  {
    path:'/polinoame' ,
    name: 'polinoame',
    component:PolinoamE
  },
  {
    path: '/exanaliza12',
    name: 'exanaliza',
    component:ExAnaliza12
  },
  {
    path: '/integrale',
    name: 'integrale',
    component:IntegralE
  },
  {
    path: '/primitive',
    name: 'primitive',
    component:PrimitivE
  },
  {
    path: '/limite',
    name: 'limite',
    component:LimiteFunc
  },
  {
    path: '/siruri',
    name: 'siruri',
    component:SirurI
  },
  {
    path: '/matrici',
    name: 'matrici',
    component:MatricI
  },
  {
    path: '/sisteme',
    name: 'sisteme',
    component:SdeEcLin
  },
  {
    path:'/exmatricisist',
    name:'exmatricisist',
    component:ExMatriciSist
  },
  {
    path: '/exanaliza',
    name: 'exanaliza',
    component: ExAnaliza
  },
  {
    path: '/progresii',
    name: 'progresii',
    component: ProgresiiA9a
  },
  {
    path: '/progrgeom',
    name: 'progrgeom',
    component:ProgresiiGeom
  },
  {
    path: '/exprogr',
    name: 'exprogr',
    component: ExProgr
  },
  {
    path: '/progrartm',
    name: 'progrartm',
    component: ProgresiiArit
  },
  {
    path:'/derivate',
    name:'derivate',
    component:DerivatE
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
