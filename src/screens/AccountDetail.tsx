import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { DetailProps } from '@/navigation/types';
import { spacing, colors } from '@/theme';

import type { Account } from '@/models/Account';

import { accountServices } from '@/services/accountServices';
import { formatMoney } from '@/hooks/useAccount';

export function AccountDetailScreen({ route }: DetailProps) {
    const { id } = route.params
    const [account, setAccount] = useState<Account | undefined>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getAccountDetails = async (accountId: number) => {
        setLoading(true);
        setError(null);
        try {
            let account = await accountServices.getAccountById(accountId)
            setAccount(account)
        } catch (err: unknown) {
            setError((err as Error).message || 'Error al cargar los detalles de la cuenta');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAccountDetails(id)
    }, [])
    return (
        <View
            style={styles.container}
        >
            {loading && <ActivityIndicator color={colors.primary} size="large" />}
            {error && <Text style={styles.error}>{error}</Text>}
            {account && (
                <>
                    <Text style={styles.title}>Detalle de la cuenta</Text>
                    <Text>Account ID: {account.id}</Text>
                    <Text>Account Number: {account.number}</Text>
                    <Text>Account Type: {account.type}</Text>
                    <Text>Account Balance: {formatMoney(account.balance)}</Text>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.md,
        backgroundColor: colors.bg
    },
    title: { fontSize: 24, fontWeight: '700', color: colors.text },
    link: { color: colors.primary, fontWeight: '600' },
    error: { color: colors.danger, fontSize: 16, fontWeight: '500' }
})