import { Title } from "@solidjs/meta";
import { createResource } from 'solid-js';
import { getHoldSigns } from '../api/db';


export default function Home() {
  const [testResource] = createResource({}, getHoldSigns)
  

  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <pre>{JSON.stringify( testResource(), null, 2 )}</pre>
    </main>
  );
}
