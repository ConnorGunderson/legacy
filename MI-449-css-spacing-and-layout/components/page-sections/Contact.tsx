import { useEmail } from '@/lib/email';
import { useObserver } from '@/utils/intersection-observer';
import { FiMail } from 'react-icons/fi';
import { SuccessModal } from '../layout/SuccessModal';

export const Contact = () => {
  const { ref } = useObserver();
  const {
    senderName,
    senderEmail,
    subject,
    message,
    dispatch,
    sendEmail,
  } = useEmail();
  return (
    <section
      id='projects'
      className={`flex flex-col w-full  bg-purple-200 `}
      style={{ minHeight: '500px' }}
      ref={ref}
    >
      <header className='flex flex-col justify-center items-center'>
        <h2 className='mx-auto text-center text-4xl p-2 border-b-2  border-purple-400'>
          Contact <FiMail className='inline' />
        </h2>
      </header>
      <form
        onSubmit={(e) => sendEmail(e)}
        className={`contactForm flex flex-col  justify-center items-center h-500 py-4`}
        ref={ref}
        id='contact'
      >
        <div style={{width: 200}}>
          <label htmlFor='senderName'>Full Name</label>
          <input
            name='senderName'
            value={senderName}
            placeholder='Name'
            onChange={(e) =>
              dispatch({ type: 'NAME', payload: e.target.value })
            }
            required
          />
        </div>
        <div style={{width: 200}}>
          <label htmlFor='senderEmail'>Email</label>
          <input
            type='email'
            value={senderEmail}
            name='senderEmail'
            placeholder='foo@bar.com'
            onChange={(e) =>
              dispatch({ type: 'EMAIL', payload: e.target.value })
            }
            required
          />
        </div>
        <div style={{width: 200}}>
          <label htmlFor='subject'>Subject</label>
          <input
            name='subject'
            value={subject}
            placeholder='Subject'
            onChange={(e) =>
              dispatch({ type: 'SUBJECT', payload: e.target.value })
            }
            required
          />
        </div>
        <div  style={{width: 300}}>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            value={message}
            placeholder='Message...'
            onChange={(e) =>
              dispatch({ type: 'MESSAGE', payload: e.target.value })
            }
            required
          />
        </div>
        <button
          type='submit'
          className='py-1 px-2 mt-3 rounded-sm shadow-md border border-purple-500 transition-all hover:border-purple-400 hover:bg-purple-400 hover:text-white'
          style={{ width: '100px' }}
        >
          Send
        </button>
      </form>
      <SuccessModal />
    </section>
  );
};
