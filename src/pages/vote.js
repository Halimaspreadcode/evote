import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabaseClient';

export default function Vote() {
  const [user, setUser] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        // Check if the user has already voted
        const { data, error } = await supabase
          .from('votes')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (data) {
          setHasVoted(true);
        }
      } else {
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  const handleVote = async () => {
    if (!hasVoted) {
      const { error } = await supabase
        .from('votes')
        .insert({ user_id: user.id, vote: 'your_vote' });

      if (!error) {
        setHasVoted(true);
        alert('Your vote has been submitted!');
      } else {
        console.error('Error submitting vote:', error);
        alert('Error submitting vote.');
      }
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  if (hasVoted) {
    return <div>Thank you for voting. You have already voted.</div>;
  }

  return (
    <div>
      <h1>Vote</h1>
      <button onClick={handleVote}>Submit Vote</button>
    </div>
  );
}
