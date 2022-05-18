<template>
  <div>
    <div id="rahel" class="pt-10 pb-4 -mt-1 bg-black">
      <div
        class="flex flex-col items-center justify-center w-full font-nassimBold"
      >
        <p class="mt-5 text-3xl text-center text-white sm:text-2xl">
          {{ $t('sectionFour') }}
        </p>
        <p
          style="direction: ltr"
          class="p-1 mt-1 text-5xl text-center text-white sm:text-6xl"
        >
          {{ $t('s4title') }}
        </p>
      </div>

      <div class="flex items-center justify-center mb-5">
        <div
          :class="this.$i18n.locale === 'en' ? 'flex-row' : 'flex-row-reverse'"
          class="relative flex items-start justify-center w-5/6 mt-10 text-white  md:w-3/6"
        >
          <div
            :class="
              this.$i18n.locale === 'en'
                ? 'text-left ltr md:left-0 md:-ml-32 lg:-ml-48 pr-5'
                : 'text-right md:right-0 rtl md:-mr-32 lg:-mr-48 pl-5'
            "
            class="w-24 text-sm md:absolute md:top-0 md:w-48 sm:text-xl"
          >
            <div v-if="this.$i18n.locale === 'ar'">
              <br />
              <span class="font-nassimBold">مقابلة مع</span>
              <br />رحيل زيجي
              <br />
            </div>

            <div v-if="this.$i18n.locale === 'en'">
              <br />
              <span class="font-nassimBold">Interview with</span>
              <br />
              Rahil Zaiji
              <br />
            </div>
          </div>

          <div
            class="static flex flex-col w-10/12 text-sm  font-nassimBold sm:text-xl"
            :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
          >
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="flex flex-col mt-5 text-base text-right text-white  sm:text-xl sm:text-right"
            >
              ضيق سوق العمل في إثيوبيا دفع راحيل إلى التفكير في الرحيل بحثًا عن
              عمل، بعدما أقنعها زميل لها أن لبنان هو البلد الذي تحققين فيه
              «أحلامك»، فقررت المجيء لخدمتنا. البلد الذي قال عنه ميشال شيحا إن
              دور دولته «تأمين الغذاء واللباس اللائق» للعمال، ويُترك للتجار
              «تأمين معاشاتهم».
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="flex flex-col mt-5 text-base text-left text-white  sm:text-xl sm:text-left"
            >
              The lack of employment options in Ethiopia drove Rahel to consider
              leaving her home in search of work. She decided to come to Lebanon
              after a colleague convinced her that this was the country where
              she’d be able to realize her dreams. The country whose
              government’s role, as Michel Shiha once said, consisted of
              “ensuring food and appropriate clothing” for its workers, while
              merchants were left to “ensure their wages.”
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center w-full mt-10  sm:mt-10 font-nassimBold"
      >
        <p
          :class="this.$i18n.locale === 'en' ? ' ltr' : 'rtl'"
          class="w-10/12 p-1 mt-1 text-4xl text-center text-white  sm:w-6/12 sm:text-3xl"
        >
          {{ $t('s42ndtitle') }}
        </p>

        <p
          v-if="this.$i18n.locale === 'ar'"
          class="flex flex-col w-8/12 mt-10 text-base text-right text-white  rtl sm:text-xl sm:text-right sm:w-6/12"
        >
          «أُسَمّيه سوقًا. إنّه سوق عمل أنشأه تجّارٌ بشر، كبيع الأغنام مثلًا،
          هناك من يربّي الأغنام ثم يبيعها لتحقيق ربح من عمله. لكن أصحاب هذه
          المكاتب لا يربّونك، ولا يطعمونك كما يفعل الوالدان. أسوأ ما في الأمر أن
          أصحاب هذه المكاتب يمارسون الإتجار بالبشر من دون بذل أي مجهود مُسبق. إن
          أردتَ بيعَ الأغنام عليك أوّلًا بذْلَ بعضٍ من الجهد لتربيتها، ومن دون
          جهد وعمل لن تحصل على شيء، فكيف يحدث إذًا في حالة الإنسان، الكائن
          الجدير بالاحترام، والذي لم يفعلوا شيئًا لتربيته أو لتأمين الماء
          والطعام له، أنّهم يبذلون كل هذا الجهد للإتجار به؟».
        </p>

        <p
          v-if="this.$i18n.locale === 'en'"
          class="flex flex-col w-8/12 mt-16 text-base text-left text-white  sm:text-xl sm:text-left sm:w-6/12"
        >
          I call it a market. It’s a labor market. Set up by human traffickers,
          who sell humans the way others sell sheep. When you’re trading in
          sheep, there’s someone who raises the sheep and then sells them to
          make a profit off the work they put in. But the owners of these
          agencies don’t even give you a drink of water. They don’t feed you the
          way your parents do. Worst of all, the owners of these agencies
          traffic in human beings without ever having had to put any effort into
          caring for them. If you’re selling sheep, you have to put some effort
          into raising them. Without that effort, that work, you’d get nothing.
          And so how can it be that when it comes to human beings, who are
          creatures worthy of respect… how can it be that people they’ve made no
          effort to raise or care for or to provide with food and drink… how can
          they then turn around and put all this effort into trading them in the
          marketplace?
        </p>
      </div>
    </div>

    <VideoPlayer
      videoSrc="/videos/rahil.mp4"
      videoSubEN="/videos/Rahilen.vtt"
      videoSubAR="/videos/Rahilar.vtt"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    visibilityChangedChapter(isVisible, entry) {
      if (isVisible == true) {
        this.$router.push({ path: this.localePath('/chaptertwo#room') })
      }
    },
  },
}
</script>

<style></style>
