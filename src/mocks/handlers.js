import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3004/users?userName=johndoe&password=123", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          userName: "johndoe",
          password: "123",
          name: "Johnah Doe",
          profilePicture:
            "https://vengreso.com/wp-content/uploads/2016/03/LinkedIn-Profile-Professional-Picture-Sample-Bernie-Borges-300x300.png",
        },
      ])
    );
  }),
];
