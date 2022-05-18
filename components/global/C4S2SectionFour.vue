<template>
  <div>
    <div v-if="this.$i18n.locale === 'ar'">
      في الآونة الأخيرة، أولت المنح الأكاديمية في الشرق الأوسط اهتمامًا متزايدًا
      بموضوع العرق والعنصرية. كجزء من حديثٍ عالمي حول مناهضة السواد، وعقدت سلسلة
      من المؤتمرات والحوارات والحوارات العامة حول أنواع معينة من مناهضة السواد
      التي تميز الشرق الأوسط الحديث، من السودان إلى الصحراء، ومن إيران إلى
      اليمن. من بين الأسئلة التي يتم طرحها: ما هي حالة المصطلحات التي تبدو
      عنصرية مثل "عبيد" في أجزاء مختلفة من المنطقة؟ كيف تم تهميش تجارب الأقليات
      العرقية لأنها لا تتناسب مع صورة ما يعنيه أن تكون، على سبيل المثال، تركية
      أو كويتية؟ كيف نعترف بأهمية المجتمعات المنحدرة من "العبيد"، أو من طرق
      التجارة والهجرة السابقة التي سبقت القوميات الحديثة؟ من خلال هذه المحادثات،
      أصبح من الواضح بشكل متزايد أنه بينما لا يمكننا ببساطة تطبيق الأطر الغربية
      للعبودية والسود وتفوق البيض في المنطقة، من المهم أيضًا التعرف على التداول
      النشط للأفكار التي رافقت حركة الأشخاص والبضائع عبر أوروبا. الاستعمار
      والرأسمالية العالمية. وهذا يعني أنه حتى حين لا يعني السواد الشيء ذاته في
      لبنان والولايات المتحدة ، فإن هذا لا يعني عدم وجود تداخل.
      <button
        style="direction: rtl"
        class="underline font-nassimBold"
        content="
               فوجئت في الواقع عندما علمت أنه في أوساط الأكاديميين السود المقيمين في الولايات المتحدة ، يُشار بانتظام إلى نظام الكفالة في كل من دول الخليج ولبنان كمثال رئيسي على مناهضة السواد في الشرق الأوسط.
       "
        v-tippy="{
          placement: 'bottom',
          arrow: true,
          arrowType: 'round',
          animation: 'fade',
        }"
      >
        [5]
      </button>
    </div>

    <div v-if="this.$i18n.locale === 'en'">
      <div>
        The kafala system is not the only structure through which modern
        Lebanese identity has become associated with whiteness. Think of the
        history of the Ottoman slave trade, and its lasting influence on
        religious and legal categories in the region. Think of the long shadow
        of France in the development of modern Lebanon, and the central role
        played by a local elite that still thinks of Lebanon as European and
        Christian rather than Arab or Muslim. Think of the movement of fascist
        and Aryan ideologies from Germany and Italy into the Kata'ib Party in
        the mid-20th century. Think of popular associations in Lebanon between
        beauty and white skin on the one hand, and the summer obsession with the
        perfect seaside tan on the other. How do all these images, associations,
        and representations come together to create popularly held ideas about
        the Lebanese as white?
        <button
          style="direction: rtl"
          class="underline font-nassimBold"
          content="
                We might also think of Georges Asmar in blackface playing a South Asian migrant worker named Dara in the late 1980s television show Beit Khalti, or Nady Abou Chabke impersonating an African domestic worker on the MTV show Menna wa Jerr as recently as 2019.
       "
          v-tippy="{
            placement: 'bottom',
            arrow: true,
            arrowType: 'round',
            animation: 'fade',
          }"
        >
          [4]
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
