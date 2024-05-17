import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonScreen, ManuallyLesson } from "@/shared/constants/lessons";

export const dakuonAndHandakuonLesson: ManuallyLesson = {
  id: "52aa8316-4669-41e6-98d3-2b3e42a941ff",
  title: "Дакуон и хандакуон",
  subTitle: "Специальные знаки хираганы",
  infoTitle: "Информация",
  infoSubTitle: "Здесь мы расскажем вам о специальных знаках хираганы.",
  icon: "濁音",
  category: [KanaAlphabet.Hiragana],
  screens: [
    {
      name: LessonScreen.Info,
      title: "Дакуон и хандакуон.",
      blocks: [
        {
          text: "После того, как мы освоили основные слоги хираганы, пришло время познакомиться с дакуон и хандакуон — особыми знаками, которые изменяют звучание слогов.",
        },
        {
          text: "Для начала давай узнаем, с какими слогами хираганы можно употреблять эти знаки:",
        },
        {
          table: [
            [
              "Романджи",
              "ka, ki, ku, ke, ko",
              "sa, shi, su, se, so",
              "ta, chi, tsu, te, to",
              "ha, hi, fu, he, ho",
            ],
            [
              "Хирагана",
              "か, き, く, け, こ",
              "さ, し, す, せ, そ",
              "た, ち, つ, て, と",
              "は, ひ, ふ, へ, ほ",
            ],
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
            ["きく", "kiku (слушать)"],
            ["つち", "tsuchi (земля)"],
            ["ほし", "hoshi (звезда)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон ka, ki, ku, ke, ko.",
      blocks: [
        {
          text: "Добавляя специальные знаки дакутен, представляющие собой две короткие палочки в правом верхнем углу, к слогам, мы формируем новые звуки. Ознакомьтесь, как это изменяет произношение.",
        },
        {
          table: [
            [
              "Глухие",
              "か (ka)",
              "き (ki)",
              "く (ku)",
              "け (ke)",
              "こ (ko)",
            ],
            ["Звонкие", "が (ga)", "ぎ (gi)", "ぐ (gu)", "げ (ge)", "ご (go)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для kagi (ключ).",
      blocks: [
        {
          answers: [
            { title: "がき", isTrue: false },
            { title: "がぎ", isTrue: false },
            { title: "かぎ", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон za, ji, zu, ze, zo.",
      blocks: [
        {
          text: "Аналогичным образом мы добавляем дакутен к слогам, начинающихся с 's', преобразуя их в звонкие звуки.",
        },
        {
          table: [
            ["Глухие", "さ (sa)", "し (shi)", "す (su)", "せ (se)", "そ (so)"],
            ["Звонкие", "ざ (za)", "じ (ji)", "ず (zu)", "ぜ (ze)", "ぞ (zo)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для suzuran (ландыш).",
      blocks: [
        {
          sequence: ["す", "ず", "ら", "ん"]
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон da, ji, zu, de, do.",
      blocks: [
        {
          text: "Добавляя дакутен к слогам, начинающихся с 't', мы создаём другой набор звонких звуков.",
        },
        {
          table: [
            ["Глухие", "た (ta)", "ち (chi)", "つ (tsu)", "て (te)", "と (to)"],
            ["Звонкие", "だ (da)", "ぢ (ji)", "づ (zu)", "で (de)", "ど (do)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Обрати внимание!",
      blocks: [
        {
          text: "Слоги じ (ji) и ぢ (ji), а также ず (zu) и づ (zu) произносятся одинаково в современном японском. Ранее эти звуки различались, но со временем слились.",
        },
        {
          text: "Заметьте, что для слов с «ji» чаще всего используется じ, а для слов с «zu» - ず. Лишь с очень немногими словами употребляется ぢ и づ.",
        },
        {
          rules: [
            "じ(ji), ず(zu) - используются в большинстве случаем",
            "ぢ(ji), づ(zu) - используются лишь в нескольких словах",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для dashi (японский бульон).",
      blocks: [
        {
          answers: [
            { title: "たじ", isTrue: false },
            { title: "だし", isTrue: true },
            { title: "だじ", isTrue: false },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон ba, bi, bu, be, bo.",
      blocks: [
        {
          text: "Теперь давай изучим специальные знаки дакутен для строки, начинающейся с «h».",
        },
        {
          table: [
            ["Звук «h»", "は (ha)", "ひ (hi)", "ふ (fu)", "へ (he)", "ほ (ho)"],
            ["Звук «b»", "ば (ba)", "び (bi)", "ぶ (bu)", "べ (be)", "ぼ (bo)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для kabuki (японский театр).",
      blocks: [
        {
          answers: [
            { title: "かふぎ", isTrue: false },
            { title: "がぶき", isTrue: false },
            { title: "かぶき", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Хандакуон pa, pi, pu, pe, po.",
      blocks: [
        {
          text: "Строка хираганы, начинающаяся с は(ha) - особенная! К ней мы можем добавить не только дакутен, но и хандакутен, маленький кружок, который преобразует звуки в 'p'.",
        },
        {
          table: [
            ["Звук «h»", "は (ha)", "ひ (hi)", "ふ (fu)", "へ (he)", "ほ (ho)"],
            ["Звук «b»", "ば (ba)", "び (bi)", "ぶ (bu)", "べ (be)", "ぼ (bo)"],
            ["Звук «p»", "ぱ (pa)", "ぴ (pi)", "ぷ (pu)", "ぺ (pe)", "ぽ (po)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери романдзи для ぱくぱく (есть с аппетитом).",
      blocks: [
        {
          answers: [
            { title: "hakuhaku", isTrue: false },
            { title: "pakupaku", isTrue: true },
            { title: "bakubaku", isTrue: false },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Подсказка!",
      blocks: [
        {
          text: "Использование специальных знаков существенно изменяет значения слов, что подчеркивает их важность в японском языке.",
        },
        {
          rules: [
            "はか (haka) - могила",
            "ばか (baka) - дурак",
            "かき (kaki) - хурма",
            "かぎ (kagi) - ключ",
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
            ["ここ", "koko (здесь)"],
            ["ごこ", "goko (5 кусочков)"],
            ["ごご", "gogo (днем)"],
          ],
        },
      ],
    },
  ],
};
