<template>
  <main @mouseover="chapterThreeSC">
    <div>
      <div class="flex flex-col items-center content-center justify-center">
        <ChapterImageHero
          class="w-full"
          :chapterNumber="sectionOneHero.chapterNumber"
          :chapterTitle="sectionOneHero.chapterTitle"
                :chapterFirstParagraph="sectionOneHero.chapterFirstParagraph"
          :chapterSecondParagraph="sectionOneHero.chapterSecondParagraph"
        />

      <AudioPlyr2 v-if="this.$i18n.locale === 'ar'" />


      <IframeContainer/>
        <!-- <div class="iframe-container">

          <iframe
          src="/Images/c1/sectionOne/image5.html"
          width="100%"
         onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
         scrolling="no"
          align="center"
          style="overflow:hidden; border:none;"
        ></iframe> 

        </div> -->


   <ChapterImageHero
          class="w-full"
       
          :sectionNumber="sectionOneHero.sectionNumber"
          :sectionTitle="sectionOneHero.sectionTitle"
          :divId="sectionOneHero.divId"
   
        />

        
        <IntroSection
          :roleOne="s1.roleOne"
          :roleOneName="s1.roleOneName"
          :roleTwo="s1.roleTwo"
          :roleTwoName="s1.roleTwoName"
          :roleThree="s1.roleThree"
          :roleThreeName="s1.roleThreeName"
        >
          <Slidersix class="hidden sm:block" />
          <Slidersixm class="block sm:hidden" />

          <nuxt-content :document="s1" />
        </IntroSection>

        <!-- VIDEO -->

        <!-- <VideoPlayer videoSrc="/Images/c1/sectionOne/video.mp4" /> -->
        <!--
        <div
          v-observe-visibility="visibilityChanged"
          class="relative z-40 flex items-center content-center justify-center"
        >
          <video
            preload="metadata"
            class="w-screen bluur"
            ref="interview"
            autoplay="autoplay"
            loop
            muted
          >
            <source src="/Images/c1/sectionOne/video.mp4" type="video/mp4" />
          </video>
        </div>
-->

      
      
        <!-- END OF VIDEO -->

        <SectionText class="mt-10">
          <nuxt-content :document="s11" />
        </SectionText><br />
       <SectionText class="flex flex-row"> 
        
          <p><img src="/Images/c1/sectionOne/LinaMonzer_art1.jpg" alt="Pineapple" style="width:100%;height:auto; float:left; margin-left:-50%;">
ثم عدنا إلى بيروت، حيث أصبح لدينا منزل أكبر بكثير، وأنجبت طفلاً ثانياً فلم أعد قادرةً على تدبّر شؤون المنزل بمفردي. ما من أحدٍ كنت أعرفه إلّا وكان لديه خادمة، وقد نصحتني إحدى صديقاتي بالذهاب إلى مكتب استقدام الخادمات الذي تعامَلَت معه. بالطبع هناك شيء من الحظ في هذا الأمر. قد تتعاملين مع مكتب ممتاز يختار الفتيات بعناية، وقد تمضين ساعات في تصفّح الكاتالوغ لكي تختاري الفتاة المناسبة، لكن الفتيات يكذبن أحياناً. ليس جميعهن، لكن بعضهن. يَقُلْن، مثلاً، أنّهن يتكلّمن عدّة لغات في حين بالكاد يعرفن كلمة واحدة من الإنجليزية أو العربية، أو يقلن أنّ لديهن خبرة طويلة في العمل المنزلي في حين لا يعلمن أي جهة من الإسفنجة ينبغي استخدامها. وفي بعض الأحيان يُعانينَ من مشاكل عقليّة. كانت الفتاة الأولى التي استقدمناها تبدو ظريفة جدّاً على صورتها، وقد تهيّأ لنا عند وصولها إلى المنزل أنها مهذّبة وهادئة للغاية. لكّنها كانت تُحدّق إليّ كالبلهاء في كلّ مرّة أقول لها شيئاً، وكانت تمضي الليل كلّه في البكاء، كلا، أقصد في النواح والصراخ وهي في غرفتها. مع أنّ الغرفة كانت مريحة جدّاً، لقد بنيناها على شرفة المطبخ لكي تستطيع الحصول على بعض من الخصوصيّة، وحرصنا أن يكون لها نافذة جيّدة. وضعنا لها تلفزيون صغير وجهاز "دي في دي"، أشياء لم تكن تحلم بالحصول عليها في بلدها. لكن بعضهن يُعانين من مشاكل في العقل. شعرتُ أنّ ابقاءها سيكون نوعاً من القسوة، تجاهها وتجاهنا؛ لم أكن أستطيع الوثوق بشخص مثلها للاهتمام بأولادي. استبدلْتُها بفتاة أخرى، فحصلنا على مونيكا: كانت فعلاً أفضل خادمة يمكن أن يُحظى بها.</p>
                <!-- <img src="/Images/c1/sectionOne/LinaMonzer_art1.jpg" width="950" align="left" /> -->
                <!-- <div class="flex flex-col">
                  <img class="flex" src="/Images/c1/sectionOne/LinaMonzer_art1.jpg" align="left" />
                </div> -->
       <!--  <SectionText class="mt-5 flex flex-col"> -->
                <!-- <div class="flex">
                  <nuxt-content :document="s12" />
                </div> -->
          <!--  <nuxt-content :document="s12" /> -->
       <!--  </SectionText> -->

        </SectionText>

        <SectionText class="mt-5">
          <nuxt-content :document="s13" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s14" />
        </SectionText>
