<template>
  <ContentDoc v-slot="{ doc }">
    <div class="heading md:py-16 flex flex-wrap mx-auto">
      <div class="w-full flex flex-wrap h-full text-lg">
        <div class="article max-w-5xl mx-auto">
          <h1 class="article-title text-4xl md:text-6xl font-bold text-center">
            {{ doc.title }}
          </h1>
          <p class="article-date text-center">
            {{ $dayjs(doc.date).format("MMMM D, YYYY") }}
          </p>

          <article>
            <ContentRenderer :value="doc" />
          </article>
          <div class="w-12 mx-auto">
            <OGhost />
          </div>
        </div>
      </div>
    </div>
  </ContentDoc>
</template>

<style>
.article {
  @apply bg-white text-black p-4;
  @screen md {
    @apply p-12;
  }
  h1 {
    @apply leading-none;
  }
  h2 {
    @apply text-3xl font-bold mb-4 mt-2;
  }
  h3 {
    @apply text-xl uppercase tracking-wide font-bold text-body mb-2;
  }
  p {
    @apply mb-6 text-xl text-black;
  }
  blockquote {
    p {
      @apply mb-0;
    }
  }
  ul {
    @apply list-disc list-outside ml-8 mt-4 mb-6;
    li {
      @apply text-xl;
    }
  }
}

.article-title {
  margin-bottom: 0;
}

.article-date {
  color: var(--app-font-color);
  @apply font-mono mt-4;
  font-size: 0.8em;
}

.article blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

.article table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

.article th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}

.article td {
  border-top: 1px solid #ddd;
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
}

.article tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

.article img {
  margin: auto;
  width: 80%;
  display: block;
  margin: 10px auto;
}
</style>
