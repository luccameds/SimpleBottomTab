import { StyleSheet } from "react-native";
import { theme } from "../../constants";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

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
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  categoriesListContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    paddingHorizontal: 15,
    height: 30,
    borderRadius: 30,
  },
  contentAgenda: {
    padding: 30,
  },
});

export default styles;
