<script setup lang="ts">
import websiteShare from './websiteShare'
</script>

<template>
  <table>
    <tr v-for="website in websiteShare" :key="website.website">
      <td>
        <h3 style="margin:16px 0">
          <a :href="website.website" target="_blank">{{ website.website }}</a>
        </h3>

        <div>{{ website.description }}</div>
      </td>
    </tr>
  </table>
</template>
