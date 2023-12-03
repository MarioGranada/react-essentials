import { useState } from 'react';
import Tabs from '../Tabs';
import TabButton from '../TabButton';
import { EXAMPLES } from '../../data';

const TopicsTabs = ({ tabsTitles }) => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Tabs
      title="Examples"
      tabButtons={tabsTitles.map((item) => (
        <TabButton
          key={item}
          isSelected={selectedTopic === item}
          onSelect={() => handleSelect(item.toLowerCase())}
        >
          {item}
        </TabButton>
      ))}
    >
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>

          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </>
      )}
    </Tabs>
  );
};

export default TopicsTabs;
