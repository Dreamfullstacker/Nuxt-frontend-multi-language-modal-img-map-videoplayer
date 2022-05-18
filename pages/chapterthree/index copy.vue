<template>
  <div>
    <div class="flex flex-col items-center content-center justify-center">
      <ChapterImageHero
        class="w-full"
        :chapterNumber="sectionOneHero.chapterNumber"
        :chapterTitle="sectionOneHero.chapterTitle"
        :sectionNumber="sectionOneHero.sectionNumber"
        :sectionTitle="sectionOneHero.sectionTitle"
        :divId="sectionOneHero.divId"
        :imageSource="sectionOneHero.imageSource"
        :chapterFirstParagraph="sectionOneHero.chapterFirstParagraph"
        :chapterSecondParagraph="sectionOneHero.chapterSecondParagraph"
      />
      <IntroSection
        :roleOne="s1.roleOne"
        :roleOneName="s1.roleOneName"
        :roleTwo="s1.roleTwo"
        :roleTwoName="s1.roleTwoName"
        :roleThree="s1.roleThree"
        :roleThreeName="s1.roleThreeName"
      >
        <nuxt-content :document="s1" />
      </IntroSection>

      <SectionText class="mt-10">
        <nuxt-content :document="s11" />
      </SectionText>
      <SectionText class="mt-5"> <nuxt-content :document="s12" /> </SectionText>
      <SectionText class="mt-5"> <nuxt-content :document="s13" /> </SectionText>
      <SectionText class="mt-5"> <nuxt-content :document="s14" /> </SectionText>
      <SectionText class="mt-5 mb-5">
        <nuxt-content :document="s15" />
      </SectionText>

      <img class="mt-5 mb-5" width="100%" src="/chapterHeros/c3/s1_001.jpg" />

      <SectionText class="mt-5"> <nuxt-content :document="s16" /> </SectionText>
      <SectionText class="mt-5"> <nuxt-content :document="s17" /> </SectionText>
      <SectionText class="mt-5"> <nuxt-content :document="s18" /> </SectionText>
      <SectionText class="mt-5 mb-16">
        <nuxt-content :document="s19" />
      </SectionText>
    </div>

    <div class="z-50 flex flex-row items-center justify-between">
      <div>
        <nuxt-link
          v-if="chapternav > 5000"
          :class="chapternav ? 'block' : 'hidden'"
          :to="localePath('/chapterfour#blackandwhite')"
          style="z-index: 1000"
          class="flex items-center ml-2 stickynav"
        >
          <div
            :class="
              chapternav < 29190
                ? '   text-white bg-black '
                : ' text-black bg-white shadow-2xl '
            "
            class="flex items-center content-center justify-center w-20 h-20 mt-2 text-sm text-center rounded-full font-nassimBold"
          >
            <span v-if="this.$i18n.locale === 'ar'">اذهب للفصل التالي</span>
            <span v-if="this.$i18n.locale === 'en'"> Go to next chapter </span>
          </div>
        </nuxt-link>
      </div>

      <div v-if="this.$i18n.locale === 'ar'">
        <nuxt-link
          v-if="chapternav > 2000"
          :class="chapternav ? 'block' : 'hidden'"
          :to="{ path: '/chapterthree', hash: 'family' }"
          exact
          class="z-50 stickyscroll"
        >
          <svg
            class="w-10 mb-5"
            version="1.1"
            viewBox="0 0 24 14"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M542.687,1212.29l-10.942,-11.98c-0.21,-0.21 -0.487,-0.3 -0.761,-0.28c-0.273,-0.02 -0.55,0.07 -0.76,0.28l-10.943,11.98c-0.391,0.4 -0.391,1.03 0,1.43c0.393,0.39 1.029,0.39 1.42,0l10.283,-11.26l10.284,11.26c0.391,0.39 1.027,0.39 1.419,0c0.392,-0.4 0.392,-1.03 0,-1.43"
              transform="matrix(1,0,0,1,-519,-1200)"
              fill-rule="evenodd"
              fill="#000"
              stroke="none"
            />
          </svg>
        </nuxt-link>
      </div>

      <div v-if="this.$i18n.locale === 'en'">
        <nuxt-link
          v-if="chapternav > 4500"
          :class="chapternav ? 'block' : 'hidden'"
          :to="{ path: '/en/chapterthree', hash: 'family' }"
          exact
          class="z-50 stickyscroll"
        >
          <svg
            class="w-10 mb-5"
            version="1.1"
            viewBox="0 0 24 14"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M542.687,1212.29l-10.942,-11.98c-0.21,-0.21 -0.487,-0.3 -0.761,-0.28c-0.273,-0.02 -0.55,0.07 -0.76,0.28l-10.943,11.98c-0.391,0.4 -0.391,1.03 0,1.43c0.393,0.39 1.029,0.39 1.42,0l10.283,-11.26l10.284,11.26c0.391,0.39 1.027,0.39 1.419,0c0.392,-0.4 0.392,-1.03 0,-1.43"
              transform="matrix(1,0,0,1,-519,-1200)"
              fill-rule="evenodd"
              fill="#000"
              stroke="none"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  async asyncData(context) {
    const { $content, app } = context
    const sectionOneHero = await $content(
      `${app.i18n.locale}/chapterThree/hero`
    ).fetch()

    const s1 = await $content(`${app.i18n.locale}/chapterThree/001`).fetch()

    const s11 = await $content(`${app.i18n.locale}/chapterThree/002`).fetch()

    const s12 = await $content(`${app.i18n.locale}/chapterThree/003`).fetch()

    const s13 = await $content(`${app.i18n.locale}/chapterThree/004`).fetch()

    const s14 = await $content(`${app.i18n.locale}/chapterThree/005`).fetch()

    const s15 = await $content(`${app.i18n.locale}/chapterThree/006`).fetch()

    const s16 = await $content(`${app.i18n.locale}/chapterThree/007`).fetch()

    const s17 = await $content(`${app.i18n.locale}/chapterThree/008`).fetch()

    const s18 = await $content(`${app.i18n.locale}/chapterThree/009`).fetch()

    const s19 = await $content(`${app.i18n.locale}/chapterThree/010`).fetch()

    return {
      sectionOneHero,
      s1,
      s11,
      s12,
      s13,
      s14,
      s15,
      s16,
      s17,
      s18,
      s19,
    }
  },
  methods: {
    ...mapMutations(['chapterThreeSC']),
    handleScroll() {
      this.chapternav = window.scrollY
    },
  },

  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  data() {
    return {
      chapternav: 0,
    }
  },
}
</script>

<style></style>
