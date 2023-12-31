import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/config/MUI";
const vazir = Vazirmatn({
  subsets: ["arabic"],
  preload: false,
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={vazir.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
