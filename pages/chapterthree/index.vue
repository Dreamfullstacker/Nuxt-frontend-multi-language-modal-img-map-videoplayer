<template>
  <main @mouseover="chapterThreeSC">
    <div>
      <div class="flex flex-col items-center content-center justify-center">
        <ChapterImageHero
          class="w-full"
          :chapterNumber="sectionOneHero.chapterNumber"
          :chapterTitle="sectionOneHero.chapterTitle"
          :chapterFirstParagraph="sectionOneHero.chapterFirstParagraph"
          :imageSource="sectionOneHero.imageSource"
        />

        <IframeContainer />
   
   
   
        <ChapterImageHero
          class="w-full"
          :sectionNumber="sectionOneHero.sectionNumber"
          :sectionTitle="sectionOneHero.sectionTitle"
          :chapterSecondParagraph="sectionOneHero.chapterSecondParagraph"

          id="family1"
        />

        <IntroSection
          :roleOne="s1.roleOne"
          :roleOneName="s1.roleOneName"
          :roleTwo="s1.roleTwo"
          :roleTwoName="s1.roleTwoName"
          :roleThree="s1.roleThree"
          :roleThreeName="s1.roleThreeName"
        >
          <nuxt-content :document="s1" />
        </IntroSection>


         <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="mt-10">
        <p>
After Wael and I married, we moved to the Gulf for his work. We had a cozy little apartment and I loved taking care of it—I loved taking care of him! Those first months of marriage were just pure magic; we were passionately in love. I’d spend all day cooking a meal, or scrubbing the bathroom, or ironing his shirts. It was almost like playing “house,” it didn’t really feel like work. But eventually, I found a job there as well, and then I got pregnant, and we had Saleem. There was no one to help me with the baby like we would have had back home. The only solutions would have been to fly either his mother or my mother to come live with us to help out, which was out of the question because imagine what that would have done to our marriage, or to hire a nanny for Saleem. She was a Sri Lankan woman, no, sorry, Indian? I forget her name. Chandra? No, Chandra came later. Anyway, she only came during the day and left after we’d finished eating dinner. It was nerve-wracking leaving Saleem with her all day. She barely spoke any language, so I couldn’t call and ask: did the baby eat properly? Did he nap? Did you wash your hands before picking him up? It made me sick with anxiety; I started to get these rashes everywhere. She also had this thing where she would never just let Saleem cry. She had children back home, and she thought that if Saleem cried, it meant her own children were crying and no one was comforting them. And so as soon as Saleem so much as made a peep, she would pick him up and rock him and sing to him. At some point, Saleem couldn’t be comforted by anyone else; at night, he would just cry and cry, and there was nothing I could do to soothe him. I went into a deep depression, and the rashes got worse. I started losing my hair from stress and lack of sleep. I was a mess. Eventually, the only thing to do was quit my job so I could take care of my son and myself, and that’s what I did.<br /><br />

Then we moved back to Beirut, and we got a much bigger house and had a second child, and then I really couldn’t manage on my own. There was no one I knew who didn’t have a maid and my friend recommended I go to the broker she had used. Of course, there’s an element of luck to it. You can have an excellent broker who hand-picks the girls, and you can spend hours going through the catalog to choose the exact right one, but the girls also lie sometimes. Not all of them, but some. Like they say they can speak a language when they hardly know a word of English or Arabic, or they say they have experienced when they barely know which side of a sponge to use. Sometimes they also have mental problems. The first girl we got seemed so sweet in her photo and so soft-spoken and polite when she first moved in. But she stared blankly like an imbecile every time I said anything to her, and she spent all night crying, no, I mean wailing, screaming in her room. And it was a really nice room, you know, we’d built it ourselves off the kitchen so she could have some privacy, and we made sure it had a good window. We gave her her own little TV and DVD player, things I’m sure she would have never dreamed of having back home. But some of them just aren’t right in the head. I felt it would be cruel to her and to us to keep her; I could never trust someone like that with my children anyway. I exchanged her, and we got Monica instead, and she was really the best maid anyone could ask for.</p>
</SectionText></span>


 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
         <p>
            <img
              src="/Images/c1/sectionOne/LinaMonzer_art1.jpg"
              alt="Pineapple"
              style="
                width: 100%;
                height: auto;
                float: left;
                margin-left: -50%;
                padding-right: 40px;
                padding-bottom: 20px;
              "
            />
She was from Sri Lanka, and she was smart. Not very educated, I don’t think she had more than brevet level, but smart in her way of dealing with people. I’m good at noticing these things, you know. I’m a manager of a big division at work, one of only two women in such a high position in my company. You have to figure out how to read people quickly, know how to flatter their egos. You have to be creative about how to exercise your power; you can’t just walk in there and start barking out orders, do this, do that, the way a man does. At the same time, you have to be very firm or else they walk all over you. So you give the employees some leeway as you tell them what needs to be done by such and such deadline and then they can decide the order of the tasks. I took the same approach with her, treating her like any other one of my employees. I’d say I need the windows done once a week and the floors and bathrooms done every day, etcetera. I insisted she stop work every day at 8 pm sharp and that she should take every Sunday off. Even when she would offer to stay home, saying she wanted to stay, I’d shoo her out the door. “Go! Socialize! Have fun, see people from your culture! We can manage without you for one day, I promise.”<br /><br />
Sometimes she’d try to manipulate me, to claim that I didn't tell her something when I knew very well that I had, or she’d try to rearrange the schedule, hoping I wouldn’t notice. I’d tell her, Monica, you can’t play dumb with me. I invented those tactics! And then we’d both start laughing. She had such a lovely, genuine laugh, and you felt it came from the heart. She could also be strict, though, which was very good for the kids. She kept them in line so well, like little soldiers; it was amazing. Some people don’t like the maids to discipline their children. Of course, I’d never let her hit them or really yell at them—she’d be out so fast she wouldn’t know what happened; I’d drag her out of the house by the hair! But imagine also leaving your kids with someone who has no authority over them. You’d come back to a mental hospital; you’d be raising monsters, and then guess who’s stuck dealing with them when the maid goes back to her own country?
</p></SectionText></span>

       <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
         <p>
     <img
              src="/Images/c1/sectionOne/LinaMonzer_art2.jpg"
              alt="Pineapple"
              style="
                width: 100%;
                height: auto;
                float: right;
                margin-right: -50%;
                padding: 20px;
                padding-left: 40px;
                padding-bottom: 20px;
              "
            />

They missed her a lot when she left. We all did. Her contract was up after four years, and she chose not to renew it, and went back home. Well, Wael didn’t miss her. He hated having a stranger living in the house with us, still does. He always made her feel it too. When he wasn’t around, she would sit down and eat with us at the same table, me and the kids, but when he came home, she was nowhere to be seen—always hidden away in her room. I suppose I’m lucky; some women have to worry about their husbands cheating with the maid or even just lusting after her, fantasizing about her. With Wael, this was never an issue. If anything, I had to remind him to be a little gentler. He’s a bit rough, he likes to yell, and if he’s extra dramatic, he’ll break things sometimes. It’s mostly just posturing; he likes to act the big man. Deep down, he’s a big softie. You have to know his style, how to handle him, but I think the maids were always afraid of him. At the same time, I think the way he is also helped me a lot because he placed these limits on how close the maids could come to our family. He made it very clear to them: this is the family circle, and you will always be outside it. So I never had to be the bad guy in that way. Because you know, it’s such a difficult position to be in, and it’s really anxiety-inducing to understand how to navigate. On the one hand, here’s this woman living in your house, being given jurisdiction over what’s supposed to be your kingdom. She is, for all practical purposes, the woman of the house.<br /><br />

She knows all the intimacies of your life; she hears when you and your husband fight; she even knows when you and your husband have made love. She changes the sheets; she folds your underwear. She knows things about the kids that sometimes you don’t know. At the same time, she has to remain outside the family because otherwise, she would completely take over, and there would no longer be any room for you. There’s always a sense of competition. I’m not talking about competition over men; I’m talking about the actual competition between women, about who gets to run the house. Whose cooking is praised? Who do the kids listen to and run to for comfort? In very simple terms, she has to assume the role of the woman of the house so that you can actually get all the credit for it. And, of course, this is upsetting to her on some level. It’s upsetting to me that I have to rely on her for all that as well. Don’t think I don’t see the irony! I told you, I’m very smart about these things. About how relationships work between people. I wouldn’t be where I am in life if I wasn’t.
<br /><br />
After Monica, Wael wanted us to try and live without a maid for a while. “You did it when we first married,” he said. I laughed him out of the room. “I did it when we lived in a tiny flat and had no kids. How about you clean all four bathrooms every day then? How about you iron your shirts and make your own coffee and mop the floors and cook for the kids?” He really has no idea what it takes to keep the house running, no idea. He can’t even boil an egg.
<br /><br />
After Monica is when we got Chandra, I think. Yes. She was also Sri Lankan. I didn’t have the same rapport with her as I had with Monica. She was a bit... primitive. Imagine, she ate with her hands when she first came! But then we taught her how to use a fork, and I also taught her some words in English and Arabic. I’d teach her ten new words a week, and I’d give her chocolate when she had memorized the lesson well and used the words on her own. But in the beginning, I won’t lie; it was incredibly frustrating. I had to show her everything myself and explain using sign language. Some women have no patience; they yell and scream immediately. That’s not my style. I’m always fair, always respectful. I remind myself: this woman has left her own family to come serve yours. Of course, I lose my temper sometimes, but really, it’s incredibly rare. I don't think I’d even call the police on one of them if they stole something from me. Then again, I don’t know if they’d ever steal from me because I’ve never mistreated them. I’ve always said: you need something, you tell me! I don’t even keep their passports from them. I mean, I have it just to keep it safe, but they know where it’s hidden, and they can get it any time.<br /><br />

We’ve had a lot of maids come through our house. There was Lola, and she was Filipina, so well educated. She had a nursing degree! We had another Filipina after her, and then a Nepalese, I think—there was a while when there was a lot of Nepalese coming to work in this country. And then, at some point, there was Sara; she was Ethiopian. She had another name, but it was hard to pronounce, so we used to call her Sara. She was so dark. My god, she was almost blue; she was so black. Really a sight to behold. It surprised me because all the Ethiopians I’d ever seen were light brown and quite delicate featured—you know, they don’t even have those broad African noses. But she was so striking, and she could have been a model. Now they choose models based on how striking and odd they look. Have you noticed?


</p></SectionText></span>

         <span v-if="$nuxt.$route.path === '/chapterthree'">
        <SectionText class="mt-10">
          <nuxt-content :document="s11" />
        </SectionText>
        </span>


         <span v-if="$nuxt.$route.path === '/chapterthree'">
        <SectionText class="flex flex-row">
         <p>
            <img
              src="/Images/c1/sectionOne/LinaMonzer_art1.jpg"
              alt="Pineapple"
              style="
                width: 100%;
                height: auto;
                float: left;
                margin-left: -50%;
                padding-right: 40px;
                padding-bottom: 20px;
              "
            />
      
            ثم عدنا إلى بيروت، حيث أصبح لدينا منزل أكبر بكثير، وأنجبت طفلاً
            ثانياً فلم أعد قادرةً على تدبّر شؤون المنزل بمفردي. ما من أحدٍ كنت
            أعرفه إلّا وكان لديه خادمة، وقد نصحتني إحدى صديقاتي بالذهاب إلى مكتب
            استقدام الخادمات الذي تعامَلَت معه. بالطبع هناك شيء من الحظ في هذا
            الأمر. قد تتعاملين مع مكتب ممتاز يختار الفتيات بعناية، وقد تمضين
            ساعات في تصفّح الكاتالوغ لكي تختاري الفتاة المناسبة، لكن الفتيات
            يكذبن أحياناً. ليس جميعهن، لكن بعضهن. يَقُلْن، مثلاً، أنّهن يتكلّمن
            عدّة لغات في حين بالكاد يعرفن كلمة واحدة من الإنجليزية أو العربية،
            أو يقلن أنّ لديهن خبرة طويلة في العمل المنزلي في حين لا يعلمن أي جهة
            من الإسفنجة ينبغي استخدامها. وفي بعض الأحيان يُعانينَ من مشاكل
            عقليّة. كانت الفتاة الأولى التي استقدمناها تبدو ظريفة جدّاً على
            صورتها، وقد تهيّأ لنا عند وصولها إلى المنزل أنها مهذّبة وهادئة
            للغاية. لكّنها كانت تُحدّق إليّ كالبلهاء في كلّ مرّة أقول لها شيئاً،
            وكانت تمضي الليل كلّه في البكاء، كلا، أقصد في النواح والصراخ وهي في
            غرفتها. مع أنّ الغرفة كانت مريحة جدّاً، لقد بنيناها على شرفة المطبخ
            لكي تستطيع الحصول على بعض من الخصوصيّة، وحرصنا أن يكون لها نافذة
            جيّدة. وضعنا لها تلفزيون صغير وجهاز "دي في دي"، أشياء لم تكن تحلم
            بالحصول عليها في بلدها. لكن بعضهن يُعانين من مشاكل في العقل. شعرتُ
            أنّ ابقاءها سيكون نوعاً من القسوة، تجاهها وتجاهنا؛ لم أكن أستطيع
            الوثوق بشخص مثلها للاهتمام بأولادي. استبدلْتُها بفتاة أخرى، فحصلنا
            على مونيكا: كانت فعلاً أفضل خادمة يمكن أن يُحظى بها.
          </p>
        </SectionText></span>


         <span v-if="$nuxt.$route.path === '/chapterthree'">

        <SectionText class="mt-5">
          <nuxt-content :document="s13" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s14" />
        </SectionText>
        </span>


         <span v-if="$nuxt.$route.path === '/chapterthree'">

          <SectionText class="mt-5 mb-5">
            <nuxt-content :document="s15" />
          </SectionText> 
          
          </span>

         <span v-if="$nuxt.$route.path === '/chapterthree'">

        <SectionText class="mt-10">
          <p>
            <img
              src="/Images/c1/sectionOne/LinaMonzer_art2.jpg"
              alt="Pineapple"
              style="
                width: 100%;
                height: auto;
                float: right;
                margin-right: -50%;
                padding: 20px;
                padding-left: 40px;
                padding-bottom: 20px;
              "
            />
            افتقدوها كثيراً بعدما غادرت، افتقدناها جميعنا. انتهت مدّة عقدها بعد
            أربع سنوات وقرّرت عدم تجديده وعادت إلى بلدها. حسناً، وائل لم
            يفتقدها. كان يكره عيشَ شخص غريب معنا في المنزل، ولا يزال يكره ذلك.
            ولطالما جعلها تشعر بذلك أيضاً. عندما لا يكون في المنزل، كانت تجلس
            إلى الطاولة لتناول الطعام معنا، أنا والأولاد؛ لكن ما أن يعود وائل
            حتّى تختفي: تختبئ في غرفتها ولا تغادرها بتاتاً. أعتقد أنّني محظوظة،
            فبعض النساء يخشين أن يخونهن أزواجهن مع الخادمة، أو أن يشتهوها فحسب.
            لكن في ما يخصّ وائل، لم تكن هذه مشكلة على الإطلاق. لا بل كان عليّ
            تنبيهه إلى معاملتها بمزيد من اللطف. فهو جلفٌ بعض الشيء، يستهويه
            الصراخُ، وقد يبالغ أحياناً في دراماتيكيّته فيكسر بعض الأغراض. لكنّ
            ذلك كلّه مجرّد تباهٍ ومُفاخرة، فهو يحب أن يلعب دور الرجل القوي. أمّا
            في أعماقه، فهو في غاية الرّقة. عليكِ فهمُ نفسيّته لتعرفي كيف
            تتعاملين معه، لكني أعتقد أن الخادمات كن يخشينه دوماً. وفي الوقت
            نفسه، أعتقد أن سلوكه ساعدني كثيراً، وذلك لأنه رسم حدوداً لمدى إمكان
            الخادمات الاقتراب من الأسرة. لقد أوضَح لهن الأمر تماماً: هذه هي
            دائرة الأسرة، وسوف تبقَيْن دائماً خارجها. لذلك لم أضطر أبداً إلى لعب
            دور الشرير. من الصعب جدّاً لعب هذا الدور كما تعلمين، فهو يُشكِّل
            مصدر قلق كبير. من الصعب رسم حدود واضحة. فمن ناحية، هناك هذه المرأة
            تعيش في منزلكِ، وقد مُنِحَت سلطةً على ما يُفتَرض أنّه مملكتُك. هي
            أصبحت، عمليّاً، ربّة المنزل. وباتت تعرف كلّ تفاصيل حياتك الحميمة؛
            تسمع مشاجراتك مع زوجك، حتّى أنها تعلم متى تمارسان الجنس. تُبدِّل
            الملاءات، تطوي ملابسك الداخلية. تعرفُ أشياءً عن أولادك تجهلينها
            أنتِ. لكن عليها في الوقت ذاته أن تبقى خارج الأسرة وإلّا تصبح هي
            المتحكِّمة بالمنزل على نحوٍ تام، فلا يعود لكِ حينها أي مكان. هناك
            دائماً شعور بالمنافسة. لست أتكلّم عن المنافسة على الرجال، وإنّما عن
            منافسة حقيقيّة بين نساء، منافسة حول مَن سيُدير المنزل. مَن يُثنى على
            طبخه؟ مَن يُطيعه الأولاد، وإلى مَن يلتجئون بحثاً عن المواساة؟
            ببساطة، عليها لعب دور ربّة المنزل لكي يُنسَب لكِ الفضلُ كلّه في ذلك.
            وهو بالطبع أمرٌ مزعج لها على مستوى ما. كما أنّني أنزعج من اضطراري
            إلى الاتّكال عليها في كلّ ذلك. لا تعتقدي أنّني لا أرى السخرية في
            ذلك! سبق وقلت لكِ إنّني ذكيّة جداً في ما يخصّ هذه الأمور. في ما يخصّ
            العلاقات بين البشر. لم أكن لأصل إلى ما أنا عليه في الحياة لو لم أكن
            كذلك.
          </p>
        </SectionText>
        </span>

                 <span v-if="$nuxt.$route.path === '/chapterthree'">

        <SectionText class="mt-5">
          <nuxt-content :document="s16" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s17" />
        </SectionText>

        <SectionText class="mt-5">
          <nuxt-content :document="s18" />
        </SectionText>
</span>


        <sectionImageHero
          class="w-full mt-12"
          :sectionNumber="sectionTwoHero.sectionNumber"
          :sectionTitle="sectionTwoHero.sectionTitle"
          :sectionSubTitle="sectionTwoHero.sectionSubTitle"
          :divId="sectionTwoHero.divId"
          :imageSource="sectionTwoHero.imageSource"
        />
        <div
          class="flex flex-col items-center content-center justify-center custom-background"
        >
          <IntroSection
            :roleOne="s21.roleOne"
            :roleOneName="s21.roleOneName"
            :roleTwo="s21.roleTwo"
            :roleTwoName="s21.roleTwoName"
            :roleThree="s21.roleThree"
            :roleThreeName="s21.roleThreeName"
          >
          </IntroSection>

 <span v-if="$nuxt.$route.path === '/chapterthree'">
          <SectionText class="mt-5">
            <nuxt-content :document="s19" />
          </SectionText>
</span>

 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
           <SectionText class="mt-5">

   She said she was leaving.<br /><br /> 

At 2:15 PM, when I was feeling very self-important, watching a documentary about the Andes, she simply said: "Working hours are over, I'm leaving." First of all, this means that she will not get me the ashtray from the kitchen. She could have at least brought it, before springing her sudden decision on me. Frankly, at first, I was not inclined to be abusive. It was comfortable enough. At that moment, I was in harmony with my thoughts and convictions, and with everything I had told friends and girlfriends in cafes and during nights out, about high morals and the rights of workers. At last, I would prove to them that I was on the side of justice; I would get the ashtray myself. <br />

