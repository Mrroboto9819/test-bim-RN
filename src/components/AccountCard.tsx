import { View, StyleSheet, Text, Pressable } from 'react-native';
import {colors, spacing} from '@/theme';
import { formatMoney } from '@/hooks/useAccount';

import type { Account } from '@/models/Account';

export function AccountCard({ navigation, account }: { account: Account }) {
    const handlePress = () => {
        navigation.navigate('Detail', { id: account.id});
    }
    
    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View style={styles.card}> 
                <Text style={styles.title}>{account.number}</Text>                 
                <Text>{account.type}</Text>               
                <Text>Account Balance: {formatMoney(account.balance)}</Text>             
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.sm,
    },
    card: { 
        width: '90%',
        padding: spacing.md,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: '#FFFFFF'
    },
    title: { fontSize: 24, fontWeight: '700', color: colors.text },
    link: { color: colors.primary, fontWeight: '600' },
    error: { color: colors.danger, fontSize: 16, fontWeight: '500' }
})

// Ejemplo de los datos
// [
//  {
//    "id":1,
//    "number":"1234567890",
//    "type":"Cuenta Débito",
//    "balance":24580.30
//  },
//  {
//    "id":2,
//    "number":"9988776655",
//    "type":"Cuenta Ahorro",
//    "balance":1200.50
//  }
// ]