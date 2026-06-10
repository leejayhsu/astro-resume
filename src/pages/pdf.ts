export function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/assets/resume.pdf",
    },
  });
}
