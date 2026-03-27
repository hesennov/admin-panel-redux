import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { PAGES } from "@/constants/navigation/navigation";

const Elements = () => useRoutes(PAGES);

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loadingg....</div>}>
        <Elements />
      </Suspense>
    </BrowserRouter>
  );
}
