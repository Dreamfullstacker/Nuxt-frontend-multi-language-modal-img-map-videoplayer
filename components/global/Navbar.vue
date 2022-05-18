<template>
  <div
    :class="
      this.$i18n.locale === 'en'
        ? ' ltr flex-row-reverse '
        : ' rtl flex-row-reverse'
    "
    class="z-50 flex flex-row items-center justify-between pt-1 pb-1 pl-4 pr-4 md:pl-10 md:pr-10"
  >
    <div class="flex flex-row items-center space-x-2">
      <nuxt-link :to="localePath('/')">
        <img
          v-if="this.$i18n.locale === 'ar'"
          class="w-32"
          src="/Images/global/logo-white.svg"
          alt
          srcset
        />
        <h4 v-if="this.$i18n.locale === 'en'" class="text-3xl text-white">
          A MAID FOR EACH
        </h4>
      </nuxt-link>
    </div>
    <div class="flex flex-row items-center">
      <BurgerAR v-if="this.$i18n.locale === 'ar'" />
      <BurgerEN v-if="this.$i18n.locale === 'en'" />

      <div class="hidden md:flex md:flex-row">
        <!-- Office links -->
        <div class="flex flex-row-reverse">
          <scrollactive
            v-if="$nuxt.$route.path === '/'"
            :duration="800"
            bezier-easing-value=".5,0,.35,1"
          >
            <ul class="flex flex-row mr-2 nav-center">
              <transition name="slide">
                <li class="ml-3 nav-item">
                  <a
                    v-if="chapterOneSubSections"
                    href="#salma"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ سلمى</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterOneSubSections" class="ml-3 nav-item">
                  <a
                    href="#zain"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ زين
                  </a>
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterOneSubSections" class="ml-3 nav-item">
                  <a
                    href="#lawyer"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ المحامي</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterOneSubSections" class="ml-3 nav-item">
                  <a
                    href="#rahel"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ رحيل</a
                  >
                </li>
              </transition>
            </ul>
          </scrollactive>

          <scrollactive
            v-if="$nuxt.$route.path === '/en'"
            :duration="800"
            bezier-easing-value=".5,0,.35,1"
          >
            <ul class="flex flex-row mr-2 nav-center">
              <transition name="slide">
                <li class="ml-3 nav-item">
                  <a
                    v-if="chapterOneSubSections"
                    href="#salma"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ Salma</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterOneSubSections" class="ml-3 nav-item">
                  <a
                    href="#zain"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ Zain
                  </a>
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterOneSubSections" class="ml-3 nav-item">
                  <a
                    href="#lawyer"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ Lawyer</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterOneSubSections" class="ml-3 nav-item">
                  <a
                    href="#rahel"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ Rahil</a
                  >
                </li>
              </transition>
            </ul>
          </scrollactive>

          <nuxt-link
            v-if="this.$i18n.locale === 'en'"
            :class="$nuxt.$route.path === '/en' ? 'is-active' : 'nav-item'"
            class="mr-3 text-white"
            :to="{ path: '/en', hash: 'salma' }"
            >{{ $t('office') }}</nuxt-link
          >

          <nuxt-link
            v-if="this.$i18n.locale === 'ar'"
            :class="$nuxt.$route.path === '/' ? 'is-active' : 'nav-item'"
            class="mr-3 text-white"
            :to="{ path: '/', hash: 'salma' }"
            >{{ $t('office') }}</nuxt-link
          >
        </div>

        <!-- Room -->
        <div class="flex flex-row">
          <nuxt-link
            v-if="this.$i18n.locale === 'ar'"
            class="mr-3 text-white select-none"
            :class="
              $nuxt.$route.path === '/chaptertwo' ? 'is-active' : 'nav-item'
            "
            :to="{ path: '/chaptertwo', hash: 'room' }"
            >/// الغرفة</nuxt-link
          >

          <nuxt-link
            v-if="this.$i18n.locale === 'en'"
            class="mr-3 text-white select-none"
            :class="
              $nuxt.$route.path === '/en/chaptertwo' ? 'is-active' : 'nav-item'
            "
            :to="{ path: '/en/chaptertwo', hash: 'room' }"
            >/// The Room</nuxt-link
          >
          <scrollactive
            v-if="$nuxt.$route.path === '/chaptertwo'"
            :duration="800"
            bezier-easing-value=".5,0,.35,1"
          >
            <ul class="flex flex-row mr-2 nav-center">
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#room"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ الغرفة التي خنقتني
                  </a>
                </li>
              </transition>

              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#fifties"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ الخمسينيات</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#sixties"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ الستينيات واقتصادها</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#seventies"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ جنون الربح في السبعينيات</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#newlaw"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ قانون بناء جديد</a
                  >
                </li>
              </transition>

              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#end"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ الخاتمة</a
                  >
                </li>
              </transition>
            </ul>
          </scrollactive>

          <scrollactive
            v-if="$nuxt.$route.path === '/en/chaptertwo'"
            :duration="800"
            bezier-easing-value=".5,0,.35,1"
          >
            <ul class="flex flex-row mr-2 nav-center">
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#room"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ Suffocating Room
                  </a>
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#fifties"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ 50s</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#sixties"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ 60s</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#seventies"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ 70s</a
                  >
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#newlaw"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ Laws for Profit</a
                  >
                </li>
              </transition>

              <transition name="slide">
                <li v-if="chapterTwoSubSections" class="ml-3 nav-item">
                  <a
                    href="#end"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ The End</a
                  >
                </li>
              </transition>
            </ul>
          </scrollactive>
        </div>
        <!-- Black and White -->

        <div class="flex flex-row">
          <nuxt-link
            v-if="this.$i18n.locale === 'ar'"
            class="mr-3 text-white select-none"
            :class="
              $nuxt.$route.path === '/chapterthree' ? 'is-active' : 'nav-item'
            "
            :to="{ path: '/chapterthree', hash: 'family' }"
            >/// العائلة</nuxt-link
          >

          <nuxt-link
            v-if="this.$i18n.locale === 'en'"
            class="mr-3 text-white select-none"
            :class="
              $nuxt.$route.path === '/en/chapterthree'
                ? 'is-active'
                : 'nav-item'
            "
            :to="{ path: '/en/chapterthree', hash: 'family' }"
            >/// The Family
          </nuxt-link>

          <scrollactive
            v-if="$nuxt.$route.path === '/chapterthree'"
            :duration="800"
            bezier-easing-value=".5,0,.35,1"
          >
            <ul class="flex flex-row mr-2 nav-center">
              <transition name="slide">
                <li v-if="chapterThreeSubSections" class="ml-3 nav-item">
                  <a
                    href="#family2"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ المريول الأزرق
                  </a>
                </li>
              </transition>
              <transition name="slide">
                <li v-if="chapterThreeSubSections" class="ml-3 nav-item">
                  <a
                    href="#family3"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ مونولج الأقدار
                  </a>
                </li>
              </transition>

              <transition name="slide">
                <li v-if="chapterThreeSubSections" class="ml-3 nav-item">
                  <a
                    href="#family4"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ برنار
                  </a>
                </li>
              </transition>

              <transition name="slide">
                <li v-if="chapterThreeSubSections" class="ml-3 nav-item">
                  <a
                    href="#family5"
                    class="select-none scrollactive-item rtl nav-link"
                    >/ تأسيس الأسرة
                  </a>
                </li>
              </transition>
            </ul>
          </scrollactive>
        </div>

        <div class="flex flex-row-reverse">
          <nuxt-link
            v-if="this.$i18n.locale === 'ar'"
            :class="
              $nuxt.$route.path === '/chapterfour' ? 'is-active' : 'nav-item'
            "
            class="mr-3 text-white"
            :to="{ path: '/chapterfour', hash: 'blackandwhite' }"
            >/// الأبيض والأسود</nuxt-link
          >

          <nuxt-link
            v-if="this.$i18n.locale === 'en'"
            :class="
              $nuxt.$route.path === '/en/chapterfour' ? 'is-active' : 'nav-item'
            "
            class="mr-3 text-white"
            :to="{ path: '/en/chapterfour', hash: 'blackandwhite' }"
            >/// Black and White
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  mounted() {},
  computed: {
    ...mapState([
      'chapterOneSubSections',
      'chapterTwoSubSections',
      'chapterThreeSubSections',
    ]),
  },
}
</script>

<style>
/* Scrollactive */
.is-active {
  color: white;
}

.nav-item {
  color: gray;
}

.group:hover .group-hover\:block {
  display: block !important;
}

/* Animation */
.slide-leave-active,
.slide-enter-active {
  transition: 1.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
</style>
