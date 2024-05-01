import * as z from 'zod';

export const MemberSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }),
    // age: z.number({
    //     required_error: "Age is required"
    // }),
    age: z.preprocess(
        (a) => parseInt(z.string().parse(a),10),
        z.number({
            required_error: "Age is required"
        })
    )
})