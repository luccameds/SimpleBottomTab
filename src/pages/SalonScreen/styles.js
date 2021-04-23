import { StyleSheet } from "react-native";
import { theme } from "../../constants";
const { width } = Dimensions.get("window");

import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  dividerVertical: {
    height: 30,
    borderLeftColor: theme.colors.gray2,
    borderLeftWidth: 1,
  },
});

export default styles;
