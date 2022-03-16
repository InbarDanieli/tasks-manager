import { IntroDescription } from "./IntroDescription"

const PAGE_NAME = 'TaskItems-pageName'
const TASK_LISTS = 'TaskItems-tasklists'

/**
 * @typedef {object} Task
 * @property {string} task
 * @property {string} description
 * @property {Date} date
 * @property {string} [removedate]
 * @property {string} bordercolor
 */

/**
 * Return page name from local storge
 * 
 * @returns {string} page name
 */
export function GetPageName() {
  const pageName = localStorage.getItem(PAGE_NAME)
  return pageName ? pageName : null
}

/**
 * Update page name in local storage
 * 
 * @param {String} pageName page name
 */
export function SetPageName(pageName) {
  localStorage.setItem(PAGE_NAME, pageName)
}

/**
 * Return all list items
 * 
 * @returns {Object.<string, Task[]>} list liems
 */
export function GetTaskLists() {
  const rawLists = localStorage.getItem(`${TASK_LISTS}`)

  if (!rawLists) {
    return IntroDescription
  }

  const lists = JSON.parse(rawLists)

  return lists
}

/**
 * 
 * @param {string} listName 
 * @returns {Task[] | undefined}
 */
export function GetTaskList(listName) {
  const lists = GetTaskLists()

  if (!lists[listName]) {
    return undefined
  }

  const list = lists[listName].map((item) => {
    const date = item.date
    item.date = new Date(date);
    return item;
  });

  return list
}

/**
 * 
 * @param {string} listName 
 * @param {Task[]} tasks 
 */
export function SetTaskList(listName, tasks) {
  const lists = GetTaskLists()

  lists[listName] = tasks

  localStorage.setItem(TASK_LISTS, JSON.stringify(lists))
}