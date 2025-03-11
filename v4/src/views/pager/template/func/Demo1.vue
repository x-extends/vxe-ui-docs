<template>
  <div>
    <vxe-pager
      v-model:current-page="pageVO1.currentPage"
      v-model:page-size="pageVO1.pageSize"
      :layouts="['Home', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'PageCount', 'Total']"
      :total="pageVO1.total">
    </vxe-pager>

    <vxe-pager
      v-model:current-page="pageVO2.currentPage"
      v-model:page-size="pageVO2.pageSize"
      :layouts="['Home', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'PageCount', 'Total']"
      :total="pageVO2.total">
      <template #home>
        <span style="background: #f7b6b6;" @click="pageVO2.currentPage = 1">首页</span>
      </template>
      <template #prevJump>
        <span style="background: #8989d7;" @click="pageVO2.currentPage -= 3">向上跳页</span>
      </template>
      <template #prevPage>
        <span style="background: #f785ef;" @click="pageVO2.currentPage--">上一页</span>
      </template>
      <template #number="{ numList }">
        <span>
          <span v-for="(num, i) in numList" :key="i" @click="pageVO2.currentPage = num">{{ num }}，</span>
        </span>
      </template>
      <template #nextPage>
        <span style="background: #c0f9dc;" @click="pageVO2.currentPage++">下一页</span>
      </template>
      <template #nextJump>
        <span style="background: #48f146;" @click="pageVO2.currentPage += 3">向下跳页</span>
      </template>
      <template #end="{ pageCount }">
        <span style="background: #f9f192;" @click="pageVO2.currentPage = pageCount">末页</span>
      </template>
      <template #sizes="{ options }">
        <span style="background: #cff395;">选择页大小 <vxe-select v-model="pageVO2.pageSize" :options="options" transfer></vxe-select></span>
      </template>
      <template #fullJump>
        <span style="background: #dbd7d7;">跳页<vxe-number-input v-model="pageVO2.currentPage" type="integer"></vxe-number-input></span>
      </template>
      <template #pageCount="{ pageCount }">
        <span style="background: #f3b27a;">总页数 {{ pageCount }}</span>
      </template>
      <template #total="{ total }">
        <span style="background: #f95e5e;">总条数 {{ total }}</span>
      </template>
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const pageVO1 = reactive({
  currentPage: 1,
  pageSize: 15,
  total: 200
})

const pageVO2 = reactive({
  currentPage: 1,
  pageSize: 15,
  total: 200
})
</script>
