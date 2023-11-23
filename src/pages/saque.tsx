import { Button, Flex, Input, Typography } from 'antd';
import type { NextPage } from 'next';
import styles from '../styles/layout.module.scss';
import { useState } from 'react';
const { Text, Title } = Typography;

const SaquePage: NextPage = () => {
  const [withdrawValue, setWithdrawValue] = useState('');
  const [withdrawKey, setWithdrawKey] = useState('');
  return (
    <Flex vertical justify='space-between' className={styles.content_wrapper}>
      <Flex vertical gap="large">
        <Flex justify='center' align='flex-start' gap="middle">
          <Title level={4}>Saldo disponivel: </Title>
          <Text type='success' strong style={{fontSize: '22px'}}>R$ 24.000,00</Text>
        </Flex>
        <Flex vertical gap={2}>
          <label htmlFor="value">Valor</label>
          <Input
            id='value'
            value={withdrawValue}
            onChange={(event) => setWithdrawValue(event.target.value)}
          />
        </Flex>
        <Flex vertical gap={2}>
          <label htmlFor="withdrawKey">chave pix</label>
          <Input
            id='withdrawKey'
            value={withdrawKey}
            onChange={(event) => setWithdrawKey(event.target.value)}
          />
        </Flex>
      </Flex>
      <Flex justify='flex-end'>
        <Button type='primary'>
          Solicitar saque
        </Button>
      </Flex>
    </Flex>
  )
}

export default SaquePage
