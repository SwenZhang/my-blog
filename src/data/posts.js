export const posts = [
  {
    slug: 'understand-prefill-and-decode',
    title: '从一次请求理解 Prefill 与 Decode',
    excerpt: '为什么大模型推理要分成两个阶段？从张量形状、KV Cache 和性能瓶颈逐步理解。',
    category: '大模型推理',
    date: '2026-09-16',
    readingTime: '7 分钟',
    featured: true,
    content: `
      <p class="lead">大模型生成并不是一次完成整段答案，而是先处理输入，再逐个生成新 token。这对应 Prefill 和 Decode 两个阶段。</p>
      <h2>Prefill：一次处理完整提示词</h2>
      <p>假设输入长度为 <code>T</code>，隐藏维度为 <code>D</code>。Prefill 阶段会同时计算所有输入 token 的 Q、K、V，并执行带因果掩码的注意力。</p>
      <pre><code>Q, K, V: [batch, heads, T, head_dim]
Attention = softmax(QKᵀ / √d) · V</code></pre>
      <p>这一阶段计算量较大，但矩阵规模也更大，GPU 的并行计算能力通常能得到较好利用。</p>
      <h2>Decode：每轮只生成一个新 token</h2>
      <p>Decode 每一轮只有一个新的 Query，但需要读取历史所有 token 的 K/V。随着上下文增长，读取 KV Cache 的数据量持续增加，因此 Decode 往往受显存带宽限制。</p>
      <blockquote>Prefill 更像“大矩阵计算”，Decode 更像“反复读取越来越大的历史缓存”。</blockquote>
      <h2>为什么需要 KV Cache？</h2>
      <p>历史 token 的 K/V 不会改变。保存它们可以避免在每次 Decode 时重新计算整个前缀，这就是 KV Cache 的核心价值。</p>
    `,
  },
  {
    slug: 'vue3-blog-from-zero',
    title: '用 Vue 3 从零搭建个人博客',
    excerpt: '项目结构、组件拆分、路由设计和 GitHub Pages 部署，一篇文章串起完整流程。',
    category: '前端工程',
    date: '2026-09-12',
    readingTime: '10 分钟',
    featured: true,
    content: `
      <p class="lead">一个博客非常适合作为 Vue 3 入门项目：页面数量适中，又能覆盖组件、响应式状态、路由和部署。</p>
      <h2>从页面反推组件</h2>
      <p>先不要急着写代码。把网站拆成导航栏、首页、文章卡片、文章详情和页脚，再决定哪些内容应该复用。</p>
      <pre><code>src/
├── components/   # 可复用组件
├── views/        # 路由页面
├── data/         # 本地文章数据
└── router/       # 路由配置</code></pre>
      <h2>让数据驱动页面</h2>
      <p>文章卡片不应该复制三遍，而应通过 <code>v-for</code> 遍历文章数组。新增文章时只修改数据，页面会自动更新。</p>
      <h2>部署只是构建结果的托管</h2>
      <p><code>npm run build</code> 会把 Vue 源码转换成浏览器可以加载的静态文件。GitHub Pages 负责托管这些文件，Vue 则在访问者浏览器里运行。</p>
    `,
  },
  {
    slug: 'all-reduce-vs-all-gather',
    title: 'All-Reduce 和 All-Gather 到底差在哪里？',
    excerpt: '从“每张卡手里有什么”出发，理解两种集合通信原语的输入、输出与典型用途。',
    category: '分布式系统',
    date: '2026-09-08',
    readingTime: '6 分钟',
    featured: false,
    content: `
      <p class="lead">区分通信原语最简单的方法，是观察操作结束后每张 GPU 得到的结果。</p>
      <h2>All-Gather：拼接分片</h2>
      <p>如果四张卡分别保存 A、B、C、D，All-Gather 后每张卡都获得 <code>[A, B, C, D]</code>。</p>
      <h2>All-Reduce：先归约，再同步</h2>
      <p>如果四张卡分别保存同形状的张量，All-Reduce 会逐元素求和或执行其他归约，并让每张卡都得到相同结果。</p>
      <pre><code>All-Gather: 不做求和，沿某个维度拼接
All-Reduce: 张量形状不变，对应位置执行归约</code></pre>
      <h2>为什么张量并行常用 All-Reduce？</h2>
      <p>当各卡计算的是同一输出张量的部分贡献时，需要把贡献相加，而不是简单拼接，因此使用 All-Reduce。</p>
    `,
  },
  {
    slug: 'recording-engineering-experiments',
    title: '如何记录一次可复现的工程实验',
    excerpt: '配置、环境、命令、指标和异常，一个都不能少。',
    category: '工程实践',
    date: '2026-09-02',
    readingTime: '5 分钟',
    featured: false,
    content: `
      <p class="lead">“我昨天跑得更快”不是一个可以验证的结论。工程实验必须留下足够信息，让未来的自己可以重现。</p>
      <h2>最少需要记录什么？</h2>
      <ul>
        <li>代码提交版本、容器镜像与依赖版本</li>
        <li>硬件、网络和关键环境变量</li>
        <li>完整启动命令与请求参数</li>
        <li>吞吐、延迟、显存和准确率</li>
        <li>原始日志以及对异常的解释</li>
      </ul>
      <h2>把结论和观察分开</h2>
      <p>“吞吐从 50 提升到 58 tok/s”是观察；“因为通信重叠改善”是解释。把两者分开，能避免过早下结论。</p>
    `,
  },
]

export const categories = [...new Set(posts.map((post) => post.category))]

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
