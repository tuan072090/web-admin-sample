import React from "react";
import {CCard,CForm,CButton, CCardBody, CCardHeader, CCol, CFormControl, CFormLabel, CRow,} from '@coreui/react'

export const BusinessCreatePage = () => {

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Business create</strong>
          </CCardHeader>

          <CCardBody>
            <p className="text-medium-emphasis small">
              Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based
              tables look in CoreUI.
            </p>

            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                <CFormControl
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                <CFormControl
                  component="textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>

              <div className="mb-3">
                <CButton color="primary" disabled>
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
