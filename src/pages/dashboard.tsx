import { Card, Flex, Typography } from 'antd';
import type { NextPage } from 'next';
import layoutStyles from '../styles/layout.module.scss';
import styles from '../styles/dashboard.module.scss';
const { Text, Title } = Typography;

const DashboardPage: NextPage = () => {
  return (
    <Flex vertical gap="large" className={layoutStyles.content_wrapper}>
      <Flex align='center' justify='space-around'>
        <Card className={styles.card}>
          <Title >
            43
          </Title>
          <Text>
            Cliques em seus links
          </Text>
        </Card>
        <Card className={styles.card}>
          <Title >
            30
          </Title>
          <Text>
            Cadastros realizados
          </Text>
        </Card>
        <Card className={styles.card}>
          <Title >
            28
          </Title>
          <Text>
            Depósitos realizados
          </Text>
        </Card>
      </Flex>
      <Card className={styles.commission_card}>
        <Text type='success'>
          R$ 10.000,00
        </Text>
        <Title level={4}>
          Comissão a receber
        </Title>
      </Card>
    </Flex>
  )
}

export default DashboardPage
