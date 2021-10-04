import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards, getCardLike } from "../../redux/actions/cards.action";
import "../styles/style.css";


export default function Home() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards);

    useEffect(() => {
        dispatch(getAllCards());
    }, [])

    function handleClick(id) {
        dispatch(getCardLike(id));
    }

    return (
        <div className="conteiner">
            {cards.map((el, i) =>
                <div className="card" key={el.id}>
                    <img src={`${el.attributes?.picture}`} height="200px" className="card-img-top" alt="flat" />
                    <div className="card-body">
                        <p className="card-text">{el.attributes?.title}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Город: {el.attributes?.address.city}</li>
                        <li className="list-group-item">Тип объявления: {el.relationships?.type}</li>
                        <li className="list-group-item">{el.relationships.attributes?.first_name} {el.relationships?.attributes?.last_name}</li>
                    </ul>
                    <button onClick={() => handleClick(el.id)}>❤️  Нравится: {el.attributes.like.length}</button>
                </div>
            )}
        </div>
    )
}