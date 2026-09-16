<script setup>
defineProps({
  theme: { type: String, required: true },
})

defineEmits(['toggle-theme'])
</script>

<template>
  <header class="site-header">
    <div class="container nav-inner">
      <RouterLink class="brand" to="/" aria-label="返回首页">
        <span class="brand-mark">Z</span>
        <span>Zhang.dev</span>
      </RouterLink>

      <nav class="nav-links" aria-label="主导航">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/posts">文章</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
      </nav>

      <button class="theme-button" type="button" aria-label="切换主题" @click="$emit('toggle-theme')">
        {{ theme === 'light' ? '☾' : '☀' }}
      </button>
    </div>
  </header>
</template>
