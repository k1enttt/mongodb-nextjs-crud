import * as z from 'zod';

export const MemberSchema = z.object({
    _id: z.string(),
    name: z.string(),
    age: z.number(),
})