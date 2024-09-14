export const LocalstorageSave = (data) => {
  try {
    const SaveState = JSON.stringify(data);
    localStorage.setItem('oldTasks', SaveState);
  } catch (err) {
    console.error('Could not save state', err);
  }
}

export const LocalstorageLoad = () => {
  try {
    const SaveState = localStorage.getItem('oldTasks');
    return (SaveState)? JSON.parse(SaveState):null;
  } catch (err) {
    return null;
  }
}