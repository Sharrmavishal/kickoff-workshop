
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/kickoffworkshop');
  // Note: redirect() must be called before any JSX is returned.
  // This component will not render anything.
  return null;
}
