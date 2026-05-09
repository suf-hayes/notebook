interface Env {
  ASSETS: Fetcher;
}

export default {
  fetch(req: Request, env: Env): Response | Promise<Response> {
    return env.ASSETS.fetch(req);
  },
};
