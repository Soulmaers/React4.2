import PropTypes from "prop-types"


export default function FormAdd({ workout, onAdd, onChange }) {

    const changeWorkout = (event) => {
        const { target } = event
        onChange(target);


    }


    const addWorkout = (event) => {
        event.preventDefault();
        if (workout.km === 0 || !workout.date) {
            return
        }
        onAdd(workout)
    }


    return (<form className="workout">
        <div className="workoutInput">
            <label className="workoutTitle">Дата (ДД.ММ.ГГГГ)</label>
            <input
                className="workoutValue"
                type="date"
                name="date"
                value={workout.date}
                onChange={changeWorkout}
            />
        </div>
        <div className="workoutInput">
            <label className="workoutTitle">Пройдено км</label>
            <input
                className="workoutValue"
                type="number"
                name="km"
                value={workout.km}
                onChange={changeWorkout}
            />
        </div>
        <button className="workoutAdd" onClick={addWorkout}>
            OK
        </button>
    </form>
    )
}

FormAdd.propTypes = {
    onAdd: PropTypes.func.isRequired
};