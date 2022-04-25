import "./Roadmap.css";
import roadmapImage from "../images/roadmap.PNG";

export default function Roadmap() {
    return (
        <div className="roadmap">
            <h3>roadmap</h3>
            <div className="roadmap__info-block">
                <div>
                    <img className="roadmap__image" src={roadmapImage} />
                </div>
                <div>
                    <p className="roadmap__text">Пока время официального релиза коллекции не наступило, у вас есть возможность получить место в white list'е прокта, чтобы стать обладателем желанной НФТ от Сережи 001к со 100% вероятностью! Общайтесь в нашем <a href="">discord</a> сообществе, смотрите <a href="">истории</a> Сережи и захватывайте места в white list'е, пока они еще есть!</p>
                    <p className="roadmap__text">31 марта НФТ от Сережи 001к попадут на блокчейн Polygon, и в 12:00 по Киевскому времени, ровно за 24 часа до официального релиза, будет открыта возможность минта для тех счастливчиков, кому досталось место в white list'е проекта.</p>
                    <p className="roadmap__text">1 апреля в 12:00 по Киевскому времени откроется возможность минта НФТ! Пока все 3333 НФТ не найдут своих владельцев, никто не узнает, какой именно Сережа оказался в крипто-кошельке, а, может, вы заполучили <span style={({color: "gold"})}>золотого</span> Себека.</p>
                    <p className="roadmap__text">Продажа коллекции завершена! Все 3333 НФТ куплены и разбросаны по просторам <a href="">Opensea</a>. Теперь произойдет reveal ваших НФТ и вы узнаете, какая именно досталась вам!</p>
                    <p className="roadmap__text">Раздача призов и тд</p>
                </div>
            </div>
        </div>
    )
}
