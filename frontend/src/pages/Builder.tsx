import TextEditor from '../components/TextEditor';
import CodePreview from '../components/CodePreview';
import ChangePrompt from '../components/ChangePrompt';
import { Navigate, useNavigate } from 'react-router-dom';

export const Builder = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#b14a84] via-[#000000] to-[#000000] flex flex-col px-6'>
      <header className='pt-8 pb-4'>
      <img src="/Logo.png" alt="Logo" className="cursor-pointer" onClick={() => navigate('/')} />
      </header>
      <div className='max-w-[1400px] mx-auto px-8 py-6 relative'>

        <main className='flex gap-8'>
          <TextEditor />
          <CodePreview />
        </main>

        <ChangePrompt />
      </div>
    </div>
  );
};
