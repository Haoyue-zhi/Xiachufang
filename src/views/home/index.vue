<template>
  <button>asdf</button>
</template>

<script>
import {ref} from 'vue'
import {list} from '../../api/index'

export default {
  setup() {

    // 方式一 （推荐）
    async function getlist() {
      let data = {
        key: 'c4330e4026b463e89f847391c998af94'
      }
      const a = await list(data)
      console.log(a)
    }


    return {}
  }
}
</script>

<style scoped lang="scss">
$color: #42b983;
p {
  a {
    color: $color;
  }
}

button {
  width: 330px;
  height: 50.5px;
}
</style>
