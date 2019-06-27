<h2>prime-pagination</h2>

<h3>About</h3>
<i>prime-pagination is a fully customizable React component written in Typescript.</i>

<h3>Install</h3>

[![prime-pagination](https://nodei.co/npm/prime-pagination.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/prime-pagination)<br/>
 or yarn: yarn add prime-pagination</li>

<h3>Usage</h3>

````
import * as React React from 'react'
import Pagination from 'prime-pagination'
...

onPageChange = (pageNumber: number) => { console.log('Current page is: 'pageNumber) }

React.render(<Pagination totalPages={6} pageChange={this.onPageChange}/>, container)
````
<h3>Dependencies</h3>

  <ul>
    <li>React</li>
    <li>Font Awesome</li>
  </ul>
  
How to add FontAwesome?<br/>
  Add the following line inside 'head' section of your HTML file:
````
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
````
<h3>Configuration Props</h3>

`````
totalPages: number; // total amount of pages

pageChange: (pageNumber: number) => void; // callback function triggered after page change

displayPages?: number; // number of pages to be displayed in the pagination bar (default is 3)

nextPage?: boolean; // next page button(appears only when there is next page)

previousPage?: boolean; // previous page button(appears only when there is previous page)

firstPage?: boolean; // first page button(appears only when currentPage != 1)

lastPage?: boolean; // last page button(appears only when currentPage != totalPages)

skipForward?: boolean; // skip forward button(skips by 3 pages, appears only when currentPage + 3 != totalPages)

skipBackward?: boolean; // skip backward button(skips by 3 pages, appears only when currentPage - 3 != 1)

style?: any; // pass style object to customize each page button
`````

<hr/>