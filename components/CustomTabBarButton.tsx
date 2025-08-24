import React from "react";
import {
    Pressable,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
} from "react-native";

function CustomTabBarButton({
    children,
    onPress,
    style,
}: {
    children: React.ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;  // ✅ invece di ViewStyle
}) {
    return (
        <Pressable
            android_ripple={{ color: "transparent" }}
            style={({ pressed }) => [
                { flex: 1, opacity: 1 },
                style, // ✅ ora accetta anche array o null
            ]}
            onPress={onPress}
        >
            {children}
        </Pressable>
    );
}

export default CustomTabBarButton;
