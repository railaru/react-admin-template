import React, { FC } from 'react';
import { Button } from 'antd';

import styles from './App.module.less';

const App: FC = () => {
  return (
    <main className={styles.app}>
      <Button type="primary">Hello, Ant Design!</Button>
      <a href="foo.bar">I'm a link. Click me, please!</a>
    </main>
  );
};

export default App;
