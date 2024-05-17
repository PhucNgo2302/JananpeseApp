import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonScreen, ManuallyLesson } from "@/shared/constants/lessons";

export const longConsonants: ManuallyLesson = {
  id: "edcb6a6b-4d01-4b37-a53c-9b670f88478b",
  title: "Долгие согласные",
  subTitle: "っ + k, っ + s, っ + t, っ + p",
  infoTitle: "Информация",
  infoSubTitle: "Здесь мы раскажем вам о долгих согласных.",
  icon: "母音",
  category: [KanaAlphabet.Hiragana],
  screens: [
    {
      name: LessonScreen.Info,
      title: "Долгие согласные.",
      blocks: [
        {
          text: "В предыдущем уроке мы рассмотрели долгие гласные. Теперь обратим внимание на долгие согласные в японском языке, которые играют не меньшую роль.",
        },
        {
          text: "Удвоение согласных обозначается маленьким символом «tsu» (っ), который ставится перед согласным. Сама «tsu» (っ) не произносится.",
        },
        {
          text: "Ознакомьтесь с примерами использования стандартной «tsu» (つ) и уменьшенной «tsu» (っ):",
        },
        {
          rules: [
            "かた (kata) - плечо",
            "かつた (katsuta) - имя",
            "かった (katta) - выиграл",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Сопоставь хирагану с романдзи.",
      blocks: [
        {
          pairs: [
            ["かった", "katta (выиграл)"],
            ["にっき", "nikki (дневник)"],
            ["きって", "kitte (марка)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Исключение!",
      blocks: [
        {
          text: "Следует знать, что маленький символ «tsu» (っ) нельзя использовать перед буквами хираганы な (na), に (ni), ぬ (nu), ね (ne) и の (no). В этих случаях для удлинения звуков используется символ **ん** (n).",
        },
        {
          rules: [
            "ごめんなさい (gomennasai) - извините",
            "おんな (onna) - женщина",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для gomennasai (извини).",
      blocks: [
        {
          sequence: ["ご", "め", "ん", "な", "さ", "い"],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Запомни!",
      blocks: [
        {
          text: "Слово «здравствуйте» записывается как こんにちは (konnichiwa), где последний символ — это **は** (ha), а не **わ** (wa). Это связано с тем, что изначально фраза была длиннее и использовалась частица подлежащего は (ha).",
        },
        {
          text: "Как мы уже рассказывали, частица подлежащего пишется как は (ha), но произносится как «wa».",
        },
        {
          rules: [
            "こんにちは (konnichiwa) - добрый день",
            "こんばんは (konbanwa) - добрый вечер",
          ],
        },
      ],
    },
  ],
};
