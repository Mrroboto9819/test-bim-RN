export function formatMoney(amount: string | number | undefined): string {
    const value = typeof amount === 'string' ? Number(amount) : amount;
    if (typeof value !== 'number' || Number.isNaN(value)) {
        return '$0.00';
    }
    const [int, dec] = value.toFixed(2).split('.');
    return `$${int?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${dec}`;
}
