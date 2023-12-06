const nationalHolidayApiUrl = "https://holidays-jp.github.io/api/v1/date.json";
const saturdayIndex = 0;
const sundayIndex = 6;
const holidays = [saturdayIndex, sundayIndex];
const dataToInsert = {
    start_time: '09:30',
    end_time: '18:30',
    relax_time: '01:00'
};

const input = async () => {
    const nationalHolidayObject = await (await fetch(nationalHolidayApiUrl)).json();
    const nationalHolidays = Object.keys(nationalHolidayObject);
    for (const el of document.querySelectorAll("input[id$='TargetDate']")) {
        let isHoliday = nationalHolidays.includes(el.value) || holidays.includes((new Date(el.value)).getDay());
        if (isHoliday === false) {
            for (const [key, time] of Object.entries(dataToInsert)) {
                document.getElementById(el.value.replace(/\-/g, '') + key).value = time;
            }
        }
    }
}

input();