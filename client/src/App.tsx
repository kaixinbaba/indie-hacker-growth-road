import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { I18nProvider } from "@/lib/i18n";
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StageSection } from './components/StageSection';
import { useLanguage } from './lib/i18n';

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function HomePage() {
  const [activeStage, setActiveStage] = useState('inspiration');
  const { translations } = useLanguage();
  const { stages } = translations;

  const handleStageInView = (id: string) => {
    setActiveStage(id);
  };

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar activeStage={activeStage} />
      {stages.map((stage) => (
        <StageSection
          key={stage.id}
          {...stage}
          onInView={handleStageInView}
        />
      ))}
    </main>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Router />
        <Toaster />
      </I18nProvider>
    </QueryClientProvider>
  );
}
