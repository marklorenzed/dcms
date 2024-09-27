import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/redux/store'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='flex justify-center h-screen w-screen'>
          <div className='flex m-auto rounded-[60px] bg-white w-[400px] md:w-[900px] overflow-hidden'>
            <div className='w-full md:w-1/2 flex flex-col items-center p-10 relative'>
              <img
                src='/login-element.svg'
                alt='login-element'
                height={350}
                width={350}
                className='absolute left-4 top-0 z-0'
              />
              <div className='mb-8 h-16 relative'>
                <img
                  src='/elewana-logo.png'
                  alt='elewana-logo'
                  className='w-full h-full'
                />
              </div>
              <div className='flex flex-col items-center z-50 w-full'>
                {children}
              </div>
            </div>
            <div className='w-1/2 relative overflow-hidden rounded-[60px] hidden md:block md:h-[500px] '>
              <img
                className='w-full h-full object-contain'
                src={'/elewana-login-img00.png'}
                alt='login'
              />
            </div>
          </div>
        </div>
      </PersistGate>
    </Provider>
  )
}
