import {decodeToken, isExpired} from 'react-jwt'

const getToken = () => {
    const token = localStorage.getItem('filedesk')
    if (token) {
        const decodedToken = decodeToken(token)
        if(!decodedToken._id){
            localStorage.removeItem('filedesk')
            return null
        }
        if (isExpired(token)) {
        localStorage.removeItem('filedesk')
        return null
        }
        return token
    }
    return null
    }

export default getToken