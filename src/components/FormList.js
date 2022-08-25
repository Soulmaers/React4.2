import PropTypes from "prop-types"
import uuid from "react-uuid";
import moment from "moment";

export default function FormList({ list, onRemove, onEdit }) {
    if (list.length === 0) return null

    list.sort(function (a, b) {
        var dateA = new Date(a.date),
            dateB = new Date(b.date);
        return dateA - dateB;
    });

    const onRemovelist = (el) => {
        onRemove(el);

    }


    const onEditlist = (el) => {
        onRemove(el);
        onEdit(el);
    }



    return (
        <div className="result">
            <div className="result-title">
                <label className="workoutTitle">Дата (ДД.ММ.ГГГГ)</label>
                <label className="workoutTitle">Пройдено км</label>
                <label className="workoutTitle">Действия</label>
            </div>
            <div className="resultList">
                <ul>
                    {list.map((el) => (
                        <li className="resultItem" key={uuid()}>
                            <label>{moment(el.date).format("DD.MM.YYYY")}</label>
                            <label>{el.km}</label>
                            <div>
                                <button onClick={() => onEditlist(el)}>✎</button>
                                <button onClick={() => onRemovelist(el)}>🗙</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    )
}

FormList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};