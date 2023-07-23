//Чтобы потом легче было в одном месте поменять, если изменился state
export const getContactsState = state => state.contacts.contacts;
export const getFilterState = state => state.filter.value;