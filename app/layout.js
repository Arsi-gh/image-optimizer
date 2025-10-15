import LoaderProvider from "@/provider/loaderProvider";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import ClearBtn from "@/components/clearBtn";
import ImgProvider from "@/provider/imgProvider";
import PercentageProvider from "@/provider/percentageProvider";

export const metadata = {
  title: "Image optimizer",
  description: "",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="flex">
        <LoaderProvider>
          <PercentageProvider>
            <ImgProvider>
              <Sidebar/>
                {children}
              <ClearBtn/>
            </ImgProvider>
          </PercentageProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}