import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load markdown content
    const loadContent = async () => {
      try {
        const response = await fetch("/src/files/privacy-policy.md");
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error loading privacy policy:", error);
        setContent("# Privacy Policy\n\nContent could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading privacy policy...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Jowam Coffee Traders</title>
        <meta
          name="description"
          content="Read Jowam Coffee Traders' privacy policy to understand how we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jowamcoffee.co.ke/privacy-policy" />
      </Helmet>

      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how Jowam Coffee Traders protects and manages your personal
              information
            </p>
          </header>

          <Card className="bg-card shadow-lg">
            <CardContent className="p-8 md:p-12">
              <article className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1
                        id={children
                          ?.toString()
                          .toLowerCase()
                          .replace(/\s+/g, "-")}
                        className="text-3xl font-bold text-foreground mt-8 mb-6 first:mt-0 scroll-mt-16"
                      >
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2
                        id={children
                          ?.toString()
                          .toLowerCase()
                          .replace(/\s+/g, "-")}
                        className="text-2xl font-semibold text-foreground mt-8 mb-4 scroll-mt-16"
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3
                        id={children
                          ?.toString()
                          .toLowerCase()
                          .replace(/\s+/g, "-")}
                        className="text-xl font-semibold text-foreground mt-6 mb-3 scroll-mt-16"
                      >
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="leading-relaxed">{children}</li>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-primary hover:text-primary/80 underline transition-colors"
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href?.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">
                        {children}
                      </strong>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
