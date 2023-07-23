<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <main class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <ContentList path="/studios" v-slot="{ list }">
          <div class="space-y-8 mt-6">
            <div v-for="studio in list" :key="studio._path">
              <Studio :studio="studio" />
            </div>
          </div>
        </ContentList>
      </section>
    </main>
  </ContentDoc>
</template>
1
