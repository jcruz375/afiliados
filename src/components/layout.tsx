import {
  DollarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TableOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import styles from '../styles/layout.module.scss';
import { useRouter } from 'next/router';
const { Header, Sider, Content } = Layout;

interface LayoutMainProps {
  children: JSX.Element;
}

const LayoutMain = ({ children }: LayoutMainProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();

  return (
    <Layout className={styles.main}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sidebar}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Conta',
              onClick: () => router.push('/')
            },
            {
              key: '2',
              icon: <PieChartOutlined />,
              label: 'Dashboard',
              onClick: () => router.push('/dashboard')
            },
            {
              key: '3',
              icon: <DollarOutlined />,
              label: 'Saque',
              onClick: () => router.push('/saque')
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;