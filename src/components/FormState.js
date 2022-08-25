
import FormAdd from './FormAdd'
import FormList from './FormList'
import { useState } from "react";
import uuid from "react-uuid";




const init = {
    id: "",
    date: "",
    km: "",
};


export default function FormState() {

    const [workout, setWorkout] = useState(init);
    const [workoutList, setWorkoutList] = useState([]);


    const addWorkout = (workout) => {
        for (let i = 0; i < workoutList.length; i++) {
            if (workoutList[i].date === workout.date) {
                workoutList[i].km = Number(workoutList[i].km) + Number(workout.km);
                setWorkoutList(prev => prev.map(el => el));
                setWorkout(init);
                return
            }
        }
        setWorkoutList(prev => [
            ...prev,
            {
                id: uuid(),
                date: workout.date,
                km: workout.km
            }
        ])

        setWorkout(init);
    }

    const changeWorkout = (target) => {
        setWorkout(prev => ({ ...prev, [target.name]: target.value }));

    }


    const deleteWorkout = (el) => {
        const changeList = workoutList.filter(elem => elem.date !== el.date)
        setWorkoutList(changeList)


    }

    const editWorkout = (el) => {
        setWorkout({
            id: el.id,
            date: el.date,
            km: el.km,
        });

    }

    return (
        <>
            <FormAdd workout={workout} onAdd={addWorkout} onChange={changeWorkout} />
            <FormList list={workoutList} onRemove={deleteWorkout} onEdit={editWorkout} />

        </>


    )
}