import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Was ist der KI-Kompetenznachweis Generator?",
    answer: (
      <>
        Der KI-Kompetenznachweis Generator ist ein innovatives Tool, das Ihnen hilft, 
        Ihre KI-Kompetenzen zu dokumentieren und zu zertifizieren. Er wurde entwickelt, 
        um den Anforderungen der EU KI-Verordnung gerecht zu werden und Unternehmen 
        bei der Nachweisführung ihrer KI-Kompetenz zu unterstützen.
      </>
    )
  },
  {
    question: "Wie lange dauert der Zertifizierungsprozess?",
    answer: (
      <>
        Der gesamte Prozess dauert nur wenige Minuten. Sie füllen einen kurzen 
        Fragebogen aus, der Ihre KI-Kompetenzen erfasst. Nach erfolgreicher 
        Überprüfung erhalten Sie Ihr Zertifikat sofort per E-Mail.
      </>
    )
  },
  {
    question: "Ist das Zertifikat offiziell anerkannt?",
    answer: (
      <>
        Das Zertifikat ist ein selbst-deklarativer Nachweis Ihrer KI-Kompetenzen. 
        Während es nicht offiziell von Behörden ausgestellt wird, hilft es Ihnen dabei, 
        Ihre Bemühungen um KI-Compliance zu dokumentieren und zu kommunizieren.
        <br /><br />
        <em className="text-gray-600">
          * Dies ist ein Satire-Projekt und ersetzt keine offiziellen Zertifizierungen.
        </em>
      </>
    )
  },
  {
    question: "Welche Vorteile bietet das Professional-Paket?",
    answer: (
      <>
        Das Professional-Paket bietet zusätzliche Vorteile wie:
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Premium-Zertifikatsdesign</li>
          <li>QR-Code zur digitalen Verifizierung</li>
          <li>Express-Ausstellung</li>
          <li>Zusätzliche Siegel</li>
        </ul>
        <Link to="/pricing" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">
          Mehr zu unseren Paketen →
        </Link>
      </>
    )
  },
  {
    question: "Wie kann ich mein Zertifikat aktualisieren?",
    answer: (
      <>
        Sie können jederzeit ein neues Zertifikat erstellen, um Ihre aktualisierten 
        KI-Kompetenzen zu dokumentieren. Wir empfehlen eine regelmäßige Aktualisierung, 
        besonders wenn sich Ihre KI-Implementierungen oder -Strategien ändern.
      </>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Häufig gestellte Fragen
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Alles Wichtige zum KI-Kompetenznachweis Generator
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4 prose prose-indigo">
                  <div className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/questionnaire"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Jetzt Zertifikat erstellen
          </Link>
        </div>
      </div>
    </div>
  );
};