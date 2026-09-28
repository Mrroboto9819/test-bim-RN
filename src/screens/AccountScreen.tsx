import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { spacing, colors } from '@/theme';

import { accountServices } from '@/services/accountServices';

import { AccountCard } from '@/components/AccountCard';

import type { AccountProps } from '@/navigation/types';
import type { Account } from '@/models/Account';

export function AccountScreen({ navigation,  route }: AccountProps) {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAccounts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data: Account[] = await accountServices.getAccounts();
            setAccounts(data);
        } catch (err:unknown) {
            setError((err as Error).message || 'Error al cargar las cuentas');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAccounts();
    }, [])

    return (
        <View style={styles.container}>
            {error && <Text style={styles.error}>{error}</Text>}
            {loading && <ActivityIndicator color={colors.primary} size="large" />}
            {/* test de servicio antes del flat lsit*/}
            {/* {accounts && accounts.map(a => (
                <Text key={a.id}>{a.id}</Text>
            ))} */}
            <FlatList 
                data={accounts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <AccountCard navigation={navigation} account={item} />}
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