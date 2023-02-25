import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';




const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // redirect the user after 3 seconds
    setTimeout(() => {
      router.push('/')
    }, 3000)
    console.log('abc');
  }, [])
  return ( 
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>Thta page cannot be found.</h2>
      <p>Go back to the <Link href="/">Homepage</Link> </p>
    </div>
  );
}
 
export default NotFound;