It was as if she understood that I was not like the others. We appeared to be in agreement. We had taken the first step to liberate her from society and myself. Society is the dog barking at her in my name. I have nothing to do with all of that; I defend her. When she said "No,” I smiled at her. I didn't take it personally. I could get the ashtray myself after all. It was not her job to get it for me. But I did not understand the second part of her statement, that is, when she said, “I am leaving.”<br />
</SectionText>
</span>
          <img
            src="/Images/c1/sectionTwo/hatem1.png"
            alt="Pineapple"
            style="float: right; margin-right: 50%"
          />

 <span v-if="$nuxt.$route.path === '/chapterthree'">

          <SectionText class="mt-5">
            <nuxt-content :document="s21" />
          </SectionText>
          </span>
 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
           <SectionText class="mt-5">
I don’t have much time to think about it–still barely absorbing her answer. I see her standing by the door. She seems serious, intent on going. I can already hear the sound of the elevator and her footsteps echoing in my head. I am not seeing straight. She was not our first hired help, but the fourth. When she said "No," I was dumbfounded. I feign indifference, butI am shocked. She is the first one to say "No." I always wish her good morning like her predecessors, and she always replies with a nod and a smile. For a long time, that meant that she, like the three before her, was content with everything. To avoid such situations—because I am sensitive and easily embarrassed—I never ask anything of her at home. All I ask is that she be present, with the understanding that we would not talk or discuss anything. She would do everything herself. As long as I don’t give her any tasks directly, I remain uninvolved. .She would wash the dishes, clean the bathrooms, sweep the floors, and wipe the windows of her own accord, or at my wife's request. 
I have nothing to do with all of that.<br /><br /> 

So I made a mistake when I asked her for the ashtray, but I am ready to atone for my vile error. Usually, it is my wife, not I, who asks things of her—or orders her, I don't know. I do not take part in this discussion. It doesn't concern me. What does she mean by “I am leaving”? I do not understand this development. Usually, I make my own coffee, I prepare my own sandwiches, even in the middle of the night. Well, that's not exactly true. All I do is pour water in the kettle and place it on the stove. Sometimes, I even take the coffee can off the shelf. But I have never completely prepared a cup of coffee. These are signs that we have agreed on, she and I, that would avoid me the embarrassment of having to ask her for help. All I have to do is come into the kitchen and head towards certain items, then she immediately understands what I need. In this sense, we've had to convince her, by any means possible, that she could not stop working, whether at 2 PM or 4 PM, or 6 PM.  <br /><br />

I understand that work should be regulated. There is such a thing as working hours, but not in her case. She lives with us. She may sleep at the other end of the hallway and eat alone in the kitchen, but at the end of the day she still lives with us. Should I be at work any time after 4 PM–past office hours–my director could still come in and ask me for additional work. Most often he asks nicely, with a snide smile.


</SectionText></span>

          <img
            src="/Images/c1/sectionTwo/hatem2.png"
            alt="Pineapple"
            style="float: center"
          />
 <span v-if="$nuxt.$route.path === '/chapterthree'">

          <SectionText class="mt-5">
            <nuxt-content :document="s211" />
          </SectionText>
</span>

 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
           <SectionText class="mt-5">
I am still thinking about her refusal. Is she really leaving? I don't know if I am dreaming or if it really happened. I just stand there. I grab the blue apron, and after three failed attempts, put it on. It's not as tight as I expected. I find myself standing behind the sink like a soldier ahead of a decisive battle, staring at a bowl full of dishwashing liquid. I start rubbing the dishes vigorously, as if it is an act of revenge. This is all useless. I must wash the dishes myself. No need for sociology, over-analyzing, or laments. <br />
 
I hear voices coming from the living room: the crackling of cups and loud laughter. The family is staying up late, as usual. I realize that I will not be able to sleep amid all this noise. I also notice that I am not sleeping in my bed . In this blue apron, I'm outside of the family, living at its margin. This bed is too small to be a bed–so small that I try to find the rest of it. The room has no windows. I usually  complain about windowless rooms, so how can I sleep in this hallway, where we erected a wall on one side and gave that act of vandalism the terrible name of "the maid's room”?<br /><br />

As I wash the dishes, I wonder: She wants to leave? Where to? She has a room here. Why start a conversation with me to begin with? 
Once, a domestic worker whose name I don't remember got into an argument with me. She simply tried to talk to me in the morning. That would have put us on an equal footing, which in turn would have reminded me that we are not equal: something she was aware of. She started the conversation precisely to point out to me that she knew, and that she knew that I knew. I don't remember the exact topic, but she deliberately started talking to me. I recall that she asked me about Saudi Arabia and life there. She besieged me with questions, as if I had answers for her. But in the end, I pulled myself together and managed to get away. That day, the equation tipped in my favor. I was not directly responsible for her existence here—or let's be honest— I was not responsible for what resulted from her existence, whatever angle you view it from. It didn't matter whether I was on top, or on equal footing—and of course I would never be below her. I had a housemaid. She had her tasks and I had the easier task in comparison: disassociating myself from her existence. Acknowledging her existence would have meant getting involved. Hers was an ambitious ambush but I pretended to be embarrassed and ignored her in the best way I could: I ended the conversation before it even began, with that snide smile. But this time I can't escape. I have to face the matter.<br /><br />

The problem is that I am solitary by nature. I do not enjoy communicating with others. It may be that I am someone who is actually solitary, or someone who likes to appear solitary to others—as it makes me more attractive to them. Perhaps it's my way of evading my unwillingness to get attracted to anyone. But I see no real difference between being solitary or isolated, or wanting to appear so. As for the maid—and here we must agree that in her present state she is a maid, whether we call her a worker, a young girl, or "my dear"—to her, all our conceptions of ourselves make no difference. She declared us equal when she said "No."  <br /><br /><br /><br />
           </SectionText></span>
          <img
            src="/Images/c1/sectionTwo/hatem3.png"
            alt="Pineapple"
            style="float: right"
            class="w-full h-auto mt-3"
          />


 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
           <SectionText class="mt-5">

Whatever happens next, whether I am successful or not, will happen despite her. She won't approve of it happening. What a terrifying idea! The washing machine makes a rumbling sound like the oratory speeches aired on TV in celebration of national events. I have to do something. At the very least, I have to stop the rumbling of the washing machine if I can't stop the speeches. Behind the washing machine, everything is connected in a system: the speech, the spin, the alarm, the ultimatum. I can't find the right button to turn it off, so I unplug it altogether. I stand there dazed, staring blankly ahead. What would happen if a fire broke out and I was alone in the house? No one will come to my aid if something happens. I'm alone like this all day.  <br />
 
As I step out onto the  balcony, the neighbors opposite me start pointing at me and laughing. I quickly realize that my apron is the subject of their mockery. They are not used to seeing a white man in an apron with a broom on the balcony. They might glimpse such a man in a public place, perhaps at a gas station or a restaurant, but not on the balcony. There is an unspoken social arrangement of presence and absence in every space. The bastards are laughing so hard that I hurry back inside in shame.. <br />
 <br />
 
 
In the living room, everything has suddenly stopped. <br />
 <br />
 
 
I remember the silence when we brought her home from the airport. In the car, she shivered when I spoke. My yelling must have scared her. It was just that my little daughter did something she shouldn't have done. She put her hand out the window. Of course, because I was scared for her, and because I am responsible for her as her father—compounded with the great pressure I was under at work and everywhere else—I shouted until everyone in the car fell silent. I call this sharing fear, since at that moment, we could not share responsibility. For the maid, this feeling of fear will extend indefinitely, one moment after the other. One fear after another. We cannot share responsibility, but from our position of power, we can impose all our fears on others. She is afraid of me, and I convince myself that I do not want to unearth the source or the cause of her fear. I am unable to dispel these thoughts, even though I try, sometimes with petty jokes, but more often by ignoring her presence. I know she has to exist in order for me to ignore her existence. But she has turned the tables, and I am unambiguously embarrassed. Will she leave? Will she no longer be here? I realize that I am now ignoring my own existence, because I can no longer dismiss her own. <br />
 <br />
 
 
Now, I am the maid.
 <br />
 <br />
 
I sit back down on the same couch, the only comfortable one.  I lie back and scratch my chin with all five fingers. For some reason, I feel this will allow me to think more clearly. What I'm trying to say is that I'm open-minded, not like the others. I have different ideas that I try to work by. This is not kindness on my part, but I feel I have made progress, when compared to those who have achieved nothing. I don't know what progress is exactly, but I've certainly made progress by agreeing to bring the ashtray myself. In my mind, I have even washed the dishes. And if that's not enough, I'll make an extra effort. But I can't be a maid forever. I felt so alone, far away from everything and everyone. It was more time than I could handle. Like everyone else, I wondered about the meaning of life and what happens after we die. Like everyone else, in a moment of fatigue, I understood that I had to wear her apron until the end. I was sure I wasn't brave enough to do it. I go out to the balcony. I face those who laughed at me. I can't think of a way to silence them other than jumping. The thought frightens me and I run back in.<br /><br />
 
"I'm leaving." As I try to shake off the sentence's unceasing echo that assaults me like shockwaves, I realize that she can't simply go, not like that. I have her passport. The state is on my side, so is General Security and the law. Everyone is on my side, even those who dislike me, those who are jealous of the big house I live in, and who see me as an intruder on the old bourgeoisie. They are all against her. Even if I agreed to it, they wouldn't let her change the rules of the game. It's not my fault. She can't just leave. 
 <br />

I take the apron off and throw it on the floor. My mind starts to clear up, I raise my head. Everything is still where it was and so am I. The documentary is still running; they have now reached Bolivia. I turn and look at her. It is 2:30 PM and she is waiting–and I am waiting for her to get the ashtray from the kitchen.

           </SectionText></span>

      
 <span v-if="$nuxt.$route.path === '/chapterthree'">

          <SectionText class="mt-5 mb-16">
            <nuxt-content :document="s22" />
          </SectionText>
          </span>
        </div>



<Passages />

<!--
 
        <iframe
          src="/Images/c1/sectionFour/passages.html"
          width="100%"
          height="1780"
        ></iframe> -->
      <!-- OLD class

       <sectionImageHero
          class="w-full mt-12"
          :sectionNumber="sectionThreeHero.sectionNumber"
          :sectionTitle="sectionThreeHero.sectionTitle"
          :sectionSubTitle="sectionThreeHero.sectionSubTitle"
          :divId="sectionThreeHero.divId"
          :imageSource="sectionThreeHero.imageSource"
        />

        -->

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
    
    
       <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
         <strong> Introduction</strong><br />
There are three levels in the relationship with the domestic worker,notably in the relationship of the man whom she serves with her. Gender, race, and class are basic components of a worker's existence and (in)visibility in the home/workplace. In this context, several questions arise, the most important of which are: How does a man deal with his privileges, even if he rejects them on principle? Does the social model always prevail over the individual? Is there a way to create an opening in the structures that preceded our existence and our thoughts? <br />

Suggested text: The relationship that binds a domestic worker to her employers–notably the man whom she ‘serves’—is constituted by gender, race and class. These three components define every worker’s existence, and simultaneously her (in)visibility, in the home/workplace. We are inevitably led to ask some important questions in this context: How does a man deal with his privileges, even if he rejects them in principle? Does the social model always prevail over the individual? Is there a way to create an opening in the structures that preceded our existence and our thoughts?<br /><br />


<strong>Morning monologue</strong><br /><br />

I get up and rush  to prepare my morning coffee. While I wait for the water to boil, I go out to the balcony. In that short span of my absence, the domestic worker has already taken my place at the stove–she is preparing my coffee. <br />

I prefer not to deal with our domestic worker. I often leave that embarrassing responsibility to my wife, Berna. Perhaps I am somewhat ashamed of this situation. Essentially, I tend to reject most of the pillars of the social value system in which we live. Throughout my life, I have sought to oppose traditional views on the relationship between men and women, and I have advocated for equality between them in all fields.<br />

However, I often wonder: Is this limited to theories and abstract situations, or awareness, or can it  extend to practice?<br />

Let me illustrate: You are sitting at home and you want something. You automatically ask someone else to do it, or that person spontaneously does it for you, instead of doing it yourself. It's a simple example, tempting too, but to what extent can you coexist with the ideas implicit in this simple practice?<br /><br />

<strong>The mother and the domestic worker</strong><br /><br />

I remember a popular sketch from a Lebanese comedy show in the early 2000s: A child named Pippo (Fadi Raidy) complains that his mother is neglecting him. When he was younger, he says, he thought that the family's Sri Lankan domestic worker was his mother. Once, he even handed her a gift on Mother's Day instead of giving it to his mother.<br />


The sketch was so realistic that it gained widespread approval at the time. Its popularity coincided with the prevalence of hired foreign help working in the homes of the Lebanese middle class in the late 1990s.
<br /><br />
<strong>Home monologue</strong><br /><br />

Sometimes I get the impression that the lady of the house and her domestic worker are in competition. Due to a set of circumstances, these two women find themselves in an undeclared match, vying for the same role. 
Simply put, one can replace the other. As for the man, the husband, or the father, his position of authority remains unchallenged. Nothing affects his historically defined role.<br /><br />

<strong>External voice</strong><br /><br />

In 2000, the United Nations Population Division estimated that 49 percent of migrants globally were women or girls. This percentage goes up to 51 percent in more developed regions.  According to the Division's 2004 report, women migrate in response to gender-specific labor demands and pursue work that reflects gender-based values, norms, stereotypes, and hierarchies. Although laws regarding the admission of migrant workers generally do not discriminate between genders, the demand for domestic workers and nurses focuses almost exclusively on the recruitment of women. Additionally, in the female workers' countries of origin, female labor also follows gender norms and stereotypes that gear women to traditionally female occupations.<br /><br />

<strong>Monologue: A historical thought</strong> <br /><br />

The issue is not only related to bringing the domestic worker into the house., but it also has its roots in the distant history of human beings and societies, and each person's individual history. Perhaps it also has to do with traditional patriarchal upbringing.For example, a man can secure a job more easily than a woman. He can find ways to make much more money than a woman.<br />

The problem lies in the fact that social relations are still based on the understanding that a man is more qualified and more competent than a woman. He remains the main household provider. <br /><br />

<strong>External voice</strong><br /><br />

Labor markets still discriminate according to gender. Women's wages remain much lower than men's. Studies show that “the labor markets [...] in the countries of destination are still limited and remain sex-segregated. Women provide low-cost and flexible labor.” <br />

“Women overall lose out on more than $400,000 over the course of their careers, but most women of color are shorted more than double that. [...] If a woman works for 40 years, then, that adds up to a lifetime shortfall of $430,480 as compared to a man.  [...] When compared to the earnings of white men, that wage loss figure rises to $883,040 for Native American women, $877,480 for black women and $1,007,080 for Latinas.” <br /><br />


<strong>Inference: The source of inequality</strong><br /><br />

The idea of a difference in qualifications between the sexes alone is capable of creating and perpetuating this income disparity between them.<br />

I am a full believer in equality between men and women. However, I earn more than my wife, just because I am a man and she is a woman. This disparity is naturally reflected in privileges at home. Even if a woman earns a higher salary than her husband, this will not release her from her household chores, save in exceptional cases perhaps.<br />

This is due to society's outlook, which unconsciously orients us and singles out women for housekeeping tasks. <br /><br />

<strong>Childhood memory</strong><br /><br />

I remember a summer when my parents took my sister Souad to pick apples in the orchard.  They teased her saying she was working “like boys.” <br />

It was as if they could not believe or did not want to admit that women could do a man's work. It seemed that whatever a woman did, they could find no use or meaning for her work outside the house–unless they raised it to the level of a man's work. <br /><br />

<strong>External voice</strong><br /><br />

