<template>
  <main @mouseover="chapterTwoSC">
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
        :roleOne="s1z.roleOne"
        :roleOneName="s1z.roleOneName"
        :roleOneNameTwo="s1z.roleOneNameTwo"
        :roleTwo="s1z.roleTwo"
        :roleTwoName="s1z.roleTwoName"
        :roleTwoNameTwo="s1z.roleTwoNameTwo"
      >
        <nuxt-content :document="s1z" />
      </IntroSection>

      <SectionText> <nuxt-content :document="s11" /> </SectionText>
      <SectionText> <nuxt-content :document="s12" /> </SectionText>
      <SectionText> <nuxt-content :document="s13" /> </SectionText>
      <SectionText> <nuxt-content :document="s14" /> </SectionText>
      <SectionText> <nuxt-content :document="s15" /> </SectionText>
    </div>
    <LighboxOneChapOne />
    <div class="flex flex-col items-center content-center justify-center">
      <SectionText> <nuxt-content :document="s16" /> </SectionText>
      <LightboxTwoChapTwo class="mt-5 mb-5" />
    </div>
    <div class="flex flex-col items-center content-center justify-center">
      <SectionText class="mb-5">
        <nuxt-content :document="s17" />
      </SectionText>

      <sectionImageHero
        class="w-full mt-12"
        :chapterNumber="sectionTwoHero.chapterNumber"
        :chapterTitle="sectionTwoHero.chapterTitle"
        :sectionNumber="sectionTwoHero.sectionNumber"
        :sectionTitle="sectionTwoHero.sectionTitle"
        :sectionSubTitle="sectionTwoHero.sectionSubTitle"
        :divId="sectionTwoHero.divId"
        :imageSource="sectionTwoHero.imageSource"
      />

      <SectionText class="mt-10">
        <nuxt-content :document="s2z" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s21" />
      </SectionText>

      <div
        class="relative flex flex-col-reverse items-center justify-center w-10/12 mt-5 mb-5 sm:w-3/6 sm:flex-row"
      >
        <div
          :class="
            this.$i18n.locale === 'en' ? ' ltr text-left ' : ' rtl text-right '
          "
          class="top-0 mt-5 sm:h-10 sm:mt-5 sm:pr-10 sm:-ml-48 sm:left-0 sm:w-48 sm:absolute font-nassimBold"
        >
          {{ $t('katana') }}

          <div></div>
        </div>
        <img
          src="/Images/c2/sectionTwo/lightBoxOne/4_kitchen_mezzanine.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <div class="flex flex-col items-center content-center justify-center">
      <SectionText>
        <nuxt-content :document="s22" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s23" />
      </SectionText>
    </div>

    <div class="flex items-center justify-center mt-5 mb-5">
      <div
        @mouseover="zoomerSession = true"
        @mouseout="zoomerSession = false"
        class="relative flex flex-col w-10/12 sm:w-6/12"
      >
        <div class="cursor-move" v-if="currentZoomer">
          <zoom-on-hover
            img-normal="/Images/c2/sectionTwo/zoomBoxTwo/zoomOne.jpg"
            img-zoom="/Images/c2/sectionTwo/zoomBoxTwo/zoomOneL.jpg"
            :scale="4.5"
          ></zoom-on-hover>
        </div>

        <div class="cursor-move" v-if="!currentZoomer">
          <zoom-on-hover
            img-normal="/Images/c2/sectionTwo/zoomBoxTwo/zoomTwo.jpg"
            img-zoom="/Images/c2/sectionTwo/zoomBoxTwo/zoomTwoL.jpg"
            :scale="4.5"
          ></zoom-on-hover>
        </div>

        <div
          class="flex justify-center w-10/12 mt-3 ml-8 text-center sm:mt-0 sm:absolute sm:left-0 sm:w-40 sm:-ml-48"
        >
          <p v-if="currentZoomer" class="flex text-base font-nassimBold">
            <span v-if="this.$i18n.locale === 'ar'" class="rtl sm:text-right">
              «بدل ما تدفع إيجار لشقتك، اشتريها وبذات السعر» مقتطفات من مقال في
              مجلة La Revue Du Liban - شباط 1959</span
            >
            <span v-if="this.$i18n.locale === 'en'" class="flex sm:text-center">
              Pages from Le Revue Du Liban magazine (1958-1959)
            </span>
          </p>

          <p class="flex text-base font-nassimBold" v-else>
            <span v-if="this.$i18n.locale === 'ar'" class="rtl sm:text-right">
              «الشعب الذي يعيش، يبني» مقتطفات من مقال في مجلة La Revue Du Liban
              - تشرين الأول ١٩٥٨</span
            >

            <span v-if="this.$i18n.locale === 'en'" class="sm:text-center">
              Pages from Le Revue Du Liban magazine (1958-1959)
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center content-center justify-center">
      <SectionText>
        <nuxt-content :document="s24" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s25" />
      </SectionText>
    </div>

    <div class="flex content-center justify-center">
      <div
        class="relative flex flex-col-reverse items-start justify-center w-10/12 mt-5 mb-5 space-x-3 text-center sm:w-6/12 sm:flex-row"
      >
        <div
          class="w-10/12 mt-3 ml-10 sm:mt-0 sm:absolute sm:left-0 sm:w-32 sm:-ml-32"
        >
          <p
            v-if="this.$i18n.locale === 'ar'"
            class="mt-1 text-base font-bold sm:text-right rtl"
          >
            إعلانات لمشاريع سكنية للمؤسسة اللبنانية للتطوير العقاري SLAF في مجلة
            La Revue Du Liban ، 1961-1957.
          </p>

          <p
            v-if="this.$i18n.locale === 'en'"
            class="mt-1 text-base font-bold sm:text-left"
          >
            Excerpt from a magazine article published in La Revue du Liban
            magazine, 1961-1957
          </p>
        </div>

        <div v-if="this.$i18n.locale === 'ar'">
          <silent-box
            :thumbnailHeight="50"
            :thumbnailWidth="100"
            :gallery="galleryAR"
            class="flex w-full space-x-3 sm:flex sm:flex-row"
          >
          </silent-box>
        </div>

        <div v-if="this.$i18n.locale === 'en'">
          <silent-box
            :thumbnailHeight="50"
            :thumbnailWidth="100"
            :gallery="galleryEN"
            class="flex w-full space-x-3 sm:flex sm:flex-row"
          >
          </silent-box>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center content-center justify-center">
      <SectionText>
        <nuxt-content :document="s26" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s27" />
      </SectionText>

      <sectionImageHero
        class="w-full mt-16"
        :chapterNumber="sectionThreeHero.chapterNumber"
        :chapterTitle="sectionThreeHero.chapterTitle"
        :sectionNumber="sectionThreeHero.sectionNumber"
        :sectionTitle="sectionThreeHero.sectionTitle"
        :divId="sectionThreeHero.divId"
        :imageSource="sectionThreeHero.imageSource"
      />

      <SectionText class="mt-10">
        <nuxt-content :document="s31" />
      </SectionText>
    </div>

    <div class="flex items-center content-center justify-center">
      <div class="relative flex flex-col items-center">
        <div class="flex flex-col w-10/12 sm:w-6/12">
          <Lightbox2Ghandour />
        </div>

        <div
          class="flex flex-col w-10/12 text-center sm:left-0 sm:w-2/12 sm:mt-4 sm:ml-10 sm:absolute"
        >
          <div class="flex flex-col">
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="text-base rtl sm:text-right font-nassimBold"
            >
              تمكن هنا قراءة تحليل خرائط المباني التالية:
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="text-base sm:text-left font-nassimBold"
            >
              Here is a breakdown of the floor plans for the following
              buildings:
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-2 mb-3 mr-4 font-nassimBold rtl sm:text-right"
            >
              مبنى رفيق غندور
            </p>
            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 sm:text-left font-nassimBold"
            >
              Rafic Ghandour Building
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              المنطقة: الروشة
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 mr-4 text-sm sm:text-left"
            >
              Neighborhood: Raouche
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 mr-4 text-sm sm:text-left"
            >
              Architect: Adib Shayer
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              المعمار ّي: أديب شاير
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 mr-4 text-sm sm:text-left"
            >
              Year of construction: 1958
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              سنة البناء: ١٩٥٨
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 mr-4 text-sm sm:text-left"
            >
              Total square meterage of the apartment: 415 sqm
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              مساحة الش ّقة: ٤٢٥ متر مربع
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 mr-4 text-sm sm:text-left"
            >
              Surface area designated for services: 104 sqm
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              مساحة الخدمات: ١٠٤ متر مربع
            </p>

            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-2 mr-4 text-sm sm:text-left"
            >
              “Maid’s room” surface area: 12 sqm
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              «غرفة الخادمة»: ١٢ متر مربع
            </p>

            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              نسبة «غرفة الخادمة»
            </p>
            <p
              v-if="this.$i18n.locale === 'en'"
              class="mt-0 mr-4 text-sm sm:text-left"
            >
              Percentage occupied by “maid’s room” of total surface area: 2.6%
            </p>

            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              من المساحة الإجمالية:
            </p>
            <p
              v-if="this.$i18n.locale === 'ar'"
              class="mt-0 mr-4 text-sm rtl sm:text-right"
            >
              ٢.٦ في المئة
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center content-center justify-center">
      <sectionImageHero
        class="w-full mt-16"
        :chapterNumber="sectionFourHero.chapterNumber"
        :chapterTitle="sectionFourHero.chapterTitle"
        :sectionNumber="sectionFourHero.sectionNumber"
        :sectionTitle="sectionFourHero.sectionTitle"
        :divId="sectionFourHero.divId"
        :imageSource="sectionFourHero.imageSource"
      />

      <SectionText class="mt-10">
        <nuxt-content :document="s41" />
      </SectionText>

      <div
        class="relative flex flex-col-reverse items-center justify-center w-10/12 sm:w-3/6 sm:flex-row"
      >
        <div
          :class="
            this.$i18n.locale === 'en' ? ' ltr text-left ' : ' rtl text-right '
          "
          class="top-0 h-10 mt-5 sm:mt-5 sm:pr-10 sm:-ml-48 sm:left-0 sm:w-48 sm:absolute font-nassimBold"
        >
          <p
            v-if="this.$i18n.locale === 'ar'"
            style="direction: rtl"
            class="text-base font-nassimBold"
          >
            رسم مقطعي لغرفة الخادمة في مبنى الرملة البيضاء (١٩٧٣)
          </p>

          <p
            v-if="this.$i18n.locale === 'en'"
            style="direction: rtl"
            class="text-sm"
          >
            Maid’s room in the Ramlet el Bayda building (1973)
          </p>
          <div>
            <div
              :class="
                this.$i18n.locale === 'en'
                  ? ' ltr text-left  '
                  : ' rtl text-right '
              "
              class="mt-2 font-nassimBold"
            ></div>
          </div>
        </div>
        <Lightbox1 />
      </div>
    </div>

    <div class="flex flex-col items-center content-center justify-center -mt-5">
      <SectionText>
        <nuxt-content :document="s42" />
      </SectionText>
    </div>

    <LightboxBasta />

    <div class="flex flex-col items-center content-center justify-center">
      <SectionText>
        <nuxt-content :document="s43" />
      </SectionText>

      <sectionImageHero
        class="w-full mt-16"
        :chapterNumber="sectionFiveHero.chapterNumber"
        :chapterTitle="sectionFiveHero.chapterTitle"
        :sectionNumber="sectionFiveHero.sectionNumber"
        :sectionTitle="sectionFiveHero.sectionTitle"
        :divId="sectionFiveHero.divId"
        :imageSource="sectionFiveHero.imageSource"
      />

      <SectionText class="mt-10">
        <nuxt-content :document="s51" />
      </SectionText>
    </div>

    <Slidersix class="hidden sm:block" />
    <Slidersixm class="block sm:hidden" />

    <div class="flex flex-col items-center content-center justify-center">
      <SectionText>
        <nuxt-content :document="s52" />
      </SectionText>
    </div>
    <Sliderseven />
    <Slidersevenm class="block sm:hidden" />
    <div class="flex flex-col items-center content-center justify-center">
      <SectionText>
        <nuxt-content :document="s53" />
      </SectionText>

      <sectionImageHero
        class="w-full mt-16"
        :chapterNumber="sectionSixHero.chapterNumber"
        :chapterTitle="sectionSixHero.chapterTitle"
        :sectionNumber="sectionSixHero.sectionNumber"
        :sectionTitle="sectionSixHero.sectionTitle"
        :divId="sectionSixHero.divId"
        :imageSource="sectionSixHero.imageSource"
      />

      <SectionText class="mt-10 mb-16">
        <nuxt-content :document="s61" />
      </SectionText>

      <VideoPlayer
        videoSrc="/videos/chambre.mp4"
        videoSubEN="/videos/chambre_EN.vtt"
        videoSubAR="/videos/chambre_AR.vtt"
      />
    </div>
    <div class="z-50 flex flex-row items-center justify-between">
      <div>
        <nuxt-link
          v-if="chapternav > 17000"
          :class="chapternav ? 'block' : 'hidden'"
          :to="localePath('/chaptertwo#room')"
          style="z-index: 1000"
          class="flex items-center ml-2 stickynav"
        >
          <div
            class="flex items-center content-center justify-center w-20 h-20 mt-2 text-sm text-center text-white bg-black rounded-full font-nassimBold"
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
          :to="{ path: '/chaptertwo', hash: 'room' }"
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
          v-if="chapternav > 2000"
          :class="chapternav ? 'block' : 'hidden'"
          :to="{ path: '/en/chaptertwo', hash: 'room' }"
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
    <div class="z-50 flex flex-row items-center justify-between">
      <div>
        <nuxt-link
          v-if="chapternav > 17000"
          :class="chapternav ? 'block' : 'hidden'"
          :to="localePath('/chaptertwo#room')"
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
          :to="{ path: '/chaptertwo', hash: 'room' }"
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
          v-if="chapternav > 2000"
          :class="chapternav ? 'block' : 'hidden'"
          :to="{ path: '/en/chaptertwo', hash: 'room' }"
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
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  async asyncData(context) {
    const { $content, app } = context
    //Heros
    const sectionOneHero = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/Hero`
    ).fetch()

    const sectionTwoHero = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/Hero`
    ).fetch()

    const sectionThreeHero = await $content(
      `${app.i18n.locale}/chapterTwo/sectionThree/Hero`
    ).fetch()

    const sectionFourHero = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFour/Hero`
    ).fetch()

    const sectionFiveHero = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFive/Hero`
    ).fetch()

    const sectionSixHero = await $content(
      `${app.i18n.locale}/chapterTwo/sectionSix/Hero`
    ).fetch()

    const s1z = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/000`
    ).fetch()
    const s11 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/001`
    ).fetch()
    const s12 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/002`
    ).fetch()
    const s13 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/003`
    ).fetch()
    const s14 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/004`
    ).fetch()
    const s15 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/005`
    ).fetch()
    const s16 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/006`
    ).fetch()
    const s17 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionOne/007`
    ).fetch()

    const s2z = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/000`
    ).fetch()

    const s21 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/001`
    ).fetch()

    const s22 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/002`
    ).fetch()

    const s23 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/003`
    ).fetch()

    const s24 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/003`
    ).fetch()
    const s25 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/003`
    ).fetch()
    const s26 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/004`
    ).fetch()
    const s27 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionTwo/005`
    ).fetch()

    const s31 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionThree/000`
    ).fetch()

    const s41 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFour/000`
    ).fetch()

    const s42 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFour/001`
    ).fetch()

    const s43 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFour/002`
    ).fetch()

    const s51 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFive/000`
    ).fetch()

    const s52 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFive/001`
    ).fetch()

    const s53 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionFive/002`
    ).fetch()

    const s61 = await $content(
      `${app.i18n.locale}/chapterTwo/sectionSix/000`
    ).fetch()

    return {
      sectionOneHero,
      sectionTwoHero,
      sectionThreeHero,
      sectionFourHero,
      sectionFiveHero,
      sectionSixHero,
      s1z,
      s11,
      s12,
      s13,
      s14,
      s15,
      s16,
      s17,

      s2z,
      s21,
      s22,
      s23,
      s24,
      s25,
      s26,
      s27,

      s31,

      s41,
      s42,
      s43,

      s51,
      s52,
      s53,

      s61,
    }
  },

  data() {
    return {
      chapternav: 0,
      currentZoomer: true,
      zoomerSession: false,
      galleryAR: [
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6_SLAFprojects_sepia.jpg',
          description:
            'مقرٌّ لأميرة! حيّ سرسق، شقق للبيع، مواد بنائها فاخرة، صالة الطعام من رخام، التدفئة كهربائية («شوفّاج»)، مرآب، وغرفة للخادمة!».',
          alt: 'Blue starry night photo.',
          thumbnailWidth: '220px',
        },
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6a_SLAFprojects-4_sepia.jpg',
          description:
            'مقرٌّ لأميرة! حيّ سرسق، شقق للبيع، مواد بنائها فاخرة، صالة الطعام من رخام، التدفئة كهربائية («شوفّاج»)، مرآب، وغرفة للخادمة!».',
          alt: 'Landscape photo of mountain with fog.',
          thumbnailWidth: '220px',
        },
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6b_SLAFprojects_adonis_sepia.jpg',
          description:
            '«الشركة اللبنانية للتطوير العقاري - SLAF تعرض عليكم أن تصبحوا ملّاكين لبيتٍ في بنايةٍ في بيروت، عبر دفعات طويلة الأمد وبشروط منطقية.»',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '220px',
        },
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6c_SLAFprojects-1_sepia.jpg',
          description: '«عشر دقائق من المدينة، أراضي وفيلات بالتقسيط»',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '220px',
        },
      ],
      galleryEN: [
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6_SLAFprojects_sepia.jpg',
          description:
            'Instead of paying rent for your apartment, purchase it for the same cost.',
          alt: 'Blue starry night photo.',
          thumbnailWidth: '220px',
        },
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6a_SLAFprojects-4_sepia.jpg',
          description:
            'Excerpt from a magazine article published in La Revue du Liban magazine, February 1959',
          alt: 'Landscape photo of mountain with fog.',
          thumbnailWidth: '220px',
        },
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6b_SLAFprojects_adonis_sepia.jpg',
          description:
            "Advertisements for residential projects by the Société Libanaise d'Amélioration Foncière (Lebanese Company for Real Estate Development – SLAF) appearing in La Revue du Liban magazine, 1957-1961",
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '220px',
        },
        {
          src: '/Images/c2/sectionTwo/lightBoxTwo/6c_SLAFprojects-1_sepia.jpg',
          description:
            'A place for a princess! Sursock neighborhood, apartments for sale, luxury building materials, marble dining room, electric heating (chauffage), garage, and maid’s room!',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '220px',
        },
      ],
    }
  },
  methods: {
    ...mapMutations([
      'chapterTwoSC', //also supports payload `this.nameOfMutation(amount)`
    ]),
    handleScroll() {
      this.chapternav = window.scrollY
    },
  },
  mounted() {
    setInterval(() => {
      if (!this.zoomerSession) {
        this.currentZoomer = !this.currentZoomer
      }
    }, 5000)
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
}
</script>

<style>
.lightboxcontainer {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.lightboxgallery {
  display: flex;
}

.lightboxgallery {
  cursor: pointer;
}

.stickynav {
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 0;
  opacity: 100;
  z-index: 2;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.stickyscroll {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 0;
  opacity: 100;
  z-index: 2;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
</style>
