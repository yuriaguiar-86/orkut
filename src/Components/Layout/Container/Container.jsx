import './Container.css';

const Container = ( props ) => {
    return (
        <main className='container__main'>
            <div className='container__wrapper'>
                { props.children }
            </div>
        </main>
    );
}

export default Container;