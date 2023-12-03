import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TopicsTabs from './components/TopicsTabs';

function App() {
  console.log('APP COMPONENT EXECUTING');

  const coreConceptsTitles = CORE_CONCEPTS.map((item) => item.title);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <TopicsTabs tabsTitles={coreConceptsTitles} />
      </main>
    </div>
  );
}

export default App;
