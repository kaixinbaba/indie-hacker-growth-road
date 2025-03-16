import { useState } from 'react';
import { StageSection } from '@/components/StageSection';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { Navbar } from '@/components/Navbar';
import { useTranslations } from '@/lib/i18n';

export default function Home() {
  const { stages } = useTranslations();
  const [activeStage, setActiveStage] = useState(stages[0].id);

  return (
    <>
      <Navbar />
      <main className="h-screen overflow-y-auto snap-y snap-mandatory pt-16">
        <LanguageSwitcher />
        <ScrollIndicator 
          stages={stages} 
          activeStage={activeStage} 
        />

        {stages.map((stage) => (
          <StageSection
            key={stage.id}
            {...stage}
            onInView={setActiveStage}
          />
        ))}
      </main>
    </>
  );
}