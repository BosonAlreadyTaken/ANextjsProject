'use client';
import {useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Flex, Select, Row, Col, Mentions  } from 'antd';

const { Option } = Select;


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  email?: string;
  phone?: string;
  captcha?: string;
  region?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const emailOps = [
  { value: 'qq.com', label: 'qq.com' },
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'outlook.com', label: 'outlook.com' },
  { value: '163.com', label: '163.com' },
  { value: 'hotmail.com', label: 'hotmail.com' },
  { value: 'yahoo.com', label: 'yahoo.com' },
  { value: 'yahoo.com.hk', label: 'yahoo.com.hk' },
  { value: 'icloud.com', label: 'icloud.com' },
  { value: 'sina.com', label: 'sina.com' },
  { value: 'foxmail.com', label: 'foxmail.com' }
]

export default function LoginForm({formName}: {formName: string}) {
  const t = useTranslations("Pages.login")

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isUseEmail, setIsUseEmail] = useState(true);
  const [regionList, setRegionList] = useState<string[]>([]);

  // 存储验证码
  const [verifyCode, setVerifyCode] = useState('');
  // 存储倒计时状态
  const [countdown, setCountdown] = useState(0);
  // 生成验证码
  const generateVerifyCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerifyCode(code);
  };
   // 开始倒计时
   const startCountdown = () => {
    let seconds = 60;
    setCountdown(seconds);
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        setCountdown(seconds);
      } else {
        clearInterval(intervalId);
        setCountdown(0);
      }
    }, 1000);
  };
  // 发送验证码
  const sendVerifyCode = () => {
    if (countdown === 0) {
      generateVerifyCode();
      startCountdown();
      // 这里可以添加实际的发送验证码逻辑，例如通过 API 发送请求
      console.log('验证码已发送:', verifyCode);
    }
  };

  useEffect(() => {
    setRegionList(['CN', 'HK', 'US'])
  }, []);

  const [form] = Form.useForm();
  const onRegionChange = (value: string) => {
    console.log('👨‍🎨🎨🍑 onRegionChange', value)
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };
  const onEmailOrPhoneChange = (value: boolean) => {
    setIsUseEmail(value)
  }

  return (
    <Form
      name={formName}
      layout="vertical"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{ minWidth: 300, margin: 'auto', maxWidth: 360 }}
      size='large'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={true}
    > 
    {isLoginForm && (
      <>
        <Form.Item<FieldType>
          className="mb-0"
          label={t('loginForm_user')}
          name="username"
          rules={[{ required: true, message: '' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label={t('loginForm_password')}
          name="password"
          rules={[{ required: true, message: '' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{t('loginForm_remember')}</Checkbox>
            </Form.Item>
            <a href="" className='text-[#d4a767]'>{t('loginForm_forgot')}</a>
          </Flex>
        </Form.Item>

        <Form.Item label={null} labelCol={{ span: 0 }} >
          <Button type="primary" htmlType="submit" block className='mb-1'> Submit </Button>
          <span className=''> {t('or')} <a onClick={() => setIsLoginForm(false)} className='text-[#d4a767] hover:text-[#d4a767]'>{t('loginForm_signup')}</a></span>
        </Form.Item>
      </>
    )}
    {!isLoginForm && (
      <>
        <Form.Item name="region" label={t('registerForm_region')} rules={[{ required: true, message: '' }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onRegionChange}
            allowClear
          >
            {
              regionList.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
        </Form.Item>

        {/* email or phone number */}
        <div className='text-[#49505E]'>
          <a onClick={() => onEmailOrPhoneChange(true)} className={cn('text-[#49505E] hover:text-[#49505E]', isUseEmail && 'text-[#d4a767] hover:text-[#d4a767]')}>{t('registerForm_email')}</a>
          <span className='mx-1'>|</span>
          <a onClick={() => onEmailOrPhoneChange(false)} className={cn('text-[#49505E] hover:text-[#49505E]', !isUseEmail && 'text-[#d4a767] hover:text-[#d4a767]')}>{t('registerForm_phone')}</a>
        </div>
        <Form.Item<FieldType>
          className="mb-0"
          label={null}
          labelCol={{ span: 0 }} 
          name={isUseEmail ? 'email' : 'phone'}
          rules={[{ required: true, message: '' },
            {pattern: isUseEmail ?  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/: /^(?:\+\d{1,3})?\d{7,15}$/, message: isUseEmail ? '请输入正确的邮箱' : '请输入正确的手机号' }
          ]}
        >
          {/* <Input /> */}
          <Mentions
            style={{ width: '100%' }}
            split={''}
            options={emailOps}
          />
        </Form.Item>

        <Form.Item name="captcha" label={t('registerForm_verificationCode')}  rules={[{ required: true, message: '' }]}>
          <Row gutter={8}>
            <Col span={10}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button disabled={countdown > 0} onClick={sendVerifyCode}>
                {countdown > 0 ? `${countdown}(s)` : t('registerForm_receiveCode')}
              </Button>
            </Col>
          </Row>
        </Form.Item>
        
        {/* /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[a-zA-Z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,16}$/ */}
        {/* extra="8-16个字符,需包含至少一个大写和小写字母、数字、特殊字符" */}
        <Form.Item<FieldType>
          label={t('registerForm_password')}
          name="password"
          rules={[
            { required: true, message: '' },
            { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[a-zA-Z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,16}$/, message: t('err_msg_pwd') }
          ]}
        >
          <Input.Password />
        </Form.Item>
        {/* extra="We must make sure that your are a human." */}
        <Form.Item label={t('registerForm_inviteCode')} labelCol={{ span: 24 }} >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            {t('registerForm_desc_1')} <a onClick={() => console.log('👨‍🎨🎨🍑 ',)} className='text-[#d4a767] hover:text-[#d4a767]'>{t('registerForm_desc_2')}</a> {t('registerForm_desc_3')}
          </Checkbox>
        </Form.Item>

        <Form.Item label={null} labelCol={{ span: 0 }} >
          <Button type="primary" htmlType="submit" block className='mb-1'>
            {t('loginForm_signup')}
          </Button>
          <span className=''> {t('or')} <a onClick={() => setIsLoginForm(true)} className='text-[#d4a767] hover:text-[#d4a767]'>{t('loginForm_button')}</a></span>
        </Form.Item>
      </>
    )}
    </Form>
  )
}
