import { Button, Flex, Input, Typography } from 'antd';
import type { NextPage } from 'next';
import styles from '../styles/layout.module.scss';
import { useState } from 'react';
const { Text, Title } = Typography;

const Home: NextPage = () => {
  const [name, setName] = useState('João Cruz');
  const [email, setEmail] = useState('joaocruz375@gmail.com');
  const [username, setUsername] = useState('jcruz_23');
  return (
    <Flex vertical justify='space-between' className={styles.content_wrapper}>
      <Flex vertical gap="large">
        <Flex vertical gap={2}>
          <label htmlFor="name">Nome*</label>
          <Input
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Flex>
        <Flex vertical gap={2}>
          <label htmlFor="email">Email*</label>
          <Input
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Flex>
        <Flex vertical gap={2}>
          <label htmlFor="username">Nome de usuário</label>
          <Input
            id='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Flex>
        <Flex vertical gap={2}>
          <label htmlFor="fuso">Mostrar resultados no fuso horário:</label>
          <Input
            id='fuso'
            value={'GMT-3:00'}
          />
        </Flex>
        <Flex vertical gap={2}>
          <Flex justify='space-between'>
            <Title level={5}>Meus links</Title>
            <Button type='primary' ghost size='small'>+ Novo Link</Button>
          </Flex>
          <Flex vertical gap="small">
            <Flex gap="middle">
              <Text type='success'>
                https://www.bets.com.br/
              </Text>
              <Button size='small'>Copiar</Button>
            </Flex>
            <Flex gap="middle">
              <Text type='success'>
                https://www.bets.com.br/
              </Text>
              <Button size='small'>Copiar</Button>
            </Flex>
          </Flex>
        </Flex>
        <Text style={{cursor: 'pointer'}} type="danger">Redefinir senha</Text>
      </Flex>
      <Flex justify='flex-end'>
        <Button type='primary'>
          Salvar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
