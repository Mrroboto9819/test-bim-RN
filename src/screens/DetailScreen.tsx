import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { DetailProps } from '@/navigation/types';
import { colors, spacing } from '@/theme';

export function DetailScreen({ navigation,  route }: DetailProps) {
    const { id, title } = route.params
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                {title}
            </Text>
            <Text >
                su id: {id}
            </Text>
            <Pressable
                accessibilityRole="button"
                onPress={() => navigation.goBack()}
            >
                <Text style={ styles.link }>Regresar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, backgroundColor: colors.bg },
    title: { fontSize: 24, fontWeight: '700', color: colors.text },
    link: { color: colors.primary, fontWeight: '600' }
})