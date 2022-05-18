<template>
  <div @mouseover="chapterOneSC">
    <div class="flex flex-col items-center content-center justify-center">
      <ChapterImageHero
        class="w-full"
        :chapterNumber="sectionOneHero.chapterNumber"
        :chapterTitle="sectionOneHero.chapterTitle"
        :sectionNumber="sectionOneHero.sectionNumber"
        :sectionTitle="sectionOneHero.sectionTitle"
        :divId="sectionOneHero.divId"
        :imageSource="sectionOneHero.imageSource"
        :cornerCaption="sectionOneHero.cornerCaption"
        :chapterFirstParagraph="sectionOneHero.chapterFirstParagraph"
        :chapterSecondParagraph="sectionOneHero.chapterSecondParagraph"
      />
      <IntroSection
        :roleOne="s1z.roleOne"
        :roleOneName="s1z.roleOneName"
        :roleOneNameTwo="s1z.roleOneNameTwo"
        :roleTwo="s1z.roleTwo"
        :roleTwoName="s1z.roleTwoName"
        :roleThree="s1z.roleThree"
        :roleThreeName="s1z.roleThreeName"
      >
        <nuxt-content :document="s1z" />
      </IntroSection>

      <SectionText class="mt-10">
        <nuxt-content :document="s11" />
      </SectionText>

      <img
        class="w-full h-auto mt-3"
        src="/Images/c1/sectionOne/salma1.jpg"
        alt=""
        srcset=""
      />
      <SectionText class="mt-3"> <nuxt-content :document="s12" /> </SectionText>
      <SectionText> <nuxt-content :document="s13" /> </SectionText>
      <SectionText> <nuxt-content :document="s14" /> </SectionText>
      <!-- <ImageWcaption
        :imageCaption="S1AssetOne.imageCaption"
        :imageSource="S1AssetOne.imageSource"
      /> -->
      <SectionText> <nuxt-content :document="s15" /> </SectionText>
      <SectionText> <nuxt-content :document="s16" /> </SectionText>
      <SectionText> <nuxt-content :document="s17" /> </SectionText>
      <SectionText> <nuxt-content :document="s18" /> </SectionText>
      <SectionText> <nuxt-content :document="s19" /> </SectionText>
      <SectionText> <nuxt-content :document="s110" /> </SectionText>
      <SectionText> <nuxt-content :document="s111" /> </SectionText>
      <SectionText> <nuxt-content :document="s112" /> </SectionText>
      <SectionText> <nuxt-content :document="s113" /> </SectionText>
      <img
        class="w-full h-auto mt-3 mb-3"
        src="/Images/c1/sectionOne/salma2.jpg"
        alt=""
        srcset=""
      />
      <SectionText class="mt-5">
        <nuxt-content :document="s114" />
      </SectionText>

      <!-- <ImageWcaption
        :imageCaption="S1AssetTwo.imageCaption"
        :imageSource="S1AssetTwo.imageSource"
      /> -->

      <SectionText>
        <nuxt-content :document="s115" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s116" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s117" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s118" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s119" />
      </SectionText>

      <img
        class="w-full h-auto"
        src="/Images/c1/sectionOne/salma3.jpg"
        alt=""
        srcset=""
      />

      <SectionText class="mt-5">
        <nuxt-content :document="s120" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s121" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s122" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s123" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s124" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s125" />
      </SectionText>

      <LazySectionVideoHero
        class="w-full mt-12"
        :sectionSubTitle="sectionTwoHero.sectionSubTitle"
        :sectionNumber="sectionTwoHero.sectionNumber"
        :sectionTitle="sectionTwoHero.sectionTitle"
        :divId="sectionTwoHero.divId"
        :videoSource="sectionTwoHero.videoSource"
      />
      <IntroSection
        :roleOne="s2z.roleOne"
        :roleOneName="s2z.roleOneName"
        :roleTwo="s2z.roleTwo"
        :roleTwoName="s2z.roleTwoName"
      >
        <nuxt-content :document="s2z" />
      </IntroSection>

      <SectionText class="mt-10" :title="s21.title">
        <nuxt-content :document="s21" />
      </SectionText>

      <SectionText :title="s22.title">
        <nuxt-content :document="s22" />
      </SectionText>

      <SectionText :title="s23.title">
        <nuxt-content :document="s23" />
      </SectionText>

      <ImageWcaption :imageSource="S2AssetOne.imageSource">
        <span class="text-base"> {{ $t('respecttoDWOne') }}</span> <br />
        <br />
        <span class="mt-5 text-base font-nassimRegular">{{
          $t('respecttoDWTwo')
        }}</span>
      </ImageWcaption>

      <SectionText :title="s24.title">
        <div class="flex flex-row items-start text-base align-top sm:text-2xl">
          <div v-if="this.$i18n.locale === 'ar'" class="">
            <span
              >فجأة، اتخذت رواية زين طابعًا كاريكاتوريًّا ينطوي على سخرية ممّا
              كان عليه حين تعيين قريبه عبدالله الأمين، الذي يسميه تارة ابن عمنا
              وطورًا خالنا، وزيرَ دولة ثم وزيرًا للعمل في حكومة رفيق الحريري عام
              ١٩٩٤. كان زين وبعض إخوته ووالدُه لا يزالون يعملون في ورشة
              السيارات،
            </span>
            <WomenSliderOne class="float-left my-2 mr-4" />
            <span>
              وكانت أحوالهم المادية قد تحسنت بعد سنوات عشر على افتتاحها، فتزوج
              منهم من تزوج، وتمكنوا من استئجار شقق سكنية في أحياء ضاحية بيروت
              الجنوبية،
            </span>
            <span>
              واقتنوا سيارات مستعملة، على الرغم من الحرب وجولاتها المتمادية طوال
              ثمانينيات القرن العشرين، وخسارة العائلة شابًّا من أبنائها «شهيدا»
              في الجنوب. كان زين وإخوته يستجيبون لرجاء بعض زبائن ورشتهم الطلب من
              قريبهم الوزير توقيع مستندات ومعاملات، فكانوا يحملونها إلى بيت
              الوزير فيوقِّعها مرحِّبًا، من دون أن يعلموا كنهها أو يتساءلوا عن
              موضوعها. حتى الوزير لم يكن يشرح لهم شيئًا عن هذه المستندات
              «الغامضة» بالنسبة إليهم، على رغم حملها إلى "الخال" مرات كثيرة،
            </span>
            <WomenSliderTwo class="float-right my-2 ml-4" />
            <span>
              إلى بيته حينًا، وإلى مكتبه في الوزارة حينًا، وإلى بيته في شقرا في
              عطل نهايات الأسابيع أحيانًا، ثم إعادتها إلى زبائن ورشتهم بعد
              توقيعها. لم يكن لراوي هذه الوقائع الكاريكاتورية الساذجة أن يقصَّها
              على هذا النحو لولا يقينُه بداهةً بذلك التواطؤ القرابي وشيوعه،
              ونصْبُه مثالًا على النجاح المهني، وكأنما مسالكه ومساراته وتعاملاته
              تشكل على نطاق واسع «ميثاقًا رماديًّا» في إدارة المهن والأعمال.
            </span>
            <span>
              أخيرًا، اكتشف زين وإخوته أن المستندات والمعاملات التي يوقعها
              "خالهم" ما هي إلا موافقات مسبقة تطلبها وزارة العمل من الراغبين في
              استقدام خادمات وتشغيلهن في بيوتهم، ولم يكن أحد منهم قد أبصر قبل
              هذا -وفق زين- خادمةً قط، سواء في بيت أو شارع، من التابعية
              اللبنانية كنَّ أو السورية أو التابعيات الأخرى الشرق آسيوية. وعلى
              رغم أنهم لم يتنبّهوا إلى وجود إحدى تلك الخادمات في بيت قريبهم
              الوزير،
            </span>
            <WomenSliderThree class="float-left my-2 mr-4" />
            <span>
              إلا أنهم مذاك "الاكتشاف" في مطلع النصف الثاني من التسعينيات، بدأت
              تلفت انتباهَهم فتياتٌ ونساء غريبات وسمر البشرة يعبرْن شوارع الحي
              أمام ورشتهم، وعلموا بعد الاستعلام عنهن أنهن سيريلانكيات يعملن
              خادمات في البيوت، فخطر في بالهم أنهن قد يكنَّ من اللواتي وقّع
              الوزير قريبهم معاملات استقدامهن وتشغيلهن.
            </span>

            <WomenSliderFour class="float-right my-2 ml-4" />
            <span>
              مع ابن عم لهم انضم للعمل معهم في الورشة، استمر الإخوة في استطلاع
              وجوه السيريلانكيات العابرات والتفكير في دورهم وسطاءَ بين زبائن
              ورشتهم ووزير العمل قريبهم، فقرروا زيارته لمشاورته في أمر ذلك
              الدور. اصطحب زين وابن عمه والديهما إلى منزل الوزير، الذي شرح لهم
            </span>
            <WomenSliderFive class="float-left my-2 mr-4" />
            <span>
              مسالك استقدام الخادمات السيريلانكيات ومعاملاته في وزارة العمل،
              فاقترحوا عليه أن ينشئوا مكتبًا لتخليص مثل هذه المعاملات، طالبين
              مساعدته في الحصول على ترخيص المكتب من الوزارة، فرحب الوزير قائلًا
              لوالدي الشابين: طبعًا، من الضروري أن يشتغل الشباب ويطوروا عملهم في
              هذا المجال، وأنا جاهز لمساعدة شبان العائلة في ذلك.
            </span>
          </div>

          <div v-if="this.$i18n.locale === 'en'" class="">
            <span>
              Zain, the narrator of this tale, probably wouldn’t have been able
              to tell it with such satirical levity were he not convinced of the
              inevitability of such clientelist complicity, how widespread it is
              in general and how necessary such relationships are for any
              professional success.</span
            >
            <WomenSliderOne class="float-left my-2 mr-4" />
            <span>
              As though the procedures and transactions governing that sort of
              cronyism were all part of some “unspoken pact” that basically
              administers all work and trade. It was only a matter of time
              before Zain and his brothers discovered the true nature of the
              documents they were bringing to their relative the minister to
              sign: pre-approved agreements required by the Ministry of Labor
              for anyone who wished to bring a foreign domestic worker in from
              abroad and employ them at home.</span
            >
            <span>
              Before this discovery, not a single one of the brothers—according
              to Zain—had ever even laid eyes on a domestic worker, either in
              anyone’s home or out in the streets, whether Lebanese, or Syrian,
              or from any other East Asian country. Maybe they hadn’t noticed
              the one at their relative the minister’s house.
            </span>
            <WomenSliderTwo class="float-right my-2 ml-4" />
            <span>
              But from that point onwards, that is, from the mid-1990s on, they
              began noticing all the unfamiliar brown-skinned girls and women
              they encountered, sometimes passing through the streets of the
              neighborhood in front of their body shop. After asking around,
              they discovered that these women hailed from Sri Lanka, and were
              working as housemaids in Beirut, and that their arrival in the
              city must have been preceded by a signature on one of the
              documents they’d passed to their uncle the minister, whose
              approval had helped facilitate this woman’s arrival to the country
              so that she might be put to work cleaning the home of one of their
              auto body shop clients.</span
            >
            <WomenSliderThree class="float-left my-2 mr-4" />

            <span>
              The brothers, along with one of their cousins who also worked at
              the auto body shop, began paying close attention to this new
              phenomenon. They began observing the faces of all the Sri Lankan
              women they saw in the streets, and becoming more aware of their
              own intermediary role in the process. Finally, they decided to pay
              an official visit to their relative, the minister of Labor, in
              order to openly discuss that role.
            </span>
            <WomenSliderFour class="float-right my-2 ml-4" />

            <span>
              And so, Zain, his cousin, and both their fathers all went together
              to sit down with the minister at his home, and he explained to
              them all the paperwork and procedures required by the Ministry of
              Labor to bring Sri Lankan domestic workers into the country. Zain
              and his family then suggested that they open up an office in order
              to handle all these transactions—taking up the role of middlemen
              that they’d already been playing, only now in an official, and
              paid, capacity.
            </span>
            <WomenSliderFive class="float-left my-2 mr-4" />

            <span
              >They hoped furthermore that their relative could help them obtain
              the permit for such an office from the ministry. The minister
              welcomed the idea, telling the two fathers, of course. Saying it
              was important for the young people to find work and evolve it in
              this domain. I’m ready to help the young men of our family do just
              that, he said.</span
            >
          </div>
        </div>
      </SectionText>

      <div class="relative flex flex-col text-right sm:flex-row">
        <div>
          <SectionText :title="s25.title">
            <nuxt-content :document="s25" />
          </SectionText>

          <SectionText>
            <nuxt-content :document="s26" />
          </SectionText>

          <SectionText :title="s27.title">
            <nuxt-content :document="s27" />
          </SectionText>

          <SectionText :title="s28.title">
            <nuxt-content :document="s28" />
          </SectionText>

          <SectionText :title="s29.title">
            <nuxt-content :document="s29" />
          </SectionText>
        </div>
        <div
          v-if="this.$i18n.locale === 'ar'"
          class="absolute top-0 right-0 hidden w-3/12 mt-6 text-base font-nassimBold md:block"
        >
          <a target="_blank" href="/files/file2.pdf">
            <p
              class="flex flex-row mt-12 mb-10 text-black md:ml-8 lg:ml-12 xl:ml-20 md:mr-8 lg:mr-12 xl:mr-20 hover:text-gray-600"
            >
              <span>
                أرشيف: قرار ١/١ تاريخ ٣ كانون الثاني ٢٠١١ الصادر عن وزير العمل
                بطرس حرب، يتعلّق بتنظيم مكاتب إستقدام اليد العاملة الأجنبية إناث
                من الفئة الرابعة.
              </span>

              <span class="float-right ml-2">
                <i class="far fa-file"></i>
              </span>
            </p>
          </a>

          <a target="_blank" href="/files/file.pdf">
            <p
              class="flex flex-row mt-12 mb-10 text-black md:ml-8 lg:ml-12 xl:ml-20 md:mr-8 lg:mr-12 xl:mr-20 hover:text-gray-600"
            >
              <span>
                مذكرة رقم ٢٣/١ تاريخ ٢٠١٠، الصادرة عن وزير العمل بطرس حرب، تتعلق
                بتنظيم عمل مكاتب استقدام العاملات في الخدمة المنزلية، وقد حددت
                عدد الموافقات المسبقة في السنة لكل مكتب بـ ١٥٠ «هدف الموافقة
                المسبقة هو الاستغناء عن إيداع مبلغ مليون وخمسمئة ألف ل.ل. لدى
                بنك الاسكان من قبل صاحب العمل الذي يستقدم العاملة، وبالتالي يمكن
                للمكاتب أن تستقدم عاملات ما فوق المايتين عاملة سنوياً (وفق
                القرار ١/١) دون أن تتمكن الجهات الرسمية من إحصاء تلك العاملات.
              </span>
              <span class="float-right ml-2">
                <i class="far fa-file"></i>
              </span>
            </p>
          </a>

          <a target="_blank" href="/files/file4.pdf">
            <p
              class="flex flex-row mt-12 mb-10 text-black md:ml-8 lg:ml-12 xl:ml-20 md:mr-8 lg:mr-12 xl:mr-20 hover:text-gray-600"
            >
              <span>
                دراسة حول مكاتب استقدام عاملات المنازل الأجنبيات في لبنان
                للمحامية آلين ميشال الخوري لصالح جمعية «مجموعة الأبحاث والتدريب
                للعمل التنموي»، ٢٠ آذار ٢٠١٢
              </span>

              <span class="float-right ml-2">
                <i class="far fa-file"></i>
              </span>
            </p>
          </a>

          <a target="_blank" href="/files/file3.pdf">
            <p
              class="flex flex-row mt-12 mb-10 text-black md:ml-8 lg:ml-12 xl:ml-20 md:mr-8 lg:mr-12 xl:mr-20 hover:text-gray-600"
            >
              <span>
                قرار رقم ١٦٨ تاريخ ٢٧ تشرين الثاني ٢٠١٥ الصادر عن وزير العمل
                سجعان قزي، تنظيم عمل مكاتب استقدام العاملات في الخدمة المنزلية -
                والذي ألغى في المادة الأولى قرار ١/١.
              </span>

              <span class="float-right ml-2">
                <i class="far fa-file"></i>
              </span>
            </p>
          </a>
        </div>
      </div>

      <SectionText>
        <nuxt-content :document="s210" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s211" />
      </SectionText>

      <SectionText :title="s212.title">
        <nuxt-content :document="s212" />
      </SectionText>

      <ImageWcaptionZain
        class="mt-4"
        :imageCaption="S2AssetTwo.imageCaption"
        :imageSource="S2AssetTwo.imageSource"
      />

      <SectionText>
        <nuxt-content :document="s213" />
      </SectionText>

      <LazyZainInterviews v-if="this.$i18n.locale === 'ar'" />
      <LazyZainInterviewsEN v-if="this.$i18n.locale === 'en'" />

      <SectionText>
        <nuxt-content :document="s214" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s215" />
      </SectionText>

      <SectionText :title="s216.title">
        <nuxt-content :document="s216" />
      </SectionText>

      <ImageWcaptionZain
        :imageCaption="S2AssetThree.imageCaption"
        :imageSource="S2AssetThree.imageSource"
      >
        <p
          class="flex flex-col text-sm font-nassimRegular sm:text-base sm:w-40"
        >
          <a
            class="flex flex-row items-start mt-3"
            target="_blank"
            href="/Lebanon_KafalaMap.jpg"
          >
            <span :class="this.$i18n.locale === 'en' ? '  mr-2 ' : ' ml-2 '">
              <i class="far fa-file"></i>
            </span>

            <p class="items-center mb-10">
              {{ $t('DWmap') }}
            </p>
          </a>
        </p>
      </ImageWcaptionZain>

      <SectionText>
        <nuxt-content :document="s217" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s218" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s219" />
      </SectionText>

      <SectionText :title="s220.title">
        <nuxt-content :document="s220" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s221" />
      </SectionText>

      <LazyVideoPlayerBlur />

      <SectionText class="mt-5">
        <nuxt-content :document="s222" />
      </SectionText>

      <SectionText :title="s223.title">
        <nuxt-content :document="s223" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s224" />
      </SectionText>

      <SectionText>
        <nuxt-content :document="s225" />
      </SectionText>

      <sectionImageHeroLawyer
        class="w-full mt-12"
        :sectionNumber="sectionThreeHero.sectionNumber"
        :sectionTitle="sectionThreeHero.sectionTitle"
        :sectionSubTitle="sectionThreeHero.sectionSubTitle"
        :divId="sectionThreeHero.divId"
        :imageSource="sectionThreeHero.imageSource"
      />
      <IntroSection
        class="mt-10 mb-10"
        :roleOne="s3z.roleOne"
        :roleOneName="s3z.roleOneName"
        :title="s3z.title"
      >
        <nuxt-content :document="s3z" />
      </IntroSection>

      <LazyNazeer />

      <LawyerAR v-if="this.$i18n.locale === 'ar'" />
      <LawyerEN v-if="this.$i18n.locale === 'en'" />

      <img class="w-full h-auto" src="/chapterHeros/c1/SECTION4_COVER.jpg" />

      <LazyRahel />
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
              chapternav < 35000
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
          :to="{ path: '/', hash: 'salma' }"
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
          :to="{ path: '/en', hash: 'salma' }"
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
import { mapGetters, mapMutations } from 'vuex'
import Nazeer from '~/components/global/Nazeer.vue'

