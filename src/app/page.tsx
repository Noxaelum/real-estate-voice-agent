export default function Home() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Real Estate voice agent</h1>
        <p>Start by pressing the &quot;start a call&quot; below</p>
      </section>
      {/* eslint-disable--line @typescript-eslint/ban-ts-comment @ts-ignore */}
      <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      <script
        src="https://elevenlabs.io/convai-widget/index.js"
        async
        type="text/javascript"
      ></script>
    </main>
  );
}
