export function GET(request) {
  console.log(request);
  // new Response.json()
  return new Response("Hello");
}
