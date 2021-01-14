/**
 * Returns the actual date as a Date object
 *
 * @see <a href="https://javascriptf1.com/snippet/get-the-current-date-in-javascript">Get actual date</a>
 *
 * @returns {Date}
 */
export const today = () => {
    return new Date();
}

/**
 * Returns the actual date as a string formatted as ISO date. 2020-11-27
 *
 * @see <a href="https://javascriptf1.com/snippet/get-the-current-date-in-javascript">Get actual date</a>
 *
 * @returns {String}
 */
export const todayAsIsoString = () => {
    return new Date().toISOString();
}

/**
 * Returns the yesterday's date as a Date object
 *
 * @see <a href="https://javascriptf1.com/snippet/get-yesterdays-date-in-javascript">Get yesterday's date</a>
 *
 * @returns {Date}
 */
export const yesterday = () => {
    let today = new Date();
    let yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    return yesterday;
}

/**
 * Returns the yesterday's date as a string formatted as ISO date. 2020-11-27
 *
 * @see <a href="https://javascriptf1.com/snippet/get-yesterdays-date-in-javascript">Get yesterday's date</a>
 *
 * @returns {String}
 */
export const yesterdayAsIsoString = () => {
    let today = new Date();
    let yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    return yesterday.toISOString();
}

/**
 * Returns the tomorrow's date as a Date object
 *
 * @see <a href="https://javascriptf1.com/snippet/get-tomorrows-date-in-javascript">Get tomorrow's date</a>
 *
 * @returns {Date}
 */
export const tomorrow = () => {
    let today = new Date();
    let tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);

    return tomorrow;
}

/**
 * Returns the yesterday's date as a string formatted as ISO date. 2020-11-27
 *
 * @see <a href="https://javascriptf1.com/snippet/get-tomorrows-date-in-javascript">Get tomorrow's date</a>
 *
 * @returns {String}
 */
export const tomorrowAsIsoString = () => {
    let today = new Date();
    let tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);

    return tomorrow.toISOString();
}
