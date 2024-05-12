import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonScreen, ManuallyLesson } from "@/shared/constants/lessons";

export const additionalKatakanaSounds: ManuallyLesson = {
  id: "b8e91c9c-d468-43b3-a6cc-67f05f46eb7d",
  title: "Дополнительные звуки катаканы",
  subTitle: "Дополнительные звуки",
  infoTitle: "Информация",
  infoSubTitle: "Здесь мы расскажем вам о дополнительных звуках катаканы",
  icon: "子音",
  category: [KanaAlphabet.Katakana],
  screens: [
    {
      name: LessonScreen.Info,
      title: "Добавление гласных к «フ»",
      blocks: [
        {
          text: "В японском языке звуки «р» и «л» считаются идентичными, как и звуки «х» и «ф». Поэтому вместо звука «л» используется ряд слога «р», а для звука «ф» — ряд слога «х». Чтобы решить проблему с использованием звука «ф», была принята новая форма записи, совмещающая гласные с уменьшенным шрифтом.",
        },
        {
          text: "Звук «フ» (fu) можно комбинировать с уменьшенными гласными символами, чтобы создать звуки «фа», «фи», «фе» и «фо».",
        },
        {
          table: [
            ["Романджи", "фа", "фи", "фу", "фэ", "фо"],
            ["Катакана", "ファ", "フィ", "フ", "フェ", "フォ"],
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
            ["ファイル", "fairu(папка)"],
            ["フィリピン", "fōku(вилка)"],
            ["フォーク", "firipin(Филиппины)"],
          ]
        }
      ]
    },
    {
      name: LessonScreen.Info,
      title: "Дополнение звуков для «ワ» ва (wa)",
      blocks: [
        {
          text: "Вас, наверное, мучает вопрос: если есть только катакана «ва», то как же образуются другие слоги с буквой «в», например «во» или «вэ»? Или они вообще не существуют? В японском языке они действительно не существуют (и не отличаются от звука «б»), но всё равно присутствуют для записи иностранных слов.",
        },
        {
          text: "В катакане существует только слог «ワ» ва (wa), но чтобы создать звуки с «в», мы используем гласные с основой «ウ» (у):",
        },
        {
          table: [
            ["Романджи", "ва (wa)", "ви (wi)", "ву (wu)", "вэ (we)", "во (wo)"],
            ["Катакана", "ワ", "ウィ", "ウ", "ウェ", "ウォ"],
          ],
        },
        {
          text: "Таким образом, можно писать слова вроде:",
        },
        {
          rules: [
            "«виндоу» (ウィンドウズ)",
            "«водка» (ウォッカ).",
          ]
        }
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Обратите внимание!",
      blocks: [
        {
          text: "Иногда можно встретить устаревшие символы катаканы «ヰ», «ヱ» и «ヲ», которые не используются в современной речи.",
        },
        {
          rules: [
            "«ヰ» ви (wi)",
            "«ヱ» вэ (we)",
            "«ヲ» во (wo или o)",
          ]
        }
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для haro wīn (Хэллоуин).",
      blocks: [
        {
          rules: [
            "ウェールズ ",
            "ハロウィーン",
            "ウォッカ",
          ]
        }
      ]
    },
    {
      name: LessonScreen.Info,
      title: "Звуки группы «V»",
      blocks: [
        {
          text: "Для создания звуков группы «V» в катакане используются символы на основе «ウ» с добавлением дакутена, что делает звук тверже:",
        },
        {
          table: [
            ["Романджи", "ва (va)", "ви (vi)", "ву (vu)", "вэ (ve)", "во (vo)"],
            ["Катакана", "ヴァ", "ヴィ", "ヴ", "ヴェ", "ヴォ"],
          ],
        },
        {
          text: "Японцы редко используют твердые звуки «ヴ» из-за сложности произношения.",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для vikutoru (Виктор).",
      blocks: [
        {
          sequence: [ "ク", "ィ", "ヴ", "ェ", "ト", "ル"]
        }
      ]
    },
    {
      name: LessonScreen.Info,
      title: "Звуки «チェ»",
      blocks: [
        {
          text: "Чтобы выразить звук «че» в катакане, используйте символ «チェ». Это позволяет корректно записывать иностранные слова.",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для cherī (черешня).",
      blocks: [
        {
          answers: [
            { title: "アーチェリー", isTrue: true },
            { title: "チェコ", isTrue: true },
            { title: "チェリー", isTrue: true },
          ]
        }
      ]
    },
    {
      name: LessonScreen.Info,
      title: "Звуки «ディ», «ドゥ»",
      blocks: [
        {
          text: "Для звуков «ди» и «ду» в катакане используйте символы «ディ» и «ドゥ» соответственно.",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Сопоставь катакану с романдзи.",
      blocks: [
        {
          pairs: [
            ["エーティーエム", "tūsu(зуб)"],
            ["トゥース", "ētīemu(банкомат)"],
            ["ティーポット", "tīpotto(заварочный чайник)"],
          ]
        }
      ]
    },
    {
      name: LessonScreen.Info,
      title: "Звуки «ジェ», «シェ»",
      blocks: [
        {
          text: "Чтобы записать звук «же» и «ше», используется символ «ジェ». и «シェ».",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для dizunīrando (Диснейленд).",
      blocks: [
        {
          answers: [
            { title: "ディズニーランド", isTrue: true },
            { title: "カーディガン", isTrue: true },
            { title: "モルディブ", isTrue: true },
          ]
        }
      ]
    },
    {
      name: LessonScreen.Info,
      title: "Звуки «ティ», «トゥ»",
      blocks: [
        {
          text: "Для выражения звуков «ти» и «ту» используются символы «ティ» и «トゥ».",
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для shefu (повар).",
      blocks: [
        {
          sequence: [ "ク", "ィ", "ヴ", "ェ", "シ", "フ" ]
        }
      ]
    },
  ],
};
