import SafeForm from "@/components/SafeForm";

export default function HomePage() {
  return (
    <main style={{ maxWidth: "600px", margin: "3rem auto", fontFamily: "sans-serif" }}>
      <h1>SafeRepo Verification Fixture</h1>
      <p>
        Baseline repository containing no security issues, zero vulnerable dependencies,
        no hardcoded secrets, and no unsafe dynamic code execution.
      </p>
      <SafeForm />
    </main>
  );
}
