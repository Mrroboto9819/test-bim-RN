import { useCallback, useEffect, useState } from 'react';
import type { Account } from '@/models/Account';
import { accountServices } from '@/services/accountServices';

export function formatMoney(amount: number | undefined): string {
    if (typeof amount !== 'number') {
        return '$0.00';
    }
    const [int, dec] = amount.toFixed(2).split('.');
    return `$${int?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${dec}`;
}

export function useAccount() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const refetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await accountServices.getAccounts();
            setAccounts(data);
        } catch (err) {
            setError('Failed to fetch accounts');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refetch();
    }, [refetch])

    return { accounts, loading, error, refetch };
}