export default {
  data() {
    return {
      chapternav: 0,
    }
  },
  components: { Nazeer },
  async asyncData(context) {
    const { $content, app } = context
    //Heros
    const sectionOneHero = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/Hero`
    ).fetch()
    const sectionTwoHero = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/Hero`
    ).fetch()
    const sectionThreeHero = await $content(
      `${app.i18n.locale}/chapterOne/sectionThree/Hero`
    ).fetch()

    //Section One
    const s1z = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/000`
    ).fetch()
    const s11 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/001`
    ).fetch()
    const s12 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/002`
    ).fetch()
    const s13 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/003`
    ).fetch()
    const s14 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/004`
    ).fetch()
    const s15 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/005`
    ).fetch()
    const s16 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/006`
    ).fetch()
    const s17 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/007`
    ).fetch()
    const s18 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/008`
    ).fetch()
    const s19 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/009`
    ).fetch()
    const s110 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/010`
    ).fetch()
    const s111 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/011`
    ).fetch()
    const s112 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/012`
    ).fetch()
    const s113 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/013`
    ).fetch()
    const s114 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/014`
    ).fetch()
    const s115 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/015`
    ).fetch()
    const s116 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/016`
    ).fetch()
    const s117 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/017`
    ).fetch()
    const s118 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/018`
    ).fetch()
    const s119 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/019`
    ).fetch()
    const s120 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/020`
    ).fetch()
    const s121 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/021`
    ).fetch()
    const s122 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/022`
    ).fetch()
    const s123 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/023`
    ).fetch()
    const s124 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/024`
    ).fetch()
    const s125 = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/025`
    ).fetch()

    //Section One Assets
    const S1AssetOne = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/assets/001`
    ).fetch()
    const S1AssetTwo = await $content(
      `${app.i18n.locale}/chapterOne/sectionOne/assets/002`
    ).fetch()

    //SectionTwo
    const s2z = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/000`
    ).fetch()
    const s21 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/001`
    ).fetch()
    const s22 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/002`
    ).fetch()
    const s23 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/003`
    ).fetch()
    const s24 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/004`
    ).fetch()
    const s25 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/005`
    ).fetch()
    const s26 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/006`
    ).fetch()
    const s27 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/007`
    ).fetch()
    const s28 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/008`
    ).fetch()
    const s29 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/009`
    ).fetch()
    const s210 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/010`
    ).fetch()
    const s211 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/011`
    ).fetch()
    const s212 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/012`
    ).fetch()
    const s213 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/013`
    ).fetch()
    const s214 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/014`
    ).fetch()
    const s215 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/015`
    ).fetch()
    const s216 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/016`
    ).fetch()
    const s217 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/017`
    ).fetch()
    const s218 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/018`
    ).fetch()
    const s219 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/019`
    ).fetch()
    const s220 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/020`
    ).fetch()
    const s221 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/021`
    ).fetch()
    const s222 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/022`
    ).fetch()
    const s223 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/023`
    ).fetch()
    const s224 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/024`
    ).fetch()
    const s225 = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/025`
    ).fetch()

    // Section Two Assets
    const S2AssetOne = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/assets/001`
    ).fetch()
    const S2AssetTwo = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/assets/002`
    ).fetch()
    const S2AssetThree = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/assets/003`
    ).fetch()
    const S2AssetFour = await $content(
      `${app.i18n.locale}/chapterOne/sectionTwo/assets/004`
    ).fetch()

    //SectionThree
    const s3z = await $content(
      `${app.i18n.locale}/chapterOne/sectionThree/000`
    ).fetch()
    const s31 = await $content(
      `${app.i18n.locale}/chapterOne/sectionThree/001`
    ).fetch()
    const s32 = await $content(
      `${app.i18n.locale}/chapterOne/sectionThree/002`
    ).fetch()

    //SectionFour

    return {
      sectionOneHero,
      sectionTwoHero,
      sectionThreeHero,

      S1AssetOne,
      S1AssetTwo,

      S2AssetOne,
      S2AssetTwo,
      S2AssetThree,
      S2AssetFour,

      s1z,
      s11,
      s12,
      s13,
      s14,
      s15,
      s16,
      s17,
      s18,
      s19,
      s110,
      s111,
      s112,
      s113,
      s114,
      s115,
      s116,
      s117,
      s118,
      s119,
      s120,
      s121,
      s122,
      s123,
      s124,
      s125,

      s2z,
      s21,
      s22,
      s23,
      s24,
      s25,
      s26,
      s27,
      s28,
      s29,
      s210,
      s211,
      s212,
      s213,
      s214,
      s215,
      s216,
      s217,
      s218,
      s219,
      s220,
      s221,
      s222,
      s223,
      s224,
      s225,

      s3z,
      s31,
    }
  },

  methods: {
    ...mapMutations([
      'chapterOneSC', //also supports payload `this.nameOfMutation(amount)`
    ]),
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
}
</script>

<style>
.fade-enter-active {
  transition: opacity 5s;
}

.fade-leave-active {
  transition: opacity 5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls-enclosure {
  display: none !important;
}

.tippy-tooltip {
  font-family: Nassim Regular;
  font-size: 0.9rem;
  direction: rtl;
  text-align: right;
  padding: 0.3rem 0.6rem;
}

::cue {
  font-size: 2.5rem;
  width: auto;
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
