import type { Account } from '@/models/Account';
import { ACCOUTS } from '@/models/Account';
const DELAY_LIKE_SERVER_FOR_LOADER = 500

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const accountServices = {
    async getAccounts(): Promise<Account[]> {
        await delay(DELAY_LIKE_SERVER_FOR_LOADER)
        return ACCOUTS
    },
    async getAccountById(id: number): Promise<Account | undefined> {
        await delay(DELAY_LIKE_SERVER_FOR_LOADER)
        return ACCOUTS.find(account => account.id === id)
    }
}