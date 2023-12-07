import React from 'react'

export default function editprofile() {
    const formcontent = {
        display: 'block',
        width: '100%',
        padding: '0.5rem 1rem',
        fontSize: '0.9375rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#29292e',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #e5dfe4',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        borderRadius: '5px',
      };



  return (
    <div style={{marginTop:'20px',
        color: '#9b9ca1'}}>
        <div className="container-fluid" style={{backgroundColor: '#D3D3D3'}}>
            <div className="row">
                <div className="col-12">
                   
                    <div className="my-5 text-dark">
                        <h3>My Profile</h3>
                        <hr/>
                    </div>
                  
                    <form className="file-upload">
                        <div className="row mb-5 gx-5">
                            <div className="col-xxl-8 mb-5 mb-xxl-0">
                                <div className="bg-secondary-soft px-4 py-5 rounded" style={{backgroundColor: 'rgba(208, 212, 217, 0.1) !important',    borderRadius: '5px !important', paddingTop: '3rem !important' , paddingBottom: '3rem !important', paddingRight: '1.5rem !important', paddingLeft: '1.5rem !important'}}>
                                    <div className="row g-3">
                                        <br /><br /><br /><br />
                                        <h4 className="mb-4 mt-0 text-dark">Contact detail</h4>
                                       
                                        <div className="col-md-6 text-dark">
                                            <label className="form-label">First Name *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter First Name" aria-label="First name" value=""/>
                                        </div>
                                       
                                        <div className="col-md-6 text-dark">
                                            <label className="form-label">Last Name *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter Last Name" aria-label="Last name" value=""/>
                                        </div>
                                   
                                        <div className="col-md-6 text-dark">
                                            <label className="form-label">Phone number *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter Phone no." aria-label="Phone number" value=""/>
                                        </div>
                                      
                                        <div className="col-md-6 text-dark">
                                            <label className="form-label">Mobile number *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter Mobile no." aria-label="Phone number" value=""/>
                                        </div>
                                   
                                        <div className="col-md-6">
                                            <label for="inputEmail4" className=" text-dark form-label">Email *</label>
                                            <input type="email" placeholder='Enter email' className="form-control" style={{formcontent}} id="inputEmail4" value=""/>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                      
                            <div className="col-xxl-4">
                                <div className="bg-secondary-soft text-dark px-4 py-5 rounded" style={{backgroundColor: 'rgba(208, 212, 217, 0.1) !important',    borderRadius: '5px !important', paddingTop: '3rem !important' , paddingBottom: '3rem !important', paddingRight: '1.5rem !important', paddingLeft: '1.5rem !important'}}>
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0" style={{marginLeft: '75px'}}>Upload your profile photo</h4>
                                        <div className="text-center">
                                      
                                            <div className="square position-relative display-2 mb-3" style={{
                                                 height: '150px',
                                                 width: '150px',
                                                 margin: 'auto',
                                                 verticalAlign: 'middle',
                                                 border: '1px solid #e5dfe4',
                                                 backgroundColor: '#fff',
                                                 borderRadius: '5px'
                                            }}>
                                                <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" style={{ '--bs-text-opacity': 1, color: 'rgba(208, 212, 217, 0.5)',}}></i>
                                            </div>
                                            <div className='ml-5'>
                                                <input type="file" style={{marginLeft: '95px'}} id="customFile" name="file" hidden=""/>
                                            </div>
                                            
                                            <br />
                                            <label className="btn btn-success-soft mx-1 my-2 btn-block" for="customFile" style={{
                                                color: '#28a745',
                                                backgroundColor: 'rgba(40, 167, 69, 0.1)'
                                            }}>Upload</label>
                                            <button type="button" className="btn mx-1 my-2 btn-danger-soft" style={{
                                                color: '#dc3545',
                                                backgroundColor: 'rgba(220, 53, 69, 0.1)'
                                            }}>Remove</button>
                                     
                                            <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 600px x 600px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-xxl-12 mb-5 mb-xxl-0">
                            <hr className='text-dark mx-5'/>
                            <div className="bg-secondary-soft text-dark px-4 py-5 rounded" style={{backgroundColor: 'rgba(208, 212, 217, 0.1) !important',    borderRadius: '5px !important', paddingTop: '3rem !important' , paddingBottom: '3rem !important', paddingRight: '1.5rem !important', paddingLeft: '1.5rem !important'}}>
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0" style={{marginLeft: '75px'}}>Upload your Bannar photo</h4>
                                        <div className="text-center">
                                      
                                            <div className="square position-relative display-2 mb-3" style={{
                                                 height: '250px',
                                                 width: '1300px',
                                                 margin: 'auto',
                                                 verticalAlign: 'middle',
                                                 border: '1px solid #e5dfe4',
                                                 backgroundColor: '#fff',
                                                 borderRadius: '5px'
                                            }}>
                                                <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" style={{ '--bs-text-opacity': 1, color: 'rgba(208, 212, 217, 0.5)',}}></i>
                                            </div>
                                            <div className='ml-5'>
                                                <input type="file" style={{marginLeft: '95px'}} id="customFile" name="file" hidden=""/>
                                            </div>
                                            
                                            <br />
                                            <label className="btn btn-success-soft mx-1 my-2 btn-block" for="customFile" style={{
                                                color: '#28a745',
                                                backgroundColor: 'rgba(40, 167, 69, 0.1)'
                                            }}>Upload</label>
                                            <button type="button" className="btn mx-1 my-2 btn-danger-soft" style={{
                                                color: '#dc3545',
                                                backgroundColor: 'rgba(220, 53, 69, 0.1)'
                                            }}>Remove</button>
                                     
                                            <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 600px x 600px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                      
                        <hr className='text-dark mx-5'/>
                        <div className="gap-1 d-md-flex justify-content-md-end text-center">
                            
                            <button type="button" className="btn btn-danger my-5  btn-lg">Delete profile</button>
                            <button type="button" className="btn btn-primary my-5  btn-lg">Update profile</button>
                            
                        </div>
                    </form>
                </div>
            </div>
	    </div>
    </div>
  )
}

