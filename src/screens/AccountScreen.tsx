import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { spacing, colors } from '@/theme';

import { useAccount } from '@/hooks/useAccount';
import { AccountCard } from '@/components/AccountCard';

import type { AccountProps } from '@/navigation/types';

export function AccountScreen(_props: AccountProps) {
    const { accounts, loading, error, refetch } = useAccount();

    return (
        <View style={styles.container}>
            {error && <Text style={styles.error}>{error}</Text>}
            {loading && <ActivityIndicator color={colors.primary} size="large" />}
            <FlatList 
                data={accounts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <AccountCard account={item} />}
                onRefresh={refetch}
                refreshing={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        gap: spacing.md,
        backgroundColor: colors.bg
    },
    title: { fontSize: 24, fontWeight: '700', color: colors.text },
    link: { color: colors.primary, fontWeight: '600' },
    error: { color: colors.danger, fontSize: 16, fontWeight: '500' }
})
