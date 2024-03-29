import { Button, Form, Input } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import { apiRoutes } from '@/routes/api';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/adminSlice';
import { RootState } from '@/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '@/routes/web';
import { handleErrorResponse, setPageTitle } from '@/utils';
import { Admin } from '@/interfaces/models/admin';
import { defaultApi } from '@/utils/@api/api';
import loginLogo from '/vite.png';

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || webRoutes.dashboard;
  const admin = useSelector((state: RootState) => state.admin);
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setPageTitle('Admin Login');
  }, []);

  useEffect(() => {
    if (admin) {
      navigate(from, { replace: true });
    }
  }, [admin]);

  const onSubmit = (values: FormValues) => {
    setLoading(true);

    defaultApi
      .post(apiRoutes.login, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const admin: Admin = {
          token: response.data.token,
        };
        dispatch(login(admin));
      })
      .catch((error) => {
        handleErrorResponse(error);
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <img
        alt=""
        src={loginLogo}
        width="80"
        decoding="async"
        data-nimg="1"
        style={{ color: 'transparent' }}
        className="mx-auto my-auto block"
      />
      <Form
        className="space-y-4 md:space-y-6"
        form={form}
        name="login"
        onFinish={onSubmit}
        layout={'vertical'}
        requiredMark={false}
        initialValues={
          import.meta.env.VITE_DEMO_MODE === 'true'
            ? {
                email: 'eve.holt@reqres.in',
                password: 'password',
              }
            : {}
        }
      >
        <div>
          <Form.Item
            name="email"
            label={
              <p className="block text-sm font-medium text-gray-900">Email</p>
            }
            rules={[
              {
                required: true,
                message: 'Please enter your email',
              },
              {
                type: 'email',
                message: 'Invalid email address',
              },
            ]}
          >
            <Input
              placeholder="name@example.com"
              className="bg-gray-50 text-gray-900 sm:text-sm py-1.5"
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="password"
            label={
              <p className="block text-sm font-medium text-gray-900">
                Password
              </p>
            }
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password
              placeholder="••••••••"
              visibilityToggle={false}
              className="bg-gray-50 text-gray-900 sm:text-sm py-1.5"
            />
          </Form.Item>
        </div>

        <div className="text-center">
          <Button
            className="mt-4 bg-primary"
            block
            loading={loading}
            type="primary"
            size="large"
            htmlType={'submit'}
          >
            Login
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Login;
