import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { HomeProps } from '@/navigation/types';
import { colors, spacing } from '@/theme';

export function HomeScreen({ navigation }: HomeProps) {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                Home
            </Text>
            <Pressable
                accessibilityRole="button"
                onPress={() => navigation.navigate('Detail', { id: 1, title: 'Detalle'})}
            >
                <Text style={ styles.link }>Ir a segunda pantalla</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, backgroundColor: colors.bg },
    title: { fontSize: 24, fontWeight: '700', color: colors.text },
    link: { color: colors.primary, fontWeight: '600' }
})