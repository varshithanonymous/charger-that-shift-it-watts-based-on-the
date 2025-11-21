import "./globals.css";
export const metadata = { title: "PowerTune" };
export default function RootLayout({ children }) {
  return <html className="font-serif"><body>{children}</body></html>;
}