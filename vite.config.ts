import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubActions = process.env["GITHUB_ACTIONS"] === "true";

export default defineConfig({
  ...(isGitHubActions ? { nitro: false } : {}),

  tanstackStart: {
    server: { entry: "server" },

    ...(isGitHubActions
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
          },
          pages: [{ path: "/" }],
        }
      : {}),
  },
});
