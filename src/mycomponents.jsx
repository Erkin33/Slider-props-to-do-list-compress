import { useState } from 'react';

export default  function MyComponent() {
  const [count, setCount] = useState(0); // Изначально count равен 0

  return (
    <div>
      <p>Ты нажал кнопку {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
    </div>
  );
}
