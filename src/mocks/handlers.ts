import {rest} from 'msw'

export const handlers = [
    rest.get('/api/error/:status', (req, res, ctx) => {
        const {status} = req.params
        if (typeof status === "string") return res(
            ctx.status(Number(status)),
            ctx.json({
                message: "error"
            }),
        )
        return res(
            ctx.status(500),
            ctx.json({
                message: "error"
            }),
        )
    }),
]
