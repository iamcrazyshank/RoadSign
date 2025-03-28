import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export default function HomePage() {
  const fadeAnim1 = useRef(new Animated.Value(0)).current; // Initial opacity for the first image
  const fadeAnim2 = useRef(new Animated.Value(0)).current; // Initial opacity for the second image
  const fadeAnim3 = useRef(new Animated.Value(0)).current; // Initial opacity for the third image

  useEffect(() => {
    // Staggered animation for the images
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1, // Final opacity is 1
        duration: 500, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2, fadeAnim3]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Animated.Image
          source={require("../assets/images/icon.png")}
          style={[styles.image, { opacity: fadeAnim1 }]}
        />
        <Animated.Image
          source={require("../assets/images/icon.png")}
          style={[styles.image, { opacity: fadeAnim2 }]}
        />
        <Animated.Image
          source={require("../assets/images/icon.png")}
          style={[styles.image, { opacity: fadeAnim3 }]}
        />
      </View>
      <View style={styles.row}>
        <Animated.Image
          source={require("../assets/images/icon.png")}
          style={[styles.image, { opacity: fadeAnim1 }]}
        />
        <Animated.Image
          source={require("../assets/images/icon.png")}
          style={[styles.image, { opacity: fadeAnim2 }]}
        />
        <Animated.Image
          source={require("../assets/images/icon.png")}
          style={[styles.image, { opacity: fadeAnim3 }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
});