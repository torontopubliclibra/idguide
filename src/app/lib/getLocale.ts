export function getLocaleFromHost(host: string): "en" | "fr" {
  if (!host) return "en";
  const subdomain = host.split(".")[0];
  if (subdomain === "fr") return "fr";
  return "en";
}