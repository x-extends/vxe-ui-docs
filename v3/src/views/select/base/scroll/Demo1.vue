<template>
  <div>
    <p>
      <vxe-button @click="loadList(100)">加载100条</vxe-button>
      <vxe-button @click="loadList(500)">加载500条</vxe-button>
      <vxe-button @click="loadList(1000)">加载1k条</vxe-button>
    </p>
    <vxe-select v-model="val1" :options="opts1" :loading="loading" clearable filterable>
      <vxe-option v-for="item in opts1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface OptVO {
  value: string
  label: string
}

export default Vue.extend({
  data () {
    return {
      val1: null,
      loading: false,
      opts1: [] as OptVO[]
    }
  },
  methods: {
    loadList (size: number) {
      const list: OptVO[] = []
      this.loading = true
      for (let i = 0; i < size; i++) {
        list.push({
          value: `${i}`,
          label: `选项 ${i}`
        })
      }
      setTimeout(() => {
        this.opts1 = list
        this.loading = false
      }, 300)
    }
  },
  created () {
    this.loadList(50)
  }
})
</script>
