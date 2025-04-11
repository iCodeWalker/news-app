export function GET(request) {
  console.log(request);
  // new Response.json()
  return new Response("Hello");
}

// export function POST(request){
//   return new Response("Done");
// }
