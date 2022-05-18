<template>
  <div>
    <div v-if="this.$i18n.locale === 'ar'">
      <div>
        في الواقع، ليست جميع أنواع الخدمة ذات طبيعة عنصرية. هناك بالطبع طرق عدة
        يتم عبرها إخفاء العمل المنزلي أو جعله في مرتبة أدنى، حتى عندما يقوم به
        أفراد في مجتمع مشترك
        <button
          style="direction: rtl"
          class="underline font-nassimBold"
          content="
               غالبًا ما تم التقليل من قيمة العمل بالتنظيف نظرًا لقربه من الأوساخ، سواء كان تنظيف الأشياء أو تنظيف الأماكن أو تنظيف جثث الموتى، وحقيقة أنه يطمس الحدود التي تميّز عبرها المجتمعات ماتدعوه عالمة الأنثروبولوجيا ماري دوغلاس بـالنقاء والخطر. ومع ذلك ، فإن ما يعتبر قذرًا يرتبط بالعمق بالأعراف الثقافية، إذ لم يكن تنظيف المساحات المنزلية دائمًا ممارسة سيئة السمعة.
       "
          v-tippy="{
            placement: 'bottom',
            arrow: true,
            arrowType: 'round',
            animation: 'fade',
          }"
        >
          [2]
        </button>
        في أجزاء كثيرة من العالم وبشكلٍ متعارفٍ عليه تقوم النساء الأفقر بمهام
        تربية الأطفال وطهي الطعام وتنظيف المنازل لجيرانهن الأكثر ثراءً. في هذه
        السياقات، كان من الشائع أن تسافر مثل هؤلاء النساء إلى منازل الأثرياء
        لفترة محددة من الوقت خلال النهار ثم يعدن إلى منازلهن مساءا، ليقمن في
        الغالب بالأعباء ذاتها لأسرهن. ولكن على الرغم من الفجوة الواضحة بين
        الأغنياء والفقراء، فإن هذه الأمثلة، سواء كانت من أمريكا اللاتينية أو
        جنوب آسيا أو القارة الأفريقية، لم يتم تنظيمها وفقًا للاختلافات العرقية
        الصريحة التي يمكن وصفها بأنها "بيضاء" مقابل "سوداء". مؤخرًا فقط لم تعد
        النساء المسؤولات عن الاهتمام بالأعمال المنزلية للفئات الأكثر ثراءً في
        المجتمع تشتركن معهن بالحي ذاته أو الثقافة أو اللغة. مع صعود الصناعة
        الخدمية المنزلية العالمية ، شهدنا ظهور تمييز جديد بين "المواطنين
        الأصليين" الذين تتم خدمتهم وأولئك "الأجانب المهاجرين" الذين يخدِمون.
      </div>

      <div>
        كما نوقش في الأقسام السابقة ، حدث التحول من العمالة المنزلية المهاجرة
        الإقليمية إلى العمالة المنزلية الإفريقية والآسيوية في لبنان خلال فترة
        الحرب الأهلية، تحديدًا عبر الروابط التي نشأت بين لبنان وصناعة النفط
        الآخذة في الاتساع في المملكة العربية السعودية ودول الخليج الأخرى
        <button
          style="direction: rtl"
          class="underline font-nassimBold"
          content="
            في الواقع، وتمامًا مثل أولئك اللبنانيين الذين يعملون في القارة الأفريقية والذين أرسلوا فتيات أفريقيات صغيرات إلى الوطن للمساعدة، أحضر العديد من اللبنانيين الذين هاجروا إلى الخليج أثناء الحرب عاملات المنازل معهم إلى لبنان عند عودتهم، مستغلين هزالة الضوابط القانونية في ذلك الوقت. في العقود اللاحقة، حين أصبح وجود عاملة منزلية ما يسميه فواز طرابلسي الحد الشرطي الأدنى للانتماء إلى الطبقة الوسطى، استمرت أعداد النساء الأفريقيات والآسيويات في لبنان بالازدياد، وكذلك أنواع العنف التي يتعرضن لها.
       "
          v-tippy="{
            placement: 'bottom',
            arrow: true,
            arrowType: 'round',
            animation: 'fade',
          }"
        >
          [3]
        </button>
        . اليوم، يبدو لبنان فريدًا في المنطقة بوصفه بلدًا يتجلى فيه التداخل
        التام بين فئة السادة/والسكان الأصليين. وفئة عمال الخدمة المهاجرين/
        والأجانب. في النهاية وعلى الرغم من أن دول الخليج هي بمثابة موطن حيوي
        لأجيال وأجيال من السكان ذوي الأصول الجنوب آسيوية ومن طبقات اقتصادية
        مختلفة، هل سمعنا يومًا بوجود مئات من رجال الأعمال الهنود الناجحين يعيشون
        ويعملون في لبنان؟
      </div>
    </div>

    <div v-if="this.$i18n.locale === 'en'">
      <div>
        The thing is, not all forms of servitude are racial ones. There are
        certainly many ways in which domestic work is invisibilized or rendered
        inferior, even when it is done by members of a shared community.
        <button
          style="direction: rtl"
          class="underline font-nassimBold"
          content="
              The work of cleaning -- whether cleaning objects, cleaning places, or cleaning the bodies of the dead -- has often been devalued due to its proximity to dirt, and the fact that it blurs the boundaries through which societies distinguish between what anthropologist Mary Douglas famously called purity and danger. What is regarded as dirty, however, depends deeply on cultural norms, and cleaning domestic spaces has not always been a disreputable practice.
       "
          v-tippy="{
            placement: 'bottom',
            arrow: true,
            arrowType: 'round',
            animation: 'fade',
          }"
        >
          [2]
        </button>
        In many parts of the world, poorer women have traditionally raised the
        children, cooked the food, and cleaned the homes of their wealthier
        neighbours. In these contexts, it is more common for such women to
        travel to the homes of the wealthy for a fixed period of time during the
        day and then return to their own homes in the evening, often to fulfill
        the same responsibilities for their own families. But despite the
        obvious gap between rich and poor, these examples, whether from Latin
        America, South Asia, or even the Middle East, were not organized
        according to explicit racial differences that might be described as
        “white” versus “black.” It is only recently that the women responsible
        for maintaining the domestic spheres of a wealthier sector of society
        were no longer members of the same neighbourhood, culture, or language
        community. With the rise of the global domestic service industry, we
        have seen the emergence of a new distinction between those native
        citizens who are served, and those migrant foreigners who serve.
      </div>
      <br />
      <div>
        As discussed in the previous sections, the shift from regional to
        African and Asian migrant domestic labor in Lebanon happened over the
        course of the Civil War, particularly through connections between
        Lebanon and the expanding oil industry in Saudi Arabia and other Gulf
        countries.
        <button
          style="direction: rtl"
          class="underline font-nassimBold"
          content="
            In fact, just like those Lebanese working on the African continent who sent young African girls back home to help, many Lebanese individuals who migrated to the Gulf during the war brought their domestic workers back to Lebanon with them when they returned, taking advantage of minimal state regulation at the time.  In the subsequent decades, as having a domestic worker became what Fawwaz Traboulsi calls a minimum status requirement of belonging to the middle class, the numbers of African and Asian women in Lebanon continued to increase, as did the kinds of violence that they experienced.
       "
          v-tippy="{
            placement: 'bottom',
            arrow: true,
            arrowType: 'round',
            animation: 'fade',
          }"
        >
          [3]
        </button>
        Today, Lebanon is unique in the region as a country where there appears
        to be a complete overlap between the category of Madame/Mister and
        nativeness; and the category of the migrant domestic worker and
        foreginness. After all, whereas the Gulf countries are home to a
        dynamic, intergenerational, and cross-class population of South Asian
        descent, when have you ever heard of hundreds of successful Indian
        businessmen living and working in Lebanon?
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