The United Nations defines the domestic worker as follows: “Domestic workers, largely women, provide invaluable services to families, and make up a significant part of the global workforce in informal employment. Yet, they are among the most vulnerable groups in the workforce and face a number of human and labor rights abuses.” The UN notes that one out of every 25 female wage earners is employed in domestic work around the world. According to the same source, women constitute 81.5 percent of domestic workers, and 73.4 percent of migrant domestic workers
          </p>
          </SectionText>
          </span>


     <span v-if="$nuxt.$route.path === '/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
            <strong>مونولوغ صباحي</strong> <br /><br />

            أستيقظ، وأسارع إلى وضع الرّكوة على النار لأعدّ قهوتي الصباحية. في
            انتظار غليان الماء أخرج إلى الشرفة قليلاً. في هذه اللحظات تكون
            العاملة المنزلية قد وقفت مكاني أمام الغاز، لتكمل تحضير قهوتي.
            <br />
            أفضّل ألا أتعامل مع عاملة منزلنا. فأترك غالبًا لزوجتي برنا تلك
            المهمة أو المسؤولية المحرجة. لعلّي أخجل إلى حدّ ما من هذا الوضع.
            فأنا أساسًا أرفض معظم أركان منظومة القيم الاجتماعية التي نعيش في
            ظلها. وسعيت في تجارب حياتي إلى مناهضة موروثات علاقة الرجل بالمرأة،
            فساندت المطالبة بالمساواة بينهما في المجالات كلها. لكنني غالبًا ما
            أسأل نفسي: ألا يقتصر ذلك على النظريات والمواقف النظرية، أو على
            الوعي، ولا يشمل الممارسة العملية؟
            <br />
            أعني بذلك مثلًا: أن تكون جالساً في المنزل وترغب في أمر ما، فتطلب
            هكذا تلقائيًا من شخص آخر القيام به، أو يبادر هو من تلقاء نفسه إلى
            القيام به عنك، بدل من أن تقوم به أنت بنفسك. إنه مثل بسيط، بسيط ومغرٍ
            أيضًا. لكن بساطتها لا تمنع السؤال: إلى أي مدى يمكنك التعايش مع
            الفكرة الكامنة وراء هذه الممارسة البسيطة؟ الأم والعاملة المنزلية
            <br />

            أتذكر برنامجًا تلفزيونيًا بثّ اسكتشًا هزليًا راج واشتهر في مطلع
            الألفية الثالثة: طفل اسمه بيبّو (فادي رعيدي) يشتكي من أن والدته
            تهمله. حتى أنه في بدايات وعيه ظنّ أن العاملة السريلانكية في منزل
            العائلة هي أمه. ومرة قدم لها هدية في عيد الأم بدل أن يقدمها لأمه.
            لشدة واقعيته، حظي هذا السكتش التلفزيوني بشعبية واسعة آنذاك. وتزامن
            شيوعه مع انتشار ظاهرة استخدام العاملات الأجنبيات انتشارًا واسعًا في
            منازل فئات الطبقة المتوسطة اللبنانية في أواخر التسعينيات.
            <br />
            <br />
            <strong>مونولوغ منزلي</strong><br />

            <br />

            يتهيأ لي أحيانًا أن منافسةً ما تدور بين سيدة المنزل وعاملتها
            المنزلية. كأنما الظروف وضعت هاتين المرأتين في مباراة غير معلنة على
            القيام بالدور نفسه. ببساطة، يمكن لإحداهما أن تحلّ محل الأخرى. أما
            الرجل، الزوج أو الأب، فيظل في موقعه أو مكانته، لا ينازعه عليهما أحد،
            ولا يؤثر أحدٌ على دوره المحدد تاريخيًا.
            <br /><br />

            <strong>صوت خارجي</strong><br />
            <br />
            اعتباراً من عام 2000، قدرت شعبة السكان في الأمم المتحدة أن 49 في
            المئة من جميع المهاجرين على مستوى العالم هم من النساء أو الفتيات.
            ووصلت هذه النسبة إلى 51 في المئة في المناطق الأكثر تقدما . ووفقاً
            لتقرير الشعبة للعام 2004، تهاجر النساء للعمل في الخارج استجابة لطلب
            عمل خاص بنوعهن الجنسي. عمل يعكس القيم والمعايير والقوالب النمطية
            والتسلسلات الهرمية القائمة على أساس الجنس. وهكذا، على الرغم من أن
            قوانين قبول العمال المهاجرين عمومًا، لا تميز بين الجنسين، فإن الطلب
            على عاملات المنازل والممرضات يركز على توظيف المهاجرات. علاوة على
            ذلك، في بلدان العاملات أيضاً، يكون عرض العمالة النسائية وفقًا
            لمعايير النوع الاجتماعي والقوالب النمطية التي توجه المرأة إلى بعض
            المهن التقليدية للإناث.
            <br /><br />

            <strong>مونولوغ: خاطرة تاريخية</strong><br />
            <br />

            أعتقد أن المسألة لا تتعلق فقط بمجيء العاملة إلى المنزل، بل أن جذورها
            ضاربة في التاريخ البعيد للبشر والمجتمعات، وفي تاريخ كل شخص منا. وقد
            يكون الأمر مرتبطًا بالتربية التقليدية الذكورية.
            <br />

            مثلًا، يجد الرجل عملاً بسهولة أكثر من المرأة. ويجد سبلًا تمكنه من
            تحصيل المال أكثر بكثير المرأة. أما المشكلة الأساسية فتكمن في أن
            العلاقات الاجتماعية لا تزال قائمة بناءً على أن الرجل يمتلك مؤهلات لا
            تمتلكها المرأة، وكفوءًا أكثر منها. وهو لا يزال المنتج الأساسي في كل
            منزل.
            <br /><br />

            <strong> صوت خارجي</strong><br />
            <br />
            "لا تزال أسواق العمل تميّز إلى حدّ كبير بين الجنسين. ولا يزال أجر
            المرأة أقل بكثير من أجر الرجل. وتشير الدراسات إلى أن أسواق العمل
            المتاحة للنساء المهاجرات في بلدان الهجرة لا تزال محدودة. فالنساء لا
            تزلن تقدمن عمالة منخفضة التكلفة" .
            <br />
            و"تخسر المرأة عامةً أكثر من 400 ألف دولار على مدار حياتها المهنية.
            لكن معظم نساء البشرة الملونة تخسر الواحدة منهن أكثر من ضعف ذلك .
            فإذا كان متوسط دخل المرأة المتوقع على مدار حياتها أقل بـ 430.480
            دولارًا من متوسط دخل الرجل الأبيض، فإن على المرأة الأميركية من
            السكان الأصليين مثلاً، أن تتوقع أن تكسب 883،040 دولارًا أقل، بينما
            تكسب نساء البشرة السوداء أقل من 877،480 دولارًا، بينما تكسب النساء
            اللاتينيات 1،007،080 دولارا أقل على مدى حياتهن" .
            <br /><br />

            <strong>استنتاج: أصل التفاوت</strong><br />
            <br />

            تلك الفكرة عن الفرق في المؤهلات بين الجنسين، قادرة وحدها على خلق هذا
            التفاوت في الدخل بينهما وإدامته. أنا أؤمن تماماً بمسألة المساواة بين
            الرجل والمرأة. لكنني أتقاضى أجرًا أعلى من الذي قد تتقاضاه زوجتي، لا
            لشيئ إلا لأنني رجل وهي امرأة. ومن الطبيعي أن ينعكس التفاوت على
            الامتيازات في المنزل. فتقاضي المرأة راتباً أعلى من راتب زوجها، لا
            يعفيها من القيام بالأعمال المنزلية، إلا في حالات استثنائية، ربما.
            تكمن علّة ذلك في نظرة المجتمع الذي يوجهنا بلا وعي منا، وخصَّ المرأة
            بالتدبير المنزلي.
            <br /><br />

            <strong>ذكرى عائلية</strong><br />
            <br />
            أذكر من طفولتي أن أهلي اصطحبوا أختي سعاد للعمل معهم صيفًا في قطاف
            بستان تفاح. وراحوا ساخرين يقولون إنها تعمل "مثل الصبيان". كأنهم لم
            يصدقوا أو لم يريدوا الاعتراف بأن المرأة تعمل حقًا أعمالًا مكرسة
            للرجال. أو أنهم - مهما فعلتْ المرأة - لا يجدون لعملها خارج المنزل
            صفةً ومعنىً، إلا إذا رفعوه إلى مرتبة عمل الرجال.
            <br /><br />

            <strong>صوت خارجي</strong><br />
            <br />
            "تعرّف الأمم المتحدة العامل/ة المنزلي/ة على النحو الآتي: "يقدم عمال
            المنازل، ومعظمهم من النساء، خدمات لا تقدر بثمن للأسر. وهم/ن شطر كبير
            من القوة العاملة العالمية غير الرسمية. لكنهم/ن من أكثر الفئات ضعفا
            في القوى العاملة، ويواجهون انتهاكات كثيرة في مجال حقوق الإنسان
            والعمالة. ويلاحظ أن امرأة من كل 25 عاملة مقابل أجر، مستخدمة في
            الأعمال المنزلية على مستوى العالم. وحسب المصدر نفسه، تشكل النساء
            81.5 في المئة من العمالة المنزلية، و 73.4 في المئة من العمالة
            المنزلية المهاجرة" .
            <br /><br />

            <b>خاطرة: دول فقيرة ونساء</b>
            <br /><br />
            دول فقيرة، إذاً، تستقدم النساء من دول مثلها فقيرة. وهي تستقدمهن في
            شروط مجحفة وظالمة إلى حد كبير. وفي العمل المنزلي تحلّ هؤلاء العاملات
            محل النساء في أدوار متوقعة منهنّ في التدبير المنزلي. طبعًا، من دون
            أن تحصل العاملة على امتيازات السيدة، سيدتها.
            <br /><br />

            <strong>مونولوغ: الجندر والعرق والطبقة</strong>
            <br /><br />
            انتبهت قبل قليل إلى أنني طلبت من برنا أن تفرغ منفضة السجائر. لماذا
            لم أفرغها أنا بنفسي؟! فأنا من أدخن وأحتاج إليها. كأن هذا مصدره ميل
            عميق وقوي تشبث بنا وبسلوكنا، وننقاد إليه رغمًا عن إرادتنا.
            <br />
            قد يعود ذاك الميل إلى تربية مكرسة عميقًا في الذكر. والذكر تعوّد
            عليه، فتكرس كامتياز له، مستقلٍ عن قناعاته وإرادته. ميل عميق يجعلنا
            مبرمجين تلقائيًا على أن المرأة هي من تقوم بالأعمال المنزلية التي
            يستفيد منها الرجل.
            <br />
            أما عندما يقوم الزوج بعمل منزلي ما، فيقوم به استثنائيًا وعلى سبيل
            "المساعدة". وعلى الرغم من ثانويته وهامشيته، يكتسب عمل الرجل الهامشي
            في المنزل قيمة مضافة. وعمله هذا لا يصدر عن واجب، على خلاف عمل
            النساء.
            <br />
            إذاً، للمسألة تاريخ أقدم وأوسع بكثير من حصرها في مسألة الخادمة
            المنزلية وقصرها عليها. وأعني بتاريخية هذه المسألة، قدمها واتساعها:
            فكرة الامتياز بممارساتها وتبعاتها. امتيازنا وامتيازاتنا نحن الرجال.
            <br />
            فالمرأة هي من تقوم بالأعمال المنزلية، قبل إيكالها إلى خادمة. أتذكر
            جدتي كيف جنّ جنونها مرةً، حين رأتني أقوم عن المقعد في صالون منزلنا
            لإحضار فنجان قهوة لي. جُنّت جدتي لأنني قمت أنا لإحضاره، لا شقيقتي
            سعاد. كنا نحن الثلاثة جالسين معًا في الصالون. لكن جدتي لا جدال في
            يقينها القديم المتوارث بأن من يتوجب عليها القيام ليجلب لي - أنا
            الذكر أو الصبي - فنجان قهوتي، هي أختي سعاد لا أنا. وأنا نفسي شعرت،
            إذ قمت لإحضار فنجان قهوتي وسمعت استنكار جدتي، أنني أسدي خدمة
            لشقيقتي.
            <br />
            فلنسأل سؤالاً بدائياً هنا: لماذا تنحصر العمالة المنزلية بالنساء فقط؟
            لماذا لا نجد رجلاً مهاجرًا ينزل في بيت عائلة ليعمل عاملًا منزليًا
            لديها ويهتم بأطفالها؟ ولننتبه إلى أن عبارة عامل/خادم منزلي غريبة
            لغويًا، وغير مألوفة على السمع. لماذ؟ لأن هذا النوع من الأعمال ملقى
            تاريخياً على عاتق النساء. ولولا هذه المسلّمة التاريخية الأصلية، وعدم
            تقاسم الرجل الزوج وزوجته العمل المنزلي مناصفةً بينهما، لما اضطرت
            المرأة إلى إلقاء ذاك العمل على عاتق امرأة أخرى.
          </p>
        </SectionText>
        </span>

        <img
          src="/Images/c1/sectionThree/ashtray_full.jpg"
          class="h-auto mt-3"
        />


     <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
<strong>A thought: Low-income countries and women</strong><br /><br />

Low-income countries, then, recruit women from similarly low-income countries. They recruit them on particularly unfair and unjust terms. In their domestic work, these workers fulfill housekeeping roles that women are expected to hold. Of course, they do this without receiving in return any of the privileges of the housewife, the madam. <br /><br />

<strong>Monologue: Gender, race and class</strong><br /><br />

I just realized that I asked Berna to empty the ashtray. Why didn't I empty it myself? I am the smoker here, I am the one who needs it. It's a deeply rooted tendency that attaches itself to us and our behavior, to which we submit against our will.<br />

This tendency may be traced back to an upbringing that is greatly devoted to masculinity. The male is used to it, and it becomes enshrined as his privilege, regardless of his convictions or his will. It is a deep-rooted tendency, which programs us to automatically accept that women perform the household chores that men benefit from.<br />

When the husband does some housework, it is exceptional “help” that he is providing. Despite how secondary or marginal it may be, the man's work takes on added value. His labor is not borne out of duty, unlike a woman's work.<br /><br />

Therefore, the issue has a much older and broader history than the more limited issue of the domestic servant. By this I mean the historical idea of privilege, our privilege as men, with its practices and consequences. <br />
It is the woman who does the housework before a maid is entrusted to do it.

I remember my grandmother going crazy once when she saw me leave the living room to get myself a cup of coffee. My grandmother was mad because I, and not my sister Souad, went to get it. The three of us were sitting together in the living room. My grandmother's inherited certainty could not be disputed that the person who ought to get up and fetch me—the male, the young man—a cup of coffee was my sister Souad, not me. Even as I got up to get it and heard my grandmother's disapproval, I felt that I was doing my sister a favor.<br /><br />

Here, let us pose an elementary question: Why is domestic work restricted to women? Why do we never find a migrant man who stays in a family home to serve as a domestic worker and take care of the children?<br />

Let us also note how unfamiliar it is to think in terms of a male domestic servant. Why?<br />

Because this kind of work has historically been the purview of women. Were it not for this original historical axiom, and the lack of equal sharing of house chores between husband and wife, a woman would not have had to burden another woman with housework.<br />

The root of the problem, then, lies in the gendered division of labor, the so-called “natural roles.” One could argue that the presence of the maid negates any attempt to establish equality in the home.<br /><br />

<strong>Distant feminist voice</strong><br /><br />

“Each suburban wife struggles with it alone. As she made the beds, shopped for groceries, matched slipcover material, ate peanut butter sandwiches with her children, [...] lay beside her husband at night–she was afraid to ask even of herself the silent question— ‘Is this all?’”<br /> 

“We can no longer ignore that voice within women that says: ‘I want something more than my husband and my children and my home.’” <br />
<br />

<strong>Monologue: The price of women's liberation</strong><br /><br />

Perhaps this is the first level of the problem. I sometimes think that racism —along with sexual discrimination against women— plays a main role in the creation of the problem of domestic work, if one can call it that. <br />

The domestic worker, in Lebanon at least, is always a woman of color. In previous times, I know that many domestic workers were Lebanese, Syrian and Palestinian. But this phenomenon receded over time until it completely disappeared at the end of the Civil War (1990).<br /><br />

Today, one rarely finds an Arab domestic worker residing in the home of a Lebanese family. Perhaps this is due —in addition to the shape of the labor market and the percentage of men and women emigrating for work—to the fact that hiring a colored female worker is a comfort to her employers. It ensures that they are more invisible to her, inasmuch as her presence is also invisible to them. The more alien the worker's nationality/identity and the “lower” her country's rank on the ladder of nationalities/identities, the “lighter” her presence at home is to bear, and the fewer privileges she enjoys. This has become an undeclared racist norm that is characteristic of the kafala sponsorship system existing in Lebanon.<br />

Herein lies a paradox: The struggle for women's liberation is tied to the expansion of racism and discrimination against other women. The quest of women around the world to be rid of the burden of their “natural roles,” which undermine their ambition and limit their freedom, has led other, less privileged women to suffer the brunt of the quest and pay a steep price for it.<br /><br />



<strong>External voice: Liberation from housework</strong><br /><br />

“Have we created a system that secures the liberation of one group of women, only to perpetuate the exploitation of another group of women?” <br />

“A small group of elite privileged class white women were the group Betty Friedan wrote about when she identified ‘the problem that has no name,’ a phrase used to euphemistically describe the dis-satisfaction individuals felt about being confined and subordinated in the home as housewives. Their issue was informed by both the politics of gender and class because while they were complaining about the dangers of confinement in the home, a huge majority of women in the nation were in the workforce. And many of these working women, who put in long hours for low wages while still doing all the work in the domestic household, would have seen the right to stay home as ‘freedom.’” <br /><br />


Let's agree then that the gender-based division of labor lies at the core of a multi-dimensional problem, which targets the least privileged in terms of race and class. Perhaps if the man's role at home were the same as that of the woman—from housework to childcare—women would not need to turn to other women of “inferior” classes for help.<br /><br />

<strong>Monologue: A man despite himself</strong><br /><br />

It is true that the issue of gender discrimination may differ from one man to another. But regardless of the difference in the degrees of discrimination among men, there remains a basic difference between the theory and practice of discrimination within men themselves. In other words, a man may theoretically acknowledge the equality of the sexes without actually putting it into practice in his own behavior.<br />

The issue of gender discrimination is deeply rooted within us and can overwhelm our will. One man may discriminate less severely, or more tactfully than another. Ultimately though, everybody is participating in gender discrimination.<br /><br />

<strong>How does discrimination or privilege occur?</strong><br /><br />

It happens precisely when I practice it against my will, or without mentally agreeing to it. I take advantage of my historically bestowed role because it benefits me and serves my interests. Even if a person has theoretically overcome (his own) masculinity, certain moments and situations bring him back to it, and he takes advantage of being a male.<br />

I consider myself a liberal in this matter. I was born in a traditional environment that discriminates between men and women, but I broke away from it. I believe I have undergone a personal, psychic revolution: I have adopted new ideas around liberation and openness. Still, you can't expect a person to act against his own good.<br /><br />

If your position bestows upon you some sort of authority, how can you act in a way that strips you of this power?<br />

No matter how many theories and ideas about equality I adopt, I find it difficult to simply relinquish a privilege that I possess. If it suits me and comforts me, I will do it even if it comes at the expense of women.<br /><br />

<strong>A thought: The family unit is our destiny!</strong><br /><br />

If we look at advanced societies and the change they have observed in the relationship dynamics between men and women, we find that the change was instituted through laws. Their relationship did not change because of the will or desires of individuals, and it was certainly not men who brought justice to this matter!<br />

In addition to the legal dimension, the inevitability of the family unit is another point that is rarely touched upon when discussing  gender roles and their division between men and women<br /><br />

<strong>External voice</strong><br /><br />

“No more domestic bondage for women. No more inequality within the family. No need for women to fear being left without support and with children to bring up. The woman in communist society no longer depends upon her husband but on her work. It is not in her husband but in her capacity for work that she will find support. [...] Marriage will lose all the elements of material calculation which cripple family life.” <br /><br />

<strong>A thought — summary: Prudent individualism</strong> <br /><br />

It is unlikely that we will get rid of the capitalist system in which we live in the foreseeable future. Changing the gender-based division of labor is progressing slowly, and it does not yet portend a revolution within the family that would consecrate fairness and equality between men and women.<br />

