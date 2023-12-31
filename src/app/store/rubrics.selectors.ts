export const selectCurrentRubric = state => state.rubrics.currentRubric;
export const selectAllRubrics = state => state.rubrics.allRubrics;
export const selectError = state => state.rubrics.error;
export const selectSaving = state => state.rubrics.saving;
export const selectDeleting = state => state.rubrics.deleting;
export const selectPageTitle = state => state.rubrics.pageTitle;
export const selectConnected = state => state.rubrics.connected;

export const selectFilteredRubrics = state => {
    return state.rubrics.allRubrics.filter(rubric => {
        const rubricRecord = rubric.name ? rubric : rubric.record;
        return (
            rubricRecord.name.toLowerCase().includes(state.rubrics.listFilter.toLowerCase()) ||
            rubricRecord.description.toLowerCase().includes(state.rubrics.listFilter.toLowerCase())
        );
    });
};
