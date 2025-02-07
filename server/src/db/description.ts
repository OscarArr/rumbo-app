import { schema, TransactionModel } from './transaction'
    
export const getDescriptionsByEmail = async (email: string) => {
    const sqlQuery = `SELECT DISTINCT description FROM public.transactions WHERE email LIKE $1`;
    return await TransactionModel.find({"email":email})
};
