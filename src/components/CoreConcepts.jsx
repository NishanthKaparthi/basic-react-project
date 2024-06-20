import CoreComponents from '../components/CoreComponents.jsx';
import { CORE_CONCEPTS } from '../data.js';


export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreComponents 
                key={conceptItem.title} //this value is used by react to make each component unique, like an id
                {...conceptItem}
              />
              ))}
            
            {/* <CoreComponents
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreComponents
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreComponents
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreComponents
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
    );
}