<script setup>
import { computed } from 'vue'
import PostCard from '../components/PostCard.vue'
import { posts } from '../data/posts'

const featuredPosts = computed(() => posts.filter((post) => post.featured).slice(0, 2))
</script>

<template>
  <main>
    <section class="hero container">
      <div class="hero-copy">
        <p class="eyebrow">SYSTEMS · AI · WEB</p>
        <h1>把复杂的技术，<br /><em>讲得足够清楚。</em></h1>
        <p class="hero-intro">
          这里记录大模型推理、分布式系统与工程实践。每篇文章尽量从问题出发，用公式、代码和实验得到答案。
        </p>
        <div class="hero-actions">
          <RouterLink class="button primary" to="/posts">浏览全部文章</RouterLink>
          <RouterLink class="button secondary" to="/about">了解作者</RouterLink>
        </div>
      </div>
      <aside class="hero-note" aria-label="博客说明">
        <span class="note-number">01</span>
        <p>Learning in public</p>
        <strong>记录，不只是为了记住；<br />更是为了重新理解。</strong>
        <div class="signal"><i></i><span>持续更新中</span></div>
      </aside>
    </section>

    <section class="container section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">FEATURED NOTES</p>
          <h2>精选文章</h2>
        </div>
        <RouterLink class="text-link" to="/posts">查看全部 <span>→</span></RouterLink>
      </div>
      <div class="featured-grid">
        <PostCard v-for="post in featuredPosts" :key="post.slug" :post="post" />
      </div>
    </section>

    <section class="principles">
      <div class="container principle-grid">
        <div><span>01</span><h3>从原理出发</h3><p>先建立计算与数据流模型，再讨论参数和优化。</p></div>
        <div><span>02</span><h3>用实验验证</h3><p>配置、日志和指标一起保留，让结论能够复现。</p></div>
        <div><span>03</span><h3>保持可读</h3><p>技术深度和表达清晰并不冲突，好的解释兼顾两者。</p></div>
      </div>
    </section>
  </main>
</template>
