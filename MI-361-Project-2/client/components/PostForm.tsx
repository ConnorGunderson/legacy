import axios from 'axios';

export const PostForm = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    await axios.put('http://localhost:4000/api/posts/new', {});

    return null;
  };
  return (
    <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
      <div className='form-group'></div>
    </form>
  );
};

const FormGroup = ({ label, input }) => {
  return <div></div>;
};
