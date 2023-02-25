// Generates `/id/1` and `/id/2`
// Solves "How many HTML need to be made based on our data"
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths, // an array of objects where each object is a route param
    fallback: false,
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

function Details(props) {
  return (
    <div>
      <h1>{props.ninja.name}</h1>
      <p> {props.ninja.email}</p>
      <p> {props.ninja.website}</p>
      <p> {props.ninja.address.city}</p>
    </div>
  );
}

export default Details;
