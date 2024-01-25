import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="md:flex shadow-md w-full">
      <div className="relative md:w-2/4 p-5 md:h-screen sm:w-full bg-gray-900">
        <div className="md:absolute text-white md:w-4/5 md:top-1/2 md:left-1/2 md:transform md:translate-x-[-50%] md:translate-y-[-50%]">
          <i className="text-xs">Welcome to,</i>
          <h1 className="text-5xl font-semibold mb-4">STARTER</h1>
          <p className="text-xs">
            <b>Lorem Ipsum</b> is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged
          </p>
        </div>
      </div>
      <div className="md:w-2/4 md:p-24 sm:w-full">
        <div className="p-8 space-y-4 md:space-y-6 md:p-10 sm:p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
