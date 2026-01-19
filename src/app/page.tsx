import Home from "./Home";
import { getLocaleFromHost } from "./lib/getLocale";
import { headers as nextHeaders } from "next/headers";

export default async function Page() {
  const hdrs = await nextHeaders();
  const host = hdrs.get("host") || "";
  const locale = getLocaleFromHost(host);
  return <Home locale={locale} />;
}