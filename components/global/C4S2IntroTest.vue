<template>
  <div>
    <div v-if="this.$i18n.locale === 'ar'">
      لطالما حاول الفلاسفة فهم العلاقة المتشابكة بين السيد والخادم، المخدومين
      والخدم . لماذا قسمت المجتمعات أنفسها مرارا بين هؤلاء الذين يَخدمون وأولئك
      الذين يُخدمون ؟ ما الذي يجعل هذه الهرمية قابلة للبقاء؟ اعتمدت الثقافات
      بتنوعها تقسيمات عدة لتقرر على أساسها من سيقوم بأي عمل: كالطائفة والطبقة
      والعرق والدين والجنس بشكلٍ خاص. لكن، الخطوة الأولى في فهم الخصوصية
      العنصرية في سياق نظام الكفالة هي إدراك أن العمل المنزلي ليس نوعا عاديا مثل
      أي عمل. بل هو العمل الرعائي: العمل الذي يجعل بقية الأعمال الأخرى
      ممكنة<button
        style="direction: rtl"
        class="underline font-nassimBold"
        content="
                التنظيف والطبخ والعناية بالمرضى - تعليم اللغة - القوت العاطفي والفكري والجسدي. هذا العمل هو ما تشير إليه النسويات الماركسيات على أنه إعادة إنتاج اجتماعي. ليس العمل المنتج للقوى العاملة ، ولكن العمل الإنتاجي الذي يجعل القوة العاملة نفسها ممكنة ؛ سواء الآن أو في الأجيال القادمة. عبر السياقات الاجتماعية المتنوعة ، فقد تم إخفاءه كشكل من أشكال العمل ، ونزل إلى المجال الخاص وتضاءل باعتباره عمل نسائي

       "
        v-tippy="{
          placement: 'bottom',
          arrow: true,
          arrowType: 'round',
          animation: 'fade',
        }"
      >
        [1]</button
      >.
    </div>

    <div v-if="this.$i18n.locale === 'en'">
      Philosophers have long sought to understand the intertwined relationship
      between master and servant; between the makhdoumin and the khadam. Why
      have societies repeatedly divided themselves among those who serve, and
      those who have served? What makes it possible for these hierarchies to be
      sustained? Diverse cultures have chosen different categories to determine
      who will be responsible for what kinds of work: caste, class, race,
      religion, and especially gender. But the first step to understanding the
      specificity of racism in the context of the kafala system is to recognize
      that domestic work is not just any kind of work. It is the work of care;
      the work that makes all other work possible.<button
        style="direction: rtl"
        class="underline font-nassimBold"
        content="
        Cleaning, cooking, caring for the sick – teaching language – emotional, intellectual, physical sustenance. This work is what Marxist feminists refer to as social reproduction. It is not the productive labor of the workforce, but the reproductive labor that makes the workforce itself possible; both now, and in the generations to come. Across diverse social contexts, it has been invisibilized as a form of labor, relegated to the private domain and diminished as “women’s work.”
       "
        v-tippy="{
          placement: 'bottom',
          arrow: true,
          arrowType: 'round',
          animation: 'fade',
        }"
      >
        [1]</button
      >.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
