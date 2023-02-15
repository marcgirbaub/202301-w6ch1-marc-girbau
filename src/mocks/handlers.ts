import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_URL_API}`, (req, rest, ctx) => {
    return rest(
      ctx.status(200),
      ctx.json([{ id: 1, name: "Go to the gym", isDone: false }])
    );
  }),

  rest.put(`${process.env.REACT_APP_URL_API}${3}`, (req, rest, ctx) => {
    return rest(ctx.status(200));
  }),

  rest.delete(`${process.env.REACT_APP_URL_API}${3}`, (req, rest, ctx) => {
    return rest(ctx.status(200));
  }),

  rest.post(`${process.env.REACT_APP_URL_API}`, (req, rest, ctx) => {
    return rest(ctx.status(200));
  }),
];
