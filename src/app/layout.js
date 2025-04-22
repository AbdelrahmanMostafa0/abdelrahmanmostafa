import Header from "@/components/Header";
import "../styles/globals.css";
import { WindowProvider } from "@/context/WindowsContext";

export const metadata = {
  title: "Abdelrahman Mostafa",
  description: "Hi there this my site welcome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-quicksand `}>
        <WindowProvider>
          <Header />
          {children}
        </WindowProvider>
      </body>
    </html>
  );
}
