/* HUMAX RECORDINGS UTILS */
(function(jasmine) {
    "use strict";
    jasmine.humax = extend(jasmine.humax || {}, {
        query: createQueryInstance(),
        search:createSearchInstance()
    });

    function createQueryInstance() {
        //***API:***  OIPF 7.12.2.2 <br />
        //> eq  `0`  True if the specified value is <u>equal </u>to the value of  the specified field. <br />
        //> notEq  `1 ` True if the specified value is <u>not equal </u>to the value of the specified field. <br />
        //> gt  `2 ` True if the value of the specified field is <u>greater than</u> the specified value <br />
        //> gtOrEq  `3 `  True if the value of the specified field is <u>greater  than or equal</u> to the specified value.<br />
        //> lt   ` 4 `  True if the value of the specified field is <u>less than</u>  the specified value. <br />
        //> ltOrEq   `5 `  True if the value of the specified field is <u>less than  or equal </u>to the specified value. <br />
        //> contains  `6 `  True if the string value of the specified field  <u>contains </u> the specified value. This operation
        //SHALL be case insensitive, and SHALL match  parts of a word as well as whole words
        //(e.g. a  value of "term" will match a field value of  "Terminator"). <br />
        //>`7 `  True if the specified field exists. <br />
        return {
            eq: 0,   // "=="
            notEq: 1,  // "!="
            gt: 2,      // ">"
            gtOrEq: 3,    // ">="
            lt: 4,          // "<"
            ltOrEq: 5,    // "<="
            contains: 6    // "%%"
        };
    }

    function createSearchInstance(){
        return {
            target: defineSearchTarget(),
            isAvailableState : isAvailableState,
            print: displaySearch
        };
    }

    function defineSearchTarget(){
        // ***API ***, OIPF 7.12.1.3 <br />
        //>scheduled  ` 1`  Metadata relating to scheduled content shall be searched.
        //> onDemand ` 2`  Metadata relating to scheduled content shall be searched.
        //> programme  ` 3`   humax extension API
        //> channel  ` 4`  humax extension
        //> file` 5`  humax extension
        //> recording  ` 6`  humax extension
        return {
            scheduled : 1,
            onDemand : 2,
            programme : 3,
            channel : 4,
            file : 5,
            recording : 6
        };
    }

    function isAvailableState(state){
        // ***API ***  OIPF 7.12.1 <br />
        //> ` 0 `  Search has finished.
        //> ` 1`  More search results are available.
        //> ` 2 `  The data returned by the search is no longer valid
        return (state === 0  || state === 1);
    }

    function displaySearch(search){
        console.log("ID:"+search.id + ", count : " + search.result.length);
        jasmine.humax.eachItem(search.result, function(programme){
            console.log('EVENT:'+programme.name+', TIME:'+dateFormat(new Date(programme.startTime*1000)));
        });
    }

    function dateFormat(date) {
        return [
            addZero(date.getFullYear()) + "/",
            addZero(date.getMonth()+1) + "/",
            addZero(date.getDate()) + "-",
            addZero(date.getHours()) + ":",
            addZero(date.getMinutes()) + ":",
            addZero(date.getSeconds()) ].join('');

        function addZero(i){
            return i < 10 ? "0" + i : i;
        }
    }

    function extend(obj, data) {
        var n;
        for( n in data){
            if(data.hasOwnProperty(n)){
                obj[n] = data[n];
            }
        }
        return obj;
    }
}(jasmine));