<br />
                        <!-- <img src="/Images/c1/sectionOne/LinaMonzer_art2.jpg" width="950" />

        <SectionText class="mt-5 mb-5">
          <nuxt-content :document="s15" />
        </SectionText> -->
        <SectionText class="mt-10">
        <p><img src="/Images/c1/sectionOne/LinaMonzer_art2.jpg" alt="Pineapple" style="width:100%;height:auto; float:right; margin-right:-50%; padding:20px;">
        افتقدوها كثيراً بعدما غادرت، افتقدناها جميعنا. انتهت مدّة عقدها بعد أربع سنوات وقرّرت عدم تجديده وعادت إلى بلدها. حسناً، وائل لم يفتقدها. كان يكره عيشَ شخص غريب معنا في المنزل، ولا يزال يكره ذلك. ولطالما جعلها تشعر بذلك أيضاً. عندما لا يكون في المنزل، كانت تجلس إلى الطاولة لتناول الطعام معنا، أنا والأولاد؛ لكن ما أن يعود وائل حتّى تختفي: تختبئ في غرفتها ولا تغادرها بتاتاً. أعتقد أنّني محظوظة، فبعض النساء يخشين أن يخونهن أزواجهن مع الخادمة، أو أن يشتهوها فحسب. لكن في ما يخصّ وائل، لم تكن هذه مشكلة على الإطلاق. لا بل كان عليّ تنبيهه إلى معاملتها بمزيد من اللطف. فهو جلفٌ بعض الشيء، يستهويه الصراخُ، وقد يبالغ أحياناً في دراماتيكيّته فيكسر بعض الأغراض. لكنّ ذلك كلّه مجرّد تباهٍ ومُفاخرة، فهو يحب أن يلعب دور الرجل القوي. أمّا في أعماقه، فهو في غاية الرّقة. عليكِ فهمُ نفسيّته لتعرفي كيف تتعاملين معه، لكني أعتقد أن الخادمات كن يخشينه دوماً. وفي الوقت نفسه، أعتقد أن سلوكه ساعدني كثيراً، وذلك لأنه رسم حدوداً لمدى إمكان الخادمات الاقتراب من الأسرة. لقد أوضَح لهن الأمر تماماً: هذه هي دائرة الأسرة، وسوف تبقَيْن دائماً خارجها. لذلك لم أضطر أبداً إلى لعب دور الشرير. من الصعب جدّاً لعب هذا الدور كما تعلمين، فهو يُشكِّل مصدر قلق كبير. من الصعب رسم حدود واضحة. فمن ناحية، هناك هذه المرأة تعيش في منزلكِ، وقد مُنِحَت سلطةً على ما يُفتَرض أنّه مملكتُك. هي أصبحت، عمليّاً، ربّة المنزل. وباتت تعرف كلّ تفاصيل حياتك الحميمة؛ تسمع مشاجراتك مع زوجك، حتّى أنها تعلم متى تمارسان الجنس. تُبدِّل الملاءات، تطوي ملابسك الداخلية. تعرفُ أشياءً عن أولادك تجهلينها أنتِ. لكن عليها في الوقت ذاته أن تبقى خارج الأسرة وإلّا تصبح هي المتحكِّمة بالمنزل على نحوٍ تام، فلا يعود لكِ حينها أي مكان. هناك دائماً شعور بالمنافسة. لست أتكلّم عن المنافسة على الرجال، وإنّما عن منافسة حقيقيّة بين نساء، منافسة حول مَن سيُدير المنزل. مَن يُثنى على طبخه؟ مَن يُطيعه الأولاد، وإلى مَن يلتجئون بحثاً عن المواساة؟ ببساطة، عليها لعب دور ربّة المنزل لكي يُنسَب لكِ الفضلُ كلّه في ذلك. وهو بالطبع أمرٌ مزعج لها على مستوى ما. كما أنّني أنزعج من اضطراري إلى الاتّكال عليها في كلّ ذلك. لا تعتقدي أنّني لا أرى السخرية في ذلك! سبق وقلت لكِ إنّني ذكيّة جداً في ما يخصّ هذه الأمور. في ما يخصّ العلاقات بين البشر. لم أكن لأصل إلى ما أنا عليه في الحياة لو لم أكن كذلك.</p>
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s16" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s17" />
        </SectionText>


        <SectionText class="mt-5">
          <nuxt-content :document="s18" />
        </SectionText>

        <sectionImageHero
          class="w-full mt-12"
         
          
          :sectionNumber="sectionTwoHero.sectionNumber"
          :sectionTitle="sectionTwoHero.sectionTitle"
          :sectionSubTitle="sectionTwoHero.sectionSubTitle"
          :divId="sectionTwoHero.divId"
          :imageSource="sectionTwoHero.imageSource"
        />


      <IntroSection
          :roleOne="s21.roleOne"
          :roleOneName="s21.roleOneName"
          :roleTwo="s21.roleTwo"
          :roleTwoName="s21.roleTwoName"
          :roleThree="s21.roleThree"
          :roleThreeName="s21.roleThreeName"
        >
     
        </IntroSection>




        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s19" />
        </SectionText>

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s21" />
        </SectionText>

  

        <!--
        <video class="w-full" autoplay="autoplay" loop>
          <source src="/Images/c1/sectionOne/video.mp4.houssam" type="video/mp4" />
        </video> -->

        <!-- <iframe
          v-if="loaded"
          src="/Images/c1/sectionOne/video.html"
          class="w-full h-auto mt-3"
          :height="iframe.style.height"
          :width="iframe.style.width"
          frameborder="0"
        ></iframe> -->

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s22" />
        </SectionText>

          <!-- <iframe
          src="/Images/c1/sectionFour/passages.html"
          width="100%"
          height="2200"

        ></iframe> -->
        <Passages />

        <sectionImageHero
          class="w-full"
          
          :sectionNumber="sectionThreeHero.sectionNumber"
          :sectionTitle="sectionThreeHero.sectionTitle"
          :sectionSubTitle="sectionThreeHero.sectionSubTitle"
          :divId="sectionThreeHero.divId"
          :imageSource="sectionThreeHero.imageSource"
        />

      <IntroSection
          :roleOne="s23.roleOne"
          :roleOneName="s23.roleOneName"
          :roleTwo="s23.roleTwo"
          :roleTwoName="s23.roleTwoName"
          :roleThree="s23.roleThree"
          :roleThreeName="s23.roleThreeName"
        >
     
        </IntroSection>



        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s23" />
        </SectionText>
        <img src="/Images/c1/sectionThree/hanger_.jpg" width="950"  />


        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s24" />
        </SectionText>
        <img src="/Images/c1/sectionThree/ashtray_.jpg" width="950"  />

     <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s241" />
        </SectionText>


        <sectionImageHero
          class="w-full mt-12"
    
          :sectionNumber="sectionFourHero.sectionNumber"
          :sectionTitle="sectionFourHero.sectionTitle"
          :sectionSubTitle="sectionFourHero.sectionSubTitle"
          :divId="sectionFourHero.divId"
          :imageSource="sectionFourHero.imageSource"
        />



      <IntroSection
          :roleOne="s25.roleOne"
          :roleOneName="s25.roleOneName"
          :roleTwo="s25.roleTwo"
          :roleTwoName="s25.roleTwoName"
          :roleThree="s25.roleThree"
          :roleThreeName="s25.roleThreeName"
        >
     
        </IntroSection>



        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s25" />
        </SectionText>
                <img src="/Images/c1/sectionOne/maya-1.jpeg" class="w-full h-auto mt-3" />

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s26" />
        </SectionText>

                <img src="/Images/c1/sectionOne/maya-2.jpeg" class="w-full h-auto mt-3" />

        <sectionImageHero
          class="w-full mt-12"
       
          :sectionNumber="sectionFiveHero.sectionNumber"
          :sectionTitle="sectionFiveHero.sectionTitle"
          :sectionSubTitle="sectionFiveHero.sectionSubTitle"
          :divId="sectionFiveHero.divId"
          :imageSource="sectionFiveHero.imageSource"
        />

           <IntroSection
          :roleOne="s27.roleOne"
          :roleOneName="s27.roleOneName"
          :roleTwo="s27.roleTwo"
          :roleTwoName="s27.roleTwoName"
          :roleThree="s27.roleThree"
          :roleThreeName="s27.roleThreeName"
        >
     
        </IntroSection>

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s27" />
        </SectionText>
