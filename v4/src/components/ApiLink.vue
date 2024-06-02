<template>
  <vxe-link :router-link="{name: 'DocsApi', params: { name }, query: { q }}" />
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  q: String
})
</script>
