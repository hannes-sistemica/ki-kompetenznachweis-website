import React from 'react';

interface LegalProps {
  type: 'impressum' | 'datenschutz';
}

const legalContent = {
  impressum: {
    title: 'Impressum',
    content: [
      {
        title: 'Angaben gemäß § 5 TMG',
        content: [
          'sistemica GmbH',
          'Haingärten 5',
          '61352 Bad Homburg'
        ]
      },
      {
        title: 'Registereintrag',
        content: [
          'Handelsregister: HRB 107421',
          'Registergericht: Frankfurt am Main'
        ]
      },
      {
        title: 'Vertreten durch',
        content: ['Hannes Lehmann']
      },
      {
        title: 'Kontakt',
        content: [
          'Telefon: 06172-2658572',
          'E-Mail: kontakt@sistemica.de'
        ]
      },
      {
        title: 'Umsatzsteuer-ID',
        content: [
          'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
          'DE310431641'
        ]
      },
      {
        title: 'Redaktionell verantwortlich',
        content: ['Hannes Lehmann']
      },
      {
        title: 'EU-Streitschlichtung',
        content: [
          'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
          'https://ec.europa.eu/consumers/odr/',
          'Unsere E-Mail-Adresse finden Sie oben im Impressum.'
        ]
      },
      {
        title: 'Verbraucherstreitbeilegung/Universalschlichtungsstelle',
        content: [
          'Wir sind bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          'Die zuständige Stelle ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,',
          'Straßburger Straße 8, 77694 Kehl am Rhein',
          'https://www.verbraucher-schlichter.de'
        ]
      },
      {
        title: 'Zentrale Anlaufstelle nach dem Gesetz über digitale Dienste - DSA (Verordnung (EU) 2022/265)',
        content: [
          'Unsere zentrale Anlaufstelle für Nutzer und Behörden gemäß Art. 11, 12 DSA erreichen Sie wie folgt:',
          'E-Mail: kontakt@sistemica.de',
          'Die verfügbaren Sprachen für die Kontaktaufnahme sind: Deutsch, Englisch.'
        ]
      }
    ]
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    content: [
      {
        title: 'Datenschutz auf einen Blick',
        content: [
          'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.'
        ]
      },
      {
        title: 'Datenerfassung auf dieser Website',
        content: [
          'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
          'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
          '',
          'Wie erfassen wir Ihre Daten?',
          'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
          '',
          'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
          '',
          'Wofür nutzen wir Ihre Daten?',
          'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
        ]
      },
      {
        title: 'Ihre Rechte',
        content: [
          'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          '',
          'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.'
        ]
      },
      {
        title: 'Hosting und Content Delivery Networks (CDN)',
        content: [
          'Externes Hosting',
          'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
          '',
          'Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).',
          '',
          'Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.'
        ]
      },
      {
        title: 'Cloudflare',
        content: [
          'Wir nutzen den Service „Cloudflare". Anbieter ist die Cloudflare Germany GmbH, Rosental 7, 80331 München (nachfolgend „Cloudflare").',
          '',
          'Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Dabei wird technisch der Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von Cloudflare geleitet. Das versetzt Cloudflare in die Lage, den Datenverkehr zwischen Ihrem Browser und unserer Website zu analysieren und als Filter zwischen unseren Servern und potenziell bösartigem Datenverkehr aus dem Internet zu dienen.',
          '',
          'Die Nutzung von Cloudflare basiert auf unserem berechtigten Interesse an einer möglichst fehlerfreien und sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).',
          '',
          'Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: https://www.cloudflare.com/privacypolicy/'
        ]
      },
      {
        title: 'Allgemeine Hinweise und Pflichtinformationen',
        content: [
          'Datenschutz',
          'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
          '',
          'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
          '',
          'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.'
        ]
      },
      {
        title: 'Verantwortliche Stelle',
        content: [
          'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
          '',
          'sistemica GmbH',
          'Haingärten 5',
          '61352 Bad Homburg',
          '',
          'Telefon: 06172-2658572',
          'E-Mail: kontakt@sistemica.de'
        ]
      }
    ]
  }
};

export const Legal: React.FC<LegalProps> = ({ type }) => {
  const { title, content } = legalContent[type];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
      <div className="space-y-8">
        {content.map((section, index) => (
          <section key={index} className="prose prose-indigo max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.content.map((line, lineIndex) => (
                <p key={lineIndex} className={`text-gray-600 ${line === '' ? 'my-4' : ''}`}>
                  {line}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};