import React, { useState } from 'react';
import HomeFundationsCollData from '../HomeFundationsCollData.json';
import HomeFundationsFundsData from '../HomeFundationsFundsData.json';
import HomeFundationsOrgsData from '../HomeFundationsOrgsData.json';
import ReactPaginate from 'react-paginate';

function HomeFundations() {

    const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
            setToggleState(index);
        };

    // const [users, setUsers] = useState(HomeFundationsFundsData.slice(0, 8));
    // const [pageNumber, setPageNumber] = useState(0)

    // const usersPerPage = 3
    // const pagesVisited = pageNumber * usersPerPage

    // const displayUsers = users
    // .slice(pagesVisited, pagesVisited + usersPerPage)
    // .map((user) => {
    //     return (
    //         <div className='user'>
    //             <h3>{user.title}</h3>
    //             <h3>{user.description}</h3>
    //             <h3>{user.items}</h3>
    //         </div>
    //     );
    // });

    // const pageCount = Math.ceil(users.length / usersPerPage);

    // const changePage = ({selected}) => {
    //     setPageNumber(selected)
    // }

    return (
        <>
            <div className='fundations_info'>
                <div className='fundations_title'>Komu pomagamy?</div>
                <ul className='fundations_elements'>
                    <li className={toggleState === 1 ? 'fundations_funds active-tab' : 'fundations_funds'}
                    onClick={() => toggleTab(1)}
                    >Fundacjom</li>
                    <li className={toggleState === 2 ? 'fundations_orgs active-tab' : 'fundations_orgs'}
                    onClick={() => toggleTab(2)}
                    >Organizacjom<br></br>
                    pozarządowym</li>
                    <li className={toggleState === 3 ? 'fundations_coll active-tab' : 'fundations_orgs'}
                    onClick={() => toggleTab(3)}
                    >Lokalnym<br></br>
                    zbiórkom</li>
                </ul>
            </div>
            <div className='fundations_ele_content'>
                <div className={toggleState === 1 ? 'fundations_funds_cont active-content' : 'fundations_funds_cont'}>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br></br>
                    którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br></br>
                    komu pomagają i czego potrzebują.
                </div>
                <div className='App'>
                    {/* {displayUsers}  */}
                    {/* <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={changePage}
                    /> */}
                </div>   
                <div className={toggleState === 2 ? 'fundations_orgs_cont active-content' : 'fundations_orgs_cont'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br>
                    do eiusmod tempor incididunt ut labore et dolore magna<br></br>
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
                <div className={toggleState === 3 ? 'fundations_coll_cont active-content' : 'fundations_coll_cont'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br>
                    do eiusmod tempor incididunt ut labore et dolore magna<br></br>
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
            </div>
        </>    
    );
}

export default HomeFundations;