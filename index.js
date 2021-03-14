
function superbowlWin(record) {
    let yearResult = record.find(r => r.result === 'W')
    if(yearResult) {
        return yearResult.year;
    } else {
        return undefined;
    }
}
