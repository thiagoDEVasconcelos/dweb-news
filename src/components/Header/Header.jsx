import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = () => {
    return (
        <header>
            <nav>
                <ul className="d-flex flex-row justify-content-between align-items-center p-3 bg-light w-100 list-unstyled">
                    <li className="mx-3">
                        <a href="/oeoeoe" className="text-decoration-none">Início</a>
                    </li>
                    <li className="mx-3">
                        <a href="/quemsomos" className="text-decoration-none">Quem Somos?</a>
                    </li>
                    <li className="mx-3">
                        <a href="/entrar" className="text-decoration-none">Entrar</a>
                    </li>
                    <li className="mx-3">
                        <a href="/nossotime" className="text-decoration-none">Nosso Time</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
