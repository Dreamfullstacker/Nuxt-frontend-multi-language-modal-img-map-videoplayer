<template>
  <nav class="z-50 flex h-10 text-black bg-transparent zind">
    <div class="flex items-center">
      <button class="z-40 mr-2" aria-label="Open Menu" @click="drawer">
        <img v-if="isOpen" class="w-5 h-5" src="~/assets/Close.svg" alt="" />
        <div
          v-else
          class="
            z-10
            mt-2
            text-2xl text-white
            cursor-pointer
            hover:text-gray-400
          "
        >
          <div class="select-none">///</div>
        </div>
      </button>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      :class="isOpen ? '-translate-x-0' : 'translate-x-full'"
      class="
        fixed
        top-0
        right-0
        z-30
        h-full
        overflow-auto
        transition-all
        duration-700
        ease-in-out
        transform
        bg-white
        w-80
      "
    >
      <div class="flex flex-col pr-5">
        <div class="flex flex-col content-start justify-end w-full mb-5">
          <div class="mt-32 ml-8 border-b-2 border-black">
            <p v-if="this.$i18n.locale === 'ar'" class="mb-3 text-2xl">
              قائمة الفصول
            </p>
            <span v-if="this.$i18n.locale === 'en'" class="mb-3 text-2xl"
              >Chapters List</span
            >
          </div>
        </div>

        <div
          :class="this.$i18n.locale === 'en' ? '  mr-8  ' : ' ml-8 '"
          class="flex flex-col"
        >
          <div
            :class="this.$i18n.locale === 'en' ? '  ml-8 mr-10 ' : '  ml-10  '"
            @click="sections('office')"
            class="
              flex
              items-center
              justify-between
              w-full
              mb-3
              text-lg
              cursor-pointer
              hover:text-gray-600
            "
          >
            <p>
              <span v-if="this.$i18n.locale === 'ar'">المكتب</span>
              <span v-if="this.$i18n.locale === 'en'">The Office</span>
            </p>
            <img
              :class="sectionMenu == 'office' ? ' rotate-0 ' : 'rotate-90 '"
              class="w-5 h-5 transform"
              src="/arrow.svg"
              alt=""
            />
          </div>

          <transition
            name="expand"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <div
              v-if="sectionMenu == 'office'"
              class="flex flex-col w-full pt-1 pb-3 ml-8 space-y-1"
            >
              <nuxt-link :to="localePath('/#salma')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'">سلمى</span>
                  <span v-if="this.$i18n.locale === 'en'">Salma</span>
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/#zain')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'">زين</span>
                  <span v-if="this.$i18n.locale === 'en'">Zain</span>
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/#lawyer')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'"
                    >كيف تكون مخدوماً؟</span
                  >
                  <span v-if="this.$i18n.locale === 'en'"
                    >How to be served?</span
                  >
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/#rahel')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'">رحيل</span>
                  <span v-if="this.$i18n.locale === 'en'">Rahel </span>
                </p>
              </nuxt-link>
            </div>
          </transition>

          <div
            @click="sections('room')"
            :class="this.$i18n.locale === 'en' ? '  ml-8 mr-10 ' : '  ml-10  '"
            class="
              flex
              items-center
              justify-between
              w-full
              mb-3
              text-lg
              cursor-pointer
              hover:text-gray-600
            "
          >
            <p>
              <span v-if="this.$i18n.locale === 'ar'">الغرفة</span>
              <span v-if="this.$i18n.locale === 'en'">The Room</span>
            </p>

            <img
              :class="sectionMenu == 'room' ? ' rotate-0 ' : 'rotate-90 '"
              class="w-5 h-5 transform"
              src="/arrow.svg"
              alt=""
            />
          </div>

          <transition
            name="expand"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <div
              v-if="sectionMenu == 'room'"
              class="flex flex-col w-full pt-1 pb-3 ml-8 space-y-1"
            >
              <nuxt-link :to="localePath('/chaptertwo#room')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'"
                    >الغرفة التي خنقتني</span
                  >
                  <span v-if="this.$i18n.locale === 'en'"
                    >The room which sufficated me</span
                  >
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/chaptertwo#fifties')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'"
                    >من لبنان الكبير إلي الخمسينيات</span
                  >
                  <span v-if="this.$i18n.locale === 'en'"
                    >From big Lebanon to fifties</span
                  >
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/chaptertwo#sixties')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'"
                    >مجتمع الستينيات واقتصادها</span
                  >
                  <span v-if="this.$i18n.locale === 'en'"
                    >Sixties society and it's economy</span
                  >
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/chaptertwo#seventies')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'"
                    >جنون الربح في السبعينيات والحرب</span
                  >
                  <span v-if="this.$i18n.locale === 'en'"
                    >Winning madness in seventies and the war
                  </span>
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/chaptertwo#newlaw')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'"
                    >قانون بناء جديد بلا نور وهواء للعاملة</span
                  >
                  <span v-if="this.$i18n.locale === 'en'"
                    >Winning madness in seventies and the war
                  </span>
                </p>
              </nuxt-link>

              <nuxt-link :to="localePath('/chaptertwo#end')">
                <p @click="toggleMenu()" class="text-gray-600 hover:text-black">
                  <span v-if="this.$i18n.locale === 'ar'">الخاتمة</span>
                  <span v-if="this.$i18n.locale === 'en'">The End </span>
                </p>
              </nuxt-link>
            </div>
          </transition>

          <span
            @click="isOpen = false"
            class="flex items-center mb-3 ml-8 text-lg hover:text-gray-600"
          >
            <nuxt-link :to="localePath('/chapterthree#family')">
              <p @click="toggleMenu()">
                <span v-if="this.$i18n.locale === 'ar'">العائلة</span>
                <span v-if="this.$i18n.locale === 'en'">The Family</span>
              </p>
            </nuxt-link>
          </span>

          <span
            @click="isOpen = false"
            class="flex items-center mb-3 ml-8 text-lg hover:text-gray-600"
          >
            <nuxt-link :to="localePath('/chapterfour#blackandwhite')">
              <p @click="toggleMenu()">
                <span v-if="this.$i18n.locale === 'ar'">الأبيض والأسود</span>
                <span v-if="this.$i18n.locale === 'en'">Black and White</span>
              </p>
            </nuxt-link>
          </span>
        </div>

        <nuxt-link
          :to="localePath('/about')"
          class="
            flex flex-col
            content-start
            justify-end
            w-full
            mt-12
            mb-5
            cursor-pointer
          "
        >
          <div class="ml-8 border-b-2 border-black" @click="isOpen = false">
            <p @click="toggleMenu()">
              <span v-if="this.$i18n.locale === 'ar'" class="mb-3 text-2xl"
                >عن الفيلم</span
              >
              <span v-if="this.$i18n.locale === 'en'" class="mb-3 text-2xl"
                >About the Movie</span
              >
            </p>
          </div>
        </nuxt-link>

        <nuxt-link
          :to="localePath('/team')"
          class="
            flex flex-col
            content-start
            justify-end
            w-full
            mb-5
            cursor-pointer
          "
        >
          <div @click="isOpen = false" class="ml-8 border-b-2 border-black">
            <p @click="toggleMenu()">
              <span v-if="this.$i18n.locale === 'ar'" class="mb-3 text-2xl"
                >الفريق</span
              >
              <span v-if="this.$i18n.locale === 'en'" class="mb-3 text-2xl"
                >The Team</span
              >
            </p>
          </div>
        </nuxt-link>

        <nuxt-link
          :to="localePath('/contact')"
          class="
            flex flex-col
            content-start
            justify-end
            w-full
            mb-5
            cursor-pointer
          "
        >
          <div @click="isOpen = false" class="ml-8 border-b-2 border-black">
            <p @click="toggleMenu()">
              <span v-if="this.$i18n.locale === 'ar'" class="mb-3 text-2xl"
                >للتواصل</span
              >
              <span v-if="this.$i18n.locale === 'en'" class="mb-3 text-2xl"
                >Contact us</span
              >
            </p>
          </div>
        </nuxt-link>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      sectionMenu: '',
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },

    toggleMenu() {
      this.sectionMenu = ''
      this.isOpen = !this.isOpen
    },

    sections(data) {
      if (this.sectionMenu == data) {
        this.sectionMenu = ''
      } else {
        this.sectionMenu = data
      }
    },

    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>

<style scoped>
.zind {
  z-index: 100;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
