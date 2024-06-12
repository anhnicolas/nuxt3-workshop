<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">👋🏻 Hello, I'm anhnico!</h1>
    <p class="text-base text-gray-900 p-2 italic">Developer at Epitech Lille</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">My Story</h2>
      <p class="text-lg py-2">
        I am a Software Engineer living in one of my favorite places in the world, Lille, France. I am a
        student programmer who firmly believes that you can accomplish anything in this life if you put your mind to
        it,
        roll up your sleeves and are willing to put in the work.
      </p>
      <p class="text-lg py-2">
        In my personal life, I enjoy reading, playing video games and climbing to get me through the week.
      </p>
    </div>
    <img src="~/assets/images/programmer.png" class="w-1/2 md:max-w-sm p-8 mx-auto" />
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
