<template>
  <main id="blackandwhite" class="" @mouseover="chapterThreeSC">
    <div class="flex flex-col">
      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionimagesHero"
        src="/chapterHeros/c4/003.jpg"
        alt=""
      />

      <div
        class="flex flex-col items-center justify-center w-full font-bold bg-black shadow-xl opacity-75 pt-14 pb-14"
      >
        <p class="mt-5 text-3xl text-center text-white sm:text-2xl">
          <span v-if="this.$i18n.locale === 'ar'">الفصل الرابع</span>
          <span v-if="this.$i18n.locale === 'en'">Chapter Four</span>
        </p>
        <p class="mt-1 text-5xl text-center text-white sm:text-6xl">
          <span v-if="this.$i18n.locale === 'ar'">الأبيض والأسود</span>
          <span v-if="this.$i18n.locale === 'en'">Black and White</span>
        </p>

        <p
          :class="this.$i18n.locale === 'en' ? '   ' : ' rtl  '"
          class="w-8/12 mt-3 text-xl text-center text-white sm:text-2xl"
        >
          <span v-if="this.$i18n.locale === 'ar'">
            لا يمكن فصل العنف الذي تتعرض له عاملات المنازل المهاجرات في جميع
            أنحاء لبنان عن مسألة التفوّق العرقي. وبقدر ما يعمل النظام الاجتماعي
            بأكمله على إبقاء العاملات المنزليات غير مرئيات، فإن أعدادهن الكبيرة
            ليست ببساطة نتيجة حاجةٍ متزايدة للمساعدة المنزلية داخل المنازل
            الفردية. وبالمثل، فإن سوء معاملة هؤلاء العاملات ليس مجرد نتيجة
            للتسلسل الهرمي الذي يفاضل أنواعاً معينة من العمل فوق سواها. بل إن
            اضطهاد مئات الآلاف من النساء الأفريقيات والآسيويات في جميع أنحاء
            لبنان يلعب دوراً محورياً في خلق بنية عرقية يصبح من خلالها اللبنانيون
            "بيضاً" ، بينما يصبح المهاجرون المتنوعون هم "السود".
          </span>

          <span v-if="this.$i18n.locale === 'en'">
            The violence faced by migrant domestic workers throughout Lebanon
            cannot be separated from the issue of racial supremacy. As much as
            the entire social order works to keep domestic workers invisible,
            their large numbers are not simply the result of an increasing need
            for domestic help inside individual homes. Similarly, their
            mistreatment is not simply the consequence of a hierarchy that
            values certain kinds of work above others. Instead, the oppression
            of hundreds of thousands of African and Asian women across the
            country plays a central role in creating a racial structure through
            which Lebanese become "white," while diverse migrants become
            "black."
          </span>
        </p>

        <p
          :class="this.$i18n.locale === 'en' ? '   ' : ' rtl  '"
          class="w-8/12 mt-3 text-xl text-center text-white sm:text-2xl"
        >
          <span v-if="this.$i18n.locale === 'ar'">
            ماذا تعني الاستعانة بمساعدة خارجية للقيام بكامل الأعمال المنزلية
            الأساسية من الطهي لللتنظيف والعناية؟، بل وحصر هذه المهام بمجموعات من
            الأشخاص من جنسية وثقافة ولغة مختلفة؟ كيف يمكن لعدم إلمام عاملة
            منزلية باللغة المحكية في لبنان أو بالأعراف الثقافية لهذا المجتمع أن
            يؤدي إلى تُعاملها على أنها غريبة تماماً رغم أنها جزء لا يتجزأ من كل
            جانب من جوانب حياتنا؟ كيف أصبح من الممكن إخفاء مجتمعات بأكملها في
            نفس الوقت الذي يتم فيه التمييز ضدهم من خلال القوالب النمطية العنصرية
            والممارسات التعسفية؟ وربما الأهم من ذلك، كيف يمكننا فهم الروابط بين
            هيكل الهيمنة والأفكار الشعبية المتوارثة حول الاختلاف العرقي؟ حتى لو
            تم إصلاح نظام الكفالة ومنح العاملات المنزليات حقوقهن كعمال، كيف
            يمكننا إصلاح هذا المفهوم الأوسع للتفوق اللبناني؟
          </span>

          <span v-if="this.$i18n.locale === 'en'">
            What does it mean to have outsourced the entire infrastructure of
            cooking, cleaning, and caring to groups of people from different
            nationalities, cultures, and languages? How does a domestic worker's
            unfamiliarity with the Lebanese language or cultural norms make it
            possible for her to be treated as a total stranger, even though she
            is embedded in every aspect of our lives? How has it become possible
            to invisibilize entire populations at the same time as singling them
            out through racist stereotypes and abusive practices? Most
            importantly, how do we understand the connections between this
            structure of domination and popular ideas about racial difference?
            Even if the kafala system is reformed and domestic workers are
            granted their rights as workers, how will we reform this broader
            notion of Lebanese superiority?
          </span>
        </p>
      </div>

      <h2
        :class="this.$i18n.locale === 'en' ? '   ' : '  rtl '"
        class="flex justify-center mt-8 text-3xl text-center font-nassimBold sm:text-5xl"
      >
        <span class="w-8/12">
          {{ $t('chapterThreeIntroQuote') }}
        </span>
      </h2>
      <p
        :class="this.$i18n.locale === 'en' ? '   ' : '  rtl '"
        class="flex justify-center mt-3 text-xl text-center sm:text-3xl"
      >
        {{ $t('chapterThreeIntroQuoteAuthor') }}
      </p>
    </div>

    <div class="flex flex-col items-center content-center justify-center">
      <IntroSection>
        <nuxt-content :document="s1Q1" />
      </IntroSection>

      <IntroSection>
        <nuxt-content :document="s1Q2" />
      </IntroSection>
      <SectionText> <nuxt-content :document="s11" /> </SectionText>
      <SectionText> <nuxt-content :document="s12" /> </SectionText>
      <SectionText> <nuxt-content :document="s13" /> </SectionText>
      <SectionText> <nuxt-content :document="s14" /> </SectionText>
      <SectionText> <nuxt-content :document="s15" /> </SectionText>
      <AudioPlyr v-if="this.$i18n.locale === 'ar'" />

      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionimages"
        src="/chapterHeros/c4/002.jpg"
      />

      <div class="flex flex-col">
        <h2
          :class="this.$i18n.locale === 'en' ? '   ' : '  rtl '"
          class="flex justify-center mt-8 text-3xl text-center font-nassimBold sm:text-5xl"
        >
          <span class="w-8/12">
            {{ $t('chapterThreeSecondTitle') }}
          </span>
        </h2>
      </div>

      <IntroSection>
        <nuxt-content :document="s2Q1" />
      </IntroSection>

      <IntroSection>
        <nuxt-content :document="s2Q2" />
      </IntroSection>
      <SectionText> <nuxt-content :document="s21" /> </SectionText>
      <SectionText> <nuxt-content :document="s22" /> </SectionText>
      <SectionText> <nuxt-content :document="s23" /> </SectionText>

      <SectionText> <nuxt-content :document="s24" /> </SectionText>

      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionimages"
        src="/chapterHeros/c4/001.jpg"
        alt=""
      />

      <SectionText> <nuxt-content :document="s25" /> </SectionText>
      <SectionText> <nuxt-content :document="s26" /> </SectionText>
      <SectionText> <nuxt-content :document="s27" /> </SectionText>
      <SectionText> <nuxt-content :document="s28" /> </SectionText>

      <div class="flex flex-col">
        <h2
          :class="this.$i18n.locale === 'en' ? '   ' : '  rtl '"
          class="flex justify-center mt-8 text-3xl text-center font-nassimBold sm:text-5xl"
        >
          <span class="w-8/12">
            {{ $t('chapterThreeThirdTitle') }}
          </span>
        </h2>
      </div>

      <IntroSection>
        <nuxt-content :document="s3Q1" />
      </IntroSection>

      <IntroSection>
        <nuxt-content :document="s3Q2" />
      </IntroSection>

      <IntroSection>
        <nuxt-content :document="s3Q3" />
      </IntroSection>

      <SectionText> <nuxt-content :document="s31" /> </SectionText>
      <SectionText> <nuxt-content :document="s32" /> </SectionText>
      <SectionText> <nuxt-content :document="s33" /> </SectionText>
      <SectionText> <nuxt-content :document="s34" /> </SectionText>
      <SectionText> <nuxt-content :document="s35" /> </SectionText>
      <SectionText> <nuxt-content :document="s36" /> </SectionText>

      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionimages"
        src="/chapterHeros/c4/004.jpg"
      />

      <div class="flex flex-col">
        <h2
          :class="this.$i18n.locale === 'en' ? '   ' : '  rtl '"
          class="flex justify-center mt-8 text-3xl text-center font-nassimBold sm:text-5xl"
        >
          <span class="w-8/12 p-5">
            {{ $t('chapterThreeFourthTitle') }}
          </span>
        </h2>
      </div>

      <IntroSection>
        <nuxt-content :document="s4Q1" />
      </IntroSection>

      <IntroSection>
        <nuxt-content :document="s4Q2" />
      </IntroSection>

      <SectionText> <nuxt-content :document="s41" /> </SectionText>
      <SectionText> <nuxt-content :document="s42" /> </SectionText>
      <SectionText> <nuxt-content :document="s43" /> </SectionText>

      <div class="flex flex-col">
        <h2
          :class="this.$i18n.locale === 'en' ? ' hidden  ' : '  rtl '"
          class="flex justify-center mt-8 text-3xl text-center font-nassimBold sm:text-5xl"
        >
          {{ $t('chapterThreeFifthTitle') }}
        </h2>
      </div>
      <SectionText class="pb-16">
        <nuxt-content :document="s44" />
      </SectionText>

      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionimagesHero"
        src="/chapterHeros/c4/Family_ch2Hero.jpg"
        alt=""
      />
      <div class="flex flex-col">
        <h2
          :class="this.$i18n.locale === 'en' ? '   ' : '  rtl '"
          class="flex justify-center mt-8 text-3xl text-center font-nassimBold sm:text-5xl"
        >
          {{ $t('chapterFourSectionTwo') }}
        </h2>
      </div>
      <IntroSection
        :roleOne="se21.roleOne"
        :roleOneName="se21.roleOneName"
        :roleTwo="se21.roleTwo"
        :roleTwoName="se21.roleTwoName"
        :roleThree="se21.roleThree"
        :roleThreeName="se21.roleThreeName"
      >
        <nuxt-content :document="se21" />
      </IntroSection>

      <SectionText> <nuxt-content :document="se22" /> </SectionText>
      <SectionText> <nuxt-content :document="se23" /> </SectionText>
      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionTwoImages"
        src="/chapterHeros/c4/WhiteLebanese_1.png"
      />
      <SectionText> <nuxt-content :document="se24" /> </SectionText>
      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionTwoImages"
        src="/chapterHeros/c4/WhiteLebanese_2.png"
      />
      <SectionText> <nuxt-content :document="se25" /> </SectionText>
      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionTwoImages"
        src="/chapterHeros/c4/WhiteLebanese_3.png"
      />
      <SectionText class="pb-20">
        <nuxt-content v-if="this.$i18n.locale === 'ar'" :document="se26" />
        <C4S2SectionFiveEN v-if="this.$i18n.locale === 'en'" />
      </SectionText>

      <img
        class="duration-300 transform filter grayscale hover:filter-none sectionTwoImages"
        src="/chapterHeros/c4/WhiteLebanese_4.png"
      />

      <SectionText class="pb-20">
        <nuxt-content :document="se27" />
      </SectionText>
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  async asyncData(context) {
    const { $content, app } = context
    //Section One
    const s1Q1 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/000`
    ).fetch()
    const s1Q2 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/001`
    ).fetch()

    const s11 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/002`
    ).fetch()
    const s12 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/003`
    ).fetch()
    const s13 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/004`
    ).fetch()
    const s14 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/005`
    ).fetch()
    const s15 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/006`
    ).fetch()

    const s2Q1 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/007`
    ).fetch()
    const s2Q2 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/008`
    ).fetch()

    const s21 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/009`
    ).fetch()
    const s22 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/010`
    ).fetch()
    const s23 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/011`
    ).fetch()
    const s24 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/012`
    ).fetch()
    const s25 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/013`
    ).fetch()
    const s26 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/014`
    ).fetch()
    const s27 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/015`
    ).fetch()
    const s28 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/016`
    ).fetch()

    const s3Q1 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/018`
    ).fetch()
    const s3Q2 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/019`
    ).fetch()

    const s3Q3 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/020`
    ).fetch()

    const s31 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/021`
    ).fetch()
    const s32 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/022`
    ).fetch()
    const s33 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/023`
    ).fetch()
    const s34 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/024`
    ).fetch()
    const s35 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/025`
    ).fetch()
    const s36 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/026`
    ).fetch()

    const s4Q1 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/027`
    ).fetch()
    const s4Q2 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/028`
    ).fetch()

    const s41 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/029`
    ).fetch()
    const s42 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/030`
    ).fetch()
    const s43 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/031`
    ).fetch()
    const s44 = await $content(
      `${app.i18n.locale}/chapterFour/sectionOne/032`
    ).fetch()

    const se21 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/000`
    ).fetch()

    const se22 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/001`
    ).fetch()
    const se23 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/002`
    ).fetch()
    const se24 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/003`
    ).fetch()
    const se25 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/004`
    ).fetch()
    const se26 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/005`
    ).fetch()

    const se27 = await $content(
      `${app.i18n.locale}/chapterFour/sectionTwo/006`
    ).fetch()

    return {
      s1Q1,
      s1Q2,

      s11,
      s12,
      s13,
      s14,
      s15,

      s2Q1,
      s2Q2,

      s21,
      s22,
      s23,
      s24,
      s25,
      s26,
      s27,
      s28,

      s3Q1,
      s3Q2,
      s3Q3,

      s31,
      s32,
      s33,
      s34,
      s35,
      s36,

      s4Q1,
      s4Q2,

      s41,
      s42,
      s43,
      s44,

      se21,
      se22,
      se23,
      se24,
      se25,
      se26,
      se27,
    }
  },
  methods: {
    ...mapMutations([
      'chapterThreeSC', //also supports payload `this.nameOfMutation(amount)`
    ]),
  },
}
</script>

<style scoped>
.sectionimages {
  justify-self: center;
  justify-items: center;
  align-self: center;
  width: 75%;
}

.sectionTwoImages {
  justify-self: center;
  justify-items: center;
  align-self: center;
  width: 60%;
}

.sectionimagesHero {
  justify-self: center;
  justify-items: center;
  align-self: center;
  width: 100%;
}
</style>
