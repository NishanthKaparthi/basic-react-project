import TabButton from './TabButton';
import { EXAMPLES  } from '../data.js';
import { useState } from 'react';


export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function onSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic);
    }

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                {/*
            attribute       functionName
            onSelect={() => onSelect('components')}  
            */}
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => onSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => onSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => onSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => onSelect('state')}>State</TabButton>
            </menu>
            {selectedTopic === undefined ? <p>Please select a topic from above buttons</p> :
                <div id='tab-content'>
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            }

        </section>
    );
}