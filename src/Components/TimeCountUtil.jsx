export const timeFormat = (time = new Date) => {
    let timeText = time.toTimeString().slice(0, 5);
    const timeYear = time.getFullYear();
    const timeMonth = time.getMonth() + 1;
    const timeDate = time.getDate();
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth() + 1;
    const thisDate = new Date().getDate();

    if (timeYear === thisYear && timeMonth === thisMonth) {
        if (timeDate === thisDate)
            return timeText + ' Bugun';

        if (thisDate - timeDate === 1)
            return timeText + ' Kecha';
    }

    return timeText + ` / ${(timeMonth < 10 ? '0' : '') + timeMonth}.${timeDate}.${timeYear}`;
}

export const viewsCountFormat = (count = 0) => {
    if(count < 100) {
        return count
    } else if(count < 1_000_000) {
        return (count/100 | 0)/10 + ' K'
    } else {
        return (count/100_000 | 0)/10 + ' M'
    }
}