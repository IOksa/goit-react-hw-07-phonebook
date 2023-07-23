//Чтобы потом легче было в одном месте поменять, если изменился state
export const getContactsState = state => state.contacts.contacts;
export const getIsLoading = state=> state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilterState = state => state.filter.value;
