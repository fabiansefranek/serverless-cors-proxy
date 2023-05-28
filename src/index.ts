export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const { pathname } = new URL(request.url);
    const url = pathname.slice(1);
    if (!url) {
      return new Response("Append ?th", {
        status: 400,
        headers: {
          "access-control-allow-origin": "*",
        },
      });
    }

    const response = await fetch(url).catch((err) => {
      return new Response(err.message, {
        status: 500,
        headers: {
          "access-control-allow-origin": "*",
        },
      });
    });
    const headers = new Headers(response.headers);
    headers.set("access-control-allow-origin", "*");
    return new Response(response.body, {
      status: response.status,
      headers: headers,
      statusText: response.statusText,
    });
  },
};
