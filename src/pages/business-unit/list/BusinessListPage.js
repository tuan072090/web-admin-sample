import React, {useEffect, useState} from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CSpinner,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {GetBizList} from "../services";
import {useDispatch} from "react-redux";
import {SET_BUSINESS_LIST} from "../redux/business.reducer";

export const BusinessListPage = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = () => {
    return GetBizList().then(resData => {
      console.log("data...", resData)

      setData(resData.deals);

      //  test
      dispatch({
        type: SET_BUSINESS_LIST,
        data: resData.deals
      })
    })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Business unit</strong> <small>List page</small>
          </CCardHeader>

          <CCardBody>
            <p className="text-medium-emphasis small">
              Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based
              tables look in CoreUI.
            </p>


            {
              !data ? <CSpinner color="primary" />
              : <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Logo</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Percent</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>

                    {
                      data.map((item, key) => {
                        return(
                          <CTableRow key={key}>
                            <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                            <CTableDataCell>{item.title}</CTableDataCell>
                            <CTableDataCell>{item.logo}</CTableDataCell>
                            <CTableDataCell>{item.percent}</CTableDataCell>
                          </CTableRow>
                        )
                      })
                    }

                  </CTableBody>
                </CTable>
            }



          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
