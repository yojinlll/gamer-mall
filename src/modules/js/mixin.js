import gNav from '@/components/g-nav.vue'
import gLists from '@/components/g-lists.vue'
import { Spinner } from 'mint-ui';


let mixin = {
  components: {
    'g-nav': gNav,
    'g-lists': gLists,
    'g-loading': Spinner
  }
}

export default mixin
