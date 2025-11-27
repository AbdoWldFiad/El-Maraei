import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Businesses from "@/pages/Businesses";
import Medical from "@/pages/businesses/Medical";
import MedicalAppointment from "@/pages/businesses/MedicalAppointment";
import Shipping from "@/pages/businesses/Shipping";
import Marine from "@/pages/businesses/Marine";
import Mining from "@/pages/businesses/Mining";
import Trade from "@/pages/businesses/Trade";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import UnderDevelop from "@/pages/UnderDevelopment"

function Router() {
  return (
    <>            {/* until the backend is ready */}
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/businesses" component={Businesses} />
          <Route path="/businesses/medical" component={Medical} />
          <Route path="/businesses/medical/appointment" component={UnderDevelop} /> {/*component={MedicalAppointment} /> */}
          <Route path="/businesses/shipping" component={Shipping} />
          <Route path="/businesses/marine" component={Marine} />
          <Route path="/businesses/mining" component={Mining} />    {/* delete the comments and the component={UnderDevelop} /> */}
          <Route path="/businesses/trade" component={Trade} />
          <Route path="/news" component={News} />
          <Route path="/news/:id" component={UnderDevelop} /> {/*component={NewsDetail} /> */}
          <Route path="/careers" component={UnderDevelop} /> {/*component={Careers} /> */}
          <Route path="/contact" component={UnderDevelop} /> {/*component={Contact} /> */}
          <Route path="/UnderDevelopment" component={UnderDevelop} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Toaster />
              <Router />
            </div>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
