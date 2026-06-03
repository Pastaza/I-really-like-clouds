import { Card, Container } from "../components/ui";
import { ATLAS } from "../lib/atlas";

export const metadata = {
  title: "Cloud Atlas"
};

export default function AtlasIndex() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="font-display text-3xl tracking-tight text-ink-950 dark:text-ink-50 sm:text-4xl">Cloud Atlas</h1>
        <p className="mt-3 max-w-2xl text-ink-800 dark:text-ink-200">
          Fast, practical guides for spotting clouds and understanding what they usually mean.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ATLAS.map((e) => (
            <a key={e.slug} href={`/atlas/${e.slug}`}>
              <Card className="transition hover:bg-white dark:hover:bg-white/15">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-ink-950 dark:text-ink-50">{e.name}</h2>
                  <span className="text-xs text-ink-600 dark:text-ink-300">Read →</span>
                </div>
                <p className="mt-2 text-sm text-ink-700 dark:text-ink-200">{e.summary}</p>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
