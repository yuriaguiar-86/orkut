const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <h3>orkut</h3>
            <p>Copyright &copy; { year } orkut</p>
        </footer>
    );
}

export default Footer;