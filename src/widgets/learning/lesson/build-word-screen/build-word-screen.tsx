import React from "react";

import { StyleSheet, Text, View } from "react-native";

import EducationPracticeChooseLetters from "@/entities/education/practice/word-game-build-word/word-game-build-word";
import { useThemeContext } from "@/features/settings/settings-theme/theme-context";
import { QuestionTypeBuildingWord, WordBuildingType } from "@/shared/constants/kana";
import { LessonBuildWord } from "@/shared/constants/lessons";
import { shuffleArray } from "@/shared/helpers/letters";

type SelectSequenceLettersProps = LessonBuildWord & {
  next: () => void
}

const SelectSequenceLettersScreen: React.FC<SelectSequenceLettersProps> = ({ name, sequence, kana, next }) => {

  const { colors } = useThemeContext();

  const shafledArray = shuffleArray(sequence);
  const shafledArray1 = shuffleArray(sequence);

  return (
    <View style={styles.container} >
      <Text style={[styles.title, {
        color: colors.color4
      }]} >
        Выбирите хиригану в слудующим порядке: {shafledArray1.map(item => item.ka).join(", ")}
      </Text>

      <EducationPracticeChooseLetters
        hideTitle
        question={{
          type: QuestionTypeBuildingWord,
          title: "",
          buildingWord: shafledArray.map(item => item.en).join(""),
          shaffledLetters: shafledArray.map(item => item.en),
          translate: shafledArray.map(item => item.en).join(""),
          selectKana: WordBuildingType.Kana,
          selectKanaType: kana,
        }}
        onFinish={next} />
    </View>
  );
};

export default SelectSequenceLettersScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  rowButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  title: {
    width: "100%",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 60
  },
});
