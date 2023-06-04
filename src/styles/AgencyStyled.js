import styled from "styled-components";

export const AgencyStyled = styled.div `  
    .agency-search {
        margin: auto;
        width: 900px;
        display: flex;
        justify-content: center;
        gap: 15px;
        padding: 30px 0;
        align-items: center;
        font-size: 20px;
        
        input {
            border: none;
            background: #D9D9D9;
            width: 70%;
            height: 50px;
        }
    }


    .agency-list {
        table {
            margin: auto;
        }
    
        thead {
            height: 70px;
            font-size: 16px;
            background: #F5F5F5;
        }

        tbody tr {
            font-size: 17px;
            padding: 10px;
            height: 50px;
            border-bottom: 2px solid black;
        }
    
        .agency-list-name {
            width: 300px;
        }
    
        .agency-list-address {
            width: 320px;
        }
    
        .agency-list-num {
            width: 150px;
        }
    
        .agency-list-name {
            width: 300px;
        }
    
        .agency-list-kinds {
            width: 100px;
        }
    
        .agency-list-etc {
            width: 100px;
        }
    
        tbody {
            text-align: center;
        }
    }

`