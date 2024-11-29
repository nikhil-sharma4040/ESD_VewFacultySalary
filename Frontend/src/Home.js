import { useState, useEffect } from 'react'
// useState and useEffect are two commonly used hooks for managing state and side effects in functional components.
// It lets you perform side effects in your functional components (like fetching data, subscribing to events, or modifying the DOM).

import loginService from './services/login'

import NavBar from './components/NavBar'
import NavBarButton from './components/NavBar'

const Home = () => {
  // user state will store the logged in user object, if no login has been done yet then it will be null
  const [ user, setUser ] = useState(null)


  // These states are used to control the notifications that show up at the top of the screen for events like 
  // login, signup, watchlist creation, etc.
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  // Create a notification at the top of the screen with given message for 10 seconds 
  // Notifications are of two types, "error" and "success"
  // The appearance of these two notifications can be adjusted via the index.css file
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  // Function that handles login of users
  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      
      notificationHandler(`Logged in successfully as ${userObject.first_name}`, 'success')
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }


  // Effect Hook that parses the local storage for 'loggedInUser' and sets the "user" state if a valid match is found
  // This enables user to login automatically without having to type in the credentials. Caching the login if you will.
  const token = localStorage.getItem('authToken');
    useEffect(() => {
        if (token) {
            setUser(false);
        }
    }, [token]);

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',height:'100%'}}>

      <NavBarButton/>
     
   
      
      
    </div>
  )
}


export default Home;

// user: This state holds the logged-in user's data. If null, the user is not logged in.
// notification: This state holds the notification message (e.g., "login successful" or "error").
// notificationType: This state holds the type of notification ("error" or "success").
