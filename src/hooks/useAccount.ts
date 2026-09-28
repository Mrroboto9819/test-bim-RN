import { useCallback, useEffect, useState } from 'react';
import type { Account } from '@/models/Account';
import { accountServices } from '@/services/accountServices';

const getErrorMessage = (err: unknown, fallback: string) =>
    err instanceof Error && err.message ? err.message : fallback;

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
        } catch (err: unknown) {
            setError(getErrorMessage(err, 'Error al cargar las cuentas'));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { accounts, loading, error, refetch };
}

export function useAccountById(id: number) {
    const [account, setAccount] = useState<Account | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        setLoading(true);
        setError(null);
        accountServices
            .getAccountById(id)
            .then((data) => { if (active) setAccount(data); })
            .catch((err: unknown) => {
                if (active) setError(getErrorMessage(err, 'Error al cargar los detalles de la cuenta'));
            })
            .finally(() => { if (active) setLoading(false); });
        return () => { active = false; };
    }, [id]);

    return { account, loading, error };
}
