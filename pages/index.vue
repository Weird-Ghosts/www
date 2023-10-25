<template>
  <div class="py-6 sm:pb-16 md:pb-20 lg:pb-28">
    <section class="lg:pt-20">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 mx-auto max-w-6xl">
        <div class="mb-12 mx-auto md:w-96 lg:w-full lg:mx-0">
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
                <strong>studio development training, </strong>
                <strong>grants</strong>, <strong>catalytic investments</strong>,
                and <strong>community</strong> in order to build strong,
                impactful teams of underrepresented makers who are shaping the
                future of games.
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
        </div>
      </div>
    </section>
    <section id="features" class="mx-auto bg-body text-primary py-12">
      <div class="text-center mx-auto max-w-2xl mb-12">
        <h2 class="mb-3 text-primary">How we fund.</h2>
        <p class="md:text-2xl font-display font-light">
          We believe in creators retaining ownership of their companies and IP.
          Our investments are structured around
          <NuxtLink to="/blog/how-we-make-investments"
            >shared earnings</NuxtLink
          >
          so that we recoup only after your team is paid.
        </p>
      </div>
      <div class="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-2">
        <div>
          <h3 class="text-lg md:text-2xl font-bold text-primary mb-4">
            Grants
          </h3>
          <p class="mb-4 lg:m-0 lg:mb-0 text-base md:text-xl">
            For teams who want to form a co-op, get studio operations up and
            running, and get support with impact strategy. Prepares teams for
            further fundraising.
            <i>Now administered through our nonprofit.</i>
          </p>
          <p class="my-4 lg:mb-0 text-lg">
            <NuxtLink to="https://babyghosts.fund/grant-and-accelerator"
              >Learn more about Baby Ghosts</NuxtLink
            >
          </p>
          <p class="mt-auto lg:mb-0 text-lg font-mono">$25,000 / 6 months</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h3 class="text-lg md:text-2xl font-bold text-primary mb-4">
            Investment
          </h3>
          <p class="mb-4 lg:m-0 lg:mb-0 text-base md:text-xl">
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
    <section id="sponsorships" class="w-full text-lg py-4 lg:py-12">
      <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
        <h2 class="text-center mb-8 lg:mb-0 lg:text-left">Proud to sponsor.</h2>
        <div class="mt-3 lg:mt-0 text-center">
          <a href="https://www.performanceandxr.com/" target="_blank"
            ><nuxt-img
              class="mx-auto mb-8"
              src="/img/pxr.jpeg"
              width="300"
              alt="PXR"
          /></a>
          <a href="https://tag.hexagram.ca/gamerella/" target="_blank">
            <nuxt-img
              class="mx-auto"
              width="300"
              src="/img/gamerella.png"
              alt="Gamerella"
            />
          </a>
        </div>
      </div>
    </section>

    <section>
      <div
        class="text-center text-2xl border-body border-2 max-w-5xl mx-auto p-10"
      >
        Is your studio interested in supporting the fund and our mandate?<br />
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

        <div class="md:flex mt-6">
          <div class="w-full md:w-1/3 mr-4">
            <nuxt-img width="300" src="/img/eileen.jpg" alt="Eileen" />
          </div>
          <div class="w-full md:w-2/3 text-base md:text-xl mt-0 md:mt-0">
            <h3>Eileen Mary Holowka, general partner</h3>
            <p class="mb-2 text-base">
              <b>eileen</b> (they/she) is a queer and disabled white settler
              living on Treaty 1 territory in Winnipeg. They are a writer, game
              dev, and community organizer/advocate with a background in
              theatre, games, poetry, and health communications. They have a PhD
              in communication studies from Concordia University and have
              published extensively within and outside of academia.
            </p>

            <p class="text-base">
              They are a co-founder of both Weird Ghosts and Baby Ghosts with
              Jennie Robinson Faber, as well as a member of Gamma Space
              Collaborative Studio. They also work as the general manager of
              Infinite Ammo.
            </p>
            <p>
              <NuxtLink
                to="https://eileenmary.net"
                class="font-bold underline text-sm"
                target="_blank"
                >eileenmary.net</NuxtLink
              >
            </p>
          </div>
        </div>
        <div class="md:flex mt-6">
          <div class="w-full md:w-1/3 mr-4">
            <nuxt-img width="300" src="/img/jennie.jpeg" alt="Jennie" />
          </div>
          <div class="w-full md:w-2/3 text-base md:text-xl mt-4 md:mt-0">
            <h3>Jennie Robinson Faber, general partner</h3>
            <p class="mb-2 text-base">
              <b>Jennie</b> (she) is a queer white settler community arts
              advocate and organizer, software developer, and leader in the IDM
              industry for over 15 years. She co-founded the videogame arts
              nonprofits DMG Toronto (with Cecily Carver and Alex Leitch) and
              Gamma Space Collaborative Studio (with Henry Faber and Dann
              Toliver) in 2012. In 2015, she joined the board of the
              <a href="https://tomediaarts.org"> Toronto Media Arts Centre </a>,
              and became its operations director in 2017.
            </p>
            <p class="text-base">
              She has served on a number of arts- and industry-related boards,
              with Ontario Creates, Museum of Contemporary Art Toronto, and the
              Academy of Canadian Cinema & Television, among others. She
              co-chaired the 2016 edition of IndieCade, presented at the Museum
              of the Moving Image (MoMI) in NYC.
            </p>
            <p>
              <NuxtLink
                to="https://jenniefaber.com"
                class="font-bold underline text-sm"
                target="_blank"
                >jenniefaber.com</NuxtLink
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <p class="mb-6 font-display text-3xl max-w-6xl text-center mx-auto">
        Our single investor is Infinite Ammo Inc.
      </p>
    </section>
    <section class="mx-auto max-w-4xl">
      <h2>Land acknowledgement.</h2>
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
<script setup lang="ts">
// definePageMeta({ documentDriven: { page: false, surround: false } });
</script>
