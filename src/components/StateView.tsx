import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '@/theme';

type Props = {
    loading?: boolean;
    error?: string;
    onRetry?: () => void;
    empty?: boolean;
    emptyText?: string;
}

export function StateView({ loading, error, onRetry, empty, emptyText = 'Nada por aquí' }: Props) {
    return (
        <View>
            {loading && <ActivityIndicator size="large" />}
            {error && (
                <>
                    <Text style={styles.error}>{error}</Text>
                    {onRetry && (
                        <Pressable
                            onPress={onRetry}
                            accessibilityRole="button"
                        >
                            <Text style={styles.link}> Reintentar </Text>
                        </Pressable>
                    )}
                </>
            )}
            { empty && <Text>{emptyText}</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    center: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg, gap: spacing.sm },
    error: { color: colors.danger, textAlign: 'center' },
    link: { color: colors.primary, fontWeight: '600' }
});