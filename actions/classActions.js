export function fetchClass() {
    return {
        type: 'FETCH_CLASSES_FULFILLED',
        payload: {
            class: [
                {
                    'id': '1', 'value': 'CPH-Javascript', 'pointsAvailable': '100', 'pointsRequired': '80', 'points': '55', attendance: [
                        { 'id': 1, 'description': '23/8', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 2, 'description': '25/8', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 3, 'description': '30/8', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 4, 'description': '6/9', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 5, 'description': '8/9', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 6, 'description': '13/9', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 7, 'description': '20/9', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 8, 'description': '22/9', 'pointsGotten': 1, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 9, 'description': '27/9', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 10, 'description': '4/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 11, 'description': '6/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 12, 'description': '11/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 13, 'description': '25/10', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 14, 'description': '1/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 15, 'description': '3/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 16, 'description': '8/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 17, 'description': '15/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 18, 'description': '17/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 19, 'description': '22/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 20, 'description': '29/11', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 21, 'description': '1/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 22, 'description': '6/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 23, 'description': '13/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                        { 'id': 24, 'description': '15/12', 'pointsGotten': 0, 'pointsAvailable': 1, type: 'Attendance' },
                    ], 
                    handIns: [{ 'id': 1, 'description': 'P1_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', type: 'Hand-in' },
                    { 'id': 2, 'description': 'P1_Review', 'pointsGotten': 10, 'pointsAvailable': '10', type: 'Review' },
                    { 'id': 3, 'description': 'P2_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', type: 'Hand-in' },
                    { 'id': 4, 'description': 'P2_Review', 'pointsGotten': 10, 'pointsAvailable': '10', type: 'Review' },
                    { 'id': 5, 'description': 'P3_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', type: 'Hand-in' },
                    { 'id': 6, 'description': 'P4_Hand-in', 'pointsGotten': 0, 'pointsAvailable': '10', type: 'Hand-in' },
                    { 'id': 7, 'description': 'P5_Hand-in', 'pointsGotten': 0, 'pointsAvailable': '10', type: 'Hand-in' },
                    { 'id': 8, 'description': 'P6_Hand-in', 'pointsGotten': 0, 'pointsAvailable': '10', type: 'Hand-in' },]
                },

                { 'id': '2', 'value': 'CPH-InternetOfThings', 'pointsAvailable': '75', 'pointsRequired': '20', 'points': '30' },

                { 'id': '3', 'value': 'CPH-AppDevelopment', 'pointsAvailable': '55', 'pointsRequired': '30', 'points': '44' },

                { 'id': '4', 'value': 'CPH-StudentsWritingSoftware', 'pointsAvailable': '80', 'pointsRequired': '80', 'points': '80' },
            ]
        }
    }
}

export function setSelected(selected) {
    return {
        type: 'SET_SELECTED',
        payload: {
            selected: selected
        }
    }
}

export function beginFetch() {
    return {
        type: 'FECTH_CLASSES'
    }
}