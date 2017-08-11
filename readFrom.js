const fs = require('fs');
let symbols = [], userIDs = [], logs = [];
let readData = new Promise(function (resolve, reject) {
    fs.readFile('/home/geek/Desktop/activity-logs.csv', 'utf8', (err, data) => {
        if (err)
            reject();
        resolve(data);

    });

});

readData
    .then((data) => {
        let temporaryData;
        splitString(data, ';')

        for (let i = 2; i < logs.length; i += 5) {
            // userIDs.push(logs[i])
            temporaryData = logs[i + 1].split('/[A-Z])\w+/g');
            // symbols.push(temporaryData);
            createObject(logs[i],temporaryData);
        }
    })
    .catch((err) => console.log('Error happened : ' + err));

function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    arrayOfStrings.forEach(function (element) {
        logs.push(element)
    });
    return logs;
}
function createObject(userID, symbolName) {
    let object = new Object();
    object.userID = userID;
    object.symbolName = symbolName;
    object.symbolValue ;
    if (object.userID == userID) {
        if (object.symbolName == userID.symbolName)
           object.symbolValue++;
    } else {
        object.symbolName = symbolName;
        object.symbolValue++;
    }
    console.log(object)
}
// let logData = '2017-08-09T13:51:36.502Z;MATRIKS;12951;/?symbol=GARAN&period=1min&start=2015-07-17&end=2015-07-17;veli-bar-data-api-node;bar-data-api';

// let semiColon = ';';

// splitString(logData,semiColon);