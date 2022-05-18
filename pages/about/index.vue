<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative w-10/12 h-auto" style="padding-top: 56.25%">
      <iframe
        v-if="this.$i18n.locale === 'en'"
        class="absolute inset-0 w-full h-full"
        src="https://player.vimeo.com/video/559903974?autoplay=1&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        v-if="this.$i18n.locale === 'ar'"
        class="absolute inset-0 w-full h-full"
        src="https://player.vimeo.com/video/559902052?autoplay=1&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div
      :class="
        this.$i18n.locale === 'en'
          ? '  sm:flex-row-reverse  pr-20'
          : '  flex-row  rtl'
      "
      class="flex flex-col items-center justify-center"
    >
      <div
        :class="this.$i18n.locale === 'ar' ? '  mr-5 ' : ' '"
        class="flex flex-col w-10/12 mb-16 sm:w-7/12"
      >
        <p class="mt-10 mb-5 text-2xl font-bold">
          <span v-if="this.$i18n.locale === 'ar'"> عن الفيلم </span>

          <span v-if="this.$i18n.locale === 'en'"> About the movie </span>
        </p>
        <div class="flex flex-col text-xl">
          <p class="mt-5">
            <span v-if="this.$i18n.locale === 'ar'">
              الخدمة المنزلية في لبنان تعدّ سوق حقيقي . يصنّف العاملون بحسب
              جنسيتهم وإثنيتهم، كما تتفاوت أجورهم تبعاً لتصنيفهم. وتتسم العلاقة
              في هذا المجال المعقد بالبساطة الشديدة: ربّ العمل اللبناني هو السيد
              والعامل في المنزل هو السلعة.
            </span>

            <span v-if="this.$i18n.locale === 'en'">
              Domestic work is a real market in Lebanon, segmented according to
              the national and ethnic origins of the workers and in which the
              Lebanese employer is master and the worker the property.
            </span>
          </p>

          <p class="mt-2">
            <span v-if="this.$i18n.locale === 'ar'">
              يملك زين وكالة لتوظيف وتأمين عاملات في المنازل في بيروت. يرتب
              لإقدام النساء الأسيويات والأفريقيات للعمل في المنازل اللبنانية،
              ويساعد عملاءه على اختيار العاملة التي تلائم احتياجاتهم.
            </span>

            <span v-if="this.$i18n.locale === 'en'">
              Zein owns a domestic worker agency in Beirut. He arranges for
              Asian and African women to work in Lebanese households and assists
              his clients in choosing “mail-order” housemaids that will best
              suit their needs.
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
            class="flex flex-col w-full mt-10 space-x-3  sm:items-start sm:justify-between sm:flex-row"
          >
            <div class="flex flex-col w-10/12 mb-5 sm:w-3/12">
              <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
                بالإشتراك مع:
              </p>
              <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
                With the participation of:
              </p>

              <p v-if="this.$i18n.locale === 'ar'">زين الأمين</p>
              <p v-if="this.$i18n.locale === 'en'">Zein El Amin</p>
              <p v-if="this.$i18n.locale === 'ar'">أمال بركات</p>
              <p v-if="this.$i18n.locale === 'en'">Amal Barakat</p>
              <p v-if="this.$i18n.locale === 'ar'">برناديت حديب</p>
              <p v-if="this.$i18n.locale === 'en'">Bernadette Hodeib</p>
              <p v-if="this.$i18n.locale === 'ar'">رهيل زيغييه</p>
              <p v-if="this.$i18n.locale === 'en'">Rahel Zegeye</p>
            </div>
            <div
              v-if="this.$i18n.locale === 'ar'"
              class="flex mt-0 -ml-2 md:mt-6 sm:w-10/12 sm:m-0"
            >
              مديرة تصوير: كلير ماتون- صوت: منصف طالب- مونتاج صورة: رانا
              صباغة-مونتاج صوت: فادي طبال وستيفان ريفز- ميكساج صوت: جان غي
              فاران- انتاج مشترك: كاميل لامل وسارج لالو (لي فيلم ديسي) ايدا فان
              بروزغارد وأيرين هوغتفت (وميدي أوبراتورن)- انتاج: سابين صيداوي
              وجنان داغر (أرجوان للإنتاج)- كتابة وإخراج ماهر أبي سمرا
            </div>

            <div
              v-if="this.$i18n.locale === 'en'"
              class="mt-0 -ml-2 md:mt-6 sm:w-10/12 sm:m-0"
            >
              <span class="font-bold">Image: </span>
              Claire Mathon -
              <span class="font-bold">Sound: </span> Moncef Taleb -
              <span class="font-bold">Editing:</span> Rana Sabbagha -
              <span class="font-bold">Sound Editing: </span> Fadi Tabbal &
              Stephane Rives -
              <span class="font-bold"> Sound Mixing: </span> Jean Guy Varan -
              <span class="font-bold">Coproducers:</span> Camille Laemle & Serge
              Lalou (Les Films d'Ici) - Ida Ven Bruusgaard & Eirin O Høgetveit
              (Medieoperatørene AS) -
              <span class="font-bold"> Produced by:</span> Sabine Sidawi &
              Jinane Dagher (Orjouane Productions) -
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'test',
}
</script>
