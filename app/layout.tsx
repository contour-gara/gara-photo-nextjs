import { Sidebar } from "@/widgets/sidebar/ui/Sidebar";
import "../src/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-wrap h-screen bg-[#000000]">
        <div className="w-1/4 border-r-2 border-[#242424]">
          <Sidebar />
        </div>
        <main className="w-3/4">{children}</main>
      </body>
    </html>
  );
}
