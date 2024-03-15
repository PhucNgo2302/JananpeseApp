import React from "react";

import { View, Text } from "react-native";
import { Svg, Circle } from "react-native-svg";

import { useThemeContext } from "@/features/settings/settings-theme/theme-context";

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress }) => {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const { colors } = useThemeContext();

  return (
    <View>
      <Svg style={{ backgroundColor: colors.color1 }}>
        <Circle
          cx={50}
          cy={50}
          r={radius}
          stroke={colors.color2}
          fill={colors.color1}
          strokeWidth={8}
          origin="50, 50"
        />
        <Circle
          cx={50}
          cy={50}
          r={radius}
          stroke={progress < 51 ? "#EF625D" : "#60BA53"}
          strokeWidth={6}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="50, 50"
        />
        <View style={{ position: "absolute", top: 38, width: 100 }}>
          <Text style={{ width: "100%", textAlign: "center", fontSize: 17, color: colors.color4, fontWeight: "700" }}>
            {`${Math.round(progress)}%`}
          </Text>
        </View>
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
