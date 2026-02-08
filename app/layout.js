import LoaderProvider from "@/provider/loaderProvider";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import ImgProvider from "@/provider/imgProvider";
import SettingsContext from "@/provider/settingsProvider";

export const metadata = {
  title: "Image optimizer",
  description: "",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <SettingsContext>
            <ImgProvider>
              <main className="h-screen flex">
                <Sidebar/>
                {children}
              </main>
            </ImgProvider>
          </SettingsContext>
        </LoaderProvider>
      </body>
    </html>
  );
}