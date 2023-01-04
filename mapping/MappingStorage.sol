//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract testMapping{
    struct Book{
        uint id;
        string title;
        string author;
    }

    mapping(uint => Book)books;
    
    function setBook() public{
        books[1001] = Book(1001, 'aaaa', 'abc' );
    }
    function setBookAnother() public{
        books[1002].id = 1002;
        books[1002].title =  'bbb';
        books[1003].author = 'abcd';
    }
    function getDetailes()public view returns(uint, string memory , string memory){
        return(books[1001].id , books[1001].title, books[1001].author);
    }
}