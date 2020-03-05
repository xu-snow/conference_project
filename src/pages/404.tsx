import { Button,Result } from 'antd';
import React from 'react';
import { router } from 'umi';

console.log(Result);
console.log(Button)
const NoFoundPage: React.FC<{}> = () => (
  <div>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => router.push('/')}>
          Back Home
      </Button>
      }
    />
  </div>

);

export default NoFoundPage;
