export const updateAchievement = (newAchievement) => {
    return {
        type: 'UPDATE',
        data: {
            title: newAchievement.title,
            text: newAchievement.text,
            counter: newAchievement.counter,
        }
    }
}

const achievementReducer = (state = {
    title: 'Welcome!',
    text: 'You landed in my little corner of the world.',
    counter: 1,
}, action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.data
        default:
            return state
    }
}

export default achievementReducer