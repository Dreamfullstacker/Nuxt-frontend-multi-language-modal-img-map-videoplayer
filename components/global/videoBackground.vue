<template>
  <div class="z-10 bg-black">
    <div class="vbackg">
      <video
        preload="metadata"
        class="block object-cover min-w-full min-h-screen"
        ref="interview"
        autoplay="autoplay"
        loop
        muted
      >
        <source
          src="https://makhdomeen.surge.sh/videobackground.mp4"
          type="video/mp4"
        />
        <source
          src="https://makhdomeen.surge.sh/videobackground.mp4"
          type="video/mp4"
        />
        <source
          src="https://makhdomeen.surge.sh/videobackground.mp4"
          type="video/mp4"
        />
        <track label="English" kind="subtitles" srclang="en" default />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="content">
      <div
        class="relative z-40 flex items-start content-center justify-center h-screen mt-16 "
      >
        <div
          class="static flex h-screen max-h-screen font-semibold text-white bg-transparent "
        >
          <div class="flex flex-col items-center justify-center m-10 sm:m-32">
            <transition name="fade">
              <div v-if="logo">
                <img
                  v-if="this.$i18n.locale === 'ar'"
                  class="w-64 sm:w-66"
                  src="/Images/global/logo-white.svg"
                />
                <p
                  v-if="this.$i18n.locale === 'en'"
                  class="mb-5 text-4xl md:text-5xl"
                >
                  MAID FOR EACH
                </p>
              </div>
            </transition>
            <transition name="fade">
              <div
                v-if="title"
                style="direction: rtl"
                class="text-xl font-bold text-center text-white sm:w-66"
              >
                <p>{{ $t('introTextHeading') }}</p>
                <p>{{ $t('introTextSubHeading') }}</p>
              </div>
            </transition>

            <transition name="fade">
              <nuxt-link :to="localePath('/film')">
                <div
                  v-if="watchMovieBoolean"
                  class="flex flex-col items-center p-3 mt-16 space-y-2 font-bold text-center text-black bg-white  group"
                >
                  <p class="text-3xl opacity-75 group-hover:opacity-95">
                    {{ $t('watchMovie') }}
                  </p>
                  <p class="text-xl opacity-80 group-hover:">
                    {{ $t('watchMovieDate') }}
                  </p>
                </div>
              </nuxt-link>
            </transition>

            <transition name="fade">
              <div
                v-if="langswitch"
                class="items-center mt-20 text-2xl font-bold text-center text-white "
              >
                <nuxt-link
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="mt-1 text-2xl text-white"
                  >{{ locale.name }}</nuxt-link
                >
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="flex justify-center min-h-screen align-middle">
        <div class="flex justify-center">
          <div
            v-if="this.$i18n.locale === 'en'"
            class="flex flex-col content-center justify-center w-10/12 mt-16 mb-16 text-2xl text-left text-white  sm:w-6/12"
          >
            <p>
              The market for migrant domestic labor is significant in Lebanon.
              Around 250,000 African and Asian domestic workers live in the
              country to “serve” four million Lebanese. This market started
              growing in the 1960s when the state created the legislation
              allowing brokers to establish offices and recruit girls and women
              from neighboring countries for domestic work. The market further
              expanded with the start of the civil war in 1975, as more and more
              Asian women came or were trafficked into the country for domestic
              work. To legislate their presence, Lebanon imported a racialized
              and racist legal framework from the Gulf states, dating back to
              the era of the British occupation. Known as the Kafala system, it
              effectively strips a domestic worker of all her rights from the
              minute she enters the country, placing her under the full
              guardianship of her employer.
            </p>
            <p class="mt-5">
              I decided to approach this project on the domestic labor market
              from the employers’ point of view, that is, we Lebanese. I wanted
              to examine the functioning of the market itself, which has become
              part of Lebanese society. Most importantly, to look at how we, the
              employers, in collusion with the recruitmen
              <nuxt-link
                :to="{ path: '/en', hash: 'salma' }"
                class="ml-1 font-bold text-white bg-black"
                exact
                >offices</nuxt-link
              >actively turn domestic workers into commodities. This insidious
              transformation of human beings into market goods happens openly
              and across various sectors of society, including among the real
              estate developers and architects who have designed the "<nuxt-link
                :to="{ path: '/chap2', hash: 'room' }"
                exact
                class="ml-1 font-bold text-white bg-black"
                >maid’s rooms </nuxt-link
              >" inside our homes over the years. Rooms that are increasingly
              cramped and that have always been tucked away to disappear the
              domestic worker--and her work--as much as possible from the rest
              of the household. And all of this is upheld by the state’s various
              institutions and security services, which safeguard and provide
              legal backing for our ability to exercise total authority over the
              lives of domestic workers.
            </p>
            <p class="mt-5">
              I wanted to try and hold this entire social structure accountable
              for the way it not only institutionalizes but also normalizes, in
              the most daily, banal ways, gender and racial discrimination. To
              do this, I tried to make visible what we keep trying to make
              invisible: the overwhelming presence of the domestic worker in all
              the details of our home and family lives, the way she is absented
              and concealed at the same time, the complex relationship of
              domination with which we deal with migrant domestic workers in our
              societies. Domination not only from a class position but through a
              racial super-relationship, in which we embody the role of "the
              white man" vis-a-vis the Black communities in our midst.
            </p>
            <p class="mt-5">
              There is a dire need for new narratives and research to keep track
              of the transformations in the domestic labor market in Lebanon
              right now. The indoor quarantine imposed by the pandemic and the
              current--and ongoing--economic collapse in the country are having
              profound effects not just on society but on the hundreds of
              migrant workers who maintain its domestic functioning.
            </p>
            <p class="mt-5 text-2xl text-bold">
              Maher Abi Samra
              <br />
              June 2021
            </p>
          </div>
          <div
            v-if="this.$i18n.locale === 'ar'"
            class="flex flex-col content-center justify-center w-10/12 mt-16 mb-16 text-2xl text-white  rtl sm:w-6/12"
          >
            <p style="direction: rtl">
              شكّلت العمالة المنزلية في لبنان سوقًا حقيقيًّا، إذ يقيم فيه حوالى
              ٢٥٠ ألف عاملة منزلية، أفريقية وآسيوية، مقابل ٤ ملايين لبناني
              ولبنانية. وقد بدأ هذا السوق بالتوسع في ستينيات القرن المنصرم مع
              تشريع الدولة «مكاتب الخدم»، التي عملت على استقدام الفتيات العاملات
              من الدول المجاورة، ليزدهر أكثر مع بدايات الحرب الأهلية في ١٩٧٥، مع
              قدوم المزيد والمزيد من النساء الآسيويات أو مع الاتجار بهن في سوق
              العمالة المنزلية في البلد. ويوسِّع نطاق استقدام العاملات من آسيا
              وأفريقيا على وجه التحديد. وقد استورد لبنان من دول الخليج نظامًا
              قانونيًّا عنصريًّا يعود إلى عهد الاحتلال البريطاني، وهو "نظام
              الكفالة"، حيث يتم تجريد العاملة المنزلية من حقوقها وتُوضَع تحت
              الوصاية الكاملة لرب العمل.
            </p>
            <p class="mt-5" style="direction: rtl">
              يتركّز اهتمامي في هذا البحث على سوق العمالة المنزلية، التي أصبحت
              جزءًا لا يتجزأ من المجتمع اللبناني، على وجهة نظر أرباب العمل
              المخدومين، وهم نحن، اللبنانيين واللبنانيات، وكيف تواطأنا بالتعاون
              مع
              <nuxt-link
                :to="{ path: '/', hash: 'salma' }"
                class="ml-1 font-bold text-white bg-black"
                exact
                >«مكتب الخدم»</nuxt-link
              >
              على انتقاء «الخادمة - السلعة»، وسخَّرنا لهذا الهدف أيضًا،
              المطوّرين العقاريين والمعماريين، الذين عملوا على إدخال ما باتت
              تسّمى
              <nuxt-link
                :to="{ path: '/chap2', hash: 'room' }"
                exact
                class="ml-1 font-bold text-white bg-black"
                >«غرفة الخادمة»
              </nuxt-link>
              في تصاميم مساكننا، مساهمين في إخفاء سلطتنا الكليّة على العاملة
              المنزلية عن أنظار المجتمع، وبمساهمة مؤسسات الدولة وأجهزتها
              الأمنية.
            </p>
            <p style="direction: rtl" class="mt-5">
              كما سعيت الى مساءلة هذا السوق عن كل ما يمارَسه في حق تلك النسوة من
              «مأسسة» التمييز الجندري والعنصري في شكل شبه يومي، حتى بات
              اعتياديًّا ومطبَّعًا، وعن حضور العاملة المتحكَّم به في حياتنا
              بصرامة، فمرةً يكون طاغيًا في كل تفاصيل البيت
              <nuxt-link
                :to="{ path: '/chapterthree', hash: 'family' }"
                exact
                class="ml-1 font-bold text-white bg-black"
                >والعائلة </nuxt-link
              >، ومرةً يغيَّب ويتم إخفاؤه كليًّا. إنها علاقة الهيمنة المركبة
              التي نتعامل بها مع العاملات اللواتي هجرن بلادهن للعمل في مهنة ككل
              المهن، ليس فقط من موقع طبقي، بل بعلاقة عنصرية، وكأننا نتمثّل فيها
              علاقة
              <nuxt-link
                :to="{ path: '/chapterfour', hash: 'blackandwhite' }"
                exact
                class="ml-1 font-bold text-white bg-black"
                >«الرجل الأبيض » مع من هو «أسود».</nuxt-link
              >
            </p>

            <p style="direction: rtl" class="mt-5">
              وهناك بالتأكيد حاجة إلى حكايات وأبحاث جديدة تروي تحولات سوق
              العمالة المنزلية في لبنان، في ظل الحجر المنزلي بسبب جانحة كورونا،
              المترافقة والمتزامنة مع الانهيار المالي والاقتصادي في لبنان،
              وتأثيراته العميقة على معظم «الخدم» والمخدومين اللبنانيين.
            </p>
            <p class="mt-5 text-2xl text-bold">
              ماهر أبي سمرا
              <br />
              حزيران ٢٠٢١
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: false,
      title: false,
      watchMovieBoolean: false,
      langswitch: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.logo = true
    }, 2000),
      setTimeout(() => {
        this.title = true
      }, 3500),
      setTimeout(() => {
        this.watchMovieBoolean = true
      }, 4500),
      setTimeout(() => {
        this.langswitch = true
      }, 4500)

    setTimeout(() => {
      this.introDiv = false
    }, 15000)
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style scoped>
.vbackg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bg {
  background-color: #606060;
}

.vbackg video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  z-index: 3000;
  transform: translate(-50%, -50%);
}
</style>
