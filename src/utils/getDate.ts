export function getData(): string {
    const currentDate = new Date();
    let date = null;
    let day = null;
    let month = null;
    let minutes = null;
    if (currentDate.getDate().toString().length === 1) {
        day = "0" + currentDate.getDate().toString();
    } else {
        day = currentDate.getDate().toString();
    }
    if (currentDate.getMonth().toString().length === 1) {
        month = "0" + currentDate.getMonth().toString();
    } else {
        month = currentDate.getMonth().toString();
    }
    if (currentDate.getMinutes().toString().length === 1) {
        minutes = "0" + currentDate.getMinutes().toString();
    } else {
        minutes = currentDate.getMinutes().toString();
    }

    return (date =
        day +
        "." +
        month +
        "." +
        currentDate.getFullYear().toString() +
        " " +
        currentDate.getHours().toString() +
        ":" +
        minutes);
}
