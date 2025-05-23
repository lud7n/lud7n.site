import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// ページに遷移した時、トップに戻る
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;