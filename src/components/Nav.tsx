function Nav() {
    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        document.querySelector(event.currentTarget.getAttribute('href')!)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <nav>
            <a href="#harmonogram" onClick={handleOnClick}>
                Harmonogram
            </a>
            <a href="#info-pre-hosti" onClick={handleOnClick}>
                Info pre hostí
            </a>
        </nav>
    );
}

export default Nav;