<div align="center">
                <img src="/Images/c1/sectionFive/YaraNakhle1_.jpg" />
</div>

  

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s28" />
        </SectionText>
      </div> 
      <div align="center">

        <img src="/Images/c1/sectionFive/YaraNakhle2_.jpg" />
</div>
            <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s29" />
        </SectionText>
      </div>
      <div align="center">

        <img src="/Images/c1/sectionFive/YaraNakhle3_.jpg" />
</div>
            <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s30" />
        </SectionText>


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
              class="
                flex
                items-center
                content-center
                justify-center
                w-20
                h-20
                mt-2
                text-sm text-center
                rounded-full
                font-nassimBold
              "
            >
              <span v-if="this.$i18n.locale === 'ar'">اذهب للفصل التالي</span>
              <span v-if="this.$i18n.locale === 'en'">
                Go to next chapter
              </span>
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
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import IframeContainer from '../../static/Images/c1/sectionOne/IframeContainer1.vue'
import Passages from '../../static/Images/c1/sectionFour/Passages.vue'
export default {

  components : {
          IframeContainer,
          Passages
        },
  async asyncData(context) {
    const { $content, app } = context
    const sectionOneHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/hero`
    ).fetch()

    const sectionTwoHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/hero`
    ).fetch()

    const sectionThreeHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/hero`
    ).fetch()

    const sectionFourHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/hero`
    ).fetch()

    const sectionFiveHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/hero`
    ).fetch()

    const s1 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/001`
    ).fetch()

    const s11 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/002`
    ).fetch()

    const s12 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/003`
    ).fetch()
    // console.log(s12);

    const s13 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/004`
    ).fetch()

    const s14 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/005`
    ).fetch()

    const s15 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/006`
    ).fetch()

    const s16 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/007`
    ).fetch()

    const s17 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/008`
    ).fetch()

    const s18 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/009`
    ).fetch()

    const s19 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/010`
    ).fetch()

    const s21 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/001`
    ).fetch()
    const s22 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/002`
    ).fetch()

    const s23 = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/001`
    ).fetch()

    const s24 = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/002`
    ).fetch()


    const s241 = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/003`
    ).fetch()

    const s25 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/001`
    ).fetch()

    const s26 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/002`
    ).fetch()

    const s27 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/001`
    ).fetch()

    const s28 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/002`
    ).fetch()

        const s29 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/003`
    ).fetch()

        const s30 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/004`
    ).fetch()

    return {
      sectionOneHero,
      sectionTwoHero,
      sectionThreeHero,
      sectionFourHero,
      sectionFiveHero,
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
      s21,
      s22,
      s23,
      s24,
      s241,
      s25,
      s26,
      s27,
      s28,
      s29,
      s30
    }
  },

  data() {
    return {
      chapternav: 0,

      currentZoomer: true,
      zoomerSession: false,
    }
  },

  methods: {
    ...mapMutations([
      'chapterThreeSC', //also supports payload `this.nameOfMutation(amount)`
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


<style>
  .iframe-container {
		text-align:center;
  		width:100%;

      
  }
</style>

