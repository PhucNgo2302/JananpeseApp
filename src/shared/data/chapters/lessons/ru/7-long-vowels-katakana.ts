import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonScreen, ManuallyLesson } from "@/shared/constants/lessons";

export const longVowelsKatakana: ManuallyLesson = {
  id: "3e8bfb8e-6470-40d7-8b89-7635f23f4f92",
  title: "Долгие гласные в катакане",
  subTitle: "Долгие гласные",
  infoTitle: "Информация",
  infoSubTitle: "Здесь мы расскажем вам о долгих гласных в катакане",
  icon: "母音",
  category: [KanaAlphabet.Katakana],
  screens: [
    {
      name: LessonScreen.Info,
      title: "Долгие гласные в катакане",
      blocks: [
        {
          text: "Катакана использует уникальный подход для обозначения долгих гласных звуков. В этом уроке мы изучим, как правильно их записывать.",
        },
        {
          text: "В катакане долгие гласные обозначаются при помощи горизонтальной черты (ー), что отличается от хираганы, где используются удлинённые гласные символы.",
        },
        {
          text: "Ознакомьтесь с примерами использования долгих гласных в катакане:",
        },
        {
          table: [
            ["Романдзи", "A", "I", "U", "E", "O"],
            ["Катакана", "アー", "イー", "ウー", "エー", "オー"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Подсказка: важность долгих гласных",
      blocks: [
        {
          text: "Различие между короткими и долгими гласными в катакане критично, так как может менять значение слов. Вот несколько примеров, показывающих, как меняется смысл слова:",
        },
        {
          rules: [
            "ビル (biru) - здание",
            "ビール (biiru) - пиво",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Сопоставь катакану с романдзи.",
      blocks: [
        {
          pairs: [
            ["チーター", "chītā(гепард)"],
            ["ローン", "rōn(заем)"],
            ["ユーロ", "yūro(евро)"],
          ]
        }
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери катакану для apāto (квартира).",
      blocks: [
        { sequence: ["ア", "パ", "ー", "ト"] }
      ],
    },
  ],
};
