<template>
  <div class="py-6 sm:pb-16 md:pb-20 lg:pb-28">
    <section class="lg:pt-20">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 mx-auto max-w-6xl">
        <div class="mb-12 mx-auto w-96 lg:w-full lg:mx-0">
          <Logo class="mx-auto w-full" />
        </div>
        <div class="bg-primary md:bg-transparent md:p-0">
          <div class="text pr-4">
            <h2 class="font-black">
              An impact fund for studios led by underrepresented founders across
              Canada.
            </h2>
            <div class="mt-3 md:mt-5 md:max-w-3xl">
              <p class="text-xl md:text-2xl leading-tight font-light">
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
                Applications are currently closed, but will open again late
                summer 2023!
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
        <h2 class="mb-3 text-primary">Stages We Fund</h2>
        <p class="md:text-2xl font-display font-light">
          We believe in creators retaining ownership of their companies and IP.
          Our investments are structured around
          <NuxtLink to="/blog/how-we-make-investments/"
            >shared earnings</NuxtLink
          >
          so that we recoup only after your team is paid.
        </p>
      </div>
      <div class="max-w-6xl mx-auto grid grid-cols-2 gap-2">
        <div>
          <h4 class="text-lg md:text-2xl font-bold text-primary mb-4">
            Baby Ghosts Peer Accelerator and Grant
          </h4>
          <p class="mb-4 lg:m-0 lg:mb-0 text-xl">
            Grants for teams that need to get studio operations up and running
            and support with impact strategy. Prepares teams for further
            investment and game development.
          </p>
          <p class="my-4 lg:mb-0 text-lg">
            <NuxtLink to="/baby-ghosts">Learn more about Baby Ghosts</NuxtLink>
          </p>
          <p class="mt-auto lg:mb-0 text-lg font-mono">$25,000 / 6 months</p>
        </div>

        <div>
          <h4 class="text-lg md:text-2xl font-bold text-primary mb-4">
            Shared Earnings Investment
          </h4>
          <p class="mb-4 lg:m-0 lg:mb-0 text-xl">
            For more established teams (and Baby Ghosts alumni) with a project
            in any stage of development. Allows key personnel to focus full time
            on studio development.
          </p>
          <p class="my-4 lg:mb-0 text-lg">
            <NuxtLink to="/blog/shared-earnings-agreement"
              >Learn more about SEAL</NuxtLink
            >
          </p>
          <p class="mt-auto lg:mb-0 text-lg font-mono">Up to $150,000</p>
        </div>
      </div>
    </section>

    <section>
      <div
        class="text-center text-2xl border-body border-2 max-w-5xl mx-auto p-10">
        Is your company interested in supporting the fund and our mandate?<br />
        <a href="mailto:hello@weirdghosts.ca" class="underline"
          >Get in touch.</a
        >
      </div>
    </section>
    <section class="mx-auto max-w-4xl">
      <div class="ghosties flex relative p-12 items-center">
        <div class="w-32">
          <OGhost colour="#e33f3e" />
        </div>
        <div class="w-60">
          <RGhost colour="#e33f3e" />
        </div>
        <div class="w-32 -ml-10">
          <DGhost colour="#e33f3e" />
        </div>
      </div>
      <div class="w-full">
        <h2>About us.</h2>
        <p class="mb-6">
          Weird Ghosts was born from a collective desire to empower structurally
          excluded game devs. Our ultimate goal is a funding landscape in Canada
          that truly supports game studios at all stages so that all can grow
          and thrive.
        </p>
        <p class="mb-6">
          Cofounders and general partners Eileen and Jennie met in 2020 to make
          this dream a reality.
        </p>
        <div class="flex mt-6">
          <div class="w-1/3 mr-4">
            <img src="/img/eileen.jpg" alt="Eileen" />
          </div>
          <p class="w-2/3 text-2xl">
            <strong>Eileen Mary Holowka, PhD</strong> (they/she) is a writer and
            game dev living in Montreal. They have been involved in video game
            and digital media communities for over 10 years.
          </p>
        </div>
        <div class="flex mt-6">
          <div class="w-1/3 mr-4">
            <img src="/img/jennie.jpeg" alt="Jennie" />
          </div>
          <p class="w-2/3 text-2xl">
            <strong>Jennie Robinson Faber</strong> (she) is a community arts
            advocate and organizer, software developer and leader in the IDM
            industry for over 15 years. She co-founded the videogame arts
            nonprofits DMG Toronto and Gamma Space Collaborative Studio.
          </p>
        </div>

        <p class="mb-6"></p>
      </div>
    </section>
    <section>
      <p class="mb-6 font-display text-3xl max-w-6xl text-center mx-auto">
        The resources for this project are donated by Infinite Ammo Inc.
      </p>
    </section>
    <section class="mx-auto max-w-4xl">
      <h2>Land Acknowledgement</h2>
      <p class="mb-6">
        Although we refer to ourselves as a Canada-wide fund, we acknowledge
        that what we now call Canada is built on unceded Indigneous territory.
        Weird Ghosts operates out of Tiohtià:ke (Montreal) on the unceded
        territory of the Kanien’kehá:ka Nation and Tkaronto (Toronto) on the
        unceded territory of many nations, including the Mississaugas of the
        Credit, the Anishnabeg, the Chippewa, the Haudenosaunee and the Wendat
        peoples.
      </p>

      <p class="mb-6">
        We know that acknowledging the land is only one part of addressing
        settler colonialism in Canada. Weird Ghosts is owned by two white
        settlers who aim to practice uncolonization by prioritizing the support
        of Indigenous creators, centring social impact within the games
        industry, and creating less extractive funding models. We hope to take
        further measures to deconstruct colonialism in both our fund and the
        games industry as we continue to grow.
      </p>

      <p class="mb-6">
        Works Consulted:
        <a href="https://nctr.ca/records/reports/#trc-reports"
          >Truth and Reconciliation Reports</a
        >,
        <a
          href="https://apihtawikosisan.com/2016/09/beyond-territorial-acknowledgments/"
          >Beyond Territorial Acknowledgements</a
        >
        by Chelsea Vowel,
        <a
          href="https://www.stonecirclepress.com/blog-9658-ancient-spirit-rising/decolonization-meaning-what-exactly"
          >Decolonization ~ Meaning What Exactly?</a
        >
      </p>
    </section>
  </div>
</template>