At present, the solution may be individual. Anyone who breaks free from  the prevailing value system should avoid engaging with its social stereotypes, thus sparing oneself and others the inevitable injustice and exploitation inherent in the prevalent traditional structures. In this way, one can contribute to a change, no matter how small, in the existing labor market system.













          </p>
          </SectionText>
          </span>

    <span v-if="$nuxt.$route.path === '/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
            يكمن جذر المشكلة إذاً في تقسيم العمل بين الجنسين، أو في ما يسمى
            "الأدوار الطبيعية". ويمكن القول إن حضور الخادمة يلغي كل محاولة
            لتكريس المساواة في المنزل. صوت نسائي بعيد "كل زوجة تكافح وحدها في
            الضواحي، كانت - فيما توضب الأسرّة، تتسوق من البقالة، (...) تأكل
            شطائر زبدة الفول السوداني مع أطفالها، وتتمدد إلى جانب زوجها في الليل
            - كانت تخشى أن تسأل نفسها السؤال الصامت: هل هذا كل شيئ؟" . "لم يعد
            من الممكن تجاهل هذا الصوت الداخلي لدى النساء. الصوت الذي يقول: "أريد
            شيئًا أكثر من زوجي وأولادي ومنزلي" .
            <br />
            <br />
            <strong>مونولوغ:</strong><br /><br />
            ثمن تحرر النساء لعل هذا هو المستوى الأول من المشكلة. أفكر أحياناً أن
            العنصرية تلعب - إلى جانب التمييز الجنسي ضد المرأة - دوراً أساسياً في
            تكوِّن مشكلة العمالة المنزلية، إذا جازت تسميتها على هذا النحو.
            <br />
            فعاملة المنزل، أقله في لبنان، هي دائماً امرأة ملونة. أعلم أن كثرة من
            العاملات المنزليات في القرن الماضي كنّ لبنانيات وسوريات وفلسطينيات.
            لكن تلك الظاهرة انحسرت مع مرور الوقت، حتى اختفت نهائياً في نهاية
            الحرب الأهلية (1990). يندر اليوم أن نجد عاملة منزلية عربية تقيم في
            بيت عائلة لبنانية. لعلّ سبب ذلك - إلى جانب شكل سوق العمل ونسبة
            المهاجرات والمهاجرين للعمل - يكمن في أن استخدام عاملة سوداء البشرة
            يريح مخدوميها. يريحهم لأنها تضمن لهم قدراً أكبر من أن يكونوا
            لامرئيين حيال حضورها، قدر ما يكون حضورها هي أيضًا غير مرئي منهم
            كذلك. فكلما كانت جنسية/هوية العاملة غريبة، و"أدنى" مرتبة في سلّم
            مراتب الجنسيات/الهويات بين البلدان، يكون حضورها في المنزل "أخف
            وطأة"، لأن امتيازاتها تكون ضئيلة جداً. كأن ذلك أصبح عرفًا عنصريًا
            غير معلن في خصائص نظام الكفالة القائم في لبنان.
            <br /><br />
            <strong>هنا تكمن مفارقة:</strong><br /><br />
            ارتبط تحرر المرأة ونضالها لنيله وتحقيقه، باتساع العنصرية والتمييز ضد
            نساء أخريات. فسعي النساء حول العالم إلى التحرر من عبء "أدوارهن
            الطبيعية"، تلك التي تقوّض طموحهن وتحدّ من حريتهن، أدى إلى أن تتحمل
            نساءٌ أخريات، أقل امتيازًا، تبعات سعيهن ذاك وتدفعن ثمنه.
            <br /><br />
            <strong>صوت خارجي:</strong><br /><br />

            التحرر من العمل المنزلي "هل أنشأنا في الواقع نظامًا يضمن تحرير
            مجموعة من النساء، ليكرس استغلال مجموعة أخرى من النساء؟" . "في كتابها
            المرجعي، أشارت بيتي فريدان إلى "المشكلة التي ليس لها اسم". وهذه
            عبارة تصف فيها عدم رضا النساء اللواتي تشعرن أنهن محاصرات وخاضعات في
            منازلهن كسيدات منزليات. وهن نساء الطبقة الوسطى البيضاء اللواتي كنّ
            تتمتعن بامتيازات كثيرة. لكنهن تشتكين من ظاهرة "حبسهن في منازلهن"،
            عندما كانت الغالبية العظمى من النساء في البلاد من القوى العاملة
            فعلًا. وكانت كثرة من هؤلاء النساء، تعملن ساعات طويلة مقابل أجر
            منخفض، وتقمن أيضًا بكل الأعمال في منازلهن. وجراء وضعهن هذا وجدن أن
            الحق في البقاء في المنازل حرية لهن" .
            <br /><br />
            <strong>مونولوغ:</strong><br /><br />
            نساء ونساء أدنى إذاً، فلنقل إن تقسيم العمل القائم على الأدوار
            الجندرية، هو جوهر مشكلةٍ متعددة الأشكال والأبعاد، وتطال سهامها الأقل
            امتيازاً على مستوى الطبقة والعرق. فلربما لو كان دور الرجل في المنزل
            مطابقًا تمامًا لدور المرأة - من الأعمال المنزلية إلى رعاية الأطفال -
            لما احتاجت النساء إلى اللجوء إلى نساء أخريات من طبقات أدنى للحصول
            على المساعدة.
            <br /><br />
            <strong>مونولوغ:</strong><br /><br />
            رجل رغمًا عنه صحيح أن مسألة التمييز بين الجنسين قد تختلف من رجل إلى
            آخر. لكن الاختلاف أو الفرق في درجات هذا التمييز لدى الرجال، لا يلغي
            الفرق الأساسي بين التمييز على مستوين، ذهني وعملي لدى الرجال أنفسهم.
            يمكن لرجل ما أن يقر بالمساواة بين الجنسين ذهنيًا، من دون أن يمارسها
            عمليًا في سلوكه. فمسألة التمييز بين الجنسين راسخة في داخلنا، وتتجاوز
            إرادتنا. وقد يمارسها هذا الرجل على نحو أقل حدةً من ذاك، أو بأسلوب
            لبق. لكن الجميع في نهاية المطاف يشارك في هذا التمييز القائم على أساس
            الجنس.
            <br /><br />
            <strong>كيف يحدث التمييز أو الامتياز؟</strong><br /><br />
            هو يحدث بالظبط وفي هذه الحال، حينما أمارسه على غير إرادة مني، أو من
            دون رضاي الذهني عن ممارسته. أستغل دوري الذي مُنحتُه تاريخيًا، لأنه
            يفيدني ويحقق مصلحتي. كأنما الشخص، على رغم تجاوزه الذكورية، ذكوريته،
            على المستوى الذهني، هناك لحظات ومواقف معينة تعيده إليها، فيستفيد من
            كونه ذكرًا. أنا أعتبر نفسي متحرراً في هذه المسألة. أنا ابن بيئة
            تقليدية تميز بين الرجل والمرأة، لكنني خرجت عليها. أعتبر أنني قمت
            بثورة ما، فردية، في هذا المجال. تبنيت أفكارًا جديدة مرتبطة بالتحرر
            والانفتاح. ولكن يبدو أن من الصعب التعويل على قيام الشخص بعملٍ ضد
            مصلحته.
            <br />

            أنت في موقعك تمتلك سلطة ما، فكيف تتصرف على نحو يجردك من هذه السلطة؟
            مهما تبنيت نظريات وأفكاراً عن المساواة، من الصعب أن أتخلى ببساطة عن
            امتياز أمتلكه. عندما يكون الأمر يناسبني ويريحني، أقوم به ولو كان على
            حساب المرأة. خاطرة: وحدة الأسرة قدرًا!
            <br />

            إذا ما نظرنا إلى المجتمعات المتقدمة، وما شهدته من تغيير كبير في
            ديناميات علاقة الرجل بالمرأة، نجد أن القوانين هي التي أرست هذا
            التغيير. لا، لم يعتمد تغيير تلك العلاقة على إرادة الأفراد أو
            رغباتهم. وليس الرجال هم من يحقق العدالة في هذه المسألة!
            <br />
            من جهةٍ أخرى، وإلى جانب البعد القانوني الأساسي، هناك بعدٌ نادراً ما
            يتطرق إليه الحديث عن الأدوار الجندرية وتقسيمها بين الرجل والمرأة:
            التعامل مع وحدة الأسرة باعتباره قدراً.
            <br /><br />
            <strong>صوت خارجي</strong>
            <br /><br />
            "لقد انتهى عهد العبودية المنزلية للمرأة! انتهى عهد انعدام المساواة
            داخل الأسرة! وانقضى زمن خوف المرأة من أن تجد نفسها بلا معيل، هي
            وأطفالها، إذا ما هجرها زوجها. فالمرأة في المجتمع الشيوعي لن تعتمد
            بعد الآن على زوجها، وإنما سوف تعتمد على عملها. ولن يعيلها زوجها،
            وإنما ساعداها القويان. ثم إن الزواج سوف يُطهّر من كافة مقوماته
            المادية وأثقاله المالية التي كانت تشكل لطخة عار في الحياة العائلية
            حتى الآن" .

            <br /><br />
            <strong>خاطرة - خلاصة: فردية حصيفة</strong>
            <br /><br />
            لا يبدو أن التخلّص من المنظومة الرأسمالية التي نعيش في ظلها أمراً قد
            يحصل في المدى المنظور. وتغيير تقسيم العمل القائم على التمييز بين
            الجنسين، يسير ببطء على بعض المستويات، ولا ينذر بإحداث ثورة داخل
            الأسرة، تكرس العدالة بين الرجل والمرأة. لذا قد يكون الحلّ في الوقت
            الراهن فرديًا: أن يعزف كل من يخرج من منظومة القيم السائدة عن
            الانخراط في قوالبها الاجتماعية القائمة، مجنبًا نفسه والآخرين ظلمًا
            واستغلالًا لا مفرّ منه في حال مجاراته البنى التقليدية السائدة. وبذلك
            قد يساهم في تغيير، ولو ضئيل، في نظام سوق العمل القائم.
          </p>
        </SectionText>
   </span>

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


 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
          <b>March 3, 1988</b><br />
No sooner had we finished eating that Bernard chided me for not clearing the table. I felt ashamed. I wanted to explain how new this was to me, how I had never lived without my garden, or a cook, or a driver, or a maid, without my mother or my sisters. I was alone in this cold country, more than 9000km away from home. I really wished that Lubna, the Moroccan housemaid, would not leave us every night to go back home. But I loved Bernard, my darling husband, so I said nothing. I started moving the dirty dishes, cups, forks and knives to the sink. At 20 years old, that was my first time. .<br /><br />

<b>June 6, 1989</b><br />
Bernard is now officially a surgeon at an important clinic in Ottawa, and I'm so proud of him. We make a beautiful family. I do my best to run the house and be a good mother and wife. When evening sets and Lubna is gone, I quickly put Yasmine to bed. I try to organize my time. As soon as she falls asleep, I get ready to welcome Bernard back home. Good thing I quit studying psychology, or else I would have never been able to fully devote myself to my family. As my mother used to say when we lived in Africa: Good housekeeping is a tough job. She was right: a woman must at once be generous, discreet, and demanding. I miss my mother. I miss my sisters.<br /><br />

<b>December 12, 1992</b><br />
When I think that Bernard complained to his mother on the phone that I do not keep him company while he has dinner! I was so upset that I even scolded Lubna. She is so slow when it comes to cleaning windows! He doesn't know how exhausted I am every night. He comes back at ten all relaxed and expects me to be elegantly dressed and ready for him! After Lubna leaves at six in the evening, I barely have a minute to myself. Yasmine and Zeina get on my nerves and won't give me a moment’s break. Mom, I want this, Mom, I want that. I can't bear it anymore. And Zeina wakes up every night! Of course I can't count on Lubna, because "missus" is peacefully asleep at home. I love Bernard, but he sometimes goes too far. Since he was promoted to department head, he's been less patient with me, as if I were his mother's cook, staying awake until two in the morning. No! I will go to bed at ten. Period.<br /><br />

<b>October 8, 1996</b><br />
My two daughters are driving me crazy. They constantly quarrel and order me around, and they only seem to care about their father although they hardly ever see him.Perhaps it’s because they never see him. I take care of them day and night, yet they are rude to me and disobey me. I have a glass of white wine every day at four in the afternoon to be able to deal with it. Otherwise, I would have killed everybody.I should be proud of what I have accomplished: of this house that I manage so tastefully, of my husband who is excelling at work, of my two daughters whom I am bringing up so well, of the friends that I entertain so lavishly. But a strange feeling takes over me sometimes: I am bored. Fortunately, I have my garden. It's the only place where I am truly happy. I get up at five in the morning and start plowing. It is the one hour I devote to myself. I spend it tending my plants, watering my flowers, and clearing the weeds. At six, Bernard and Zeina wake up. That's when I have to let everything go and devote myself to them without a breath to spare.<br /><br />
</p>
</SectionText>
</span>



 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
          <p>
    <img
          src="/Images/c1/sectionOne/maya-1.jpeg"
          class="w-full h-auto mt-3"
        />
</p>
</span>


 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
<b>August 3, 1998</b><br />
The heat is unbearable and the air conditioning is useless. Maybe it's the pregnancy giving me hot flashes. We returned to Beirut two months ago, and I still haven’t adapted. I got used to my life in Canada, but Bernard decided that he wanted to be buried in Lebanon. I still haven't figured out the real reason behind his decision. Maybe he's more interested in plastic surgery than in organ transplants. Either way, as soon as he arrived in Beirut, he set up a clinic with Robert. I've been feeling nauseous since this morning. Fortunately my mother has ordered for me a Filipina maid from Dubai. They are very obedient, efficient, and discreet, but most importantly, they are available around the clock. I would have never been able to manage things if it weren't for her and the cook. The house is huge and there is always a lot to do. Women here have very beautiful hands. I have to learn to look like them and not wear the same clothes two days in a row. Vera made a comment about this a few days ago.<br /><br />

<b>December 20, 2001</b><br />
I feel sleepy. Bernard and I are going out all the time: Charity balls that I have to accompany him to, not to mention the formal dinners. It's one in the afternoon, and Yasmine and Zeina are still asleep. I want to pull them by the hair; their laziness is killing me. Starting tomorrow, I will force them to get up at noon, at the latest. I don't care if they complain to their father, he will always take their side anyway. My mind has been in full gear since this morning! A lot left to do for Christmas Eve. It has to be perfect this year. I don't want to hear a single comment from my mother-in-law.  I have to take care of my little Rana's birthday today. I have to send out the invitations, order the cake, choose the right party planners, etc. I want her third birthday to be unforgettable. When I think that Lea is going to the Philippines for three weeks in January, I'm worried that I'll never manage on my own. I need to request a replacement soon. The UNICEF dinner starts at eight this evening. I have to tell the hairdresser to come early, the driver must bring Bernard's suit. Suddenly, I was swept by an irrational urge to check on my (name of flower). .<br /><br />


<b>March 12, 2002</b><br />
Bernard is happy that I'm pregnant with a boy. Personally, I feel nothing. I don't have time to feel anything. My personal trainer just got here, and I really feel like cancelling the session. But no, no, I have to get a hold of myself. Come on… I'm not going to become sedentary at 34. I have to stay tall, strong and graceful. I should be happy to be pregnant with a little boy, instead of surrendering to these dark thoughts…but I can't help it. I feel hollow and empty.. It’s a miracle that I still have it together.<br /><br />

<b>May 8, 2005</b><br />
Lea ran away. I am shocked. It's like I've lost an extension of myself. I don't understand. I always treated her with respect and she never complained. Is it because I scolded her a few days ago when she broke the Japanese vase? Is it because Ramzi was keeping her awake late at night? How could she go and leave me alone with my four children and all the household chores? I'm sure Bernard will blame me for this. Every time he reproaches me, I feel like biting him. I'm done with Filipinas. They are all phonies. I want someone from another race. I want to hire a more honest, affectionate housemaid, with whom I can establish a more direct relationship. I will order an Ethiopian.<br /><br />

<b>January 5, 2008</b><br />
Bernard blames me for my bad temper. I don't have a temper, I just have character! It's true though: I have been having more bouts of anger. I yell at Lati, at the kids and at him. I can no longer bear to be at the service of my children, my husband, my family and my friends unconditionally. I can't pretend anymore: constantly smiling, acting happy, staying timid. I see myself clutching  Bernard's arm during dinners and I don't recognize myself. Who am I? I am nothing but a facade, a shadow of my former self. I can’t breathe in this costume, when will I take it off? I want to scream, cry, run away… I’m glad I didn't get that lip enhancement surgery, despite Bernard's insistence. My little act of resistance.
</p>

</SectionText></span>




 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
          <p>
    <img
          src="/Images/c1/sectionOne/maya-2.jpeg"
          class="w-full h-auto mt-3"
        />
</p>
</span>


 <span v-if="$nuxt.$route.path === '/en/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
<b>June 1, 2011</b><br />
Yoga is so beneficial. I’ve regained my breath...Breathe. I’m learning to be myself. I’ve become more attentive to others, ever since the divorce was finalized. I am no longer ashamed of being a divorcee when I meet the mothers of Ramzi's friends. I have been released from my prison. I think of Yasmine in Rome and Zeina in Canada. I would like to tell them: Be yourselves, my daughters. Take as much time as you need to tend your garden. I should pay more attention to Lati and tell her to watch TV in the living room while I'm away. This morning I told her: "You're here to help me, but you have an existence outside of the work you do for me. You exist, Lati!" She didn't reply. Maybe she didn't get it. Together, we trained the young Ethiopian woman that Bernard has hired to run his house and iron his suits to his liking. I advised her to be discreet, because I know that Bernard doesn't like sensing the presence of the help at home. In a way, it reassures me that she is working for him. It relieves me of a burden.<br /><br />

