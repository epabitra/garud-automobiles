import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | Garud Automobiles`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
  }, [title, description]);
}
