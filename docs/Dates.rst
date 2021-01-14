-------------------
Dates
-------------------

Date and time related utility functions.

today
=====

Syntax:
    .. code-block:: javascript

        today() : Date

Parameters:
    none

Returns:
    Date


Description:
    Returns the actual date as a Date object. `Source <https://javascriptf1.com/snippet/get-the-current-date-in-javascript>`_


Example:
    .. code-block:: javascript

        import * as Dates from "./utils/Dates.js";

        let today = Dates.today();


------


todayAsIsoString
================

    .. code-block:: javascript

        let today = Dates.todayAsIsoString();


    Returns today's date as string formatted in the ISO format: 2020-11-27. `Source <https://javascriptf1.com/snippet/get-the-current-date-in-javascript>`_

    :returns: String

yesterday
=========

    .. code-block:: javascript

        let yesterday = Dates.yesterday();


    Returns yesterday's date as a Date object. `Source <https://javascriptf1.com/snippet/get-yesterdays-date-in-javascript>`_

    :returns: Date

yesterdayAsIsoString
====================

    .. code-block:: javascript

        let yesterday = Dates.yesterdayAsIsoString();


    Returns yesterday's date as a string formatted in ISO format. 2020-11-27. `Source <https://javascriptf1.com/snippet/get-yesterdays-date-in-javascript>`_

    :returns: string

tomorrow
=========

    .. code-block:: javascript

        let tomorrow = Dates.tomorrow();


    Returns tomorrow's date as a Date object. `Source <https://javascriptf1.com/snippet/get-tomorrows-date-in-javascript>`_

    :returns: Date

tomorrowAsIsoString
====================

    .. code-block:: javascript

        let tomorrow = Dates.tomorrowAsIsoString();


    Returns tomorrow's date as a string formatted in ISO format. 2020-11-27. `Source <https://javascriptf1.com/snippet/get-tomorrows-date-in-javascript>`_

    :returns: String


