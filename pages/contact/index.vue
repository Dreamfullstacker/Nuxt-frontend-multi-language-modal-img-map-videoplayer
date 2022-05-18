<template>
  <div class="flex flex-col items-center justify-center">
    <div
      :class="this.$i18n.locale === 'en' ? '' : '  rtl'"
      class="flex flex-col items-center justify-center"
    >
      <div class="flex flex-col w-10/12 mb-16 sm:w-9/12">
        <div class="w-full mt-10 mb-5 text-2xl font-bold">
          <span v-if="this.$i18n.locale === 'en'">Contact Us</span>
          <span v-if="this.$i18n.locale === 'ar'">للتواصل</span>
          <!-- <p class="m-1 mt-5 text-lg">
            <span v-if="this.$i18n.locale === 'ar'">
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت
              دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا
              .</span
            >
            <span v-if="this.$i18n.locale === 'en'">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              esse error totam rem sit cum dolor eos nam accusantium deserunt
              veniam, neque quibusdam ipsa, fuga natus exercitationem
              consequatur delectus odit!</span
            >
          </p> -->
        </div>

        <div class="flex flex-col w-screen">
          <div
            :class="this.$i18n.locale === 'en' ? '  ml-10 ' : '  '"
            class="flex flex-col mt-5"
          >
            <div class="flex flex-col w-11/12 sm:w-7/12">
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-5">
                  <div class="flex">
                    <input
                      v-if="this.$i18n.locale === 'en'"
                      type="text"
                      v-model="name"
                      class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none  focus:border-black"
                      placeholder="Name"
                    />

                    <input
                      v-if="this.$i18n.locale === 'ar'"
                      type="text"
                      v-model="name"
                      class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none  focus:border-black"
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
                      class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none  focus:border-black"
                      placeholder="email"
                    />

                    <input
                      v-if="this.$i18n.locale === 'ar'"
                      id="email"
                      type="email"
                      v-model="email"
                      name="email"
                      class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none  focus:border-black"
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
                      class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none  focus:border-black"
                      placeholder="message"
                    />

                    <textarea
                      v-if="this.$i18n.locale === 'ar'"
                      id="message"
                      type=" text"
                      v-model="message"
                      name="message"
                      class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 outline-none  focus:border-black"
                      placeholder="رسالتك"
                    />
                  </div>
                </div>
              </div>

              <div class="flex">
                <div
                  :class="this.$i18n.locale === 'en' ? '  -ml-10 ' : '  '"
                  class="w-full mb-5"
                >
                  <button
                    @click="send"
                    class="w-40 py-3 m-1 mt-5 font-medium text-white uppercase bg-black border border-transparent rounded-sm  focus:outline-none hover:bg-white hover:border-black hover:text-black"
                  >
                    <span v-if="this.$i18n.locale === 'en'">Send</span>
                    <span v-if="this.$i18n.locale === 'ar'">ارسل</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
