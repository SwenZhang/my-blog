<script setup>
defineProps({
  post: { type: Object, required: true },
})
</script>

<template>
  <article class="post-card">
    <div class="post-meta">
      <span class="tag">{{ post.category }}</span>
      <time :datetime="post.date">{{ post.date }}</time>
      <span>{{ post.readingTime }}</span>
    </div>
    <h3>
      <RouterLink :to="`/posts/${post.slug}`">{{ post.title }}</RouterLink>
    </h3>
    <p>{{ post.excerpt }}</p>
    <RouterLink class="text-link" :to="`/posts/${post.slug}`">阅读全文 <span>→</span></RouterLink>
  </article>
</template>
