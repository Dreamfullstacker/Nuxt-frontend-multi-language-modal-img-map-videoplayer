<template>
  <div>
    <div class="flex flex-col items-center justify-center text-xl">
      <div
        :class="
          this.$i18n.locale === 'en'
            ? '   space-x-6 flex-row '
            : '  space-x-10 flex-row rtl '
        "
        class="flex items-start w-10/12 mt-10 mb-16  md:items-end sm:w-11/12 lg:w-10/12 xl:w-8/12"
      >
        <div>
          <div
            class="text-3xl"
            :class="this.$i18n.locale === 'ar' ? '  mr-5 ' : ' ml-10 '"
          >
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              الفريق
            </p>
            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              The Team
            </p>
          </div>

          <div
            class="mt-10"
            :class="this.$i18n.locale === 'ar' ? '  mr-5 ' : ' ml-10 '"
          >
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              فكرة وإعداد
            </p>
            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Concept
            </p>
            <p v-if="this.$i18n.locale === 'ar'">ماهر أبي سمرا</p>
            <p v-if="this.$i18n.locale === 'en'">Maher Abi Samra</p>
          </div>

          <div
            :class="this.$i18n.locale === 'ar' ? '  mr-5 ' : ' ml-10 '"
            class="mt-6 leading-tight"
          >
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">بحث</p>
            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Research
            </p>
            <p v-if="this.$i18n.locale === 'ar'">عبير سقسوق</p>
            <p v-if="this.$i18n.locale === 'en'">Abir Saksouk</p>
            <p v-if="this.$i18n.locale === 'en'">Nadine Bekdache</p>
            <p v-if="this.$i18n.locale === 'ar'">نادين بكداش</p>
            <p v-if="this.$i18n.locale === 'ar'">مريم يونس</p>
            <p v-if="this.$i18n.locale === 'en'">Mariam Younes</p>
            <p v-if="this.$i18n.locale === 'ar'">نزار صاغية</p>
            <p v-if="this.$i18n.locale === 'en'">Nizar Saghieh</p>
            <p v-if="this.$i18n.locale === 'ar'">جنان داغر</p>
            <p v-if="this.$i18n.locale === 'en'">Jinane Dagher</p>
          </div>

          <div
            :class="this.$i18n.locale === 'ar' ? '  mr-5 ' : ' ml-10 '"
            class="mt-6 leading-tight"
          >
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              كتابة
            </p>
            <p v-if="this.$i18n.locale === 'ar'">محمد أبي سمرا</p>
            <p v-if="this.$i18n.locale === 'ar'">سحر مندور</p>
            <p v-if="this.$i18n.locale === 'ar'">مريم يونس</p>
            <p v-if="this.$i18n.locale === 'ar'">لينا منذر</p>
            <p v-if="this.$i18n.locale === 'ar'">سمر دلكي</p>
            <p v-if="this.$i18n.locale === 'ar'">نزار صاغية</p>

            <p class="font-nassimBold" v-if="this.$i18n.locale === 'en'">
              Writers
            </p>
            <p v-if="this.$i18n.locale === 'en'">Mohamad Abi Samra</p>
            <p v-if="this.$i18n.locale === 'en'">Sahar Mandour</p>
            <p v-if="this.$i18n.locale === 'en'">Mariam Younes</p>
            <p v-if="this.$i18n.locale === 'en'">Lina Mounzer</p>
            <p v-if="this.$i18n.locale === 'en'">Samar Ladki</p>
            <p v-if="this.$i18n.locale === 'en'">Nizar Saghieh</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              تصميم وادارة المحتوى
            </p>
            <p v-if="this.$i18n.locale === 'ar'">نادين بكداش</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Content Management <br />
              and Design
            </p>
            <p v-if="this.$i18n.locale === 'en'">Nadine Bekdache</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              اخراج فني
            </p>
            <p v-if="this.$i18n.locale === 'ar'">منصور عزيز</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Production
            </p>
            <p v-if="this.$i18n.locale === 'en'">Mansour Aziz</p>
          </div>

          <div class="block mt-6 ml-10 mr-5 leading-tight md:hidden">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              رسوم وكولاج
            </p>
            <p v-if="this.$i18n.locale === 'ar'">عماد قعفراني</p>
            <p v-if="this.$i18n.locale === 'ar'">لينا مرهج</p>
            <p v-if="this.$i18n.locale === 'ar'">فادي باقي</p>
            <p v-if="this.$i18n.locale === 'ar'">فادي عدلة</p>

            <p class="font-nassimBold" v-if="this.$i18n.locale === 'en'">
              Illustrations
            </p>
            <p v-if="this.$i18n.locale === 'en'">Imad Kaafarani</p>
            <p v-if="this.$i18n.locale === 'en'">Lena Merhej</p>
            <p v-if="this.$i18n.locale === 'en'">the fdz</p>
            <p v-if="this.$i18n.locale === 'en'">Adly Fadi</p>
          </div>
        </div>
        <div class="sm:mt-0 sm:ml-0">
          <div class="ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              ترجمة
            </p>
            <p v-if="this.$i18n.locale === 'ar'">لينا منذر</p>
            <p v-if="this.$i18n.locale === 'ar'">طارق أبي سمرا</p>
            <p class="font-nassimBold" v-if="this.$i18n.locale === 'en'">
              Translation
            </p>
            <p v-if="this.$i18n.locale === 'en'">Lina Monzer</p>
            <p v-if="this.$i18n.locale === 'en'">Tarek Abi Samra</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              تصوير
            </p>
            <p v-if="this.$i18n.locale === 'ar'">كلير ماتون</p>

            <p v-if="this.$i18n.locale === 'en'">Camera</p>
            <p v-if="this.$i18n.locale === 'en'">Claire Matton</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">صوت</p>
            <p v-if="this.$i18n.locale === 'ar'">منصف طالب</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Sound
            </p>
            <p v-if="this.$i18n.locale === 'en'">Moncef Taleb</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              تمثيل
            </p>
            <p v-if="this.$i18n.locale === 'ar'">برنادت حديب</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Acting
            </p>
            <p v-if="this.$i18n.locale === 'en'">Bernadette Hadeeb</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              بالتعاون مع
            </p>
            <p v-if="this.$i18n.locale === 'ar'">افلام ديسي</p>
            <p v-if="this.$i18n.locale === 'ar'">سيرج لالو</p>
            <p v-if="this.$i18n.locale === 'ar'">كامي لوميلي</p>
            <p v-if="this.$i18n.locale === 'ar'">ميديا أوبيراتورين</p>
            <p v-if="this.$i18n.locale === 'ar'">إيدا فان بروسغارد</p>
            <p v-if="this.$i18n.locale === 'ar'">إيرين أوغتفيت</p>

            <p class="font-nassimBold" v-if="this.$i18n.locale === 'en'">
              In collaboration with
            </p>
            <p v-if="this.$i18n.locale === 'en'">Les films d’ici</p>
            <p v-if="this.$i18n.locale === 'en'">Serge Lalou</p>
            <p v-if="this.$i18n.locale === 'en'">Camille Laemlé</p>
            <p v-if="this.$i18n.locale === 'en'">Medieoperatorene</p>
            <p v-if="this.$i18n.locale === 'en'">Ida Ven Bruusgaard</p>
            <p v-if="this.$i18n.locale === 'en'">Eirin O Høgetveit</p>
          </div>

          <div class="mt-6 ml-10 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              تدقيق
            </p>
            <p v-if="this.$i18n.locale === 'ar'">سيلفيا روبنسون</p>

            <p class="font-nassimBold" v-if="this.$i18n.locale === 'en'">
              Copy Editing
            </p>
            <p v-if="this.$i18n.locale === 'en'">Sylvie Robinson</p>
          </div>

          <div class="block mt-6 ml-10 mr-5 leading-tight md:hidden">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              مونتاج
            </p>
            <p v-if="this.$i18n.locale === 'ar'">رنا صباغ</p>
            <p v-if="this.$i18n.locale === 'ar'">روبن كورينفلد</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Montage
            </p>
            <p v-if="this.$i18n.locale === 'en'">Rana Sabbagh</p>
            <p v-if="this.$i18n.locale === 'en'">Ruben Korenfeld</p>
          </div>

          <div class="block mt-6 ml-10 mr-5 leading-tight md:hidden">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              انتجت هذه المواد عبر
            </p>
            <p v-if="this.$i18n.locale === 'ar'">ارجوان للإنتاج</p>
            <p v-if="this.$i18n.locale === 'ar'">جنان داغر</p>
            <p v-if="this.$i18n.locale === 'ar'">سابين صيداوي</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Produced with
            </p>
            <p v-if="this.$i18n.locale === 'en'">Orjouane Productions</p>
            <p v-if="this.$i18n.locale === 'en'">Jinane Dagher</p>
            <p v-if="this.$i18n.locale === 'en'">Sabine Sidawi</p>
          </div>
        </div>

        <div class="hidden md:block">
          <div class="mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              رسوم وكولاج
            </p>
            <p v-if="this.$i18n.locale === 'ar'">عماد قعفراني</p>
            <p v-if="this.$i18n.locale === 'ar'">لينا مرهج</p>
            <p v-if="this.$i18n.locale === 'ar'">فادي باقي</p>
            <p v-if="this.$i18n.locale === 'ar'">فادي عدلة</p>

            <p class="font-nassimBold" v-if="this.$i18n.locale === 'en'">
              Illustrations
            </p>
            <p v-if="this.$i18n.locale === 'en'">Imad Kaafarani</p>
            <p v-if="this.$i18n.locale === 'en'">Lena Merhej</p>
            <p v-if="this.$i18n.locale === 'en'">the fdz</p>
            <p v-if="this.$i18n.locale === 'en'">Adly Fadi</p>
          </div>

          <div class="mt-6 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              مونتاج
            </p>
            <p v-if="this.$i18n.locale === 'ar'">رنا صباغ</p>
            <p v-if="this.$i18n.locale === 'ar'">روبن كورينفلد</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Montage
            </p>
            <p v-if="this.$i18n.locale === 'en'">Rana Sabbagh</p>
            <p v-if="this.$i18n.locale === 'en'">Ruben Korenfeld</p>
          </div>

          <div class="mt-6 mr-5 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'" class="font-nassimBold">
              انتجت هذه المواد عبر
            </p>
            <p v-if="this.$i18n.locale === 'ar'">ارجوان للإنتاج</p>
            <p v-if="this.$i18n.locale === 'ar'">جنان داغر</p>
            <p v-if="this.$i18n.locale === 'ar'">سابين صيداوي</p>

            <p v-if="this.$i18n.locale === 'en'" class="font-nassimBold">
              Produced with
            </p>
            <p v-if="this.$i18n.locale === 'en'">Orjouane Productions</p>
            <p v-if="this.$i18n.locale === 'en'">Jinane Dagher</p>
            <p v-if="this.$i18n.locale === 'en'">Sabine Sidawi</p>
          </div>
        </div>

        <div class="flex-row hidden w-64 md:flex">
          <div class="mt-4 leading-tight">
            <p v-if="this.$i18n.locale === 'ar'">
              تم انشاء هذا المشروع بتمويل من مؤسسة روزا لكسبورغ مكتب بيروت
            </p>
            <p v-if="this.$i18n.locale === 'ar'">ⓒ ٢٠٢٠ لماهر أبي سمرا</p>
            <p v-if="this.$i18n.locale === 'ar'" class="mt-5">
              محتوي موقع «مخدومين» متوفر تجت رخصة المشاع الإبداعي ٤,٠ (يتوجب نسب
              المتحوي الي «مخدومين» - يحظر استخدام العمل لأغراض تجارية - يحظر أي
              تعديل في النص)، ما لم يرد تصريح غير ذلك.
            </p>

            <p v-if="this.$i18n.locale === 'en'">
              This project was supported by Rosa Luxemburg Stiftung Beirut
              Office
            </p>
            <p v-if="this.$i18n.locale === 'en'">© 2020 Maher Abi Samra</p>
            <p v-if="this.$i18n.locale === 'en'" class="mt-5">
              The website is released under a Creative Commons 4.0 license
            </p>
          </div>
        </div>
      </div>

      <div
        :class="this.$i18n.locale === 'en' ? '  flex-row ' : ' flex-row rtl '"
        class="flex flex-row w-10/12 mb-5  sm:w-7/12 lg:w-9/12 xl:w-8/12 md:hidden"
      >
        <div class="mt-4 leading-tight">
          <p v-if="this.$i18n.locale === 'ar'">
            تم انشاء هذا المشروع بتمويل من مؤسسة روزا لكسبورغ مكتب بيروت
          </p>
          <p v-if="this.$i18n.locale === 'ar'">ⓒ ٢٠٢٠ لماهر أبي سمرا</p>
          <p v-if="this.$i18n.locale === 'ar'" class="mt-5 mb-10">
            محتوي موقع «مخدومين» متوفر تجت رخصة المشاع الإبداعي ٤,٠ (يتوجب نسب
            المتحوي الي «مخدومين» - يحظر استخدام العمل لأغراض تجارية - يحظر أي
            تعديل في النص)، ما لم يرد تصريح غير ذلك.
          </p>

          <p v-if="this.$i18n.locale === 'en'">
            This project was supported by Rosa Luxemburg Stiftung Beirut Office
          </p>
          <p v-if="this.$i18n.locale === 'en'">© 2020 Maher Abi Samra</p>
          <p v-if="this.$i18n.locale === 'en'" class="mt-5 mb-10">
            The website is released under a Creative Commons 4.0 license
          </p>

          <!-- <p v-if="this.$i18n.locale === 'en'" class="mt-5 mb-10 text-red-600">
          All scenes and images are taken from the film produced by Orjouane
          Productions
        </p>

        <p
          v-if="this.$i18n.locale === 'en'"
          class="mt-5 mb-32 text-red-600 sm:mb-0"
        >
          For more info please contact
          <Mailto
            class="mt-2 mr-5 hover:text-blue-400"
            mail="orjouaneproductions@gmail.com"
          >
            orjouaneproductions@gmail.com
          </Mailto>
        </p> -->
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
