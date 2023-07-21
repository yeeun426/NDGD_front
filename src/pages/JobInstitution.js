import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { AgencyStyled } from "../styles/AgencyStyled";
import axios from "axios"

export default function JobInstitution() {
    const [jobList, setJobList] = useState();
    const [searchJobList, setSearchJobList] = useState(); 
    const [totalList, setTotalList] = useState();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const handleEnter = (e) => {
        if(e.key === 'Enter' && search !== "") {
            onClickSearch()
        } else if (e.key === 'Enter' && search === "") {
            setSearchJobList(totalList);
        }
    }

    const onClickSearch = (e) => {
        const nameFiltered = totalList.filter((item) => item.hospitalNm.includes(search));
        const areaFiltered = totalList.filter((item) => item.addr.includes(search));

        if (nameFiltered.length !== 0 || areaFiltered.length !== 0) {
            setSearchJobList([...nameFiltered, ...areaFiltered]);
        } else {
            alert("검색결과가 없습니다.")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(
              `http://apis.data.go.kr/B490001/sjHptMcalPstateInfoService/getSjBoheomJhCftHptPstateList?ServiceKey=qOrtK%2BP%2BSUQm0rcdn3r7FH%2BTM1pWuM%2BgLzo9hx3Bow5ZHgfBnBkxPChcZjnOnZ3IxliESS34QGYiUC9Gg0ui%2Fw%3D%3D&boheomFg=1&numOfRows=100&pageNo=1`
            )
            if(search === null || search === "") {
                setTotalList(res.data.response.body.items.item);
                setJobList(res.data.response.body.items.item);
            } else {
                setJobList(searchJobList);
            }
          } catch (e) {
            console.log(e)
          }
        }
        fetchData()
        }, [searchJobList])

    return(
        <AgencyStyled>
            <Header />
            <PageTitle title="Institution (기관)" txt = "재활인증 의료 기관 현황입니다."/>
            <div className="agency-wrapper">
                <div className = "agency-search">
                    <div>검색</div>
                    <input 
                        type="text" 
                        value = {search}
                        onChange = {handleSearch}
                        onKeyDown={handleEnter}
                    />
                    <button onClick = {onClickSearch}>
                        <img src = "images/search.png" alt="search"/>
                    </button>
                </div>
                <div className = "agency-list">
                <table>
                    <thead>
                        <tr>
                            <th className="agency-list-name">기관명</th>
                            <th className="agency-list-address">소재지</th>
                            <th className="agency-list-num">전화번호</th>
                            <th className="agency-list-kinds">병원구분명</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobList && jobList.map((list) => (
                        <tr key = {list.id}>
                            <td>{list.hospitalNm}</td>
                            <td>{list.addr}</td>
                            <td>{list.tel !== undefined ?
                                `${list.tel.slice(0,3)}-${list.tel.slice(3,6)}-${list.tel.slice(6,10)}`
                                : list.tel}</td>
                            <td>{list.gtCdNm1}</td>
                        </tr>
                        ))}
                    </tbody>
                </table> 
                </div>
            </div>
        </AgencyStyled>
    )
}