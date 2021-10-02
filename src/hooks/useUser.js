import axios from "axios";
import User from '../apis/User';
import { useState, useEffect} from 'react'; 

const useUser = (defaultSearchTerm) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        if(defaultSearchTerm){
            search(defaultSearchTerm);
        }
        return;        
    }, [defaultSearchTerm]);

    console.log('entered');
    const search = async (term) => {
        const response = await User.get('/KnowledgeExchange2/rest/GetUser/GetEmployee', {
            params: {Name: term}
        })
        .catch((error) => {
            return error.response;
        });
        console.log(response);
        setUser(response);
    }

    return [user, search];
}

export default useUser;