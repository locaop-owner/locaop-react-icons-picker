import React, { useState } from 'react';
import { IconPickerItem, IconPicker, IconType } from '@locaop/icon-picker';

const App: React.FC = () => {
  const [value, setValue] = useState<IconType | ''>('');
  return (
    <div className="App">
      <h1>@locaop/icon-picker</h1>
      <IconPicker value={value} onChange={(v) => setValue(v)} />
      <h2>Select icon</h2>
      <IconPickerItem icon={value} size={64} color="#000" />
    </div>
  );
};

export default App;
