export const routes = {
    authed: {
      guarded: [
        "/signin",
        "/signup",
        "/reset-password",
      ],
      unguarded: [
        "/leaderboard",
        "/add",
        "/questions/:question_id",
      ],
    },
    unauthed: {
      guarded: [
        "/leaderboard",
        "/add",
        "/questions/:question_id",
      ],
      unguarded: [
        "/signin",
        "/signup",
        "/reset-password",
      ],
    },
};