<template>
  <div class="py-6 sm:pb-16 md:pb-20 lg:pb-28">
    <section class="lg:pt-20">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 mx-auto max-w-6xl">
        <div class="mb-12 mx-auto w-96 lg:w-full lg:mx-0">
          <Logo class="mx-auto w-full" />
        </div>
        <div class="bg-primary md:bg-transparent md:p-0">
          <div class="text pr-4">
            <h2>
              An impact fund for studios led by underrepresented founders across
              Canada.
            </h2>
            <div class="mt-3 md:mt-5 md:max-w-3xl">
              <p class="text-xl md:text-2xl leading-tight">
                We support video game studios with
                <strong>grants</strong>,
                <strong> catalytic investments</strong>, and
                <strong>community</strong> in order to build strong, impactful
                teams of underrepresented makers who are shaping the future of
                games.
              </p>
              <p class="mt-6 text-xl md:text-2xl leading-tight">
                <a href="/baby-ghosts">
                  Learn about our <b>Baby Ghosts</b> program.
                </a>
              </p>
              <p class="mt-2 text-lg leading-tight">
                Applications are currently closed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full text-lg py-12">
      <div>
        <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
          <h2 class="lg:text-right">
            Studio support – not just project funding.
          </h2>
          <p class="mt-3 lg:mt-0 text-xl md:text-2xl leading-tight">
            Weird Ghosts invests in founders who want to build
            <strong>profitable impact-oriented studios</strong>
            with a long-term vision and commitment to equitable worker-centric
            structures.
          </p>
          <div></div>
        </div>
      </div>
    </section>
    <section id="features" class="mx-auto bg-body text-primary py-12">
      <div class="text-center mx-auto max-w-2xl mb-12">
        <h2 class="mb-3">Stages We Fund</h2>
        <p class="md:text-2xl font-display">
          We believe in creators retaining ownership of their companies and IP.
          Our investments are structured around
          <NuxtLink to="/blog/how-we-make-investments/"
            >shared earnings</NuxtLink
          >
          so that we recoup only after your team is paid.
        </p>
      </div>
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col">
          <h4 class="text-lg md:text-2xl font-bold faxGray mb-4">
            Baby Ghosts Peer Accelerator and Grant
          </h4>
          <p class="mb-4 lg:m-0 lg:mb-0 text-xl">
            Grants for new teams that need to get studio operations up and
            running, and support with impact strategy. Prepares teams for
            further investment and game development.
          </p>
          <p class="my-4 lg:mb-0 text-lg">
            <NuxtLink to="/baby-ghosts">Learn more about Baby Ghosts</NuxtLink>
          </p>
          <p class="mt-auto lg:mb-0 text-lg font-mono">$25,000 / 6 months</p>
        </div>

        <div class="flex flex-col">
          <h4 class="text-lg md:text-2xl font-bold faxGray mb-4">
            Shared Earnings Investment
          </h4>
          <p class="mb-4 lg:m-0 lg:mb-0 text-xl">
            For more established teams (and Baby Ghosts alumni) with a project
            in any stage of development. Allows key personnel to focus full time
            on studio development.
          </p>
          <p class="my-4 lg:mb-0 text-lg">
            <NuxtLink to="/baby-ghosts">Learn more about Baby Ghosts</NuxtLink>
          </p>
          <p class="mt-auto lg:mb-0 text-lg font-mono">Up to $150,000</p>
        </div>
      </div>
    </section>
  </div>
</template>
