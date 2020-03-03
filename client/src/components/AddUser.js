import React, {useState} from 'react'

export const AddUser = ({errors, setErrors, addUserOpen, setAddUserOpen}) => {


// ------.o.-------oooooooooo.---oooooooooo.-------------ooooo-----ooo--.oooooo..o-oooooooooooo-ooooooooo.---
// -----.888.------`888'---`Y8b--`888'---`Y8b------------`888'-----`8'-d8P'----`Y8-`888'-----`8-`888---`Y88.-
// ----.8"888.------888------888--888------888------------888-------8--Y88bo.-------888----------888---.d88'-
// ---.8'-`888.-----888------888--888------888------------888-------8---`"Y8888o.---888oooo8-----888ooo88P'--
// --.88ooo8888.----888------888--888------888------------888-------8-------`"Y88b--888----"-----888`88b.----
// -.8'-----`888.---888-----d88'--888-----d88'------------`88.----.8'--oo-----.d8P--888-------o--888--`88b.--
// o88o-----o8888o-o888bood8P'---o888bood8P'----------------`YbodP'----8""88888P'--o888ooooood8-o888o--o888o-

  const addUser =  (e,data) => {
    e.preventDefault()
    const {firstName, lastName, password1, password2, isAdmin} = data
    console.log(data)
    console.log(firstName, lastName, password1, password2, isAdmin)
    if (firstName === "" || lastName === "" || password1 === "" || password2 === ""){
      data.map(({field, value}) => {
        console.log('mapping')
        if (field.value === "") {
          console.log(field, ': error found')
          let error = {
            field: 'unfilled'
          }
          console.log(error)
          errors.push(error)
          console.log(errors)
        }
      })
    }
    // else {
    //   if(password1 !== password2) {
    //     let error = {
    //       'password': 'noMatch'
    //     }
    //     setErrors([...errors, error])
    //     return(errors)
    //   }
    //   else {
    //     return true
    //   }
    // }
    if (errors) {
      alert(`Please review the following errors: ${errors}`)
      console.log(errors)
      setErrors([])
      return
    }
    else{
      setFirstName('')
      setLastName('')
      setPassword1('')
      setPassword2('')
      setIsAdmin(false)
      return(
        alert('No errors')
      )
    }
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  if (!addUserOpen) {
    return (
      <div className="addUser_wrapper">
        <div
          className="addUser"
          onClick={e => {
            e.preventDefault();
            setAddUserOpen(!addUserOpen);
          }}
        >
          <div className="addUserAltWrap">
            <div className="addUserAlt">
              <p>Add User</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <>
        
        <div className="addUser_wrapper">
          <div
            className="addUser"
            onClick={e => {
              e.preventDefault();
              setAddUserOpen(!addUserOpen);
            }}
          >
          </div>
        </div>

        <div className="component_window">
          <div className="outer_wrapper">
            <form noValidate onSubmit={e => {
              e.preventDefault()
              addUser([{firstName, lastName, password1, password2, isAdmin}])
            }} className="addUserForm">
              <p>Please fill out the new user's information below:</p>
              <br></br>
              <br></br>
              <input
                id="firstName"
                type="text"
                value={firstName}
                placeHolder="First Name"
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                id="lastName"
                type="text"
                value={lastName}
                placeHolder="Last Name"
                onChange={e => setLastName(e.target.value)}
              />
              <input
                id="password1"
                type="password"
                value={password1}
                placeHolder="Enter Password"
                onChange={e => setPassword1(e.target.value)}
              />
              <input
                id="password2"
                type="password"
                value={password2}
                placeHolder="Confirm Password"
                onChange={e => setPassword2(e.target.value)}
              />
              <label><b>Admin access:</b></label>
              <input type="checkbox" onChange={e => setIsAdmin(!isAdmin)}/>
              <button type="submit" value="Submit">Add New User</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}