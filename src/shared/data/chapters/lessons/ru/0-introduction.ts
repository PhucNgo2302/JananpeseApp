import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonScreen, ManuallyLesson } from "@/shared/constants/lessons";

export const lessonIntroduction: ManuallyLesson = {
  id: "52aa8316-4669-41e6-98d3-2b3e42a943ff",
  title: "Введение",
  subTitle: "Хирагана и Катакана",
  infoTitle: "Информация",
  infoSubTitle: "Здесь мы раскажем вам о алфавитах в японском языке",
  icon: "序章",
  category: [KanaAlphabet.Hiragana, KanaAlphabet.Katakana],
  screens: [
    {
      name: LessonScreen.Info,
      title: "Знаешь ли ты?",
      blocks: [
        {
          text: "В японском языке используется два основных алфавита — хирагана и катакана, каждый из которых включает в себя 46 символов.",
        },
        {
          text: "Хирагана применяется в основном для записи слов коренного японского происхождения, тогда как катакана чаще используется для транскрипции иностранных слов и имен.",
        },
        {
          text: "Кроме того, в японском языке активно используются иероглифы кандзи, насчитывающие около двух тысяч часто употребляемых символов.",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Хирагана, Катакана, Кандзи — в чем разница?",
      blocks: [
        {
          text: "Хирагана и катакана представляют собой слоговые алфавиты, обозначающие звуки, в то время как кандзи несут в себе значение.",
        },
        {
          table: [
            ["Романджи", "A", "I", "U", "E", "O"],
            ["Хиригана", "あ", "い", "う", "え", "お"],
            ["Катакана", "ア", "イ", "ウ", "エ", "オ"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Подсказка: как писать иероглифы",
      blocks: [
        {
          text: "Изучение правильного порядка штрихов важно для написания аккуратных иероглифов. Вот основные правила:",
        },
        {
          rules: [
            "Штрихи пишутся слева направо",
            "Штрихи пишутся сверху вниз",
            "Кривые и окружности прорисовываются по часовой стрелке",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Практика: порядок штрихов",
      blocks: [
        {
          text: "Понимание и соблюдение правильного порядка штрихов критически важно для написания японских символов.",
        },
        {
          id: "a151eeeb-2537-463c-ae23-d484d1bcb835",
          kana: KanaAlphabet.Hiragana,
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Упражнение: выбор правильного направления письма",
      blocks: [
        {
          text: "Определи правильное направление написания символов:",
        },
        {
          answers: [
            { title: "справа налево", isTrue: false },
            { title: "снизу вверх", isTrue: false },
            { title: "слева направо", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Как правильно заканчивать штрихи?",
      blocks: [
        {
          text: "Освоение техники правильного завершения штрихов помогает достичь эстетики и читаемости письма.",
        },
        {
          text: "Штрих может заканчиваться крючком, резким остановом или плавным выведением кисти.",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Практика: завершение штриха",
      blocks: [
        {
          text: "Рассмотрим разные способы завершения штрихов на примере.",
        },
        {
          id: "11017078-148a-4a44-b3f7-21d1df02d981",
          kana: KanaAlphabet.Hiragana,
        },
      ],
    },
  ],
};