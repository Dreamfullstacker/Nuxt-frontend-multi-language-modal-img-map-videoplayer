<template>
  <div class="font-nassimRegular">
    <div
      @click="toggleMenu()"
      class="z-10 mt-2 mr-3 text-2xl text-white cursor-pointer hover:text-gray-400"
    >
      <div class="select-none">///</div>
    </div>

    <div
      :class="mobileMenu ? 'block' : 'hidden'"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full overflow-hidden"
    >
      <div
        class="z-50 w-screen min-h-screen mx-auto bg-gray-200 rounded shadow-lg modal-container"
      >
        <div class="relative modal-content">
          <!-- Menu Header -->
          <div
            class="z-50 flex flex-row items-center justify-between pt-1 pb-1 pl-4 pr-4 md:pl-10 md:pr-10"
          >
            <nuxt-link :to="localePath('/')">
              <img
                class="w-32"
                src="/Images/global/logo-black.svg"
                alt
                srcset
              />
            </nuxt-link>
            <div @click="toggleMenu()" class="z-50 cursor-pointer">
              <img class="w-5 mr-3" src="/Images/global/Close.svg" alt srcset />
            </div>
          </div>

          <div
            class="flex items-center justify-center h-auto mt-12 align-middle"
          >
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <div
                class="flex flex-col-reverse items-center content-start justify-center overflow-auto pointer-events-auto md:hidden lg:hidden xl:hidden sm:flex-row"
              >
                <div
                  class="flex flex-col items-center justify-center mt-4 mb-4 leading-tight ml-7 mr-7"
                >
                  <nuxt-link
                    :to="localePath('/chaptertwo#room')"
                    class="items-center justify-center"
                  >
                    <p
                      @click="toggleMenu()"
                      class="flex text-4xl font-bold text-center"
                    >
                      <span v-if="this.$i18n.locale === 'ar'">
                        -غرفة الخادمة-</span
                      >

                      <span v-if="this.$i18n.locale === 'en'">
                        - Maid's Room -</span
                      >
                    </p>
                  </nuxt-link>
                  <nuxt-link
                    :to="{ path: '/chaptertwo', hash: 'room' }"
                    class="flex text-2xl text-center"
                  >
                    <span
                      @click="toggleMenu()"
                      v-if="this.$i18n.locale === 'en'"
                      class="text-black cursor-pointer hover:text-blue-300"
                      >/ The room which sufficated me /
                    </span>

                    <span
                      v-if="this.$i18n.locale === 'ar'"
                      @click="toggleMenu()"
                      class="text-black cursor-pointer hover:text-blue-300"
                      >/ الغرفة التي خنقتني /
                    </span>
                  </nuxt-link>

                  <nuxt-link
                    :to="{ path: '/chaptertwo', hash: 'fifties' }"
                    class="flex text-2xl text-center"
                  >
                    <nuxt-link
                      :to="{ path: '/chaptetwto', hash: 'fifties' }"
                      @click="toggleMenu()"
                    >
                      <span
                        v-if="this.$i18n.locale === 'en'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ From big Lebanon to fifties /</span
                      >

                      <span
                        v-if="this.$i18n.locale === 'ar'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ من لبنان الكبير إلي الخمسينيات /</span
                      >
                    </nuxt-link>
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/chaptertwo', hash: 'sixties' }">
                    <p @click="toggleMenu()" class="flex text-2xl text-center">
                      <span
                        v-if="this.$i18n.locale === 'ar'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ مجتمع الستينيات واقتصادها /</span
                      >

                      <span
                        v-if="this.$i18n.locale === 'en'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ Sixties society and it's economy /</span
                      >
                    </p>
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/chaptertwo', hash: 'seventies' }">
                    <p @click="toggleMenu()" class="flex text-2xl text-center">
                      <span
                        v-if="this.$i18n.locale === 'ar'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ جنون الربح في السبعينيات والحرب /</span
                      >

                      <span
                        v-if="this.$i18n.locale === 'en'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ Winning madness in seventies and the war /</span
                      >
                    </p>
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/chaptertwo', hash: 'newlaw' }">
                    <p @click="toggleMenu()" class="flex text-2xl text-center">
                      <span
                        v-if="this.$i18n.locale === 'ar'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ قانون بناء جديد بلا نور وهواء للعاملة /</span
                      >

                      <span
                        v-if="this.$i18n.locale === 'en'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ New law without light and air for the worker /</span
                      >
                    </p>
                  </nuxt-link>

                  <nuxt-link :to="{ path: '/chaptertwo', hash: 'end' }">
                    <p @click="toggleMenu()" class="flex text-2xl text-center">
                      <span
                        v-if="this.$i18n.locale === 'ar'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ الخاتمة /</span
                      >

                      <span
                        v-if="this.$i18n.locale === 'en'"
                        class="text-black cursor-pointer hover:text-blue-300"
                        >/ The End /</span
                      >
                    </p>
                  </nuxt-link>
                </div>

                <div
                  class="flex flex-col items-center justify-center m-1 leading-tight"
                >
                  <nuxt-link
                    :to="localePath('/')"
                    class="items-center justify-center"
                  >
                    <p
                      @click="toggleMenu()"
                      v-if="this.$i18n.locale === 'ar'"
                      class="flex text-4xl font-bold text-center"
                    >
                      -المكتــــب-
                    </p>

                    <p
                      v-if="this.$i18n.locale === 'en'"
                      class="flex text-5xl text-center"
                    >
                      - The Office -
                    </p>
                  </nuxt-link>

                  <div class="flex flex-col items-center justify-center mt-2">
                    <nuxt-link :to="localePath('/#salma')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ سلمى /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ Salma /</span
                        >
                      </p>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/#zain')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-2xl text-black cursor-pointer hover:text-blue-300"
                          >/ زين /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-2xl text-black cursor-pointer hover:text-blue-300"
                          >/ Zain /</span
                        >
                      </p>
                    </nuxt-link>

                    <nuxt-link :to="localePath('/#lawyer')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ كيف تكون مخدوماً؟ /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ How to be served? /</span
                        >
                      </p>
                    </nuxt-link>

                    <nuxt-link :to="localePath('/#rahel')">
                      <p
                        style="direction: rtl"
                        @click="toggleMenu()"
                        class="flex text-2xl text-right"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ رحيل /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ Rahel /</span
                        >
                      </p>
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-row items-center content-center justify-center hidden pointer-events-auto md:block lg:block xl:block"
              >
                <div class="flex flex-row items-start justify-center">
                  <div
                    class="flex flex-col items-center justify-center m-10 leading-tight"
                  >
                    <p
                      v-if="this.$i18n.locale === 'ar'"
                      class="flex text-5xl text-center"
                    >
                      -١-
                    </p>
                    <p
                      v-if="this.$i18n.locale === 'en'"
                      class="flex text-5xl text-center"
                    >
                      -1-
                    </p>
                    <p
                      v-if="this.$i18n.locale === 'ar'"
                      class="flex text-2xl text-center"
                    >
                      سوق العمالة المنزلية
                    </p>

                    <p
                      v-if="this.$i18n.locale === 'en'"
                      class="flex text-2xl text-center"
                    >
                      House domestic workers market
                    </p>
                    <nuxt-link to="/">
                      <p
                        v-if="this.$i18n.locale === 'ar'"
                        @click="toggleMenu()"
                        class="flex text-5xl text-center"
                      >
                        -المكتــــب-
                      </p>

                      <p
                        v-if="this.$i18n.locale === 'en'"
                        class="flex text-5xl text-center"
                      >
                        - The Office -
                      </p>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/#salma')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / سلمى /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / Salma /</span
                        >
                      </p>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/#zain')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-2xl text-black cursor-pointer hover:text-blue-300"
                        >
                          / زين /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-2xl text-black cursor-pointer hover:text-blue-300"
                        >
                          / Zain /</span
                        >
                      </p>
                    </nuxt-link>

                    <nuxt-link :to="localePath('/#lawyer')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / كيف تكون مخدوماً؟ /</span
                        >

                        <spa
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / How to be served? /</spa
                        >
                      </p>
                    </nuxt-link>

                    <nuxt-link :to="localePath('/#rahil')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / البشر كسلعة في خدمة السوق /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / Humans as a products /</span
                        >
                      </p>
                    </nuxt-link>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center m-10 leading-tight"
                  >
                    <nuxt-link
                      :to="localePath('/chaptertwo')"
                      class="items-center justify-center"
                    >
                      <p
                        @click="toggleMenu()"
                        class="flex text-5xl text-center"
                      >
                        <span v-if="this.$i18n.locale === 'ar'">-٢-</span>
                        <span v-if="this.$i18n.locale === 'en'">-2-</span>
                      </p>
                    </nuxt-link>

                    <nuxt-link
                      :to="localePath('/chaptertwo')"
                      class="items-center justify-center"
                    >
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span v-if="this.$i18n.locale === 'ar'">
                          مساحة العاملة عند مخدومها
                        </span>

                        <span v-if="this.$i18n.locale === 'en'">
                          Worker's space by her employer
                        </span>
                      </p>
                    </nuxt-link>

                    <nuxt-link to="chap2" class="items-center justify-center">
                      <p
                        @click="toggleMenu()"
                        class="flex text-5xl text-center"
                      >
                        <span v-if="this.$i18n.locale === 'ar'"
                          >-غرفة الخادمة-</span
                        >
                        <span v-if="this.$i18n.locale === 'en'"
                          >-Maid's Room-</span
                        >
                      </p>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('/chaptertwo#room')"
                      class="flex text-2xl text-center"
                    >
                      <span
                        v-if="this.$i18n.locale === 'ar'"
                        @click="toggleMenu()"
                        class="text-black cursor-pointer hover:text-blue-300"
                      >
                        / الغرفة التي خنقتني /</span
                      >

                      <span
                        v-if="this.$i18n.locale === 'en'"
                        @click="toggleMenu()"
                        class="text-black cursor-pointer hover:text-blue-300"
                      >
                        / The room which sufficated me /</span
                      >
                    </nuxt-link>

                    <nuxt-link :to="localePath('/chaptertwo#fifties')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ من لبنان الكبير إلي الخمسينيات /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                          >/ From big Lebanon to fifties /</span
                        >
                      </p>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/chaptertwo#sixties')">
                      <p
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / مجتمع الستينيات واقتصادها /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / Sixties society and it's economy /</span
                        >
                      </p>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/chaptertwo#seventies')">
                      <div
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / جنون الربح في السبعينيات والحرب /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / Winning madness in seventies and the war /</span
                        >
                      </div>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/chaptertwo#newlaw')">
                      <div
                        @click="toggleMenu()"
                        class="flex text-2xl text-center"
                      >
                        <span
                          v-if="this.$i18n.locale === 'ar'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / قانون بناء جديد بلا نور وهواء للعاملة /</span
                        >

                        <span
                          v-if="this.$i18n.locale === 'en'"
                          class="text-black cursor-pointer hover:text-blue-300"
                        >
                          / New law without light and air for the worker /</span
                        >
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div
                :class="
                  this.$i18n.locale === 'en'
                    ? '  sm:flex-row-reverse  pr-20'
                    : '  flex-row  rtl'
                "
                class="relative flex flex-col-reverse items-start justify-between w-full m-5 overflow-y-scroll sm:w-auto sm:flex-row h-88"
              >
                <div
                  :class="this.$i18n.locale === 'ar' ? '  mr-5 ' : ' '"
                  class="flex flex-col w-10/12 sm:w-6/12"
                >
                  <p class="mt-10 mb-5 text-2xl font-bold">
                    <span v-if="this.$i18n.locale === 'ar'"> عن الفيلم </span>

                    <span v-if="this.$i18n.locale === 'en'">
                      About the movie
                    </span>
                  </p>
                  <div class="flex flex-col text-lg">
                    <p class="mt-5">
                      <span v-if="this.$i18n.locale === 'ar'">
                        الخدمة المنزلية في لبنان تعدّ سوق حقيقي . يصنّف العاملون
                        بحسب جنسيتهم وإثنيتهم، كما تتفاوت أجورهم تبعاً لتصنيفهم.
                        وتتسم العلاقة في هذا المجال المعقد بالبساطة الشديدة: ربّ
                        العمل اللبناني هو السيد والعامل في المنزل هو السلعة.
                      </span>

                      <span v-if="this.$i18n.locale === 'en'">
                        Domestic work is a real market in Lebanon, segmented
                        according to the national and ethnic origins of the
                        workers and in which the Lebanese employer is master and
                        the worker the property.
                      </span>
                    </p>

                    <p class="mt-2">
                      <span v-if="this.$i18n.locale === 'ar'">
                        يملك زين وكالة لتوظيف وتأمين عاملات في المنازل في بيروت.
                        يرتب لإقدام النساء الأسيويات والأفريقيات للعمل في
                        المنازل اللبنانية، ويساعد عملاءه على اختيار العاملة التي
                        تلائم احتياجاتهم.
                      </span>

                      <span v-if="this.$i18n.locale === 'en'">
                        Zein owns a domestic worker agency in Beirut. He
                        arranges for Asian and African women to work in Lebanese
                        households and assists his clients in choosing
                        “mail-order” housemaids that will best suit their needs.
                      </span>
                    </p>
                    <p class="mt-2">
                      <span v-if="this.$i18n.locale === 'ar'">
                        القانون والشرطة وأنظمة التسويق في صفه.
                      </span>
                      <span v-if="this.$i18n.locale === 'en'">
                        Advertisement, justice, police are on his side.
                      </span>
                    </p>
                    <p class="mt-2">
                      <span v-if="this.$i18n.locale === 'ar'">
                        يقرر زين فتح أبواب وكالته أمامنا.
                      </span>
                      <span v-if="this.$i18n.locale === 'en'">
                        He decides to open his agency for us.
                      </span>
                    </p>
                    <div
                      class="flex flex-col w-full mt-10 space-x-3 sm:items-start sm:justify-between sm:flex-row"
                    >
                      <div class="flex flex-col w-10/12 mb-5 sm:w-3/12">
                        <p
                          v-if="this.$i18n.locale === 'ar'"
                          class="font-nassimBold"
                        >
                          بالإشتراك مع:
                        </p>
                        <p
                          v-if="this.$i18n.locale === 'en'"
                          class="font-nassimBold"
                        >
                          With the participation of:
                        </p>

                        <p v-if="this.$i18n.locale === 'ar'">زين الأمين</p>
                        <p v-if="this.$i18n.locale === 'en'">Zein El Amin</p>
                        <p v-if="this.$i18n.locale === 'ar'">أمال بركات</p>
                        <p v-if="this.$i18n.locale === 'en'">Amal Barakat</p>
                        <p v-if="this.$i18n.locale === 'ar'">برناديت حديب</p>
                        <p v-if="this.$i18n.locale === 'en'">
                          Bernadette Hodeib
                        </p>
                        <p v-if="this.$i18n.locale === 'ar'">رهيل زيغييه</p>
                        <p v-if="this.$i18n.locale === 'en'">Rahel Zegeye</p>
                      </div>
                      <div
                        v-if="this.$i18n.locale === 'ar'"
                        class="flex mt-0 -ml-2 md:mt-6 sm:w-10/12 sm:m-0"
                      >
                        مديرة تصوير: كلير ماتون- صوت: منصف طالب- مونتاج صورة:
                        رانا صباغة-مونتاج صوت: فادي طبال وستيفان ريفز- ميكساج
                        صوت: جان غي فاران- انتاج مشترك: كاميل لامل وسارج لالو
                        (لي فيلم ديسي) ايدا فان بروزغارد وأيرين هوغتفت (وميدي
                        أوبراتورن)- انتاج: سابين صيداوي وجنان داغر (أرجوان
                        للإنتاج)- كتابة وإخراج ماهر أبي سمرا
                      </div>

                      <div
                        v-if="this.$i18n.locale === 'en'"
                        class="mt-1 ml-3 mr-8 text-justify"
                      >
                        <span class="font-bold">Image: </span>
                        Claire Mathon -
                        <span class="font-bold">Sound: </span> Moncef Taleb -
                        <span class="font-bold">Editing:</span> Rana Sabbagha -
                        <span class="font-bold">Sound Editing: </span> Fadi
                        Tabbal & Stephane Rives -
                        <span class="font-bold"> Sound Mixing: </span> Jean Guy
                        Varan -
                        <span class="font-bold">Coproducers:</span> Camille
                        Laemle & Serge Lalou (Les Films d'Ici) - Ida Ven
                        Bruusgaard & Eirin O Høgetveit (Medieoperatørene AS) -
                        <span class="font-bold"> Produced by:</span> Sabine
                        Sidawi & Jinane Dagher (Orjouane Productions) -
                        <span class="font-bold">Written & Directed by: </span>
                        Maher Abi Samra
                      </div>
                    </div>
                    <p v-if="this.$i18n.locale === 'ar'" class="mt-5">
                      لمزيد من المعلومات عن الفيلم الرجاء الاتصال بـ
                    </p>

                    <p v-if="this.$i18n.locale === 'en'" class="mt-2">
                      For more information about the film please contact:
                    </p>
                    <Mailto
                      class="mt-2 mb-10 sm:mb-0 hover:text-blue-400"
                      mail="orjouaneproductions@gmail.com"
                    >
                      orjouaneproductions@gmail.com
                    </Mailto>
                  </div>

                  <div
                    class="mt-5 mb-40 mr-5 sm:mb-10"
                    style="padding: 56.25% 0 0 0; position: relative"
                  >
                    <iframe
                      src="https://player.vimeo.com/video/557936063?portrait=0"
                      style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                      "
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <img
                  :class="this.$i18n.locale === 'en' ? '  mr-5  ' : ' ml-5 '"
                  class="w-10/12 h-auto mt-10 sm:w-3/12 sm:sticky sm:top-0"
                  src="/Images/global/poster.jpg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>

            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <Credits />
            </div>

            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="flex flex-col w-screen">
                <p
                  :class="this.$i18n.locale === 'en' ? '   ' : ' rtl '"
                  class="m-1 mt-10 ml-10 mr-10 text-2xl font-bold"
                >
                  <span v-if="this.$i18n.locale === 'en'">Contact Us</span>
                  <span v-if="this.$i18n.locale === 'ar'">للتواصل</span>
                </p>
                <p
                  :class="this.$i18n.locale === 'en' ? '   ' : ' rtl '"
                  class="w-10/12 m-1 mt-5 ml-10 mr-10 sm:w-7/12"
                >
                  <!-- <span v-if="this.$i18n.locale === 'ar'">
                    لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                    أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                    ماجنا أليكيوا .</span
                  >
                  <span v-if="this.$i18n.locale === 'en'">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquid esse error totam rem sit cum dolor eos nam
                    accusantium deserunt veniam, neque quibusdam ipsa, fuga
                    natus exercitationem consequatur delectus odit!</span
                  > -->
                </p>
                <div
                  :class="this.$i18n.locale === 'en' ? '  ml-10 ' : ' mr-10 '"
                  class="flex flex-col mt-5"
                >
                  <div class="flex flex-col w-11/12 sm:w-6/12">
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <div class="flex">
                          <input
                            v-if="this.$i18n.locale === 'en'"
                            type="text"
                            v-model="name"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none focus:border-black"
                            placeholder="Name"
                          />

                          <input
                            v-if="this.$i18n.locale === 'ar'"
                            type="text"
                            v-model="name"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none focus:border-black"
                            placeholder="الإسم"
                          />
                        </div>
                      </div>
                      <div class="w-1/2 px-3 mb-5">
                        <div class="flex">
                          <input
                            v-if="this.$i18n.locale === 'en'"
                            id="email"
                            type="email"
                            v-model="email"
                            name="email"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none focus:border-black"
                            placeholder="email"
                          />

                          <input
                            v-if="this.$i18n.locale === 'ar'"
                            id="email"
                            type="email"
                            v-model="email"
                            name="email"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none focus:border-black"
                            placeholder="الإيميل"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <div class="flex">
                          <textarea
                            v-if="this.$i18n.locale === 'en'"
                            id="message"
                            type=" text"
                            v-model="message"
                            name="message"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none focus:border-black"
                            placeholder="message"
                          />

                          <textarea
                            v-if="this.$i18n.locale === 'ar'"
                            id="message"
                            type=" text"
                            v-model="message"
                            name="message"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none focus:border-black"
                            placeholder="رسالتك"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="flex">
                      <div
                        :class="
                          this.$i18n.locale === 'en' ? '  ml-10 ' : ' mr-10 '
                        "
                        class="w-full mb-5"
                      >
                        <button
                          @click="send"
                          class="w-40 py-3 m-1 mt-5 font-medium text-white uppercase bg-black border border-transparent rounded-sm focus:outline-none hover:bg-white hover:border-black hover:text-black"
                        >
                          <span v-if="this.$i18n.locale === 'en'">Send</span>
                          <span v-if="this.$i18n.locale === 'ar'">ارسل</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="flex flex-row ml-10 mr-10 space-x-3">
                    <input
                      v-if="this.$i18n.locale === 'ar'"
                      id="tname"
                      type="text"
                      name="name"
                      v-model="name"
                      :placeholder="اللإسم"
                      autocomplete="given-name"
                      class="block w-5/12 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none sm:w-3/12 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />

                    <input
                      v-if="this.$i18n.locale === 'en'"
                      id="tname"
                      type="text"
                      name="name"
                      v-model="name"
                      placeholder="Name"
                      autocomplete="given-name"
                      class="block w-5/12 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none sm:w-3/12 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />

                    <input
                      v-if="this.$i18n.locale === 'ar'"
                      id="email"
                      type="email"
                      v-model="email"
                      name="email"
                      placeholder="اللإيميل"
                      autocomplete="given-name"
                      class="block w-5/12 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none sm:w-3/12 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />

                    <input
                      v-if="this.$i18n.locale === 'en'"
                      id="email"
                      type="email"
                      name="email"
                      v-model="email"
                      placeholder="email"
                      autocomplete="given-name"
                      class="block w-5/12 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none sm:w-3/12 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </div>

                  <div class="flex flex-row ml-10 mr-10 -mx-10">
                    <textarea
                      v-if="this.$i18n.locale === 'ar'"
                      id="message"
                      type=" text"
                      v-model="message"
                      name="message"
                      placeholder="رسالتك"
                      autocomplete="given-name"
                      class="flex items-start w-10/12 h-32 mt-2 text-gray-700 bg-gray-200 appearance-none sm:w-7/12 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />

                    <textarea
                      v-if="this.$i18n.locale === 'en'"
                      v-model="message"
                      id="message"
                      type=" text"
                      name="message"
                      placeholder="message"
                      autocomplete="given-name"
                      class="flex items-start w-10/12 h-32 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none sm:w-6/12 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </div>

                  <div class="flex flex-row ml-10 mr-10 space-x-3">
                    <button
                      @click="send"
                      class="w-40 py-3 m-1 mt-5 font-medium text-white uppercase bg-black border-transparent rounded-sm focus:outline-none hover:bg-white hover:border-black hover:shadow-none"
                    >
                      <span v-if="this.$i18n.locale === 'en'">Send</span>
                      <span v-if="this.$i18n.locale === 'ar'">ارسل</span>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex mt-5">
            <div
              :class="
                this.$i18n.locale === 'en'
                  ? '  flex-row-reverse '
                  : '  flex-row  '
              "
              class="fixed inset-x-0 bottom-0 z-50 flex items-center content-center justify-center pt-5 pb-5 mx-auto text-xl text-black bg-gray-200 sm:text-2xl"
            >
              <p
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-gray-600': openTab !== 1,
                  'text-black': openTab === 1,
                }"
                class="cursor-pointer hover:text-gray-700"
              >
                <span v-if="this.$i18n.locale === 'ar'"> للتواصل </span>

                <span v-if="this.$i18n.locale === 'en'"> Contact Us </span>
              </p>
              <span class="ml-2 mr-2">|</span>
              <p
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-gray-600': openTab !== 2,
                  'text-black': openTab === 2,
                }"
                class="cursor-pointer hover:text-gray-700"
              >
                <span v-if="this.$i18n.locale === 'ar'"> الفريق </span>

                <span v-if="this.$i18n.locale === 'en'"> Team </span>
              </p>
              <span class="ml-2 mr-2">|</span>

              <p
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  'text-gray-600': openTab !== 3,
                  'text-black': openTab === 3,
                }"
                class="cursor-pointer hover:text-gray-700"
              >
                <span v-if="this.$i18n.locale === 'ar'"> عن الفيلم </span>

                <span v-if="this.$i18n.locale === 'en'"> About the movie </span>
              </p>

              <span class="ml-2 mr-2">|</span>

              <p
                v-on:click="toggleTabs(4)"
                v-bind:class="{
                  'text-gray-600': openTab !== 4,
                  'text-black': openTab === 4,
                }"
                class="cursor-pointer hover:text-gray-700"
              >
                <span v-if="this.$i18n.locale === 'ar'"> القائمة </span>

                <span v-if="this.$i18n.locale === 'en'"> Menu </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://player.vimeo.com/api/player.js',
        },
      ],
    }
  },
  data() {
    return {
      mobileMenu: false,
      openTab: 4,
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu
      this.openTab = 4
    },
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },

    send() {
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
  watch: {
    mobileMenu: {
      immediate: true,
      handler(mobileMenu) {
        if (process.client) {
          if (mobileMenu) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      },
    },
  },

  created() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenu) {
        this.mobileMenu = false
      }
    })
  },
}
</script>
