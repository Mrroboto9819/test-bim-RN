export type AccountType = 'Cuenta Débito' | 'Cuenta Ahorro' | '';

export interface Account {
   "id": number;
   "number": string;
   "type": AccountType;
   "balance": string | number;
}

// Cargar cuentas del ejemplo 
export const ACCOUTS: Account[] = [
 {
   "id":1,
   "number":"1234567890",
   "type":"Cuenta Débito",
   "balance":24580.30
 },
 {
   "id":2,
   "number":"9988776655",
   "type":"Cuenta Ahorro",
   "balance":1200.50
 }
]
