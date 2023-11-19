import { ILetter } from "./utils/letters";

interface IStat {
  testDuration: number
  correctAnswers: number
  incorrectAnswers: number
  fastestAnswer: {
    time: number;
    letter: ILetter | null;
  }
  slowestAnswer: {
    time: number;
    letter: ILetter | null;
  }
  averageTime: number
  incorrectLetters: ILetter[]
}

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  SettingsLearn: { letters: ILetter[]; kata: "hi" | "ka" };
  Learn: { letters: ILetter[]; kata: "hi" | "ka", mode: 1 | 0, isTime: 1 | 0 };
  LearnResults: { stat: IStat, kata: "hi" | "ka" };
};