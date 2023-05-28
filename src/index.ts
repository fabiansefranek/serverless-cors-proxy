export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const { pathname, searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    if (!url) {
      return new Response("Missing url parameter", {
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
