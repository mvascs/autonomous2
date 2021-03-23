import React, {createContext} from 'react';
import Login from '../components/views/Login';

// 1 - criar o contexto
const LoginContext = createContext({

})


// 3 - vamos exportar o provider
export const LoginProvider = props => {

    return (
        <LoginContext.Provider value={{
            state: {
                Login
            }
        }}>
            
            {/* 4 - Tudo o que for passado dentro do provider será renderizado abaixo */}
            {props.children}

        </LoginContext.Provider>
    )
}

// 5 - Em App.js vamos envolver a aplicação pelo provider.



// 2 - exportar o contexto
export default LoginContext;