<b>September 10, 2018</b><br />
I just turned fifty. Soon, Ramzi will be traveling abroad to complete his studies and I will find myself alone in this big house. I miss my three daughters. They've left a huge void. I hope they can spend their holidays in Lebanon this year. Lati flew to Ethiopia for her vacation and never came back. I would have liked her to explain to me, to speak to me, to show the slightest degree of respect and gratitude towards me, but I don't hold a grudge against her. Everyone is free. Young Baboush is doing well. She is twenty years old, the same age as my daughter Rana. I am nice to her, I talk to her and tell her about my day. I installed Skype on her computer so she can chat with her family. But she keeps her distance, she doesn't seem interested in my affection. Maybe she needs time to adapt. I also needed to adapt when I lived in Canada away from my family. This is what I have learned from life-coaching: She is my employee, of course, but she's human just like me and that's very important. Nada's not coming today, she must have left me a dish in the fridge last night. She's probably at Bernard's, cooking him fish with almonds. When I think about it, our breakup barely affected his life: He still has a woman to run his house, a woman to cook for him and a new woman to go out with... <br /><br />
 But I have to stop thinking about this, it's not a longer problem. I have to find a cause that will give new meaning to my life, my coach says. I will enroll in a Caritas training course on violence against women. It is very difficult for a woman to be herself, and break free of the molds that are imposed on her. It's disgraceful. Yes, this course will help me. Besides, it's Baboush's day to clean the windows. She will be able to work peacefully without me asking her for help every five minutes. I may meet new people that will enrich my daily life and increase my joy and freedom. Sometimes, life can really surprise us. 

              
          </p>
          </SectionText>
          </span>



 <span v-if="$nuxt.$route.path === '/chapterthree'">
        <SectionText class="flex flex-row">
          <p>
            <strong>3 مارس 1988</strong>
            <br />
            ما لبثنا أن انتهينا من تناول الطعام حتى راح (برنار) يلومني لأنني لم
            أفرغ المائدة فانتابني شعور بالخزي. رغبت في أن أشرح له أن كل هذا كان
            جديداً بالنسبة إلي وأنني لم أختبر قط العيش بلا بستاني ولا طبّاخ ولا
            سائق ولا خادمة ولا أمي ولا شقيقاتي، وحيدة في هذا البلد المصقع البعيد
            أكثر من تسعة آلاف كيلومتر عن وطني. كنت أود بشدة لو أن (لبنى) عاملة
            التنظيفات المغربية لم تفارقنا للعودة مساءً إلى منزلها. أنا أحب
            (برنار)، زوجي الحبيب، لذا لم أتفوّه بأي كلمة. رحت أنقل الأكواب
            والأطباق والشوك والسكاكين القذرة إلى الجلّاية. بعمر العشرين، كانت
            تلك المرة الأولى في حياتي.

            <br /><br />
            <strong>6 يونيو 1989</strong>
            <br />
            أصبح (برنار) بشكل رسميّ جرّاحاً في عيادة مهمة في (أوتاوا) وأنا فخورة
            جداً به. نشكّل عائلة جميلة. أبذل قصارى جهدي كي أدير المنزل وأكون
            أماً وزوجة صالحة. عند حلول المساء وفور رحيل (لبنى)، سرعان ما أضع
            (ياسمين) في السرير. أحاول أن أحسب وقتي جيداً فما إن تغفو، يجب أن
            أكون جاهزة لاستقبال (برنار) العائد من العيادة. حسناً فعلت عندما
            أقلعت عن دراسة علم النفس وإلّا لما استطعت أن أكرّس نفسي بالكامل
            لعائلتي. كما كانت أمي تردّد دوماً عندما كنا نعيش في (أفريقيا): إن
            حسن إدارة المنزل أصعب المهن. كانت على حق: على المرأة أن تكون سخيّة
            ومتكتمة ومتطلبة. اشتقت إلى أمي، اشتقت إلى شقيقاتي.
            <br /><br />

            <strong> 12 ديسمبر 1992</strong>
            <br />
            عندما أفكر أن (برنار) اشتكى لدى والدته عبر الهاتف من أنني لا أجالسه
            فيما يتناول العشاء مساء. شعرت باستياء كبير حتى إنني وبّخت (لبنى) فهي
            شديدة البطء لدى تنظيفها زجاج النوافذ! هو لا يدرك مدى إرهاقي في
            المساء إذ أنه يعود عند العاشرة مرتاحاً ويطلب أن أكون أنيقة ومتفرغة
            له! بعد رحيل (لبنى) عند السادسة مساء، لا تعود لدي ولا أي دقيقة فراغ.
            (ياسمين) و(زينة) تثيران عصبيّتي ولا تدعانني أرتاح ولو لدقيقة. أمي،
            أريد هذا، أمي، أريد ذاك. لا أعود أتحمّل. و(زينة) تستيقظ كل ليلة!
            بالطبع لا أستطيع الاعتماد على (لبنى) للنهوض مكاني، فالـ"مدام" نائمة
            بهدوء في منزلها! أحب زوجي (برنار) لكنه يبالغ أحياناً. مذ أصبح رئيس
            القسم، بات أقلّ تساهلاً معي فهو يحسبني طاهية والدته التي تبقى
            مستيقظة حتى الثانية صباحاً! لا! سأخلد للنوم عند العاشرة ليلاً. نقطة
            على السطر! <br /><br />

            <strong>8 أكتوبر 1996</strong>
            <br />
            تفقدني ابنتاي صوابي فهما تتشاجران باستمرار وتأمرانني ولا تباليان
            إلّا لوالدهما فيما أنهما لا تريانه أبداً.... لربما لأنهما لا تريانه
            أبداً. رغم أنني أهتم بهما نهاراً وليلاً، تخاطبانني بفظاظة ولا
            تطيعانني. أشرب كأساً من النبيذ الأبيض كل يوم عند الرابعة عصراً كي
            أتحمّل الوضع. وإلّا كنت لأقتل الجميع! يجب أن أكون فخورة بما أنجزته،
            بهذا المنزل الذي أديره بذوق، بزوجي الذي يبرع في مهنته، بابنتيّ
            اللتين أحسن تربيتهما، بالأصدقاء الذين أستقبلهم أفضل استقبال لكن
            يخالجني شعور غريب أحياناً: أشعر بالضجر. لحسن الحظ أنه لدي حديقتي
            ففيها فقط أشعر بالسعادة. أستيقظ عند الخامسة صباحاً وأبدأ بالحراثة.
            هذه هي الساعة التي أكرّسها لنفسي وأمضيها في العناية بنباتاتي وسقي
            أزهاري واقتلاع الأعشاب الضارة. عند السادسة، يستيقظ (برنار() و(زينة)
            وعلي عندئذ أن أوقف كل شيء وأكرّس نفسي لهما من دون أن آخذ نفساً.
            <br /><br />

            <strong>3 أغسطس 1998</strong>
            <br />
            الحرّ خانق والمكيّف لا يحدث أي فرق. لربما يسبّب لي الحمل نفحات
            الحرارة. عدنا إلى (بيروت) قبل شهرين وما زلت عاجزة عن التكيّف فقد
            اعتدت حياتي في (كندا)، ثم قرّر (برنار) أنه يريد أن ُيدفن في (لبنان)
            وأنا لم أفهم حتى الآن أسباب قراره الفعلية. لربما تهمّه الجراحة
            التجميلية أكثر من استئصال الأعضاء. على أي حال، ما لبث أن وصل إلى
            (بيروت) حتى أنشأ عيادة مع (روبير). أشعر بالغثيان منذ هذا الصباح.
            لحسن الحظ أن أمي طلبت لي عاملة فليبينية من (دبي). إنها مطيعة جدًا
            وفعالة ومتكتمة وبالأخص، إنها موجودة على مدار الساعة. ما كنت لأتدبر
            أموري لولاها ولولا طاهيتي. إن المنزل شاسع والعمل كثير فيه دوماً.
            للنساء هنا أياد جميلة جداً. يجب أن أتعلّم أن أشبههنّ وبالأخص ألّا
            أرتدي الملابس ذاتها يومين متتاليين. وجّهت لي (فيرا) هذه الملاحظة قبل
            أيام.
          </p></SectionText
        >


        <SectionText class="flex flex-row">
          <p>
            <br />
            <strong>20 ديسمبر 2001 </strong><br />
            أشعر بالنعاس. أنا و(برنار) نخرج باستمرار. الحفلات الخيرية التي يجب
            أن أرافقه إليها، ناهيكم عن مآدب العشاء الرسمية. إنها الواحدة عصراً
            ولا تزال (ياسمين) و(زينة) نائمتين. أرغب في أن أشدّ شعرهما فما عدت
            أتحمّل رخاوتهما. بدءاً من الغد، سأرغمهما على النهوض عند الظهر كحدّ
            أقصى ولا أبالي إذا اشتكتا لدى والدهما فسيدافع عنهما دوماً في كل
            الأحوال. دماغي في حالة غليان منذ هذا الصباح إذ علي أن أدير أموراً
            كثيرة لسهرة الميلاد. يجب أن تكون كاملة هذا العام ولا أريد أن أسمع أي
            ملاحظة من حماتي. قبل كل شيء، علي أن أهتم اليوم بعيد مولد صغيرتي
            (رنى)، أن أعدّ بطاقات الدعوة وأطلب قالب الحلوى وأختار منظّمي الحفلة
            المناسبين. أريد أن يكون عيد مولدها الثالث لا يُنتسى. عندما أفكر أن
            (ليا) ستذهب إلى (الفليبين) لمدة ثلاثة أسابيع في يناير (كانون
            الثاني)، الفكرة تقلقني فلن أتدبّر أموري بمفردي أبداً. يجب أن أطلب
            بسرعة موظفة بديلة لهذه الفترة. عشاء اليونيسيف يبدأ عند الثامنة من
            هذا المساء، علي أن أقول لمصففة الشعر أن تأتي باكراً وللسائق أن يحضر
            بذلة (برنار). فجأة، أرغب في الاهتمام بحديقتي.
            <br /><br />

            <strong>12 مارس 2002</strong>
            <br />
            (برنار) هو السعيد لأنني حامل بصبيّ. أما أنا فلا أشعر بشيء. لا وقت
            لدي للشعور بأي شيء. وصل المدرّب الرياضي للتو، أرغب في أن أطلب منه
            الانصراف. لا، لا، يجب أن أتمالك نفسي، هيا... لن أصبح راكدة بعمر
            الرابعة والثلاثين. يجب أن أبقى مستقيمة وصلبة ورشيقة القوام. يجب أن
            أفرح لأنني حامل، بصبيّ صغير، عوضاً عن الاستسلام للأفكار السوداوية
            لكن ما بيدي حيلة. الفراغ يملأني. لحسن الحظ أنني أنجح في تمالك نفسي.
            <br /><br />
            <strong>8 مايو 2005 </strong><br />
            (ليا) هربت. أنا مذهولة. أشعر بأنني فقدت امتداداً من نفسي. لا أفهم.
            مع أنني لطالما عاملتها باحترام وهي لم تشتك يوماً. هل لأنني رفعت صوتي
            بها قبل أيام عندما كسرت المزهرية اليابانية؟ هل لأن (رمزي) أيقظها
            كثيراً خلال الليل في الآونة الأخيرة؟ كيف استطاعت أن ترحل وتتركني
            وحيدة مع أولادي الأربعة، مع كل الأعمال المنزلية؟ أنا متأكدة من أن
            (برنار) سيلومني على ذلك. كلّما لامني، رغبت في عضّه. انتهيت من
            الفليبينيات فهنّ زائفات جداً.أريد أن أختارعرقاً آخر، أن أوظف عاملة
            صريحة أكثر، حنونة أكثر، التي أستطيع أن أنشىء معها علاقة مباشرة.
            سأطلب أثيوبية. <br /><br /></p
        ></SectionText>
        <img
          src="/Images/c1/sectionOne/maya-1.jpeg"
          class="w-full h-auto mt-3"
        />
   
        <SectionText class="flex flex-row">
          <p>
            <br />
            <strong>5 يناير 2008</strong><br />
            (برنار) يلومني على طباعي السيئة. طباعي ليست سيئة، لكن لدي طباع فقط!
            صحيح أن فورات غضبي تزداد: أصرخ بوجه (لاتي) وبوجه أولادي وبوجهه.
            لكنني ما عدت أتحمّل أن أكون بشكل غير مشروط بخدمة أولادي وزوجي
            وعائلتي وأصدقائي. ما عدت أتحمّل أن أكون جميلة ومبتسمة ومتكتمة. أتأمل
            نفسي خلال مآدب العشاء فيما أتأبط ذراع (برنار) ولا أعرف نفسي. من أنا؟
            ما عدت إلّا واجهة، ما عدت إلّا شبحاً عن نفسي. ما عدت قادرة على
            التنفس في هذا الزيّ التنكري الذي أرتديه منذ برهة طويلة جداً. أرغب في
            الصراخ، في البكاء، في الهروب. لحسن الحظ أنني لم أخضع لعملية تجميل
            الشفاه رغم إصرار (برنار). كانت تلك مقاومتي الصغيرة. <br /><br />

            <strong> 1 يونيو 2011</strong><br />
            اليوغا يفيدني كثيراً. أسترجع نَفَسي، تَنَفسي. أتعلّم أن أكون أنا. مذ
            إعلان الطلاق، أصبحت أنتبه أكثر للآخرين. ما عدت أخجل لأنني امرأة
            مطلقة أمام أمهات رفاق (رمزي). تحررت من سجني. أفكر في (ياسمين)
            و(زينة) وأتخيّلهما، إحداهما في (روما) والأخرى في (كندا). أود أن أقول
            لهما: كونا على سجيّتكما يا ابنتاي، خذا الوقت اللازم للاهتمام
            بحديقتكما. يجب أن أهتم أكثر بـ(لاتي) وأن أقترح عليها مشاهدة
            التلفزيون في غرفة الجلوس خلال غيابي. قلت لها هذا الصباح "أنت هنا
            لمساعدتي لكن لديك وجود خارج العمل الذي تنجزينه لأجلي. أنت موجودة يا
            (لاتي)!" لم تقل شيئاً. لربما لم تفهم. درّبنا معاً الشابة الأثيوبية
            التي أصبحت تعمل عند (برنار)، كي تدير شؤون منزله على أكمل وجه وتكوي
            بذلاته إرضاء لذوقه. علّمتها جيداً كيف تكون متكتمة فأنا أعرف (برنار).
            لا يحب الشعور بوجود الخدم في المنزل. بطريقة ما، أنا مطمئنة لأنني
            أعرف أنها تعمل لديه. هذا يخفف عني عبءاً.<br /><br />
            <strong>10 سبتمبر 2018</strong><br />
            بلغت للتو الخمسين من العمر. عما قريب، سيسافر (رمزي) إلى الخارج
            لإتمام دراسته الجامعية وسأجد نفسي وحيدة في هذا المنزل الكبير. أفتقد
            بناتي الثلاث فقد تركن فراغاً كبيراً. آمل أن يستطعن العودة هذا العام
            إلى (لبنان) لتمضية فترة الأعياد. (لاتي) سافرت إلى (أثيوبيا) لقضاء
            عطلتها ولم تعد قط. كنت أودها أن تفسر لي وأن تكلمني وأن تظهر الحدّ
            الأدنى من الاحترام والامتنان تجاهي لكنني لست حاقدة عليها. كلّ واحد
            حرّ. (بابوش) الشابة تعمل جيداً. عمرها عشرون عاماً أي إنها بعمر ابنتي
            (رنى). أعاملها برقّة، أكلّمها، أحكي لها نهاري، حمّلت لها "سكايب" على
            حاسوبها كي تتمكن من التحدث إلى عائلتها. لكنها تحافظ على مسافة بيني
            وبينها، يبدو أنها لا تريد عاطفتي. لربما تحتاج إلى الوقت للتكيّف. أنا
            أيضاً احتجت إلى التكيّف عندما عشت في (كندا) بعيداً عن عائلتي. ما
            فهمته بفضل التدريب على الحياة: إنها موظفتي بالطبع لكن إنسانيتها
            تقابل إنسانيتي وهذا أمر مهم. (ندى) لن تأتي للطهو اليوم، لا بدّ أنها
            تركت لي طبقاً في البرّاد ليلة أمس. هي حتماً عند (برنار) وتطهو له
            السمك باللوز. لدى التفكير، لم يحدث انفصالنا أي تغيير في حياته: لديه
            امرأة لإدارة منزله، وامرأة لطهو الطعام له وامرأة جديدة يخرج معها،
            لكن يجب أن أكفّ عن التفكير في هذا الأمر، ما عادت مشكلتي. يجب أن
            أُعنى بقضية، أن أعطي حياتي معنى جديداً كما يقول مدرّبي. سأتسجل في
            الدورة التمرينية التي تنظمها (كاريتاس) حول العنف الموجه ضد النساء.
            من الصعب جداً على المرأة أن تكون على سجيّتها بعيداً عن القوالب
            المفروضة عليها. هذا أمر مشين. نعم، ستفيدني هذه الدورة التمرينية.
            علاوة على ذلك، تصادف يوم تنظيف الزجاج بالنسبة إلى (بابوش). ستتمكن من
            العمل بكل هدوء من دون أن أطلب منها مساعدتي كل خمس دقائق. وقد أعيش
            لقاءات جديدة ستبهج حياتي اليومية وتزيدني فرحاً وحرية. الحياة قد
            تفاجئنا أحياناً. <br /></p
        ></SectionText>

        <img
          src="/Images/c1/sectionOne/maya-2.jpeg"
          class="w-full h-auto mt-3"
        />
</span>


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

      <!--  <SectionText class="mt-5">
          <nuxt-content :document="s27" />
        </SectionText> -->
      

        <span v-if="$nuxt.$route.path === '/en/chapterthree'">
          <SectionText class="flex flex-row">
            <p>
              When Mazen and Farah decided to start a family, approximately eight years ago, they were aware of the challenges ahead. Reconciling their professional ambitions with the demands of family life would be a complex task. They would need to devise the right formula to distribute household chores between them. The matter was even more difficult because they had nothing to base themselves on. The practices of their parents and previous generations no longer suited the current social context, particularly in light of the changing role of women, which only increased their responsibilities. More importantly, it was necessary to maintain a standard of living suitable to raising children, in a country that provides its citizens with no
              guarantees or social protection. <br /><br />

              A few years into their marriage (during which they had two children, Sari, seven and Salma, one),
              Mazen and Farah found themselves facing a dilemma. They had more and more responsibilities to bear, but their ability to handle them declined, which led to a feeling of helplessness and a loss of control over their lives. This, in turn, affected their relationship, so they sought out the help of a counselor. Below are parts of the sessions that the couple conducted with the counselor, over a period of three years, during which the couple identified ways to address conflicts caused by domestic burdens. They hired a foreign domestic worker, but their economic conditions deteriorated due to the current crisis, and they were forced to search for alternative solutions.  
              <br /><br />
              
              <b> Session 1: March 14,  2017</b>

               <br /><br />
              <strong>Farah: </strong>I admit I can’t handle this amount of pressure any more. Sometimes I feel completely broken. A few days ago, Mazen asked me "What's wrong with you? Why are you being so hysterical?" The comment really bothered me. The word is so negative and degrading to me and to women in general. As if female biology and I were to blame for not being able to catch a breath in this daily marathon. There are not enough hours in the day to do all I have to do. I'm not an octopus with eight arms to take care of everything at once: the house, the two children, my work, Mazen, and myself... I spend my nights nursing and caring for the little one. In the morning, before going to work, I try to conceal the dark circles around my tired eyes with makeup, in vain. I can't hide the traces of fatigue on my face or its effects on my deteriorating mental health. I am unable to focus at work. My colleagues have started noticing this. Recently my boss asked me, "What's happening? I know you. This is not you." She doesn't understand how exhausted I am. How can I focus on work if my mind is actively occupied with a thousand and one worries? Is Salma okay at the nursery, or has she not stopped crying since O told her goodbye this morning? Did Sari get to school on time, or was he scolded by the teacher for being late as usual? Can Mazen pick him up in the afternoon or do I have to leave the office early? I also need to go to the supermarket to buy things for the holiday. I get depressed every time Mazen tells me he has invited someone over for dinner. 
              
              <br /><br />I love meeting family and friends around the dinner table, but I don't like having to prepare food for hours, and then do all the washing and cleaning afterwards. All this while I hold Salma in my arms. There was a time she wouldn’t let me out of her sight. As soon as I left her, she would start crying. Sometimes, I can't even go into the kitchen to chop an onion. A one-hour recipe takes me four hours to finish. Sometimes I don't leave the kitchen before 11 PM. I am not seeing  my parents. I feel guilty and angry about not spending time with them. Trivial things make me angry and I can't handle comments or criticism from anyone. I even yell at my children when they have too many requests, and I feel that I can’t fulfill any of them. What I mean to say is that I am not hysterical, as Mazen claims. Our lifestyle is hysterical. <br /><br />
              
              <strong>Counselor:</strong> Have you thought of ways to ease these burdens?  <br /><br />
              
               <strong>Farah:</strong> It's one of two solutions: Either I hire someone to help me at home, or one of us quits their job to take care of the children full-time. The second option is out of the question for either of us. I will definitely not leave my job to go clean the house, especially when my job offers me a good salary and decent working hours. No, I definitely won't quit my job. Neither will Mazen. <br /><br />
               
               <strong> Counselor: </strong> Before thinking of quitting your job completely, can't you consider reducing your working hours? Or looking for a job that requires less time and effort? <br /> <br /> 
              
               <strong>Mazen:</strong> We thought of this, but came to the conclusion that it was not possible. We need both our salaries. We have many commitments: Sari's school fees, which are expensive. We have loans to repay on the house, on my car and Farah's… We were planning to buy a house in the mountains, to spend holidays and weekends outside of Beirut. And there are our family vacations, which we set a significant budget aside for. We're used to traveling twice a year. Last year, we had to cancel our Christmas vacation because of economic pressures we were facing.   
              <br /><br />

               <strong>Counselor:</strong>  Farah, what’s your opinion on this?  <br /><br />
               
               <strong>Farah: </strong> True, it’s difficult to reduce our expenses. We’re only spending on necessities that we can't really live without... Except for traveling, perhaps. Of course, we won't save on tuition fees or send our son to a less important school. And we really can't get rid of health insurance or car expenses for example. You know the state of public transportation in Lebanon–we need our cars.  
              </p>
              
              <div align="center">
        <img src="/Images/c1/sectionFive/YaraNakhle1_.jpg" />
      </div>
      <p>
        <strong>Counselor: </strong>And why won't you hire a domestic worker?  <br /><br />
              
              <strong> Farah:</strong> Mazen is opposed to the idea. I was too, at the beginning, but now  my physical and mental health are at stake. I don't like the idea of a stranger living with us and sleeping in our house. But I'm willing to give up some of myy privacy in exchange for some relief.  
              <br /><br />
              
               <strong>Mazen:</strong> It's not just about the help sleeping in our home. I can't accept the idea that a person has to work more than eight hours a day. A domestic worker continues to work as long as she is awake. The employer can ask her for anything, at any time of day. It's like slavery. The work contract of domestic workers is very unfair to them. What a hypocrite I would be if I hired a domestic worker, after I’d participated in so many protests demanding these workers' rights.
               
              <br /><br />
               It’s a concept that's alien to my culture. We call them domestic workers to avoid being labeled racist or classist. But in the vernacular, we really call them maids! I have always derided this bourgeois way of life, where a person needs a court around him to serve him. I'm not totally opposed to housework, it's a productive occupation like many other professions. But in this way? No! I can't accept it. Call it stubbornness, but I will not change my mind.  <br /><br />
              
               <strong> Session 2: July 10, 2018 </strong>
               <br /><br />
                <strong>Counselor:</strong> How did your first month with the domestic worker go?<br /><br />
                
               <strong>Farah:</strong> It was a bit strange at first, but we're starting to adapt. Mazen doesn't deal with her a lot. She still can't communicate in Arabic, and her exchanges are mostly limited to me. But she's taken a big load off my shoulders. She tends to the house, which allows me to focus on my children when I get home from work. And her personality has made it easier to accept her at home. Zoya knows her limits and is not crass, as Mazen says. He strongly opposed the idea but I was at the end of my tether, and I decided to hire help regardless of what Mazen said. I don't think it was a bad decision. She saved us.<br /><br />


               <strong> Counselor:</strong> How do you feel, and what do you think, Mazen? Are you struggling internally? <br /><br />
              
               <strong>Mazen:</strong> Yes, I am a bit conflicted. You could call it a conflict between principle and need. I could see that things were getting worse and one of us would’ve had  to quit their job. We were at a dead end. No solutions. Actually, I’m not sure that we had no other choice, but this was the easiest and most practical solution. Since Farah is more directly responsible for the house, it makes sense for her to decide how to run it. These things are outside my jurisdiction in a way. So be it! That said, in my daily life at home, I try not to rely on her. I remind myself that we’ve hired her to take care of the house, so I don't ask her to do anything for me personally. I don't ask anything of her at all. Sometimes, if I need her help, I ask Farah to relay the message.  <br /><br />
              
               <strong>Counselor:</strong> Does this alleviate your feelings of guilt and responsibility? <br /> <br />
               <strong>Mazen:</strong> It's just that I don't want to feel that this person is here to satisfy my personal needs.  <br /><br />

               <strong>Counselor:</strong> Of course, since the responsibilities and duties of the house are the realm of women. This allows you to ignore the presence of the domestic worker herself, so that you avoid the feelings associated with slavery and exploitation.  <br /><br />

              <strong>Mazen:</strong> Okay, I understand what you're saying. There may be some truth to that… It keeps my conscience clear... I will not deny it.<br /><br />

                <strong>Counselor:</strong> What about you Farah? Do you share his guilt?<br /><br />
                
             <strong> Farah:</strong> Oh the guilt, of course! It's not just about the kafala system. But let me tell you something: I feel guilty about anyone who has to do domestic chores, whether it's the help, Mazen,myself, or anyone else. Before my parents brought in a domestic worker, I saw my mother spend most of her time in the kitchen. This made me hate the kitchen and housework. I felt that it robbed a woman of her life and comfort. My mom did it out of love for my brother and me. But I could never justify it. She would put so much time and effort into such fleeting things like keeping the house clean or preparing a meal that is quickly devoured, without a word of thanks or praise in return. In the end, she had to hire a domestic worker, because her slipped disk restricted her movement. Ever since, I decided not to spend half of my life in the kitchen. That doesn't mean that I don't feel guilty about Zoya. But the difference between you and me, Mazen, is that I do not have the luxury of neglecting this responsibility. It's easy for you to say that she is "here for the house and the children, not for me." But are you really not responsible for the house? Does the responsibility rest solely on me?  <br /><br />
              
               <strong> Mazen: </strong> That's not what I meant. You know I help a lot around the house. <br /><br />
                <strong>Farah:</strong> That's true. Before Zoya came, you were doing most of the ironing
              for example. But you said it yourself: You only "help." For you, it’s helping. For me, it's a duty that I can't neglect, not  even for an instant.   <br /><br />
              
               <strong>Mazen:</strong> We always say that children's relationship with their mother and father should be the same, but I don't think that's realistic. The mother has a much greater ability to tolerate children. Maybe it’s how we were raised– I don't know. But I really feel that Farah tolerates and handles the kids better than I do.  <br /><br />
              
               <strong>Farah: </strong>That's because I have to do it. It's my role. But I keep telling you, it's not like I've already had 20 children. This is my first time as well, and I am still trying to figure out how to handle things. <br /><br />
              
               <strong>Mazen:</strong> Wait a second, Farah. You wanted children much more than I did. That's where the difference lies. When you told me of your desire to bear children, I fell into a cycle of depression and anxiety. What a huge responsibility! In the end, I accepted to take it on. But what I'm trying to say is that desire has its effects as well. I mean, you're much more capable of handling the kids than I am. Don't get me wrong, I really like spending  time with them and I do have fun. I just can't take care of them for hours on end, like you do.<br /><br />

                 <strong>Counselor:</strong> Is that another way to evade responsibility?   […] 
              </p>
                      <div align="center">
        <img src="/Images/c1/sectionFive/YaraNakhle2_.jpg" />
      </div>
      <p>
       
               <strong>Session 3: November 23, 2019  […]  </strong><br /><br /> 
               
                <strong>Farah:</strong> Do I feel jealous? I try not to think about it too much... Whenever I have these kinds of thoughts, I quickly banish them from my mind. Yesterday, for example, I came home late from work and wanted to spend some time with Salma before she went to sleep. But when I arrived, I found her with Zoya. They were sitting among toys and coloring pencils, drawing and giggling. Their happiness was written on their faces. There was something other than happiness too... How shall I put it? Familiarity perhaps. Yes, there was a deep sense of familiarity. No matter how much she loves both of us, I felt that Salma has gotten to know Zoya more than she knows me. The harmony that exists between them feels more organic than the relationship I have with my own daughter, the one I’d held in my womb. What warmth they shared! Watching them, my rage almost killed me. I thought: Oh God... She’s spent the whole day with her, isn't it my turn now? All I want is two hours with my daughter... Just the two of us and no one else. <br /><br />

              Honestly, sometimes I worry that my children will take her side or someone else's. I am their mother, and they should be loyal to me. Always. But, as I said, I don't give in to these ideas for long. I know that if I let my obsessions run, I'll end up destroying my relationship with Zoya and her relationship with the kids. She loves them very much, as if they were her own! She showers them with her motherly affection. At first this terrified me, and I tried to keep her
              away from my children, emotionally speaking. I treated her like an employee, with clear delineated tasks and rights. I attempted to define her role so that she would not infringe on mine. But soon enough I realized this was inhumane as far as she and the children were concerned. She is not a robot devoid of feeling,neither are they.No matter how much I treated her like an employee, it did not change the fact that our home was her world. It’s where she works, but it is also where she lives, where she goes to bed, with all her struggles, hopes, dreams and desires. It can't only be her job, otherwise her whole life is the job. <br />
              I can’t accept that. So I let her get close to the kids. It was pointless to resist. Anyway, it happened spontaneously and the kids quickly fell in love with her. Especially Salma. I worry about what will happen to Salma when Zoya leaves, I am afraid of the emotional damage it might cause. She is very attached to her. But when I watch her with my kids, I feel pity for her children. Two weeks ago, we were saying goodbye to Sari at the airport and Zoya was with us. I could not contain my tears even though he was only going away for one month. Then, I felt ridiculous because standing beside me was this woman who had not seen her children for almost a year and a half. And I don't see her crying. How is she not depressed all the time? There must be something I don't understand. Maybe it has to do with their culture, their way of living. Mazen: And their economic circumstances as well. 
      <br /> <br />
      
      <strong>Farah: </strong> Yes, I know. But it still doesn't make sense to me. I am talking as a mother. Motherhood is the same everywhere, regardless of culture and social status, don't you think?   <br /> <br />

              <strong>Counselor:</strong> What does motherhood mean to you?  <br /><br />
              
              <strong>Farah:</strong> It's a difficult question. I thought about it a lot, particularly after Zoya came into our home and my role had changed. I started asking myself: What is my role exactly? Is motherhood measured by the amount of time I spend with my children? Is the mother the face that children see most often? Especially for the nursing baby who is yet to understand the different roles and positions in the family… I sometimes wonder how Salma picks up our smells. Does she link her smell or mine to motherhood? It's a question that occupies me. But to answer your question, what is motherhood? I think it's a lot of things, one of which is watching your children grow. Nothing, in my opinion, compares to the time I spend with Sari and Salma. <br /><br />
              
              <strong>Counselor:</strong> You mean like the drawing session you mentioned earlier?   Farah: Exactly! She is living her motherhood with my children, while her own children grow up far from their mom. It's not fair to her children. After we said goodbye to Sari, I told her, "It's best if you go back home to your children when your contract with us expires. Your place is with them." If I were in her shoes...  <br /><br />
               
              <strong>Counselor:</strong> But you are not in her shoes…  <br /><br />
              
               Session 4: February 2, 2021 <br /><br />
               
               <strong>Farah:</strong> Zoya is leaving in a month. We can no longer afford to pay her in dollars. I’m depressed already. I started looking for part-time help, although taking care of the house will be exhausting. I will leave work only to come back home and find more work awaiting me there. And the kids, their lessons, and their activities...   <br /><br />
              
              <strong>Mazen:</strong> I, for example, think there is too much fuss about activities. I have noticed the same problem among a number of our friends. Women want to fill their children's time with activities. This lifestyle is more of a social fad. The child has to learn piano, taekwondo, squash and scuba diving... His mother has to drive him to this or that activity. And all this is done without consulting the child and checking if he wants to do it. It's an irrational desire in women, and mothers in particular, that their son be special, a "Superman" of sorts. It even develops into a kind of obsession and competition between mothers. A form of fulfillment of their own desires. </p>
          </SectionText></span
        >

        <SectionText class="flex flex-row">
          <p>
            <span v-if="$nuxt.$route.path === '/chapterthree'">
              عندما اتخذ مازن وفرح قرار تأسيسهما أسرة، قبل نحو ثماني سنوات، كانا
              يدركان ما ينتظرهما من تحديات. كان التوفيق بين طموحاتهما المهنية
              ومتطلبات الأسرة يستدعي مهمة أخرى بالغة التعقيد: ابتكار معادلة
              صائبة لتوزيع الأدوار المنزلية بينهما. وما زاد الأمر صعوبة أن لا
              معادلات مرجعية للاقتباس عنها. فهذه مصدرها ممارسات الأهل والأجيال
              السابقة عادة، لكنها أضحت خارج السياق الاجتماعي لأيامنا. وخصوصاً مع
              تغير دور المرأة، والأحرى تزايد مسؤولياتها. والأهم من ذلك، هو
              الحفاظ على مستوى معيشي يليق بانجاب أطفال في بلدٍ لا يقدم أي ضمانات
              أو حماية اجتماعية لمواطنيه. وبعد سنوات على زواجهما أنجبا خلالها
              طفلين (ساري، 7 سنوات، وسلمى سنة)، وجد مازن وفرح أنهما في مأزق:
              تراكم مسؤولياتهما، وتراجع قدرتهما على تحملهما والتصدي لها، مما ولد
              لديهما شعوراً بالعجز وفقدان السيطرة على حياتهما، وأخذ ينعكس على
              علاقتهما، فقرّرا اللجوء إلى مرشدة نفسية لتساعدهما على الخروج من
              محنتهما.
              <br />
              وفي ما يلي أجزاء من ما دار في جلسات أجراها الزوجان مع المرشدة
              النفسية، على مدى سنوات ثلاثة، توصل خلالها الثنائي إلى طريقة لتحييد
              صراعاتهما الناجمة عن الأعباء المنزلية . وذلك باستعانتهما بعاملة
              منزلية أجنبية، قبل أن تتدهور أوضاعهما الاقتصادية بفعل الأزمة
              الراهنة، فاضطرا إلى البحث عن حلولٍ ومعادلاتٍ بديلة.
              <br /><br />

              <strong>الجلسة 1: (14/03/2017) </strong><br />

              (...) فرح: أعترف أنني لم أعد قادرة على احتمال هذا الكم من الضغوط.
              أشعر أحياناً أنني منهارة تماماً. قال لي مازن منذ بضعة أيام "ما
              بالك؟ لما أنت مهسترة بهذا الشكل؟" حقيقةً، ضايقني هذا الوصف بشدة،
              فالكلمة التي استخدمها تحمل الكثير من المعاني السلبية والمهينة لي
              وللمرأة على وجه العموم. وكأنه ذنبي وذنب البيولوجيا الأنثوية أنني
              ما لم أعد قادرة على التقاط أنفاسي في هذا الماراتون اليومي.
              <br />
              لا متسع من الوقت في النهار لكي أنجز ما علي من واجبات. لست بأخطبوط،
              ولا أملك ثماني أذرع للاعتناء بهم جميعاً: البيت، الطفلين، العمل،
              ومازن نفسه، وأنا نفسي أيضاً... أمضي الليل في الرضاعة والاهتمام
              بالصغيرة. في الصباح، وقبل الذهاب إلى العمل أحاول محو الهالات
              السوداء التي تؤطر عيني الذابلتين بمستحضرات التجميل. لكن عبثاً.
              أفشل في إخفاء آثار التعب عن وجهي وعن قدراتي الذهنية المتدهورة.
              أصبحت عاجزة عن التركيز في عملي. وقد بدأ زملائي ينتبهون إلى ذلك.
              سألتني مديرتي مؤخراً: "لم أنت على هذه الحال؟ أنا أعرفك جيداً. أنت
              لست هكذا". هي لا تعرف أنني متعبة إلى هذا الحد.
              <br />
              وكيف لي أن أركز في عملي وذهني مشغول بألف قصة وقصة؟ هل سلمى بخير في
              الحضانة، أم لا تزال مستمرة في البكاء منذ أن أودعتها صباحاً؟ هل وصل
              ساري إلى المدرسة قبل أن يُقرع الجرس، أم تأخّر كالعادة فنال نصيبه
              من توبيخ الناظرة؟ هل يستطيع مازن أن يقلّه بعد الظهر أم سأضطر إلى
              مغادرة المكتب باكراً؟ آآآه يجب عليّ أن أمر على السوبرماركت أيضاً
              لشراء بعض الحاجيات اللازمة للعزومة. أشعر بالاكتئاب كلما أخبرني
              مازن أنه دعا أحدهم للعشاء. أحب اجتماع العائلة والأصدقاء حول
              المائدة. لكنني لا أحب تحضيرها لساعات، ومن ثم الجلي والتنظيف بعد
              مغادرة الضيوف. كل ذلك وسلمى على يدي.
              <br />
              في وقت من الأوقات، كنت لا أستطيع أن أغيب عن ناظريها ولو للحظة
              واحدة، اذ تبدأ بالبكاء فوراً. لا يمكنني الدخول إلى المطبخ لتقطيع
              بصلة أحياناً. الطبخة التي تتطلب مني ساعة لا تنتهي بأربع ساعات.
              أحياناً لا أستطيع الخروج من المطبخ قبل الساعة الحادية عشر مساء. لم
              أعد أرى والديّ. أشعر بالذنب، وكذلك بالغضب، لأنني لا أمضى وقتاً
              معهما. صرت أغضب لأتفه الأسباب ولا أحتمل انتقاداً أو تعليقاً من
              أحد. حتى أنني أصرخ على طفلي أحياناً حين تكثر طلباتهما وأحسّ أنني
              عاجزةً تماماً عن تلبية أي منها.
              <br />
              أقص لك هذا كله لأقول إنني لست مهسترة، كما قال مازن. لكن نمط حياتنا
              اليومية هو الهستيري.
              <br /><br />
              <strong>المرشدة: </strong>

              هل فكرت يوماً بطريقة لتخفيف هذه الأعباء؟ فرح: هناك حلّ من اثنين:
              إما أن آتي بعاملة كي تساعدني في المنزل، وإما أن يترك أحدنا عمله
              ويمكث في البيت للاعتناء بالأطفال. والخيار الثاني غير وارد لكلينا.
              بالطبع لن أترك عملي كي أنظف البيت، خصوصاً أن وظيفتي جيدة من حيث
              الأجر وساعات العمل. لا، لن أتخلى عن عملي. بالطبع لا. وكذلك مازن.
              <br /><br />
              <strong>المرشدة: </strong>

              قبل التفكير بترك الوظيفة، ألا يمكنكما التفكير بتخفيف ساعات العمل؟
              أو البحث عن أعمال تستدعي منكما جهداً ووقتاً أقلّ؟
              <br /><br />
              <strong>مازن:</strong>
              درسنا هذا الخيار، وتبيّن أنه غير ممكن. فنحن في حاجة لمرتبي
              وظيفتين. لدينا التزامات كثيرة: أقساط مدرسة ساري، وهي مرتفعة جداً.
              قروض البيت وسيارتي وسيارة فرح أيضاً. ونحن نخطط لشراء بيتٍ في الجبل
              لتمضية العطل والويك أند خارج بيروت. وهناك رحلاتنا السياحية
              العائلية التي نرصد لها مبلغاً ليس بالقليل. لقد اعتدنا على السفر
              مرتين في السنة. والعام الماضي اضطررنا إلى الغاء سفرة عيد الميلاد
              بسبب الضغوط المادية التي واجهتنا.
              <br /><br />
              <strong>المرشدة: ما رأي فرح؟ </strong><br /><br />

              <strong>فرح:</strong> نعم، لا يمكننا التخفيف من مصاريفنا. كل ما
              ننفقه من الضروريات التي لا يمكن الاستغناء عنها... باستثناء الرحلات
              السياحية ربما. بالطبع لن نوفّر في أقساط المدرسة ونرسل ابننا إلى
              مدرسة أقلّ شأناً. ويستحيل أن نتخلّى عن التأمين الصحي أو تكاليف
              السيارة مثلاً. وتعلمين أن لا مواصلات عامة في لبنان، وكل منا مضطر
              إلى اقتناء سيارة. <br /><br />

              <strong>المرشدة:</strong>

              ولماذا لا تأتيا بعاملة منزلية؟ فرح: مازن يرفض. وأنا أيضاً في
              البداية. لكن الموضوع بات متعلقاً بصحتي الجسدية والنفسية. أنا لا
              أحبذ فكرة أن يسكن معنا شخص غريب، وينام في منزلنا. لكنني صرت مستعدة
              للتنازل عن شيء من خصوصيتي لقاء بعض الراحة.

              <br />
              مازن: المسألة ليست متعلقة بنومها في منزلنا فحسب. أنا لا أستطيع أن
              أتقبل أن يعمل إنسان أكثر من ثماني ساعات في اليوم. والعاملة
              المنزلية تظل تعمل ما دامت صاحية. ويمكن لرب العمل أن يطلب منها أي
              شيء، وفي أي وقت من النهار. الأمر أشبه بالعبودية. وعقد العمل الذي
              يبرم مع العاملات المنزليات مجحف جداً في حقهن. كم سأكون منافقاً لو
              أتيت بعاملة منزلية إلى بيتي، بعدما تظاهرت مرات مطالباً بحقوق هؤلاء
              العاملات. والأمر بعيد عن ثقافتي. نسميها عاملة للتملص من تهمة
              العنصرية والطبقية. اسمها الحقيقي الدارج هو خادمة! ولطالما سخرت من
              أسلوب الحياة البرجوازي الذي يستدعي حاشية حول الشخص لخدمته. لست ضد
              العمل المنزلي بالمطلق، فهو عمل منتج كغيره من المهن، لكن بهذه
              الصيغة؟ لا! لا يمكنني تقبله. سمه عناداً إن شئت، ولن أتنازل عن
              عنادي هذا.
              <br />
              <div align="center">
                <img src="/Images/c1/sectionFive/YaraNakhle1_.jpg" />
              </div>
            </span></p
        ></SectionText>

        <!--<ImageMoveTest /> -->

        <!-- <SectionText class="mt-5">
          <nuxt-content :document="s28" />
        </SectionText> -->
        <span v-if="$nuxt.$route.path === '/chapterthree'">
          <SectionText class="flex flex-row">
            <p>
              <strong>الجلسة 2: (10/7/2018)</strong><br />
              <br />
              <strong>المرشدة:</strong>
              كيف مر الشهر الأول بوجود العاملة المنزلية في بيتكم؟
              <br /><br />
              <strong>فرح:</strong>
              كان الأمر غريباً بعض الشيء في البداية. لكننا بدأنا نتأقلم. مازن لا
              يتعامل معها كثيراً. وهي لا تزال غير قادرة على التواصل باللغة
              العربية، وعلاقتها تكاد تنحصر بي. وقد أزالت حملاً كبيراً عني. هي
              تعتني بالبيت، فيتاح لي الاعتناء بطفليّ حين أعود من العمل. وشخصيتها
              ساعدتنا على تقبلها في منزلنا. زويا شخص يلزم حدوده وليست جِلقة كما
              يقول مازن . عارض الفكرة كثيراً وبشدة. كنت قد بلغت مرحلة متقدمة من
              الشدة النفسية، فقررت أني سآتي بمن يساعدني مهما كان موقف مازن. ولا
              أظن أنه كان قراراً خاطئاً. لقد أنقذتنا.
              <br /><br />
              <strong>المرشدة:</strong>
              ما شعورك، ومارأيك يا مازن؟ هل تعيش صراعاً داخلياً؟
              <br /><br />
              <strong>مازن:</strong> نعم.. أشعر بنوع من الصراع. يمكنك القول صراع
              بين المبدأ والحاجة. كنت أرى أن الأمور تتجه نحو الأسوأ وسوف يضطر
              أحدنا إلى ترك عمله. وجدنا أننا أمام حائط مسدود.. لا حلول. في
              الحقيقة، لا أعرف إن كان لا يوجد أي حل آخر فعلاً، لكن هذا الحل هو
              الأسهل والأكثر عملية. وبما أن فرح هي المسؤولية المباشرة عن البيت،
              فمن المنطقي أن تقرر كيف تديره. هذه الأمور خارج صلاحيتي نوعاً ما.
              فليكن إذاً! لكنني في حياتي اليومية البيتية أحاول ألا أكون معتمداً
              عليها. أذكّر نفسي أننا أتينا بها للاعتناء بحاجات المنزل، فلا أطلب
              منها أن تقوم بأي شيء يخصني شخصياً. لا أطلب منها شيئاً على الاطلاق.
              وأحيانا إن كان لا بد من الاستعانة بها في أمر ما، أطلب من فرح أن
              تقول لها.

              <br /><br />
              <strong>المرشدة:</strong> هل يخفف ذلك من شعورك بالذنب والمسؤولية؟
              <br /><br />

              <strong>مازن:</strong> كل ما في الأمر أنني لا أريد الشعور بأن هذا
              الشخص موجود هنا لتلبية حاجاتي الخاصة. <br /><br />
              <strong>المرشدة:</strong> طبعاً لأن مسؤوليات المنزل وأعماله واجب
              النساء. وهذا يمكنك تجاهل وجود العاملة المنزلية نفسها، فلا تشعر
              بحضورها وما يترتّب عليه من مشاعر مرتبطة بالعبودية والاستغلال.
              <br /><br />

              <strong>مازن:</strong>
              حسناً، أفهم ما تعنيه. قد يكون هناك شيء من هذا.. أي "ترييح
              الضمير".. لن أكذب.
              <br /><br />
              <strong>المرشدة:</strong> ماذا عنك فرح؟ هل تشاطرينه إحساسه بالذنب؟
              <br /><br />
              <strong> فرح:</strong>
              آه الذنب، بالطبع! لا يتعلق الأمر بنظام الكفالة فحسب. فلأخبرك
              شيئاً: أنا أشعر بالذنب تجاه كل من يقع العمل المنزلي على عاتقه،
              العاملة المنزلية أو مازن أو أنا أو أيٍ كان. <br />

              قبل أن يأتي والديّ بعاملة منزلية، كنت أرى أمي تقضي معظم وقتها بعد
              ساعات العمل في المطبخ. ولّد ذلك عداوةً بيني وبين المطبخ والعمل
              المنزلي. شعرت أنه يسرق من حياة المرأة ومن راحتها أكثر مما ينبغي.
              أمي كانت تفعل ذلك بدافع الحب، لي ولأخي. لكنني لم أجد يوماً مبرراً
              للأمر. أعني أن تمنح كل ذلك الوقت والجهد لشيء سريع الزوال، كنظافة
              البيت أو الطعام الذي سنتناوله على عجل من دون مقابلتها بكلمة شكر أو
              ثناء. في النهاية، اضطرت إلى توظيف عاملة منزلية لأنها لم تعد قادرة
              على الحركة بسبب "الديسك". منذ ذلك الحين، قرّرت ألا أفني نصف حياتي
              في المطبخ. هذا لا يعني أنني لا أشعر بالذنب تجاه زويا. لكن الفرق
              بيني وبينك يا مازن أنني لا أملك رفاهية التهرب من المسؤولية في هذا
              الخصوص. يمكنك القول ببساطة إنها "موجودة من أجل البيت والأطفال وليس
              من أجلي"، لكن هل أنت معفي من مسؤولية البيت؟ هل هي مسؤوليتي وحدي؟
              <br /><br />
              <strong>مازن:</strong> ليس هذا ما قصدته. أنت تعلمين أنني أساعد
              كثيراً في البيت. <br /><br />

              <strong> فرح:</strong> هذا صحيح. قبل مجيء زويا كنت تقوم بمعظم مهام
              الكوي مثلا، لكنك قلتها بنفسك. أنت "تساعد" فقط. بالنسبة لك، هي
              مساعدة. أما بالنسبة لي، فهو واجب لا يمكن التخلّف عنه ولو للحظة.
              <br /><br />
              <strong>مازن:</strong> نقول إن علاقة الأطفال بالأم والأب يجب أن
              تكون على نفس المستوى، لكنني أظن أن هذا الأمر غير واقعي. فقدرة
              احتمال الطفل أعلى بكثير عند الأم. ربما لأننا تربينا هكذا، لا أدري.
              لكنني أشعر فعلاً بأن فرح قادرة على تحمل الأولاد والتعامل معهم أفضل
              مني. <br /><br />

              <strong>فرح: </strong>هذا لأنني مضطرة لفعل ذلك. إنه دوري. لكنني
              دائماً أقول لك أنني لم أنجب 20 طفل قبل ذلك. إنها تجربتي الأولى،
              وما زلت أحاول أن أفهم كيف أتصرف بشأنها.<br /><br />

              <strong>مازن:</strong> لكن مهلاً فرح، رغبتك بأن تنجبي طفلاً كانت
              تفوق رغبتي بكثير. وهنا المفارقة. في الحقيقة، لم أرد أطفالاً على
              الإطلاق. حين أخبرتني عن رغبتك بانجاب الأطفال، دخلتُ في حلقة من
              الاكتئاب والقلق. يا لها من مسؤولية! وقد قبلت بهذه المسؤولية في
              النهاية. لكن ما أحاول قوله أن للرغبة مفعولها أيضاً. أعني أن قدرتك
              على احتمال الأطفال تفوق قدرتي. مع أنني أحب أن أمضي الوقت معهم
              وأستمتع فعلاً، لكنني لست قادراً على الاعتناء بهم لساعات كما
              تفعلين.
              <br />
              المرشدة: هل هذه أيضاً طريقة للتهرب من المسؤولية؟
              <br /><br />
              (...)
              <br /><br />
              <strong> الجلسة 3: (23/11/2019) </strong>
              <br /><br />
              (...)<br /><br />

              <strong>فرح: </strong>هل أشعر بالغيرة؟ أحاول ألا أفكر في الموضوع
              كثيراً.. حين تراودني أفكار من هذا النوع، أسارع إلى نزعها من رأسي.
              أمس مثلاً، تأخرت في العودة من العمل وأردت قضاء القليل من الوقت مع
              سلمى قبل أن تنام. لكن حين وصلت، وجدتها برفقة زويا. كانتا تجلسان
              وسط الألعاب والأقلام والألوان، ترسمان وتقهقهان. كانت البهجة واضحة
              على وجهيهما. وكان ثمة شيء آخر غير البهجة.. كيف أصفه؟ الإلفة ربما.
              نعم كان هناك شعور عميق بالإلفة. بغض النظر عن مقدار الحب الذي تكنه
              لكل منا، أحسست أن سلمى تألفها أكثر مما تألفني، وأن الانسجام بينهما
              أكثر عضوية من العلاقة التي تربطني بها، هي التي جاءت من رحمي. كم
              كان مظهرهما معاً مفعماً بالدفئ! كدت أموت من الغيظ. فكرت: يا الله..
              لقد قضت معها النهار بأكمله.. ألم يحن دوري؟ كل ما أريده هو ساعتين
              مع ابنتي.. نحن الاثنتين فقط ولا أحد آخر. أحياناً .. سأكون صادقة..
              أحياناً أخاف أن يأخذ الأطفال صفها أو صف أي أحد آخر. أنا أمهم،
              وولاءهم يجب أن يكون لي. دائماً. لكن.. كما قلت لك. لا لا لن أستسلم
              لهذه الأفكار طويلاً. أعلم أنني إن أطلقت العنان لهواجسي، سوف ينتهي
              بي الأمر بتدمير علاقتي بها وعلاقتها بالأطفال. هي تحبهم كثيراً. مثل
              أطفالها.. حقاً! انها تغمرهم بعاطفتها الأمومية. <br />
              أرعبني الأمر في البداية، فحاولت أن أبعدها عن أطفالي، أبعدها
              بالمعنى العاطفي. أن أعاملها كموظفة. مهامها واضحة، حدودها مرسومة
              وحقوقها محفوظة. حاولت أن أحدد لها دورها بدقة كي لا تتعدى على دوري.
              لكن بعد مدة، تنبهت إلى أن الأمر ليس إنسانياً، بحقها وبحق الأطفال
              أيضاً. هي ليست روبوت مجرد من العاطفة، وهم كذلك. ومهما حاولت أن
              أنظر اليها واتعامل معها كموظفة، فذلك لن ينفِ حقيقة أن منزلنا هو
              عالمها في الوقت الحالي. إنه عملها ومكان إقامتها والمكان الذي تخلد
              فيه إلى الفراش بكل ما يعتريها من صراعاتٍ وآمالٍ وأحلامٍ ورغبات. لا
              يمكن أن يكون الأمر مجرد وظيفة بالنسبة لها، وإلا فان حياتها كلها
              ليست سوى وظيفة. وهذا أمر لا أستطع أن أقبله. لذا سمحت لها بالتقرب
              من الأطفال. لا طائل من مقاومة هذا الأمر. أصلاً حدث الأمر بطريقة
              تلقائية وأحبها الأطفال بسرعة. خصوصاً سلمى. يقلقني ما سيحل بسلمى
              حين تغادر زويا، أخاف أن تصاب باضطراب نفسي. إنها متعلقة بها للغاية.
              لكن حين أشاهدها مع أطفالي، أشفق على أطفالها. منذ أسبوعين، كنا نودع
              ساري في المطار وكانت زويا برفقتنا. لم أستطع أن أحبس دموعي صراحةً،
              مع أنه سيغيب لشهر فقط. شعرت بالتفاهة حينها، ففي جانبي تقف امرأة لم
              ترى أولادها منذ سنة ونصف تقريباً. ولا أراها تبكي. كيف لا أراها
              مكتئبة طوال الوقت؟ ثمة شيء لا أفهمه. إنه أمر مرتبط بثقافتهم ربما..
              بنظام حياتهم. <br /><br />

              <strong>مازن:</strong> وبظروفهم الاقتصادية أيضاً.<br /><br />
              <strong>فرح: </strong>أجل أعلم. لكن الأمر يظل غير مفهوم بالنسبة
              اليّ. أتحدث كأم الآن. الأمومة هي نفسها في كل مكان، بعض النظر عن
              الثقافة والحالة الاجتماعية. ألا تعتقدين؟ <br /><br />
              <strong>المرشدة:</strong> وماذا تعني الأمومة بالنسبة لك؟
              <br /><br />
              <strong>فرح:</strong> إنه سؤال صعب. لقد فكرت بالأمر مطولاً،
              تحديداً بعدما دخلت زويا الى منزلنا، وتغير دوري بشكل او بآخر، فصرت
              أتساءل: ما هو دوري بالظبط؟ هل تقاس الأمومة بالوقت الذي أقضيه مع
              أطفالي؟ هل الأم هي الوجه الأكثر تكراراً بالنسبة للطفل؟ خصوصاً في
              حالة الرضيعة التي لم تفهم بعد مواقع الجميع في الأسرة. أتساءل
              أحياناً كيف تتلقف سلمى رائحة كل منا. هل تربط رائحتها أم رائحتي
              بالأمومة؟ إنه سؤال يشغلني. لكن، لأجبك عن سؤالك أولاً، ما هي
              الأمومة؟ أظنها أشياء كثيرة، واحد منها أن تشاهدي أطفالك يكبرون
              أمامك. لا شيء يضاهي، بالنسبة لي، ذلك الوقت القيم الذي أقضيه مع
              ساري وسلمى. <br /><br />
              <strong>المرشدة:</strong> تقصدين كجلسة الرسم التي أشرت اليها
              سابقاً؟ <br /><br />
              <strong>فرح:</strong> تماماً! انها تحيى أمومتها مع أطفالي فيما
              يكبر أطفالها بعيداً عن أمهم. هذا ليس عادلاً بحق أطفالها. بعد أن
              ودعنا ساري قلت لها: "الأفضل أن تنهي عقدك معنا وتعودي إلى أطفالك.
              مكانك معهم". أنا لو كنت مكانها... <br /><br />
              <strong> المرشدة:</strong> لست مكانها…

              <br /><br />
              <strong> الجلسة 4: (16/02/2021)</strong><br /><br />
              <strong>فرح:</strong> سوف تغادر زويا بعد شهر. لم يعد بمقدورنا تحمل
              كلفة توظيفها بالدولار. لكنني مكتئبة منذ الآن. بدأت أبحث عن عاملات
              بدوام جزئي، رغم أن تدبير أمور البيت سيبقى مرهقاً. سوف أضطر إلى
              العودة من العمل كي أجد مزيداً من العمل ينتظرني في البيت. والاطفال
              وتدريسهم والاهتمام بنشاطاتهم. <br /><br />
              <strong>مازن:</strong> أنا أرى مثلاً أن هناك مبالغة في موضوع
              النشاطات. لقد لاحظت المشكلة نفسها لدى عدد من أصدقائنا. النساء يردن
              ملئ وقت الأطفال بالنشاطات. أسلوب الحياة هذا صار أشبه بصيحة أو موضة
              اجتماعية. يجب أن يتعلم الطفل البيانو والتكواندو والسكواش والسكوبا
              دايفينغ. ويجب أن تقلّه أمه إلى هذا النشاط أو ذاك. وهذا كله بلا
              استشارة الولد والتحقق من رغبته. ثمة شيء غير عقلاني لدى المرأة،
              الأم تحديداً، أي رغبتها في أن يكون ابنها مميزاً، "سوبرمان". كما
              أنه يمسي نوعاً من الهوس والمنافسة بين الأمهات. شكل من أشكال تحقيق
              رغباتهن الخاصة. <br />
              <br />
              <strong>فرح:</strong> لا.. الأمر ليس كذلك يا مازن. أنا أعتبر أنني،
              ما دمت قد أتيت بهذا الطفل الى هذا العالم، فعليّ أن أقدم له أفضل ما
              يكون. أنا لا أجبر ساري على الذهاب الى صف الموسيقى ما لم يرغب.
              لكنني بالطبع أحثه على ذلك. لن أنكر أنني أتمنى أن يتقن ابني فناً أو
              رياضةً ما، ألا تتمنى ذلك؟ <br /><br />
              <strong>مازن:</strong> بلى.. أتمنى ذلك، لكن ليس على حساب صحتي
              وصحتك. أعاني من ألم في الظهر وانت نفسك تعانين من ألم في المفاصل،
              ولكي نظل قادرين على إعالة أطفالنا، علينا بقليلٍ من الراحة. أترجاها
              أحياناً لكي تترك عمل البيت وتستلقي على الأريكة كما أفعل في المساء.
              لكنها تصر على مسح البيت أو إزالة الغبار. أقول لها ليس هناك داعي
              للمسح كل يوم. لك الحق أن ترتاحي. تأقلمي قليلاً مع الفوضى.
              <br /><br />
              <strong>فرح:</strong> أنا لا أعطي نفسي حق الراحة. لكنك من النوع
              الذي إن أرى شيئاً في غير مكانه ينزعج فوراً ويطالب باعادته الى حيث
              كان. <br /><br />
              <strong>مازن:</strong> هذا كي لا نمضي وقتاً أطول في التنظيف
              والترتيب. <br /><br />
              <strong>فرح:</strong> لكن هناك الأولاد...<br /><br />
              <strong>مازن: </strong>الأولاد، بالأخص، يجب أن يتعلموا كيف يعتنون
              بأنفسهم وبالأشياء من حولهم. أن يكونوا واعين لحركتهم في البيت. إن
              أردت أن تأكل، فعليك أن تغسل الأواني. إن أرقت بعضاً من الحساء على
              السجادة، فعليك أن تنظفها بنفسك. ان احتجت إلى كوب ماء، فاتجّه إلى
              المطبخ. إنه نوع من تحمل المسؤولية. لا أريد لأطفالي أن يتربوا وهم
              يظنون أن العالم يسير هكذا. أي أنهم لو احتاجوا كوب ماء فهناك من
              سيجلبه لهم، وأن بامكانهم ان يخلّفوا الفوضى وراءهم لأن هناك من
              سيعيد الأمور الى نصابها. هذه العقلية تنسحب على كل شيء في النهاية.
              أريدهم أن يعلموا منذ الآن أن عليهم أن يعتنوا بأنفسهم. هم مسؤولون
              عن وجودهم وعن نظافتهم الخاصة ونظافة المحيط الذي يعيشون فيه. وجود
              زويا خلق نوع من الاتكالية في العائلة. أتحدث عن سلوكياتنا جميعاً.
              كنا نوضب ثيابنا المتسخة عند الاستحمام، صرنا نتركهم على أرضية
              الحمام. كنت أكره هذا النوع من السلوكيات، وبتّ أمارسها دون وعي.. أو
              بقليلٍ من الوعي وكثير من التناسي. حتى الأطفال، يتركون أغراضهم على
              الأرض. يفردون الألعاب في كل مكان، وينتظرون من يوضبها. <br /><br />
              <strong>فرح:</strong> لكن الأولاد لم يوضبوا ألعابهم يوماً. حتى قبل
              مجيء زويا. كنت أنا من يوضب حاجياتهم. ببساطة، الصراع انتقل مني
              اليها. وبعد مغادرتها، عدنا لمواجهة هذا الصراع من جديد.
              <br /><br />
              <strong>مازن:</strong> صدقيني، أعلم ما ينتظرنا. أعرف أن الأمر لن
              يكون سهلاً بعد أن اعتدنا على وجودها. لكن يجب أن تتغير بعض الأمور.
              أسلوب الحياة الذي عهدناه لم يعد ممكناً. الأمر مضحك بعض الشيء، إذ
              علينا أن نخفف من حجم الاستهلاك من حجم انتاجنا للأوساخ. أفكر
              أحياناً أن هذه الأزمة الاقتصادية، بالرغم من كارثيتها وانعكاساتها
              السلبية علينا، لكنها قد تكون فرصة لأطفالنا كي يتعلموا تحمل
              المسؤولية وقضاء حاجاتهم بأنفسهم، وكي يعرفوا أن ليس بامكانهم دائماً
              الحصول على ما يرغبون به. <br />
              وهي فرصة لنا كي نعيش أسلوب حياة أكثر بساطة. لطالما شعرت أننا نورط
              أنفسنا بمسؤوليات وجهد إضافي لا ضرورة له. لقد فرض علينا النظام
              الاقتصادي نهج حياةٍ عام أصبح من الصعب الخروج عنه. سأعطيك مثلاً عن
              نهج حياة مختلف. جاري في الجبل يشغّل عاملاً سورياً للاعتناء بالمنزل
              والحديقة في غيابه. جاء هذا العامل بأسرته من سوريا، زوجته وأطفاله
              الستة، وهم يعيشون في بيت مكون من غرفتين. يأكلون البيض والزيتون كل
              يوم ربما، والأخت الكبرى تربي الطفلة الرضيعة. وبالرغم من أن عمله في
              الحديقة مضني جسدياً لكنني أحسه اكثر استرخاءً مني، فمتطلبات عيشه
              أقل بكثير من متطلبات عيشي. أشعر أننا قد أقحمنا أنفسنا في نفق من
              المتطلبات والمسؤوليات التي ستظل تتفاقم كلما كبر الأولاد. أتساءل
              أحياناً، ماذا فعلنا بأنفسنا؟
              <br /><br />
              <strong>فرح:</strong> أتمنى أن أراك تحيا يوميات هذا العامل السوري
              الذي تتحدث عنه. لا أظنّ أنك سوف تصمد لأسبوعٍ واحد من دون كل وسائل
              الراحة والرفاهية التي اعتدت عليها، من المنزل والسيارة المكيفة،
              والعشيات والسهرات وخدمات التوصيل، و"فرشة الفوم"، و الـ "fancy
              ساوند سيستم" الذي قمت بإعداده في البيت، والغسالة الأوتوماتيكية. هل
              أنت مستعدّ لغسل الملابس "على إيدك" في حال عدم توفر التيار
              الكهربائي؟ أم من المفترض أن أقوم وحدي بهذا العمل؟ الحجرة التي
              يسكنها ذاك العامل مع أطفاله الستة، كلفتها أقل من تكلفة الاضاءة في
              منزلنا، تلك التي أوصيت عليها من الخارج. تقول أن الضوء الأبيض
              الرخيص يصيبك بالكآبة. ما بالك بالامتيازات الأخرى التي لا تقيم لها
              اعتباراً لأنك تحسبها من المسلمات. لكن هذه المسلمات تتطلب مني، ومن
              زويا، جهداً كبيراً. أظنّ أنك سوف تفتقد حضورها بشدة. سوف تفتقد
              الرفاهية التي كانت تؤمنها لك من دون أن تلحظ، وإن كابرت على ذلك.<br />

              <div align="center">
        <img src="/Images/c1/sectionFive/YaraNakhle2_.jpg" />
      </div>
            </p>
          </SectionText>
        </span>
      </div>
             

      <SectionText class="mt-5">
       <span v-if="$nuxt.$route.path === '/chapterthree'">
        <nuxt-content :document="s29" />
        </span>
      </SectionText>



    </div>
    <div align="center">
      <img src="/Images/c1/sectionFive/YaraNakhle3_.jpg" />
    </div>

    <SectionText class="flex flex-row">
          <p>
            <span v-if="$nuxt.$route.path === '/en/chapterthree'">

            <strong>Farah: </strong> No, it's not like
              that, Mazen. Since I brought this child into this world, I feel I ought to give him the best things there are. I don't force Sari to go to music class unless he wants to. Of course I urge him to go. I don't deny that I wish my son would master an art or a sport. Don't you wish that too?  <br /><br />

              <strong> Mazen:</strong> I do, but not at the expense of your health or mine. I suffer from backaches, and you have joint pains. In order to continue caring for our children, we need to get our share of rest. I sometimes beg her to stop cleaning the house and lie down on the couch, as I do, in the evening. But she insists on sweeping and dusting the house. I tell her that there's no need to do these chores every day. You have the right to rest. Get used to a bit of disorder. <br /><br />
              
              <strong>Farah:</strong> I don't give myself the right to rest. But you're also the kind of person who gets upset when something is not in its right place and you demand that it's returned to where it should be.<br /><br />

              <strong>Mazen: </strong> That’s meant to avoid spending time cleaning and putting things in order.<br /><br />
              
              <strong>Farah: </strong> But there are the kids… <br /><br />
              <strong>Mazen: </strong> The kids in particular ought to learn to take care of themselves and the things around them. They should be aware of their movements at home. If you want to eat, you have to wash the dishes. If you spill soup on the carpet, you have to clean it yourself. If you want a glass of water, you go to the kitchen. It's a way of taking responsibility. I don't want my children to grow up thinking this is how the world works: If they need a glass of water, someone will bring it to them, and that they can leave a mess behind because someone is there who will put things back in order. This mentality takes over everything in the end. I want to teach them early on that they have to take care of themselves. They are responsible for their own existence and for the order of the surroundings in which they live. Zoya's presence creates a kind of dependency in the family. And I'm talking about how all of us behave. We used to fold our dirty clothes when we showered, now we just leave them on the bathroom floor. I used to hate this sort of behavior, and now I unconsciously practice it...or slightly consciously but with willful ignorance. Even the children leave their things lying around on the floor. They strew their toys everywhere, and wait for someone to pick them up. <br /><br />
               
              <strong>Farah:</strong> But the kids never picked up their toys, even before Zoya joined us. I used to do that. That struggle simply moved from me to her. And after she leaves, we'll have to face that struggle again.  <br /><br />

              <strong> Mazen:</strong> Believe me, I am well aware of what lies ahead. I know that it won't be easy, because we got used to her presence. But some things will have to change. The lifestyle we had is no longer possible. It's kind of funny, because we will have to reduce the amount of things we consume, and therefore the amount of garbage we produce. I sometimes think that although this economic crisis is catastrophic and is negatively affecting us, it offers our children an opportunity to learn to take responsibility and tend to their own needs. It will teach them that they can't always get what they want.   It is also an opportunity for us to adopt a simpler lifestyle. I have always felt that we burden ourselves with unnecessary responsibilities and efforts. The economic system has imposed a way of life from which it is difficult to break free. Let me give you an example of a different lifestyle. My neighbor in the mountain employs a Syrian laborer to take care of the house and garden in his absence. The worker came with his family from Syria. He lives with his wife and six children in a two-room house. Maybe they eat eggs and olives every day. The older sister helps raise the baby girl. Although his workin the garden is physically strenuous, I feel he is more relaxed than I am, his life is much less demanding than mine. I feel like we have dragged ourselves into a whirlpool of demands and responsibilities that will only get worse as the kids get older. Sometimes I wonder, what have we done to ourselves?<br />
<br />
              <strong>Farah:</strong> I would like to see you living the day-to-day life of this Syrian worker you mention. I don't think you would last a week without the comforts and luxuries that you're used to, whether it's the house, the air-conditioned car, the nights out, the delivery services, the foam mattress, the fancy sound system you set up at
              home and the automatic washing machine. Are you ready to wash clothes by hand when there is no electricity? Or am I supposed to do it alone? The room in which this worker lives with his six children costs less than the lighting in our house, which you imported from abroad. You say that cheap white light depresses you. What about the other privileges that you take for granted? They require a great deal of effort from Zoya and me. I think you will miss her very much. You will miss the unnoticed luxury that she offered, despite your contempt for it.


</span></p></SectionText>
    <!--
    <SectionText class="mt-5 mb-16">
      <nuxt-content :document="s30" />
    </SectionText> -->

    <span v-if="$nuxt.$route.path === '/chapterthree'">
      <SectionText class="flex flex-row">
        <p>
          <strong>الجلسة 3: (23/11/2019)</strong>
          <br />
          (...)<br />
          <br />
          <strong>فرح: </strong>هل أشعر بالغيرة؟ أحاول ألا أفكر في الموضوع
          كثيراً.. حين تراودني أفكار من هذا النوع، أسارع إلى نزعها من رأسي. أمس
          مثلاً، تأخرت في العودة من العمل وأردت قضاء القليل من الوقت مع سلمى قبل
          أن تنام. لكن حين وصلت، وجدتها برفقة زويا. كانتا تجلسان وسط الألعاب
          والأقلام والألوان، ترسمان وتقهقهان. كانت البهجة واضحة على وجهيهما.
          وكان ثمة شيء آخر غير البهجة.. كيف أصفه؟ الإلفة ربما. نعم كان هناك شعور
          عميق بالإلفة. بغض النظر عن مقدار الحب الذي تكنه لكل منا، أحسست أن سلمى
          تألفها أكثر مما تألفني، وأن الانسجام بينهما أكثر عضوية من العلاقة التي
          تربطني بها، هي التي جاءت من رحمي. كم كان مظهرهما معاً مفعماً بالدفئ!
          كدت أموت من الغيظ. فكرت: يا الله.. لقد قضت معها النهار بأكمله.. ألم
          يحن دوري؟ كل ما أريده هو ساعتين مع ابنتي.. نحن الاثنتين فقط ولا أحد
          آخر. أحياناً .. سأكون صادقة.. أحياناً أخاف أن يأخذ الأطفال صفها أو صف
          أي أحد آخر. أنا أمهم، وولاءهم يجب أن يكون لي. دائماً. لكن.. كما قلت
          لك. لا لا لن أستسلم لهذه الأفكار طويلاً. أعلم أنني إن أطلقت العنان
          لهواجسي، سوف ينتهي بي الأمر بتدمير علاقتي بها وعلاقتها بالأطفال. هي
          تحبهم كثيراً. مثل أطفالها.. حقاً! انها تغمرهم بعاطفتها الأمومية.
          <br />
          أرعبني الأمر في البداية، فحاولت أن أبعدها عن أطفالي، أبعدها بالمعنى
          العاطفي. أن أعاملها كموظفة. مهامها واضحة، حدودها مرسومة وحقوقها
          محفوظة. حاولت أن أحدد لها دورها بدقة كي لا تتعدى على دوري. لكن بعد
          مدة، تنبهت إلى أن الأمر ليس إنسانياً، بحقها وبحق الأطفال أيضاً. هي
          ليست روبوت مجرد من العاطفة، وهم كذلك. ومهما حاولت أن أنظر اليها
          واتعامل معها كموظفة، فذلك لن ينفِ حقيقة أن منزلنا هو عالمها في الوقت
          الحالي. إنه عملها ومكان إقامتها والمكان الذي تخلد فيه إلى الفراش بكل
          ما يعتريها من صراعاتٍ وآمالٍ وأحلامٍ ورغبات. لا يمكن أن يكون الأمر
          مجرد وظيفة بالنسبة لها، وإلا فان حياتها كلها ليست سوى وظيفة. وهذا أمر
          لا أستطع أن أقبله. لذا سمحت لها بالتقرب من الأطفال. لا طائل من مقاومة
          هذا الأمر. أصلاً حدث الأمر بطريقة تلقائية وأحبها الأطفال بسرعة. خصوصاً
          سلمى. يقلقني ما سيحل بسلمى حين تغادر زويا، أخاف أن تصاب باضطراب نفسي.
          إنها متعلقة بها للغاية. لكن حين أشاهدها مع أطفالي، أشفق على أطفالها.
          منذ أسبوعين، كنا نودع ساري في المطار وكانت زويا برفقتنا. لم أستطع أن
          أحبس دموعي صراحةً، مع أنه سيغيب لشهر فقط. شعرت بالتفاهة حينها، ففي
          جانبي تقف امرأة لم ترى أولادها منذ سنة ونصف تقريباً. ولا أراها تبكي.
          كيف لا أراها مكتئبة طوال الوقت؟ ثمة شيء لا أفهمه. إنه أمر مرتبط
          بثقافتهم ربما.. بنظام حياتهم.
          <br /><br />

          <strong>مازن:</strong> وبظروفهم الاقتصادية أيضاً.<br /><br />
          <strong>فرح:</strong> أجل أعلم. لكن الأمر يظل غير مفهوم بالنسبة اليّ.
          أتحدث كأم الآن. الأمومة هي نفسها في كل مكان، بعض النظر عن الثقافة
          والحالة الاجتماعية. ألا تعتقدين؟ <br /><br />
          <strong>المرشدة: </strong>وماذا تعني الأمومة بالنسبة لك؟ <br /><br />
          <strong>فرح: </strong>إنه سؤال صعب. لقد فكرت بالأمر مطولاً، تحديداً
          بعدما دخلت زويا الى منزلنا، وتغير دوري بشكل او بآخر، فصرت أتساءل: ما
          هو دوري بالظبط؟ هل تقاس الأمومة بالوقت الذي أقضيه مع أطفالي؟ هل الأم
          هي الوجه الأكثر تكراراً بالنسبة للطفل؟ خصوصاً في حالة الرضيعة التي لم
          تفهم بعد مواقع الجميع في الأسرة. أتساءل أحياناً كيف تتلقف سلمى رائحة
          كل منا. هل تربط رائحتها أم رائحتي بالأمومة؟ إنه سؤال يشغلني. لكن،
          لأجبك عن سؤالك أولاً، ما هي الأمومة؟ أظنها أشياء كثيرة، واحد منها أن
          تشاهدي أطفالك يكبرون أمامك. لا شيء يضاهي، بالنسبة لي، ذلك الوقت القيم
          الذي أقضيه مع ساري وسلمى. <br /><br />
          <strong>المرشدة:</strong> تقصدين كجلسة الرسم التي أشرت اليها سابقاً؟
          <br /><br />
          <strong>فرح:</strong> تماماً! انها تحيى أمومتها مع أطفالي فيما يكبر
          أطفالها بعيداً عن أمهم. هذا ليس عادلاً بحق أطفالها. بعد أن ودعنا ساري
          قلت لها: "الأفضل أن تنهي عقدك معنا وتعودي إلى أطفالك. مكانك معهم". أنا
          لو كنت مكانها... <br /><br />
          <strong>المرشدة:</strong> لست مكانها…

          <br /><br />
          <strong>الجلسة 4: (16/02/2021)</strong><br /><br />
          <strong>فرح:</strong> سوف تغادر زويا بعد شهر. لم يعد بمقدورنا تحمل
          كلفة توظيفها بالدولار. لكنني مكتئبة منذ الآن. بدأت أبحث عن عاملات
          بدوام جزئي، رغم أن تدبير أمور البيت سيبقى مرهقاً. سوف أضطر إلى العودة
          من العمل كي أجد مزيداً من العمل ينتظرني في البيت. والاطفال وتدريسهم
          والاهتمام بنشاطاتهم. <br /><br />
          <strong>مازن:</strong> أنا أرى مثلاً أن هناك مبالغة في موضوع النشاطات.
          لقد لاحظت المشكلة نفسها لدى عدد من أصدقائنا. النساء يردن ملئ وقت
          الأطفال بالنشاطات. أسلوب الحياة هذا صار أشبه بصيحة أو موضة اجتماعية.
          يجب أن يتعلم الطفل البيانو والتكواندو والسكواش والسكوبا دايفينغ. ويجب
          أن تقلّه أمه إلى هذا النشاط أو ذاك. وهذا كله بلا استشارة الولد والتحقق
          من رغبته. ثمة شيء غير عقلاني لدى المرأة، الأم تحديداً، أي رغبتها في أن
          يكون ابنها مميزاً، "سوبرمان". كما أنه يمسي نوعاً من الهوس والمنافسة
          بين الأمهات. شكل من أشكال تحقيق رغباتهن الخاصة. <br /><br />

          <strong>فرح: </strong>لا.. الأمر ليس كذلك يا مازن. أنا أعتبر أنني، ما
          دمت قد أتيت بهذا الطفل الى هذا العالم، فعليّ أن أقدم له أفضل ما يكون.
          أنا لا أجبر ساري على الذهاب الى صف الموسيقى ما لم يرغب. لكنني بالطبع
          أحثه على ذلك. لن أنكر أنني أتمنى أن يتقن ابني فناً أو رياضةً ما، ألا
          تتمنى ذلك؟ <br /><br />
          <strong>مازن:</strong> بلى.. أتمنى ذلك، لكن ليس على حساب صحتي وصحتك.
          أعاني من ألم في الظهر وانت نفسك تعانين من ألم في المفاصل، ولكي نظل
          قادرين على إعالة أطفالنا، علينا بقليلٍ من الراحة. أترجاها أحياناً لكي
          تترك عمل البيت وتستلقي على الأريكة كما أفعل في المساء. لكنها تصر على
          مسح البيت أو إزالة الغبار. أقول لها ليس هناك داعي للمسح كل يوم. لك
          الحق أن ترتاحي. تأقلمي قليلاً مع الفوضى. <br /><br />
          <strong>فرح:</strong> أنا لا أعطي نفسي حق الراحة. لكنك من النوع الذي
          إن أرى شيئاً في غير مكانه ينزعج فوراً ويطالب باعادته الى حيث كان.
          <br /><br />
          <strong>مازن:</strong> هذا كي لا نمضي وقتاً أطول في التنظيف والترتيب.
          <br /><br />
          <strong>فرح:</strong> لكن هناك الأولاد...<br /><br />
          <strong>مازن: </strong>الأولاد، بالأخص، يجب أن يتعلموا كيف يعتنون
          بأنفسهم وبالأشياء من حولهم. أن يكونوا واعين لحركتهم في البيت. إن أردت
          أن تأكل، فعليك أن تغسل الأواني. إن أرقت بعضاً من الحساء على السجادة،
          فعليك أن تنظفها بنفسك. ان احتجت إلى كوب ماء، فاتجّه إلى المطبخ. إنه
          نوع من تحمل المسؤولية. لا أريد لأطفالي أن يتربوا وهم يظنون أن العالم
          يسير هكذا. أي أنهم لو احتاجوا كوب ماء فهناك من سيجلبه لهم، وأن
          بامكانهم ان يخلّفوا الفوضى وراءهم لأن هناك من سيعيد الأمور الى نصابها.
          هذه العقلية تنسحب على كل شيء في النهاية. أريدهم أن يعلموا منذ الآن أن
          عليهم أن يعتنوا بأنفسهم. هم مسؤولون عن وجودهم وعن نظافتهم الخاصة
          ونظافة المحيط الذي يعيشون فيه. وجود زويا خلق نوع من الاتكالية في
          العائلة. أتحدث عن سلوكياتنا جميعاً. كنا نوضب ثيابنا المتسخة عند
          الاستحمام، صرنا نتركهم على أرضية الحمام. كنت أكره هذا النوع من
          السلوكيات، وبتّ أمارسها دون وعي.. أو بقليلٍ من الوعي وكثير من التناسي.
          حتى الأطفال، يتركون أغراضهم على الأرض. يفردون الألعاب في كل مكان،
          وينتظرون من يوضبها. <br /><br />
          <strong>فرح:</strong> لكن الأولاد لم يوضبوا ألعابهم يوماً. حتى قبل
          مجيء زويا. كنت أنا من يوضب حاجياتهم. ببساطة، الصراع انتقل مني اليها.
          وبعد مغادرتها، عدنا لمواجهة هذا الصراع من جديد. <br /><br />
          <strong>مازن:</strong> صدقيني، أعلم ما ينتظرنا. أعرف أن الأمر لن يكون
          سهلاً بعد أن اعتدنا على وجودها. لكن يجب أن تتغير بعض الأمور. أسلوب
          الحياة الذي عهدناه لم يعد ممكناً. الأمر مضحك بعض الشيء، إذ علينا أن
          نخفف من حجم الاستهلاك من حجم انتاجنا للأوساخ. أفكر أحياناً أن هذه
          الأزمة الاقتصادية، بالرغم من كارثيتها وانعكاساتها السلبية علينا، لكنها
          قد تكون فرصة لأطفالنا كي يتعلموا تحمل المسؤولية وقضاء حاجاتهم بأنفسهم،
          وكي يعرفوا أن ليس بامكانهم دائماً الحصول على ما يرغبون به. <br />
          وهي فرصة لنا كي نعيش أسلوب حياة أكثر بساطة. لطالما شعرت أننا نورط
          أنفسنا بمسؤوليات وجهد إضافي لا ضرورة له. لقد فرض علينا النظام
          الاقتصادي نهج حياةٍ عام أصبح من الصعب الخروج عنه. سأعطيك مثلاً عن نهج
          حياة مختلف. جاري في الجبل يشغّل عاملاً سورياً للاعتناء بالمنزل
          والحديقة في غيابه. جاء هذا العامل بأسرته من سوريا، زوجته وأطفاله
          الستة، وهم يعيشون في بيت مكون من غرفتين. يأكلون البيض والزيتون كل يوم
          ربما، والأخت الكبرى تربي الطفلة الرضيعة. وبالرغم من أن عمله في الحديقة
          مضني جسدياً لكنني أحسه اكثر استرخاءً مني، فمتطلبات عيشه أقل بكثير من
          متطلبات عيشي. أشعر أننا قد أقحمنا أنفسنا في نفق من المتطلبات
          والمسؤوليات التي ستظل تتفاقم كلما كبر الأولاد. أتساءل أحياناً، ماذا
          فعلنا بأنفسنا؟
          <br /><br />
          <strong>فرح:</strong> أتمنى أن أراك تحيا يوميات هذا العامل السوري الذي
          تتحدث عنه. لا أظنّ أنك سوف تصمد لأسبوعٍ واحد من دون كل وسائل الراحة
          والرفاهية التي اعتدت عليها، من المنزل والسيارة المكيفة، والعشيات
          والسهرات وخدمات التوصيل، و"فرشة الفوم"، و الـ "fancy ساوند سيستم" الذي
          قمت بإعداده في البيت، والغسالة الأوتوماتيكية. هل أنت مستعدّ لغسل
          الملابس "على إيدك" في حال عدم توفر التيار الكهربائي؟ أم من المفترض أن
          أقوم وحدي بهذا العمل؟ الحجرة التي يسكنها ذاك العامل مع أطفاله الستة،
          كلفتها أقل من تكلفة الاضاءة في منزلنا، تلك التي أوصيت عليها من الخارج.
          تقول أن الضوء الأبيض الرخيص يصيبك بالكآبة. ما بالك بالامتيازات الأخرى
          التي لا تقيم لها اعتباراً لأنك تحسبها من المسلمات. لكن هذه المسلمات
          تتطلب مني، ومن زويا، جهداً كبيراً. أظنّ أنك سوف تفتقد حضورها بشدة. سوف
          تفتقد الرفاهية التي كانت تؤمنها لك من دون أن تلحظ، وإن كابرت على ذلك.
        </p></SectionText
      >
    </span>

    <div class="z-50 flex flex-row items-center justify-between">


     <div>
        <div
          style=" z-index: 1000; 
                  position: fixed;
                  bottom: 10px;
                  left: 10px;
                  padding: 0;
                  opacity: 100;
                  transform-origin: 100% 100%;"
          class="flex items-center ml-20 stickynav"
        >
          <div
            class="flex items-center content-center justify-center w-20 h-20 mt-2 text-sm text-center rounded-full font-nassimBold text-white bg-black"
          >
            <span v-if="this.$i18n.locale === 'ar'">
              <svg
              v-if="this.musicPlayer"
                  @click="playmusic"
                  class="w-12 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current"
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                      d="M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"
                  />
              </svg>
              <svg 
              v-if="!this.musicPlayer"
                  @click="playmusic"
                  class="w-12 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current"
                  version="1.1"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg" > 
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/> 
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/> 
                <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/> 
              </svg>
              <audio id="musicplayer">
                <source src="/Images/c1/sectionOne/horse.ogg" type="audio/ogg" />
                <source src="/Images/c1/sectionOne/horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </span>
            <span v-if="this.$i18n.locale === 'en'"> TEST TEST  </span>
          </div>
        </div>
      </div>




      <div>
        <nuxt-link
          v-if="chapternav > 10000"
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
import IframeContainer from '../../static/Images/c1/sectionOne/IframeContainer.vue'
import ImageMoveTest from '../../static/Images/c1/sectionOne/ImageMoveTest.vue'
import Passages from '../../static/Images/c1/sectionFour/Passages.vue'
import { deepStrictEqual } from 'assert'



export default {
  components: {
    IframeContainer,
    ImageMoveTest,
    Passages,

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

    const s211 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/0011`
    ).fetch()

    const s22 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/002`
    ).fetch()

    const s221 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/0021`
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

    const s261 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/003`
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
      s211,
      s22,
      s23,
      s24,
      s241,
      s25,
      s26,
      s261,
      s27,
      s28,
      s29,
      s30,
    }
  },

  data() {
    return {
      chapternav: 0,
      musicPlayer : true,
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
    playmusic() {
      console.log("first")
      if(this.musicPlayer)
      document.getElementById("musicplayer").pause();
      else 
      document.getElementById("musicplayer").play();
      this.musicPlayer = !this.musicPlayer
    }
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
  text-align: center;
  width: 100%;
}
</style>

<style>
.custom-background {
  background: linear-gradient(to top, #00bce3ba, #00bce3cc),
    /* url('~assets/Background_.jpg') repeat; */
}
</style>
