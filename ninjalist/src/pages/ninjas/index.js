import styles from '../../styles/Ninjas.module.css';

// runs before the component is rendered
// return props object
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data } // will be passed to the page component as props
  }
}

const Ninjas = (props) => {
  return ( 
    <div>
      <h1>All ninjas</h1>
      {props.ninjas.map(ninja => (
        <div key={ ninja.id }>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
        )
        )}
    </div>
   );
}
 
export default Ninjas;