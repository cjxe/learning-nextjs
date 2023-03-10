import Link from 'next/link';

// runs before the component is rendered
// return props object
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }, // will be passed to the page component as props
  };
};

function Ninjas(props) {
  return (
    <div>
      <h1>All ninjas</h1>
      {props.ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <h3>{ninja.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default Ninjas;
