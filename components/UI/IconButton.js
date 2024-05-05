import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return pressed && styles.pressed;
      }}>
      <View style={styles.btnContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
