import React from 'react'
import './pagination.css'

type Props = {
    totalPages: number,
    pageChange: (pageNumber: number) => void,
    displayPages?: number,
    nextPage?: boolean,
    previousPage?: boolean,
    firstPage?: boolean,
    lastPage?: boolean,
    skipForward?: boolean,
    skipBackward?: boolean,
    style?: any
}
type State = {
    currentPage: number
}

export default class Pagination extends React.Component<Props, State> {

    state = { currentPage: 1 }

    render() {
        const { currentPage } = this.state
        const { nextPage, previousPage, firstPage, lastPage, skipBackward, skipForward, totalPages, style } = this.props
        let nextPageCondition, previousPageCondition, skipForwardCondition, skipBackwardCondition, firstPageCondition, lastPageCondition
        if (nextPage)
            nextPageCondition = currentPage != totalPages
        if (previousPage)
            previousPageCondition = currentPage != 1
        if (skipForward)
            skipForwardCondition = currentPage + 3 <= totalPages
        if (skipBackward)
            skipBackwardCondition = currentPage - 3 >= 1
        if (firstPage)
            firstPageCondition = currentPage != 1
        if (lastPage)
            lastPageCondition = currentPage != totalPages
        return (
            <div className="pagination">
                {firstPage && firstPageCondition && <div className="pageButton visible" style={style} onClick={() => this.goToPage(1)}><i className="fas fa-step-backward" /></div>}
                {skipBackward && skipBackwardCondition && <div className="pageButton visible" style={style} onClick={() => this.goToPage(currentPage - 3)}><i className="fas fa-backward" /></div>}
                {previousPage && previousPageCondition && <div className="pageButton visible" style={style} onClick={this.goToPreviousPage}><i className="fas fa-chevron-left" /></div>}
                {this.getPagesButtons()}
                {nextPage && nextPageCondition && <div className="pageButton visible" style={style} onClick={this.goToNextPage}><i className="fas fa-chevron-right" /></div>}
                {skipForward && skipForwardCondition && <div className="pageButton visible" style={style} onClick={() => this.goToPage(currentPage + 3)}><i className="fas fa-forward" /></div>}
                {lastPage && lastPageCondition && <div className="pageButton visible" style={style} onClick={() => this.goToPage(totalPages)}><i className="fas fa-step-forward" /></div>}
            </div>)
    }

    getPagesButtons = () => {
        let pagesButtons = []
        for (let i = 1; i <= this.props.totalPages; i++) {
            const isCurrentPage = this.state.currentPage === i
            const isPageVisible = this.isPageVisible(i)
            let className = 'pageButton'
            if (isCurrentPage)
                className += ' current';
            if (isPageVisible)
                className += ' visible';
            pagesButtons.push(<div key={i} className={className} style={this.props.style} onClick={() => this.goToPage(i)}>{i}</div>)
        }
        return pagesButtons
    }

    isPageVisible = (i: number): boolean => {
        const { currentPage } = this.state
        const { totalPages } = this.props
        const displayPages = this.props.displayPages || 3
        const leftSidePages = displayPages % 2 == 0 ? (displayPages / 2) - 1 : displayPages / 2
        const rightSidePages = displayPages / 2;

        if (i === currentPage)
            return true
        if (currentPage < (displayPages / 2) && i <= displayPages)
            return true
        if (currentPage > totalPages - (displayPages / 2) && i >= totalPages - (displayPages - 1))
            return true
        if ((i > currentPage && i <= currentPage + rightSidePages) || (i < currentPage && i >= currentPage - leftSidePages))
            return true

        return false
    }

    goToPage = (pageNumber: number) => {
        this.props.pageChange(pageNumber)
        this.setState({ currentPage: pageNumber })
    }

    goToPreviousPage = () => {
        if (this.state.currentPage === 1)
            return

        const targetPage = this.state.currentPage - 1
        this.props.pageChange(targetPage)
        this.setState({ currentPage: targetPage })
    }

    goToNextPage = () => {
        if (this.state.currentPage === this.props.totalPages)
            return

        const targetPage = this.state.currentPage + 1
        this.props.pageChange(targetPage)
        this.setState({ currentPage: targetPage })
    }
}