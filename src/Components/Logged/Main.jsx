import './Main.css';

const Main = ( props ) => {
    return (
        <main className='container__logged'>
            { props.children }
        </main>
    );
}

export default Main;