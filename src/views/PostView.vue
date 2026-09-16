<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../data/posts'

const route = useRoute()
const post = computed(() => getPostBySlug(route.params.slug))

watchEffect(() => {
  document.title = post.value ? `${post.value.title} · Zhang.dev` : '文章不存在 · Zhang.dev'
})
</script>

<template>
  <main v-if="post" class="container article-page">
    <RouterLink class="back-link" to="/posts">← 返回文章列表</RouterLink>
    <header class="article-header">
      <div class="post-meta">
        <span class="tag">{{ post.category }}</span>
        <time :datetime="post.date">{{ post.date }}</time>
        <span>{{ post.readingTime }}</span>
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.excerpt }}</p>
    </header>
    <!-- content 只来自本地可信数据。不要用 v-html 渲染未经清洗的用户输入。 -->
    <article class="article-content" v-html="post.content"></article>
    <footer class="article-footer">
      <p>写到这里，是为了下一次理解得更快。</p>
      <RouterLink class="button secondary" to="/posts">继续阅读</RouterLink>
    </footer>
  </main>
  <main v-else class="container empty-state page">
    <strong>这篇文章不存在</strong>
    <RouterLink class="text-link" to="/posts">返回文章列表 →</RouterLink>
  </main>
</template>
