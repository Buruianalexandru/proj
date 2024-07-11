import { createStore } from 'vuex';

describe('Vuex', () => {
    let store;

    beforeEach(() => {
        store = createStore({
            state: {
                user: { level: 1 },
                courses: [{
                    id:'course1', progress:30},
                    {
                        id:'course2', progress:50
                    }
                ],
    
                exams: [{ id: 'exam1', score: 75 },
                    {id: 'exam2', score: 85 }],
                exercises:[],
                quizzes:[]
            },
            mutations: {
                updateLessonProgress(state, { lessonId, isCorrect }) {

                    let lesson = state.lessons.find(l => l.id === lessonId);
                    if (lesson) {
                        lesson.score = isCorrect ? lesson.score + 20 : lesson.score;

                    }
                },
                updateCourseProgress(state, { courseID, progress }) {
                    let course = state.courses.find(c => c.id === courseID);
                    if (course) {
                        course.progress = progress;
                    }
                },
                updateExamScore(state, { examID, score }) {
                    const exam = state.exams.find(ex => ex.id === examID);
                    if (exam) {
                        exam.score = score;
                    }
                },
                updateUserLevel(state, level) {
                    if (state.user) {
                        state.user.level = level;
                    }
                },
            }
        });
    });

    it('updates the user level if user exists', () => {
        store.commit('updateUserLevel', 2);
        expect(store.state.user.level).toBe(2);
    });

    it('does nothing if no user exists', () => {
        store.state.user = null; 
        store.commit('updateUserLevel', 3);
        expect(store.state.user).toBeNull();
    });
});
