import "./globals.css";
export const metadata = { title: "PowerTune" };
export default function RootLayout({ children }) {
  return <html className="font-sans"><body>{children}</body></html>;
}