import "./NotFoundPage.css"
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="not-found-page">
            <h1 className="not-found-page__title">404 <span className="not-found-page__span">error</span></h1>
            <p className="not-found-page_text">Страница не найдена! Желаете вернуться на <NavLink className="not-found-page__home-link" to='/'>главную</NavLink> ?</p>
        </div>
    );
}
