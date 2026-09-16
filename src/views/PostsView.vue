<script setup>
import { computed, ref } from 'vue'
import PostCard from '../components/PostCard.vue'
import { categories, posts } from '../data/posts'

const query = ref('')
const activeCategory = ref('全部')

const filteredPosts = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return posts.filter((post) => {
    const matchesCategory = activeCategory.value === '全部' || post.category === activeCategory.value
    const matchesKeyword = !keyword || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(keyword)
    return matchesCategory && matchesKeyword
  })
})
</script>

<template>
  <main class="container page">
    <header class="page-heading">
      <p class="eyebrow">ALL WRITINGS</p>
      <h1>文章</h1>
      <p>关于大模型推理、分布式系统、前端与工程方法的学习记录。</p>
    </header>

    <div class="post-tools">
      <label class="search-box">
        <span>⌕</span>
        <input v-model="query" type="search" placeholder="搜索标题或内容" />
      </label>
      <div class="category-list">
        <button
          v-for="category in ['全部', ...categories]"
          :key="category"
          :class="{ active: activeCategory === category }"
          type="button"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div v-if="filteredPosts.length" class="post-list">
      <PostCard v-for="post in filteredPosts" :key="post.slug" :post="post" />
    </div>
    <div v-else class="empty-state">
      <strong>没有找到匹配的文章</strong>
      <p>尝试更换关键词或选择其他分类。</p>
    </div>
  </main>
</template>
