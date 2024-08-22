import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        className="input border-1 mt-4 w-1/2 rounded border-0 p-2 outline-none"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary"> start ordering </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
