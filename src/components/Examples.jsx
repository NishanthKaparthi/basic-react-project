import TabButton from './TabButton';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function onSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic from above buttons</p>;

    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    return (
        <Section title='Examples' id='examples'>
            <Tabs buttons={
                <>
                    {/*
            attribute       functionName
            onSelect={() => onSelect('components')}  
            */}
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => onSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => onSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => onSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => onSelect('state')}>State</TabButton>
                </>
            }
            >
                {tabContent}
            </Tabs>

        </Section>
    );
}