<script setup>
import { onMounted, ref, watch } from 'vue'
import SiteHeader from './components/SiteHeader.vue'

const theme = ref(localStorage.getItem('theme') || 'light')

function applyTheme() {
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(applyTheme)
watch(theme, applyTheme)
</script>

<template>
  <div class="site-shell">
    <SiteHeader :theme="theme" @toggle-theme="toggleTheme" />
    <RouterView />
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© 2026 SwenZhang · 用文字沉淀技术，用实验验证想法。</p>
        <a href="https://github.com/SwenZhang/my-blog/" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </footer>
  </div>
</template>
